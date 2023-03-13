import React from 'react';

const Email = ({no, email, firstName, lastName}) => {
    return (
        <li >
            {firstName}{lastName}
            <br/>
            {email}
            <a href=''></a>
        </li>
 
    );
};

export default Email;