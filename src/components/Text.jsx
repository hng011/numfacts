import React from 'react';

const Text = (props) => {

    return (
        <div className="mt-[2%]">
            <code className="text-xl"> {props.text}</code>
        </div>
    );

}

export default Text;