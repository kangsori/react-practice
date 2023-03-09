import React from 'react';
import emaillist from './assets/json/data.json';
import styles from './assets/css/App.css';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

function App(props) {
    return (
        <div id={styles.App}>
            <RegisterForm />
            <Searchbar />
            <Emaillist emaillist={emaillist}/>
        </div>
    );
}

export default App;
