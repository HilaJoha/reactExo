import {useState} from "react";

const inputLine = () => {
    const [firstname, setFirstName] = useState("");

    return (
        <div>
            <p>name: {firstname}</p>
            <input 
            type="text"
            placeholder="Lord of Chicken"
            onChange={(e) => setFirstname(e.target.value)}>
            </input>
        </div>

            );
};

export default inputLine;
      
