import React, { useState } from 'react';
import './Title.css'



const Title = () => {

    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }
    return (
        <div className="title-input">

            <h1> 🦇 Hello, {text} 🦇</h1>
            <input type="text" id="myInput" name="myInput" value={text} onChange={handleChange} />
        </div>
    );
};

export default Title;