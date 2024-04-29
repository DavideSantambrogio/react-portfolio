import React, { useState } from 'react';
import { useGlobalContext } from '../GlobalContext';
import { replaceWords, replacements } from '../replace';

function Experiences() {
    const { loading, error, positions, education } = useGlobalContext();
    const [showAllPositions, setShowAllPositions] = useState(false);
    const [showAllEducation, setShowAllEducation] = useState(false);
    const [visiblePositions, setVisiblePositions] = useState(2);
    const [visibleEducation, setVisibleEducation] = useState(2);
    const correctText = (text) => replaceWords(text, replacements);

    const toggleShowAllPositions = () => {
        setShowAllPositions(!showAllPositions);
        setVisiblePositions(showAllPositions ? 2 : positions.length);
    };

    const toggleShowAllEducation = () => {
        setShowAllEducation(!showAllEducation);
        setVisibleEducation(showAllEducation ? 2 : education.length);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="my-bg-primary">
                <div className="container pb-5 pt-5">
                    <h4 id='background' className='my-text-color pb-5 text-center'>IL MIO BACKGROUND</h4>
                    <div className="row justify-content-around">
                        <div className="col-5 border border-2 border-secondary rounded p-5 my-bg-secondary d-flex flex-column">
                            <h5 className='mb-5 text-center my-text-color'>FORMAZIONE</h5>
                            {education.slice(0, visibleEducation).map((edu, index) => (
                                <ul key={index} className="border border-2 border-secondary rounded p-4 mb-5 bg-white list-unstyled">
                                    <li>
                                        <h6><strong>Titolo di studio:</strong> <br />{correctText(edu['Degree Name'])}</h6>
                                    </li>
                                    <li>
                                        <p><strong>Scuola:</strong> <br /> {edu['School Name']}</p>
                                    </li>
                                    <li>
                                        <p><strong>Periodo:</strong> <br /> {edu['Start Date']} - {edu['End Date']}</p>
                                    </li>
                                    <li>
                                        <p><strong>Note:</strong> <br /> {edu['Notes'] || 'Non disponibile'}</p>
                                    </li>
                                </ul>
                            ))}
                            {education.length > 2 && (
                                <div className="mt-auto text-center">
                                    <a href="#background" onClick={toggleShowAllEducation}>
                                        {showAllEducation ? 'Mostra meno' : 'Mostra altro'}
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className="col-5 border border-2 border-secondary rounded p-5 my-bg-secondary d-flex flex-column">
                            <h5 className='mb-5 text-center my-text-color'>ESPERIENZE</h5>
                            {positions.slice(0, visiblePositions).map((position, index) => (
                                <ul key={index} className="border border-2 border-secondary rounded p-4 mb-5 bg-white list-unstyled">
                                    <li>
                                        <h6><strong>Posizione:</strong><br />{position['Title']}</h6>
                                    </li>
                                    <li>
                                        <p><strong>Azienda:</strong> <br /> {position['Company Name']}</p>
                                    </li>
                                    <li>
                                        <p><strong>Periodo:</strong> <br /> {position['Started On']} - {position['Finished On'] || 'Presente'}</p>
                                    </li>
                                    <li>
                                        <p><strong>Descrizione:</strong> <br /> {position['Description'] || 'Non disponibile'}</p>
                                    </li>
                                </ul>
                            ))}
                            {positions.length > 2 && (
                                <div className="mt-auto text-center">
                                    <a href="#background" onClick={toggleShowAllPositions}>
                                        {showAllPositions ? 'Mostra meno' : 'Mostra altro'}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}    

export default Experiences;
