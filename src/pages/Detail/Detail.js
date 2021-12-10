import React, { useEffect } from 'react'
// import {Button , CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import '../../assets/styles/circle.scss'
import { useSelector, useDispatch } from 'react-redux'
// import { SET_CHI_TIET_PHIM } from "../../redux/actions/types/QuanLyRapType"
import { Rate, Tabs } from 'antd';
import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapActions'
import moment from 'moment';
import { NavLink} from 'react-router-dom'
const { TabPane } = Tabs;

export default function Detail(props) {

    const { filmDetail } = useSelector(state => state.QuanLyPhimReducer);

    // console.log({ filmDetail })


    const dispatch = useDispatch();

    useEffect(() => {
        //lấy thông tin dữ liệu từ params
        let { id } = props.match.params
        dispatch(layThongTinChiTietPhim(id))
        window.scrollTo(0, 0)
    }, [])

    return (
        <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundColor: 'rgba(0,0,0,0.9)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', }}>

            <div className="grid grid-cols-12" opacity="1">
                <div className="col-span-4 col-start-3 mt-28">
                    <div className="grid grid-cols-2">
                        <img className="cols-span-1" src={filmDetail.hinhAnh} style={{ width: "100%", height: 300 }} alt={filmDetail.hinhAnh} />
                        <div className="cols-span-2 text-white ml-3" style={{ marginTop: "30%" }}>
                            <p className="text-xl">Ngày Chiếu: {moment(filmDetail.ngayKhoiChieu).format('dd.mm.yyyy')}</p>
                            <p className="text-3xl leading-0 my-4">{filmDetail.tenPhim}</p>
                            <p className="my-6 leading-2">{filmDetail.moTa}</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 ml-20 mt-28">
                    <h1 style={{ marginLeft: '20%', color: 'yellow', fontWeight: 'bold', fontSize: 20 }}>Đánh Giá </h1>
                    <h1 className="text-green-400 text-2xl" style={{ marginLeft: '15%' }}><Rate allowHalf defaultValue={filmDetail.danhGia / 2} /></h1>
                    <div class={`c100 p${filmDetail.danhGia * 10} big green`}>
                        <span className="text-white">{filmDetail.danhGia * 10}%</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-white px-5 py-5">
            <Tabs defaultActiveKey="1" centered>
                <TabPane className="text-white" tab="Lịch Chiếu" key="1">
                <div className="mt-10 container">
                <Tabs tabPosition={'left'} >
                    {filmDetail.heThongRapChieu?.map((item, index) => {

                        // console.log('index', index);
                        return <TabPane tab={

                            <div>
                                <img src={item.logo} className="rounded-full" width="50" alt={item.logo} /><br />
                            </div>}
                            key={index}>
                                {item.cumRapChieu?.map((cumRap, index) => {
                                    return <div className="mt-5" key={index}>
                                                <div className="flex flex-row">
                                                    <img src="https://movienew.cybersoft.edu.vn/hinhanh/ca-sau-tu-than_gp01.jpeg" alt="https://movienew.cybersoft.edu.vn/hinhanh/ca-sau-tu-than_gp01.jpeg" style={{width:50, height:50}}></img>
                                                    <div className="ml-2">
                                                        <div>
                                                            <p className="text-xl">{cumRap.tenCumRap}</p>
                                                            <p className="text-gray-500" style={{marginTop:0}}>{cumRap.diaChi}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="thongtin-lichchieu grid grid-cols-4">
                                                    {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                                                            return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="col-span-1 text-green-800 font-bold">
                                                                    {moment(lichChieu.ngayChieuGioChieu).format('dd.mm.yyyy')}
                                                            </NavLink>
                                                    })}
                                                </div>
                                        </div>
                                })}
                        </TabPane>
                    })}
                </Tabs>
            </div>
                </TabPane>
                <TabPane tab="Thông Tin" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Đánh Giá" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
            </div>
            
        </div>
    )
}


// <TabPane tab={

// <div>
//     <img src={item.logo} className="rounded-full" width="50" alt={item.logo} /><br />
// </div>}
// key={index}>
// Content of Tab 2
// </TabPane>