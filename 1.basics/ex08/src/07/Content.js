import React, {Fragment} from 'react';
import Clock from './Clock';

function Content(){
    return (
        <Fragment>
            <p>{'JSX Tutorial - Dynamic HTML Rendering'} </p>
            <Clock />
        </Fragment>
    );
}

export default Content;