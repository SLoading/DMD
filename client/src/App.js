import './App.css';
import {Button, Grid} from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import Room from './room';
import Append_number from './Append_number';
import { useSelector, useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch();
    const open_modal = () =>{
        console.log("MAIN_TEST")
        dispatch({type:'OPEN_MODAL',isOpen:true})
    }

  return (
    <div className="App">
        <h1 className="test">Отель</h1>
        <Button variant="contained" color="primary" onClick={() => open_modal()}>Добавить номер</Button>
        <div className="row">

            <Room/>
            </div>
        <Append_number/>
    </div>
  );
}

export default App;
