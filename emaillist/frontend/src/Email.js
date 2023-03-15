import React from 'react';

const Email = ({no, email, firstName, lastName, callbackDeleteEmail}) => {
    return (
        <li >
            {firstName}{lastName}
            <br/>
            {email}
            <a onClick={()=>{
                callbackDeleteEmail(no);
            }}></a>
        </li>
 
    );
};

export default Email;