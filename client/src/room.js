import './room.css';
import {Button, Grid, Typography} from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function Room() {
    const [posts,setPosts] = useState("");
    const dispatch = useDispatch();
    const reducer = useSelector( (state) => state)

    useEffect(()=>{
            axios.get("/api/numbers")
                .then(res => {
                    setPosts(res.data);
                }).catch(err => {
                    console.log(err);})
    },[reducer.update.update]);

    const delete_number = (id) =>{
        axios.post("/api/delete_numbers",{
            "id":id
        })
            .then(res => {
                dispatch({type:'UPDATE',update:!reducer.update.update});
            }).catch(err => {
            console.log(err);
            })

    }


    if (posts){
        return (
            posts.map((value) =>
                <div className="container" >
                        <Grid className="numbers" container spacing={2}>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            {value.count_bed == 1 ? value.count_bed + ' спальное место' : value.count_bed +' спальных места'}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {value.food}, {value.space} кв.м
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {value.other}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography component={'span'} variant={'body2'} style={{cursor: 'pointer'}}>

                                            <Button  color="secondary" onClick={()=>delete_number(value._id)}>Удалить</Button>
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography  variant="subtitle1">{value.price} руб.</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                </div>)
        )
    }else{
    return (
                <div >
                    Номеров нет
                </div>
        )}

}

export default Room;
