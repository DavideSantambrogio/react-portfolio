import React from 'react';
import { useGlobalContext } from '../GlobalProvider'; // Assicurati che il percorso sia corretto

function Jumbo() {
    const { technologies, githubRepos } = useGlobalContext(); // Ottieni le tecnologie dallo store globale

    return (
        <>
            <div className="my-bg-primary">
                <div className="container my-container px-5 pt-5">
                    <div className="row">
                        <div className="col-6 pb-5">
                            <h2>Ciao sono</h2>
                            <p className=" fs-1">Davide Santambrogio</p>
                            <h4 className="p-2">Full stack Web developer</h4>
                            <button type="button" className="btn btn-secondary mt-3 px-5 py-2">Contattami</button>
                            <div className="row pt-5 justify-content-around">
                                <div className="col-3 text-center">
                                    <strong className='my-text-color fs-1'>{technologies.length}</strong>
                                    <p className='my-text-color fs-4'>Tecnologie utlilizzate</p>
                                </div>
                                <div className="col-3 text-center">

                                    <strong className='my-text-color fs-1'>{githubRepos.length}</strong>
                                    <p className='my-text-color fs-4'> Progetti pubblici</p>
                                </div>
                            </div>

                        </div>
                        <div className='col-6' >
                            <img src="src\assets\img\file__1_-removebg-preview.png" alt="" />  

                        </div>
                    </div>


                </div>


            </div>
        </>
    );
}

export default Jumbo;
