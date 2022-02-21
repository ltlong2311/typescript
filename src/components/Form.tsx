import React from 'react';

const Form = () => {
    return (
        <div className="form-container">
            <h1>Form</h1>
            <form>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                />
            </form>
            <button type="submit">Submit</button>
        </div>
    );
};

export default Form;
