import axios from 'axios';

export const fetchTopStories = async () => {
    console.log("process.env>>", process.env)
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/stories/top`);
    if (response.status !== 200) {
      console.error('Error: Status code not 200:', response.status);
      throw new Error('Could not fetch the data.');
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching top stories:', error);
    throw error;
  }
};
