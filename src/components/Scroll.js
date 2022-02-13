import React from 'react';


const Scroll = (props) => {
    return(
        <div style={{ overflowY: 'scroll', border: '2px solid back', height:'800px' }}>
            {props.children}
        </div>
    )
};

export default Scroll;