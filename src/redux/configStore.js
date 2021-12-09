import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {CarouselReducer} from './reducers/CarouselReducer'
import {QuanLyPhimReducer} from './reducers/QuanLyPhimReducer'
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer'
import {QuanLyNguoiDungReducer} from './reducers/QuanLyNguoiDungReducer'
import {QuanLyDatVeReducer} from './reducers/QuanLyDatVeReducer'
import { LoadingReducer } from './reducers/LoadingReducer'

const rootReducer = combineReducers({
    //state ung dung
    CarouselReducer,
    QuanLyPhimReducer,
    QuanLyRapReducer,
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer,
    LoadingReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));