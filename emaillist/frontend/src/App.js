import React, { useState } from 'react';
import data from './assets/json/data.json';
import styles from './assets/css/App.css';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

function App(props) {
    const [emails, setEmails] = useState(data);
    const notifyKeywordChanged = function(keyword){
        // keyword가 firstName or lastName or email
        console.log(keyword);
        const newEmails = data.filter(function(e){
            return (e.firstName+e.lastName).includes(keyword) || e.email.includes(keyword) ? e : null
        })
        setEmails(newEmails);
    }
    return (
        <div id={styles.App}>
            <RegisterForm />
            <Searchbar callback={notifyKeywordChanged}/>
            <Emaillist emaillist={emails}/>
        </div>
    );
}

export default App;
