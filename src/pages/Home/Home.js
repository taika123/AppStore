import React, {useEffect} from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import {useSelector, useDispatch} from 'react-redux'
// import Film from '../../components/Film/Film'
import MultipleRowSlick from '../../components/Slick/MultipleRowSlick.js'
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions'
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapActions'
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel'

export default function Home(props) {
    
    const { arrPhim } = useSelector(state => state.QuanLyPhimReducer)
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer)
    const dispatch = useDispatch();
    
    // console.log('HomeProps',heThongRapChieu)

    // console.log('arrFilm', arrPhim)

    // const renderPhim = () => {
    //     return arrPhim.map((item, index) =>{
    //         return (
    //             <Film key={index}/>
    //         )
    //     })
    // }
    
    useEffect(() => {
        // const action = layDanhSachPhimAction();
        dispatch(layDanhSachHeThongRapAction())
        
        dispatch(layDanhSachPhimAction())//dispatch function từ thunk

    }, [dispatch])
    
    return (
        <div >
            
            <HomeCarousel/>
            <section class="text-gray-600 body-font" >
                <div class="container px-5 py-24 mx-auto">
                <MultipleRowSlick arrPhim={arrPhim}/>
                    {/* <div class="flex flex-wrap -m-4">
                            {renderPhim()}
                    </div> */}
                </div>
            </section>
            <div className="mx-32">
                <HomeMenu heThongRapChieu= {heThongRapChieu}/>

            </div>
        </div>
    )
}
