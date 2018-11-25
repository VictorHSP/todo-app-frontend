import { combineReducers } from 'redux'
import  todoReducer  from '../todo/todoReducer'


const rootReduces = combineReducers({
    todo: todoReducer
})


export default rootReduces