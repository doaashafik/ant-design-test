import { combineReducers } from 'redux'
import { authReducer } from './Login/reducer';
import { loadingReducer } from './Loading/reducer'
export default combineReducers({
    auth: authReducer,
    isLoading: loadingReducer
})