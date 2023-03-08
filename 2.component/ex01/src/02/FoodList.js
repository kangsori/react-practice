import React from 'react';
import FoodListItem from './FoodListItem';

function FoodList({foods}) {
    //const foosItems = [
        //<FoodListItem name={foods[0].name} count={foods[0].count} />,
        //<FoodListItem name={foods[1].name} count={foods[1].count} />,
        //<FoodListItem name={foods[2].name} count={foods[2].count} />
    //];

    //foods.forEach(function(foods){
    //    foosItems.push(<FoodListItem name={foods.name} count={foods.count} />)
    //})

    //const a1 = [1, 2, 3, 4];
    //const a2 = a1.map(function(e){
    //    return e * e;
    //})

    //const a3 = foods.map(function(food){
    //    return <FoodListItem name={foods.name} count={foods.count} />
    //})

    //console.log(a3);

    return (
        <ul>
            {foods.map((food) => <FoodListItem 
                                        key={food.no} 
                                        name={food.name} 
                                        count={food.count} />)}
        </ul>
    );
}

export default FoodList;