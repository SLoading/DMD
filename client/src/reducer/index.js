import { combineReducers } from 'redux';
import ModalReducer from "./modal";

const allReducers = combineReducers({
    modal: ModalReducer,
});

export default allReducers