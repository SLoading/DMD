import React from 'react'

const initialState = {
    isOpen: false,
    id:'',
    count_bed:'',
    space:'',
    price:'',
    food:'',
    other:'',
}

const changeReducer = (state = initialState,action) =>{
    console.log(action.count_bed)

    switch(action.type){
        case 'CHANGE':
            return{isOpen: true,
                id:action.id,
                count_bed:action.count_bed,
                space:action.space,
                price:action.price,
                food:action.food,
                other:action.other,};
        case 'CLOSE_CHANGE':
            return {isOpen: false};
        default:
            return state;
    }
}

export default changeReducer;