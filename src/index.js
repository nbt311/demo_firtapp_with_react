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
root.render(
    // React.createElement("h1",{style: {textAlign: "center"}},name)
    <div>
        <h1>List of Fruits</h1>
        <ul>
            {fruits.map(item => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
);
