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

function Change_number() {
    console.log("CHANGE")
    const change = useSelector( (state) => state)
    const dispatch = useDispatch();
    const other = ['Кондиционер','Холодильник','Мини бар','Сейф','Wi-fi','Парковка','Бассейн','Уборка номеров','Трансфер'];
    const closeModal = () =>{
        setPrice('');
        setCountBed('');
        setSpace('');
        setFood('Все включено')
        setChecked([])
        dispatch({type:'UPDATE',update:!change.update.update});
        dispatch({type:'CLOSE_CHANGE'})
    }
    const [checked, setChecked] = React.useState([]);
    const [food, setFood] = React.useState('Все включено');
    const [countBed, setCountBed] = useState('');
    const [space,setSpace] = useState('');
    const [price, setPrice] = useState('');

    const change_num = () =>{
        axios.put("/api/update_number",{
            "id":change.change.id,
            "price" : price,
            "count_bed":countBed,
            "space":space,
            "food":food,
            "other":checked
        }).then(res=>{
            setPrice('');
            setCountBed('');
            setSpace('');
            setFood('Все включено')
            setChecked([])
            dispatch({type:'CLOSE_CHANGE'})
            dispatch({type:'UPDATE',update:!change.update.update});
        }).catch(err=>{
            setPrice('');
            setCountBed('');
            setSpace('');
            setFood('Все включено')
            setChecked([])
            console.log(err);
        })
    }

    useEffect(()=>{
        // setChecked(change.change.other)
        // setFood(change.change.food)
        setCountBed(change.change.count_bed)
        setSpace(change.change.space)
        setPrice(change.change.price)
    },[change.change.isOpen])
    const handleChange = (event) => {
        setFood(event.target.value);
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
    };
    return (
        <>
            {change.change.isOpen &&
            <div className="background">
                <div className="modalBackground" onClick={closeModal}>

                </div>
                <div  className="card_modal">
                    <h3>Изменение номера</h3>
                    <div>
                        <div className="main_info">
                            <div className="input_appNumb">
                                <TextField  label="Спальных мест" value={countBed}  onChange={e=>setCountBed(e.target.value)} />
                                <TextField label="Площадь"value={space}  onChange={e=>setSpace(e.target.value)} />
                                <TextField  label="Цена"value={price}  onChange={e=>setPrice(e.target.value)} />
                            </div>
                            <div>
                                <div className="food_radiobutton">
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Питание</FormLabel>
                                        <RadioGroup  value={food} onChange={handleChange}>
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
                        <Button variant="contained" color="primary" className="btn_appNum" onClick={change_num}>Сохранить</Button>
                        <Button  color="secondary" className="btn_appNum" onClick={()=>dispatch({type:'CLOSE_CHANGE'})}>Отменить</Button>
                    </div>
                </div>
            </div>}
        </>
    )
};

export default Change_number;
