import React, { Fragment } from 'react'
// import Loadingg from './Escapingball.gif'
import Loadingg from './load.gif'
import { useDispatch, useSelector } from 'react-redux'

export default function Loading() {
    const { isLoading } = useSelector(state => state.LoadingReducer)

    return (
        <React.Fragment >
            {isLoading ? <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '70%' ,display: 'flex', justifyContent: 'center',
            alignItems: 'center', zIndex: 99
        }} className="text-4xl text-white">
            <img src={Loadingg} style={{margin: ' 0 auto', width: '100%', transition: 'tranparent' }} alt="" />
        </div> : ''}

        </React.Fragment>
    )
}
