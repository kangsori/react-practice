import React, {useState} from 'react';
import styles from './assets/css/Emaillist.css';
import Email from './Email';

const Emaillist = ({emaillist, callbackDeleteEmail}) => {
    return (
        <ul className={styles.Emaillist} >
            {
                emaillist.map(item => <Email 
                                        key={item.no} 
                                        no={item.no}
                                        email={item.email}
                                        firstName={item.firstName}
                                        lastName={item.lastName}
                                        callbackDeleteEmail={callbackDeleteEmail}/>)
            }
            
        </ul>
    );
};

export default Emaillist;