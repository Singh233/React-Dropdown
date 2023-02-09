import { useState } from 'react'
import styles from '../assets/css/Dropdown.module.css'


// Functional Component
const Dropdown = (items) => {
    const [value, setValue] = useState('Select');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className={styles.container}>
            <p>Should you use a dropdown?</p>
            <select value={value} onChange={handleChange}>
                {items.items.map((item) => {
                    return (
                        <option key={`item-${item}`} value={item}  >{item}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Dropdown;