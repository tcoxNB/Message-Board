import React from 'react';

const Message = props => {
    return (
        <div>
            <div className={props.mine ? "has-text-right" : ""}>
                {props.message}
            </div>
        </div>
    );
};

export default Message