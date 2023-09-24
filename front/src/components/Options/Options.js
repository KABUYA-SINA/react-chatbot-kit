import React from "react";
import '../../sass/pages/_options.scss';
const Options = (props) => {
    const options = [
        {
            text: "Police",
            handler: props.actionProvider.handlePolice,
            id: 1,
        },
        {
            text: "Fireman",
            handler: props.actionProvider.handleFireman,
            id: 2
        },
        {
            text: "Hospital",
            handler: props.actionProvider.handleHospital,
            id: 3
        },
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;