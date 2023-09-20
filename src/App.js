/** @format */

import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import ItemList from "./components/ItemList";
import InfiniteScroll from "./components/InfiniteScroll";
import Error from "./components/Error";
import ItemDetails from "./components/ItemDetails";
import { fetchItems } from "./api/api";

const App = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchMoreItems = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fetchItems(page, 10);
      setItems((prevItems) => [...prevItems, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    // Fetch the first page of items when the component mounts
    fetchMoreItems();
  }, [fetchMoreItems]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 200
    ) {
      fetchMoreItems();
    }
  }, [fetchMoreItems]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="App">
      <h1>Infinite Scrolling App</h1>
      {error && <Error message={error} />}
      <ItemList items={items} onItemClick={handleItemClick} />
      {isLoading && <div className="loading">Loading...</div>}
      {selectedItem && <ItemDetails selectedItem={selectedItem} />}
      <InfiniteScroll onScrollEnd={fetchMoreItems} />
    </div>
  );
};

export default App;
