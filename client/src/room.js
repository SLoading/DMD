import './room.css';
import {Button, ButtonBase, Grid, Paper, Typography} from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function Room() {
    const [posts,setPosts] = useState("");

    useEffect(()=>{
        if(!posts){
            axios.get("/api/numbers")
                .then(res => {
                        setPosts(res.data);
                }).catch(err => {
                console.log(err);})
        }
    });


    if (posts){
        return (
            posts.map((value) =>
                <div className="container">
                        <Grid className="numbers" container spacing={2}>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            {value.count_bed}спальных места
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {value.food},{value.space} кв.м
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            <div>{value.other}</div>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" style={{cursor: 'pointer'}}>

                                            <Button  color="secondary">Удалить</Button>
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">{value.price} руб.</Typography>
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
