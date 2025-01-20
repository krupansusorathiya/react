import React from 'react';
import './style.css'; // Import the CSS file

const FormComponent = () => {
    return (
        <div>
            <label>Textbox:</label>
            <input type="text"></input>
            <br />
            <label>CheckBox:</label>
            <input type="checkbox"></input>
            <br />
            <label>Radiobutton :</label>
            <input type="radio"></input>
            <br />
            <label>Color :</label>
            <input type="color"></input>
            <br />
            <label>Date :</label>
            <input type="datetime-local"></input>
            <br />
        </div>
    );
};

export default FormComponent;
