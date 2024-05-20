import React, { useEffect } from 'react';
import { useGlobalContext } from '../GlobalContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function TechnologiesPage() {
    const { technologies } = useGlobalContext(); // Assuming technologies is the key in the global context

    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="my-bg-primary">
                <div className="container pb-5 pt-5">
                    <h4 className="pb-5 my-text-color">Le tecnologie che utilizzo</h4>
                    <div className="row">
                        {technologies.map((technology, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-12 mb-4" key={index}>
                                <div className="card h-100">
                                    <img src={`img/technologies/${technology.image}`} alt={technology.name} className='mt-4' style={{ height: '100px', objectFit: 'contain' }} /> {/* Imposta l'altezza su 100px */}                                    
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{technology.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TechnologiesPage;
