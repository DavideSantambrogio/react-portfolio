import React, { useEffect } from 'react'; // Import useEffect
import { useGlobalContext } from '../GlobalProvider';
import styles from './style/Slider.module.css'; // Import the CSS module

const LogosSlider = () => {
    const { technologies } = useGlobalContext();

    useEffect(() => {
        const copy = document.querySelector(`.${styles.logosSlide}`).cloneNode(true);
        document.querySelector(`.${styles.logos}`).appendChild(copy);
    }, []);

    return (
        <div className={styles.logos}>
            <div className={styles.logosSlide}>
                {technologies.map((tech, index) => (
                    <img key={index} src={`src/assets/img/technologies/${tech.image}`} alt={tech.name} className={styles.logosImage} />
                ))}
            </div>
        </div>
    );
};

export default LogosSlider;
