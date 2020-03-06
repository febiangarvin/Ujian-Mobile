import { combineReducers } from 'redux';
import UserReducers from './userReducers';
import LoginReducers from './loginReducers';
import HomeListReducers from './homeListReducers';

export default combineReducers({
    user: UserReducers,
    loginForm: LoginReducers,
    homeListPost: HomeListReducers,
})