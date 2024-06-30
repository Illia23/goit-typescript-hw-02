import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

interface Photo {
  id: string;
  urls: {
    small: string;
    thumb: string;
    regular: string;
  };
  alt_description: string;
}

interface GetPhotoResponse {
  results: Photo[];
}

const getPhoto = async (topic: string, currentPage: number): Promise<Photo[]> => {
  try {
    const response = await axios.get<GetPhotoResponse>('/search/photos', {
      params: {
        query: topic,
        per_page: 20,
        page: currentPage,
        client_id: '--KxUur6G3ARv-OAwOjncMwBQeLUajMFLvYYD66HuA8',
      },
    });
    console.log(topic);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};

export default getPhoto;
