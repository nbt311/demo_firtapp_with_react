import React from 'react';
import ReactDOM from 'react-dom/client';
import {findAllByDisplayValue} from "@testing-library/react";
const name = "Your name";
React.createElement("h1",{style: {textAlign: "center"}},name);
const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Apricot",
    "Black rowan",
    "Cranberry"];
const root = ReactDOM.createRoot(document.getElementById("root"));
const tick = () => {
    root.render(
        // React.createElement("h1",{style: {textAlign: "center"}},name)
        <div>
            <h1>{name}</h1>
            <h1>List of Fruits</h1>
            <ul>
                {fruits.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
            <h1>
                Hello,world!
            </h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
};
setInterval(tick, 1000);