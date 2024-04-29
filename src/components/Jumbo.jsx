import React from 'react';
import { useGlobalContext } from '../GlobalContext';

function Jumbo() {
    // Ottieni le tecnologie e i repository GitHub dallo store globale
    const { technologies, githubRepos } = useGlobalContext(); 

    return (
        <>
            {/* Jumbotron */}
            <div className="my-bg-primary">
                <div className="container px-5 pt-5">
                    <div className="row">
                        
                        {/* Colonna sinistra */}
                        <div className="col-lg-6 pb-5">
                            <h2>Ciao sono</h2>
                            <p className="fs-1">Davide Santambrogio</p>
                            <h4 className="p-2">Full stack Web developer</h4>
                            
                            {/* Pulsante di contatto */}                            
                            <a type="button" href='#contactUs' className="btn btn-secondary mt-3 px-5 py-2">Contattami</a>
                            
                            {/* Contatori per tecnologie e repository */}
                            <div className="row pt-5 justify-content-around">                                
                                {/* Contatore per le tecnologie */}
                                <div className="col-6 col-lg-3 text-center">
                                    <strong className='my-text-color fs-1'>{technologies.length}</strong>
                                    <p className='my-text-color fs-4'>Tecnologie utilizzate</p>                                
                                </div>

                                {/* Contatore per i repository GitHub */}
                                <div className="col-6 col-lg-3 text-center">
                                    <strong className='my-text-color fs-1'>{githubRepos.length}</strong>
                                    <p className='my-text-color fs-4'>Progetti pubblici</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Colonna destra - Immagine (mostrata solo su schermi grandi) */}
                        <div className='col-lg-6 d-none d-lg-block'>
                            <img src="src\assets\img\file__1_-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Jumbo;
