import React from "react";
import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [speciality, setSpeciality] = useState('Select Speciality');
    const [experience, setExperience] = useState('');
    const [list, setList] = useState([]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSpecialityChange = (e) => {
        setSpeciality(e.target.value);
    };

    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
    };

    const handleReset = () => {
        setName('');
        setSpeciality('Select Speciality');
        setExperience('');
    };

    const handleAddToList = () => {
        if (name && speciality !== 'Select Speciality' && experience) {
            const item = `${name} ${speciality} ${experience}`;
            setList([...list, item]);
            handleReset();
        }
    };

    return (
        <div>
            <h1>Form</h1>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={handleNameChange} />
            </div>
            <div>
                <label>Speciality:</label>
                <select value={speciality} onChange={handleSpecialityChange}>
                    <option disabled>Select Speciality</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="C++">C++</option>
                </select>
            </div>
            <div>
                <label>Experience Level:</label>
                <input
                    type="radio"
                    value="Junior"
                    name="experience"
                    onChange={handleExperienceChange}
                    checked={experience === 'Junior'}
                />
                <label>Junior</label>
                <input
                    type="radio"
                    value="Mid"
                    name="experience"
                    onChange={handleExperienceChange}
                    checked={experience === 'Mid'}
                />
                <label>Mid</label>
                <input
                    type="radio"
                    value="Senior"
                    name="experience"
                    onChange={handleExperienceChange}
                    checked={experience === 'Senior'}
                />
                <label>Senior</label>
            </div>
            <div>
                <button onClick={handleReset}>Reset Form</button>
                <button onClick={handleAddToList}>Add</button>
            </div>
            <div>
                <h2>List:</h2>
                <ul>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Form;