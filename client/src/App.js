import './App.css';
import {Button} from '@material-ui/core';
import React from 'react';
import Room from './room';
import Append_number from './Append_number';
import Change_number from "./Change_number";
import {useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch();
    const open_modal = () =>{
        dispatch({type:'OPEN_MODAL',isOpen:true})
    }

  return (
    <div className="App">
        <h1 className="test">Отель</h1>
        <Button variant="contained" color="primary" onClick={() => open_modal()}>Добавить номер</Button>
        <Room/>
        <Change_number/>
        <Append_number/>
    </div>
  );
}

export default App;
