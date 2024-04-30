import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../GlobalContext';
import { replaceWords, replacements } from '../replace';


function Experiences() {
    const { loading, positions, education, error } = useGlobalContext();
    const [errorMessage, setErrorMessage] = useState(null);
    const correctText = (text) => replaceWords(text, replacements);

    useEffect(() => {
        if (error) {
            setErrorMessage(error);
        }
    }, [error]);

    if (loading) {
        return <p>Loading...</p>;
    }

    const handleFetchError = (errorMessage) => {
        setError(errorMessage);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div id='background' className="my-bg-primary">
            <div className="container pb-5 pt-5">
                <h4 className='my-text-color pb-5 text-center'>IL MIO BACKGROUND</h4>


                <div className="row justify-content-center">
                    {/* Formazione */}
                    <div className="col-lg-5 col-md-6 mb-4">
                        <h4 className='mb-4 text-center my-text-color'>Formazione</h4>

                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}  <a href="https://www.linkedin.com/in/davide-santambrogio-97b1392b2/details/education/">Guarda qui</a>
                            </div>
                        )}

                        <div className="accordion" id="accordionEducation">
                            {education.map((edu, index) => (
                                <div key={index} className="accordion-item">
                                    <h2 className="accordion-header" id={`headingEducation${index}`}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseEducation${index}`} aria-expanded={index === 0 ? "true" : "false"} aria-controls={`collapseEducation${index}`}>
                                            {correctText(edu['School Name'])}
                                        </button>
                                    </h2>
                                    <div id={`collapseEducation${index}`} className={`accordion-collapse collapse${index === 0 ? " show" : ""}`} aria-labelledby={`headingEducation${index}`} data-bs-parent="#accordionEducation">
                                        <div className="accordion-body">
                                            <p><strong>Titolo di studio:</strong><br />{correctText(edu['Degree Name'])}</p>
                                            <p><strong>Periodo:</strong><br />{edu['Start Date']} - {edu['End Date']}</p>
                                            <p><strong>Note:</strong><br />{edu['Notes'] || 'Non disponibile'}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Esperienze */}
                    <div className="col-lg-5 col-md-6 mb-4">
                        <h4 className='mb-4 text-center my-text-color'>Esperienze</h4>
                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error} <a href="https://www.linkedin.com/in/davide-santambrogio-97b1392b2/details/experience/">Guarda qui</a>
                            </div>
                        )}
                        <div className="accordion" id="accordionExperiences">
                            {positions.map((position, index) => (
                                <div key={index} className="accordion-item">
                                    <h2 className="accordion-header" id={`headingPosition${index}`}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapsePosition${index}`} aria-expanded={index === 0 ? "true" : "false"} aria-controls={`collapsePosition${index}`}>
                                            {position['Company Name']}
                                        </button>
                                    </h2>
                                    <div id={`collapsePosition${index}`} className={`accordion-collapse collapse${index === 0 ? " show" : ""}`} aria-labelledby={`headingPosition${index}`} data-bs-parent="#accordionExperiences">
                                        <div className="accordion-body">
                                            <p><strong>Posizione:</strong><br />{position['Title']}</p>
                                            <p><strong>Periodo:</strong><br />{position['Started On']} - {position['Finished On'] || 'Presente'}</p>
                                            <p><strong>Descrizione:</strong><br />{position['Description'] || 'Non disponibile'}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
