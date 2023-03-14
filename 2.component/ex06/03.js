import fs from 'fs';

let state = {
    order : JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

let updatOrder = Object.assign({},state.order,{
    receive : '부산시 해운대구 우동...'
})

updatOrder.payment.method = 'Mobile';

console.log(
    state.order, 
    updatOrder, 
    state.order === updatOrder, 
    state.order.receive === updatOrder.receive,
    state.order.payment === updatOrder.payment);
