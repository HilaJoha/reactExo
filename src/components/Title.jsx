import {useState} from "react";

const Title = () => {
    const [firstname, setFirstName] = useState("");

    return (
        <div className="inputLine">
            <p>{firstname}</p>
            <input 
            type="text"
            placeholder="Lord of Chicken"
            onChange={(e) => setFirstname(e.target.value)}>
            </input>
        </div>

            );
};

export default Title;