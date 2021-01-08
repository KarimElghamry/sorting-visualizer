import React from "react";

const SortingBar = (props) =>{
    let color = '#efefef';

    switch (props.colorCode) {
        case 1:
            color = 'green';
            break;
        case 2:
            color = 'red';
            break;
        default:
            break;
    }

    return(
    <div style={{...props.style, backgroundColor: color}}>
    
    </div>
    );
}

export default SortingBar;