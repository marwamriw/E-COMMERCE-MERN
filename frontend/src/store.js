import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk'; 
import {productListReducer, productDetailsReducer , productDeleteReducer} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer , userRegisterReducer , userDetailsReducer , userUpdateProfileReducer , userListReducer, userDeleteReducer , userUpdateReducer } from './reducers/userReducers'
import { orderCreateReducer, orderDetailsReducer , orderPayReducer, orderListMyReducer } from './reducers/orderReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart : cartReducer,
    userLogin: userLoginReducer,
    userRegister : userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    userUpdate: userUpdateReducer,
    productDelete: productDeleteReducer

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {}

const initialState = {
    cart : { cartItems : cartItemsFromStorage,
            shippingAddress : shippingAddressFromStorage
    },
    userLogin : { userInfo : userInfoFromStorage},
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
