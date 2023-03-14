import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(0);
    const [date, setDate] = useState(()=> new Date())

    useEffect(() => {
        const timer = setInterval(()=>{
            setDate(new Date());
            setTicks((ticks) => ticks +1);
        },1000);

        return (()=>clearInterval(timer));
    }, []);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return (
        <div>
            <span>{ticks}</span>
            {
                ticks % 10 === 0 ?
                null :
                <Clock
                    message={'ex05: useEffect Hook example'}
                    hours={('0'+hours).slice(-2)}
                    minutes={('0'+minutes).slice(-2)}
                    seconds={('0'+seconds).slice(-2)}/>
            }
        </div>
            
    );
}