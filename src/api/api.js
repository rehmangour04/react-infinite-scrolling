
// api/api.js
import axios from 'axios';

// JSONPlaceholder URL for posts
const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchItems = async (page, limit) => {
  try {
    const response = await axios.get(JSON_PLACEHOLDER_URL, {
      params: {
        _page: page,     // Page number
        _limit: limit    // Number of items per page
      }
    });

    // Map JSONPlaceholder data to the format you need
    const data = response.data.map((item) => ({
      id: item.id,
      name: `Item ${item.id}`,
      description: item.title,
      image: 'https://via.placeholder.com/150'
    }));

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

