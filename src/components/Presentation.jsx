import React from 'react';

function Presentation() {
    return (
        <>
            <div id='about' className="my-bg-primary">
                <div className="container pb-5 pt-5">
                    <h4 className='my-text-color pb-4'>UN PO' DI ME</h4>
                    
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h1 className='pb-4'>Chi sono?</h1>
                            <p>
                                Ciao, sono Davide Santambrogio, un Full Stack Web Developer. <br />
                                Dopo aver completato gli studi in agraria e aver lavorato presso un vivaio, ho realizzato che il mio vero interesse risiedeva altrove. <br />
                                Per caso, ho scoperto il mondo della programmazione e ho subito compreso che era la direzione giusta per me. <br />
                                Questo campo non solo ha dato spazio alle mie idee, ma mi ha anche permesso di esprimere la mia creatività in modi che non avrei mai immaginato.<br />
                                Sono sempre alla ricerca di nuove sfide e opportunità per ampliare le mie conoscenze e competenze. La mia curiosità insaziabile e la passione per la programmazione mi spingono costantemente a cercare soluzioni creative e innovative. Sono determinato a trasformare idee in progetti concreti e funzionali, sfruttando al massimo le mie abilità e la mia inventiva.
                            </p>
                        </div>

                        <div className="col-12 col-md-6 mt-auto">
                            {/* Imposta l'immagine con la classe img-fluid per renderla responsive */}
                            <img className="img-fluid d-md-block d-none  " src="\img\pc.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Presentation;
