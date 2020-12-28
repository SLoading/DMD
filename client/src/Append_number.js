import './style/Append_number.css';
import {
    Button,
    Checkbox, FormControl, FormControlLabel, FormLabel,
    ListItem, ListItemIcon,
    ListItemText,
    Radio, RadioGroup,
    TextField
} from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

function Append_number() {
    const addNumber = useSelector( (state) => state)
    const dispatch = useDispatch();

    const other = ['Кондиционер','Холодильник','Мини бар','Сейф','Wi-fi','Парковка','Бассейн','Уборка номеров','Трансфер'];
    const closeModal = () =>{
        dispatch({type:'CLOSE_MODAL'})
    }

    const [checked, setChecked] = React.useState([1]);
    const [value, setValue] = React.useState('Все включено');
    const [countBed, setCountBed] = React.useState('');
    const [space,setSpace] = React.useState('');
    const [price, setPrice] = React.useState('');

    const App_num = () =>{
        axios.post("/api/append_number",{
            "number" : 0,
            "price" : price,
            "count_bed":countBed,
            "space":space,
            "food":value,
            "other":checked
        }).then(res=>{
            console.log(res)
            dispatch({type:'CLOSE_MODAL'})
        }).catch(err=>{
            console.log(err);
        })


        console.log(value)

    }

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(value)
    };
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
        console.log(newChecked)
    };
    return (
        <>
            {addNumber.modal.isOpen &&
        <div className="background">
            <div className="modalBackground" onClick={closeModal}>

            </div>
            <div  className="card_modal">
                <h3>Добавление номера</h3>
                <div>
                    <div className="main_info">
                        <div className="input_appNumb">
                                <TextField id="standard-basic" label="Спальных мест" value={countBed}  onChange={e=>setCountBed(e.target.value)} />
                                <TextField id="standard-basic" label="Площадь"value={space}  onChange={e=>setSpace(e.target.value)} />
                                <TextField id="standard-basic" label="Цена"value={price}  onChange={e=>setPrice(e.target.value)} />
                        </div>
                        <div>
                            <div className="food_radiobutton">
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Питание</FormLabel>
                                    <RadioGroup  value={value} onChange={handleChange}>
                                        <FormControlLabel value="Все включено" control={<Radio />} label="Все включено" />
                                        <FormControlLabel value="Завтрак, ужин" control={<Radio />} label="Завтрак, ужин" />
                                        <FormControlLabel value="Без питания" control={<Radio />} label="Без питания" />

                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <h4>Дополнительно</h4>
                    <div className="other_checkbox">
                        {other.map((value) => {
                            const labelId = `checkbox-list-secondary-label-${value}`;
                            return (
                                <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={` ${value}`} />
                                </ListItem>
                            );
                        })}
                    </div>
                    <Button variant="contained" color="primary" className="btn_appNum" onClick={App_num}>Добавить</Button>
                    <Button  color="secondary" className="btn_appNum" onClick={()=>dispatch({type:'CLOSE_MODAL'})}>Отменить</Button>
                </div>
            </div>
        </div>}
        </>
    )
};

export default Append_number;
