import { useState } from 'react'
import styles from '../assets/css/Dropdown.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faFaceGrinBeamSweat } from '@fortawesome/free-solid-svg-icons';


// Functional Component
const Dropdown = (props) => {
    const [value, setValue] = useState('Please select option');

    const handleChange = (option) => {
        setValue(option);
        // get option container and add close class
        const element = document.getElementsByClassName(`${styles.selectOption}`)[0];
        element.classList.add(`${styles.close}`);

        // close class will be removed after 400ms because transition is set to 0.4s
        setTimeout(() => {
            element.classList.remove(`${styles.close}`);
        }, 400);
    }
    
    
    return (
        <div className={styles.container}>
            <p className={styles.title}>Should you use a dropdown?</p>

            {/* Select option container */}
            <div className={styles.selectOption} >

                {/* Default option */}
                <p className={styles.defaultOption}> 
                    <span>{value}</span> 
                    <FontAwesomeIcon className={styles.arrowIcon}  icon={faCaretUp} />
                </p>
                

                {/* Options container */}
                <div className={styles.options}>
                    {/* Iterating over the items array */}
                    {props.options.map((option) => {
                        return (
                            <p key={`item-${option}`} onClick={() => handleChange(option)} className={styles.option1} >
                                <FontAwesomeIcon className={styles.icon}  icon={option == 'Yes' ? faThumbsUp : option == 'No' ? faThumbsDown : faFaceGrinBeamSweat} /> 
                                {option}
                            </p>
                        )
                    })}
                </div>
            </div>

            {/* Displaying answer */}
            <p className={styles.answer}>Answer: {value}</p>
        </div>
    )
}

export default Dropdown;