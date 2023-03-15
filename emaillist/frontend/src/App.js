import React, { useState, useEffect } from 'react';
import styles from './assets/css/App.css';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

function App(props) {
    const [emails, setEmails] = useState([]);

    const fetchEmaillist = async () => {
        try {
            const newLocal = '/api/emaillist';
            const response = await fetch(newLocal,{
                method : 'get',
                headers : {
                'Accept' : 'application/json'
                }
            });

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }

            setEmails(json.data);

        }catch(err) {
            console.log(err.message);
        }
    }

    const notifyKeywordChanged = async function(keyword){
        // keyword가 firstName or lastName or email
        console.log(keyword);
        try {
            const response = await fetch('/api/emaillist',{
                method : 'get',
                headers : {
                    'Accept' : 'application/json'
                }
            });

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }

            const newEmails = json.data.filter(function(e){
                return (e.firstName+e.lastName).includes(keyword) || e.email.includes(keyword) ? e : null
            })
            setEmails(newEmails);

        }catch(err) {
            console.log(err.message);
        }
    }

    const addEmail = async (firstName, lastName, email) => {
        const newEmail = {
            no : null,
            firstName : firstName,
            lastName : lastName,
            email : email
        }

        try {
            const response = await fetch('/api/emaillist',{
                method : 'post',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(newEmail)
            });

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }

            setEmails([json.data, ...emails]);

        }catch(err) {
            console.log(err.message);
        }
    }

    const deleteEmail = async (no) => {
        try {
            const response = await fetch(`/api/emaillist/${no}`,{
                method : 'delete',
                headers : {
                    'Accept' : 'application/json',
                }
            });

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }

            const newEmails = emails.filter(function(email){
                return email.no === json.data ? null : email
            })

            setEmails(newEmails);

        }catch(err) {
            console.log(err.message);
        }
    }

    

    useEffect(() =>{
        fetchEmaillist();
    },[]);

    return (
        <div id={styles.App}>
            <RegisterForm callbackAddEmail={addEmail}/>
            <Searchbar callback={notifyKeywordChanged}/>
            <Emaillist 
                emaillist={emails}
                callbackDeleteEmail={deleteEmail}/>
        </div>
    );
}

export default App;
