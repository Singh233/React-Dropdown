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
            <p className={styles.title}>Should you use a dropdown?</p>

            <select className={styles.select}  onChange={handleChange} name='Select'>
                <option value="">Select Option</option>
                {items.items.map((item) => {
                    return (
                        <option key={`item-${item}`} value={item} >{item}</option>
                    )
                })}
            </select>

            <p>Answer: {value}</p>
        </div>
    )
}

export default Dropdown;