import './PasswordInput.css'
import { useState } from "react";

function PasswordInput({ minimum = 8 }) {

    const [inputValue, setInputValue] = useState("");
    const [userVisibility, setUserVisibility] = useState(false);
    const metTheRequiredLength = inputValue.length >= minimum;

    const inputChangeEvent = (event) => {
        setInputValue(event.target.value)
    }

    const changeVisibility = () => {
        setUserVisibility(!userVisibility)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (metTheRequiredLength) {
            alert("submit successfully")
        } else {
            alert("Too short, You need a longer password")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="limited-text-input">Password:</label>
                <span className={metTheRequiredLength ? "no-error" : "error"}>
                    {inputValue.length}
                </span>
            </div>
            <div>
                <input
                    placeholder="Enter a password"
                    type={userVisibility ? "text" : "password"}
                    id="limited-text-input"
                    value={inputValue}
                    onChange={inputChangeEvent}
                />
                <button type="button" onClick={changeVisibility}>
                    {userVisibility ? "Show as ***" : "Show as text"}
                </button>
            </div>

            <button type="submit" className="primary">
                Submit
            </button>
        </form>
    );
}

export default PasswordInput;