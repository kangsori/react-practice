import fs from 'fs';

let state = {
    order : JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

let updatOrder1 = state.order;
updatOrder1.receive = '부산시 해운대구 우동...';
console.log(state.order, updatOrder1, state.order===updatOrder1);

console.log("==============================================");

state = {
    order : JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

const updatOrder2 = Object.assign({}, state.order,{
    receive : '부산시 해운대구 우동...'
});
console.log(state.order, updatOrder2, state.order===updatOrder2);
