import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div id='App'>
      <MyComponent 
        props01={'문자열'}
        props02={2}
        props03={true}
        props04={{no:1, name:'둘리'}}
        props05={['hello','wordl','react.js','es6']}
        props06={() => '함수'}
        props07={10}
        props08={[true,false,true]}
        props09={{no:1, name:'둘리', email:'dooly@gamil'}}/>
    </div>
  );
}

export default App;
