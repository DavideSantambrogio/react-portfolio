import axios from 'axios';
import { LINKEDIN_ACCESS_TOKEN } from '../config';
import { replaceWords, replacements } from '../replace';

const fetchLinkedInEducation = async (setEducation, setLoading, setError) => {
    try {
        const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.linkedin.com/rest/memberSnapshotData?q=criteria&domain=EDUCATION', {
            headers: {
                Authorization: `Bearer ${LINKEDIN_ACCESS_TOKEN}`,
                'LinkedIn-Version': '202312'
            }
        });

        // Correzione delle parole
        const correctedData = response.data.elements[0].snapshotData.map(edu => ({
            ...edu,
            Notes: replaceWords(edu.Notes, replacements)
        }));

        setEducation(correctedData);
    } catch (error) {
        setError('Errore nel recupero dei dati da Linkedin');
    } finally {
        setLoading(false);
    }
};

export default fetchLinkedInEducation;
