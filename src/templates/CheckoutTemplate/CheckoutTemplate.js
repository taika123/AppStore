import { Fragment, useEffect } from 'react';
import {Route, Redirect} from 'react-router';
import { USER_LOGIN } from '../../util/settings/config';



const CheckoutTemplate = (props) => {//path, exact, Component
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const {Component, ...restProps} = props;
    // chuyển trang login nếu chưa login
    if(!localStorage.getItem(USER_LOGIN)){
        return <Redirect to="/login"/>
    }

    return <Route {...restProps} render={(propsRoute) => {//props.location.props.history.props.match

        return <Fragment>
            
            <Component {...propsRoute}/>
            
        </Fragment>
    }} />
}

export default CheckoutTemplate