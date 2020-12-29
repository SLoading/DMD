import { combineReducers } from 'redux';
import ModalReducer from "./modal";
import UpdateReducer from "./update";
import ChangeReducer from "./change";


const allReducers = combineReducers({
    modal: ModalReducer,
    update: UpdateReducer,
    change: ChangeReducer
});

export default allReducers