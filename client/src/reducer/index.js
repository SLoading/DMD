import { combineReducers } from 'redux';
import ModalReducer from "./modal";
import UpdateReducer from "./update";

const allReducers = combineReducers({
    modal: ModalReducer,
    update: UpdateReducer
});

export default allReducers