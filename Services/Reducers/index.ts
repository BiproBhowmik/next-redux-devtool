import { combineReducers } from 'redux'

import changeNumber from './upDown'
import todoReducer from './todoReducer';

const rootReducer = combineReducers ({
    changeNumber: changeNumber,
    todoReducer,
});

export default rootReducer