import axios from 'axios';

const fetchCharacters= async () => {
    try {
        const response = await axios.get('https://created-api-node-js.onrender.com/characters');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default fetchCharacters;