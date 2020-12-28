import React from 'react'

const initialState = {
    update: false,
}

const updateReducer = (state = initialState,action) =>{

    switch(action.type){
        case 'UPDATE':
            return{update: action.update};
        default:
            return state;
    }
}

export default updateReducer;