import axios from 'axios';
import { LINKEDIN_ACCESS_TOKEN } from '../config';

const fetchLinkedInPositions = async (setPositions, setLoading, setError) => {
    try {
        const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.linkedin.com/rest/memberSnapshotData?q=criteria&domain=POSITIONS', {
            headers: {
                Authorization: `Bearer ${LINKEDIN_ACCESS_TOKEN}`,
                'LinkedIn-Version': '202312'
            }
        });
        setPositions(response.data.elements[0].snapshotData);
    } catch (error) {
        setError('Errore nella chiamata API di LinkedIn per le posizioni lavorative.');
    } finally {
        setLoading(false);
    }
};

export default fetchLinkedInPositions;
