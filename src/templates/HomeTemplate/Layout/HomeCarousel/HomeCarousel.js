import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCarouselAction } from '../../../../redux/actions/CarouselActions';
import '../../../../components/Slick/Multiple.css'


function onChange(a, b, c) {
    console.log(a, b, c);
  }

const HomeCarousel = (props) => {

    const { arrImg } = useSelector(state => state.CarouselReducer)

    // console.log('arrIMG',arrImg)
    const dispatch = useDispatch();

    //sẽ tự kích hoạt khi components load ra 
    useEffect (() => {


        // try{
        //     const result = await axios({
        //         url:`${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
        //         method:'GET',
        //         headers:{
        //             TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjciLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDc3MzQ0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0Nzg4MjAwMH0.adTs_7mDpRC34Pwdsgpu-EUnD_gW9Z8REnUnl05QysA',
        //         }
        //     });
        //     //đưa lên reducer
        //     // console.log(result);
        //     dispatch({
        //         type: SET_CAROUSEL,
        //         arrImg: result.data.content,
                
        //     })

        // }catch(err) {
        //     console.log('err',err);
            
        // }




        //1 action = {type : '', data}
        //2 phải cài middleware:
        //call back function (dispatch)


        // const action = getCarouselAction(1);
        dispatch(getCarouselAction())
        // console.log(getCarouselAction())
    }, [dispatch])

    const contentStyle = {
        height: '600px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        backgroundPosition: 'center',
        backgroundSize:'100%',
        backgroundRepeat: 'no-repeat',
    };

    const renderImg = () => {
        return arrImg.map((item, index) => {
            return <div key={index} >
                <div style={{...contentStyle, backgroundImage:`url(${item.hinhAnh})`}} >
                    <img src={item.hinhAnh} className='w-full opacity-0 ant-carousel slick-dots' alt={item.hinhAnh} />
                </div>
            </div>
        })
    }

    return (
        <Carousel afterChange={onChange} >
            {renderImg()}
        </Carousel>
    ) 
}

export default HomeCarousel