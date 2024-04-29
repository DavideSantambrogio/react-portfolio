import React from 'react';

function Force() {
    return (
        <>
            <div className="my-bg-secondary">
                <div className="container pb-5 pt-5">
                    <p className="fs-4 mb-5 my-text-color">
                        I MIEI PUNTI DI FORZA
                    </p>
                    <div className="row">
                        {/* Colonna per Curiosità */}
                        <div className="col-lg-4 text-white mb-5">
                            <p className="fs-4">
                                CURIOSITÀ
                            </p>
                            <p>
                                Sono costantemente spinto dalla curiosità nel mondo dello sviluppo web, sempre desideroso di esplorare nuovi linguaggi, framework e tecniche. Ogni progetto rappresenta un'opportunità per approfondire le mie conoscenze e soddisfare la mia sete di apprendimento nel vasto panorama dello sviluppo web.
                            </p>
                        </div>
                        {/* Colonna per Creatività */}
                        <div className="col-lg-4 text-white mb-5">
                            <p className="fs-4">
                                CREATIVITÀ
                            </p>
                            <p>
                                La mia passione per la programmazione web si esprime attraverso la creatività nel trovare soluzioni originali e intuitive per i problemi che incontro. Mi piace pensare fuori dagli schemi e trasformare idee astratte in esperienze utente coinvolgenti e funzionalità innovative. La creatività è la mia guida nel dare vita a progetti web che siano non solo funzionali, ma anche esteticamente gradevoli e intuitivi.
                            </p>
                        </div>
                        {/* Colonna per Collaborazione */}
                        <div className="col-lg-4 text-white mb-5">
                            <p className="fs-4">
                                COLLABORAZIONE
                            </p>
                            <p>
                                Nel contesto dello sviluppo web, essere collaborativi significa avere la capacità di lavorare efficacemente in squadra, ascoltando attivamente le idee degli altri membri e contribuendo con le proprie competenze per il successo del progetto. Sono aperto al feedback e alla condivisione delle conoscenze, e mi impegno a mantenere una comunicazione chiara e trasparente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Force;
