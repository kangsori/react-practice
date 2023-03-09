import React from 'react';

const Email = ({no, email, firstName, lastName}) => {
    return (
        <li >
            {firstName}{lastName}
            <br/>
            {email}
        </li>
 
    );
};

export default Email;