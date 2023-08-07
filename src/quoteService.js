import axios from 'axios';

const fetchQuotes = async () => {
  try {
    const response = await axios.get('/quotes.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return [];
  }
};

export default fetchQuotes;
