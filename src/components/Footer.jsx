import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="my-bg-secondary">
            <div className="container pb-5 pt-5 text-white">
                <div className="row">
                    {/* Colonna contatti */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5 className='pb-2'>Contatti</h5>
                        <ul className='list-unstyled'>
                            <li>santambrogio.davide.97@gmail.com</li>
                            <li>Tel: +39 345 4627886</li>
                            <li>
                                <a href="https://www.linkedin.com/in/davide-santambrogio-97b1392b2/" className='text-white'>
                                    <FontAwesomeIcon className='fs-5 me-2' icon={faLinkedin} /> Linkedin
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/DavideSantambrogio" className='text-white'>
                                    <FontAwesomeIcon className='fs-5 me-2' icon={faSquareGithub} /> Github
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Colonna link rapidi */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5 className='pb-2'>Link rapidi</h5>
                        <ul className='list-unstyled'>
                            <li><Link className='text-white' to={'/projects'}>I miei progetti</Link></li>
                            <li>Formazione</li>
                            <li>Esperienze</li>
                        </ul>
                    </div>
                    {/* Colonna collaborazione */}
                    <div className="col-lg-4">
                        <h5 className='pb-2'>Collaborazione:</h5>
                        <p>Se sei interessato a collaborare con me su progetti futuri, non esitare a contattarmi. Sarei felice di discutere delle opportunità di lavoro insieme!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
