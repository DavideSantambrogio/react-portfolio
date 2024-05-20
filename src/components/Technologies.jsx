import React, { useEffect } from 'react'; // Import useEffect
import { useGlobalContext } from '../GlobalContext';
import styles from './style/Slider.module.css'; // Import the CSS module
import { Link } from 'react-router-dom';

const LogosSlider = () => {
    const { technologies } = useGlobalContext();

    useEffect(() => {
        const copy = document.querySelector(`.${styles.logosSlide}`).cloneNode(true);
        document.querySelector(`.${styles.logos}`).appendChild(copy);
    }, []);

    return (
        <div className="my-bg-secondary">
            <div className="pb-5 pt-5">
                <h4 className='my-text-color text-center'>TECNOLOGIE UTILIZZATE</h4>
                <div className={styles.logos}>
                    <div className={styles.logosSlide}>
                        {technologies.map((tech, index) => (
                            <img key={index} src={`img/technologies/${tech.image}`} alt={tech.name} className={styles.logosImage} />
                        ))}
                    </div>
                </div>
                <div className='text-center'>
                    <Link to={'/technologies'} className="btn btn-secondary ">Mostra tutti</Link>
                </div>


            </div>


        </div>


    );
};

export default LogosSlider;
