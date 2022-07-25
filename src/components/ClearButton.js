import React from "react";
import '../style/ClearButton.css'

const ClearButton = (props) => (
    <div className="clear-button" onClick={props.manageClear}>
        {props.children}
    </div>
);

export default ClearButton;