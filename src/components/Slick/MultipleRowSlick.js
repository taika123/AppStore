/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Slider from "react-slick";
import { SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../../redux/actions/types/QuanLyPhimType.js";
// import Film from "../Film/Film";
import Film_Flip from "../Film/Film_Flip.js";
import "./Multiple.css";
import {useDispatch,useSelector} from 'react-redux'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} 'slick-prev'`}
            style={{ ...style, display: "block",color:'black',}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} 'slick-prev'`}
            style={{ ...style, display: "block",color:'black',}}
            onClick={onClick}
        />
    );
}

const MultipleRowSlick = (props)  => {
//dispatch action lên redux
const dispatch = useDispatch()
//lấy dữ liệu từ redux về 
const { dangChieu, sapChieu } = useSelector(state => state.QuanLyPhimReducer)

let activeClassDC = dangChieu === true ? 'active_Film' : 'none_active_Film';
let activeClassSC = sapChieu === true ? 'none_active_Film' : 'active_Film';

const renderFilm = () => {
    return props.arrPhim.slice(0,12).map((item, index) => {
      return <div key={index} className="width-item mt-2">
          {/* <Film phim={item}/>  */}
          <Film_Flip item = {item} />
      </div>
    })
  }

    const settings = {
      className: "center variable-width",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      rows: 1,
      slidesPerRow: 2,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };



    return (
      <div >
        <button className={`${activeClassDC} px-8 py-3 font-semibold rounded
         bg-gray-800 text-white mr-2`} onClick={() => { 
          const action = {type: SET_PHIM_DANG_CHIEU}
          dispatch(action)
        }}>Phim Đang Chiếu</button>

        <button className={`${activeClassSC} px-8 py-3 font-semibold rounded
         bg-white text-gray-800 border`} onClick={() => { 
          const action = {type: SET_PHIM_SAP_CHIEU}
          dispatch(action)
        }}>Phim Sắp Chiếu</button>
        <Slider {...settings}>
          {renderFilm()}
        </Slider>
      </div>
    );
  }



export default MultipleRowSlick