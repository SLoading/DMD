import React from 'react'

const initialState = {
    isOpen: false,
    number:0
}

const modalReducer = (state = initialState,action) =>{
    console.log("ModalReducer");
    console.log(action);

    switch(action.type){
        case 'OPEN_MODAL':
            return{isOpen: true,number: action.number};
        case 'CLOSE_MODAL':
            return {isOpen: false};
        default:
            return state;
    }
}

export default modalReducer;