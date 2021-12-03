import React from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import {useSelector, useDispatch} from 'react-redux'
// import Film from '../../components/Film/Film'
import MultipleRowSlick from '../../components/Slick/MultipleRowSlick.js'

export default function Home(props) {

    const { arrPhim } = useSelector(state => state.QuanLyPhimReducer)

    console.log('object', props)

    // const renderPhim = () => {
    //     return arrPhim.map((item, index) =>{
    //         return (
    //             <Film key={index}/>
    //         )
    //     })
    // }
    
    return (
        <div >
             
            <section class="text-gray-600 body-font" >
                <div class="container px-5 py-24 mx-auto">
                <MultipleRowSlick arrPhim={arrPhim}/>
                    {/* <div class="flex flex-wrap -m-4">
                            {renderPhim()}
                    </div> */}
                </div>
            </section>
            <div className="mx-32">
                <HomeMenu/>

            </div>
        </div>
    )
}
