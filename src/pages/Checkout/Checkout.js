import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { datVeAction, layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeAction'
import style from './Checkout.module.css'
import { CheckOutlined, CloseOutlined, HomeOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons'
import './Checkout.css'
import { DAT_VE } from '../../redux/actions/types/QuanLyDatVeType'
import _ from 'lodash'
import { ThongTinDatVe } from '../../_core/model/ThongTinDatVe'
import { Tabs } from 'antd';
import moment from 'moment'
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction'
import { connecttion } from '../..'
import {datGheAction} from '../../redux/actions/QuanLyDatVeAction'
import {history} from '../../App'
import { TOKEN, USER_LOGIN } from '../../util/settings/config'
import { NavLink } from 'react-router-dom'


const { TabPane } = Tabs;


function Checkout(props) {
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

    const { chiTietPhongVe, danhSachGheDangDat , danhSachGheKhachDat} = useSelector(state => state.QuanLyDatVeReducer)

    // console.log('danhSachGheDangDat',danhSachGheDangDat)
    const dispatch = useDispatch();
    React.useEffect(() => {
        //gọi hàm tạo ra 1 async function
        const action = layChiTietPhongVeAction(props.match.params.id)
        dispatch(action)

        //load danh sách ghế đang đặt từ serve về
        connecttion.on("loadDanhSachGheKhachDat", (dsGheKhachDat) => {
            console.log('loadDanhSachGheKhachDat',dsGheKhachDat);
        
        //b1: loại mình ra khỏi danh sách 
        dsGheKhachDat = dsGheKhachDat.filter(item => item.taiKhoan !== userLogin.taiKhoan)
        //b2: gộp danh sách ghế khách đặt ở tất cả user login

        let arrGheKhachDat = dsGheKhachDat.reduce((result,item, i) => {
            let arrGhe = JSON.parse(item.danhSachGhe)
            return [...result, ...arrGhe]
        },[])
        //đưa dữ liệu ghế khách đặt cập nhật redux
        arrGheKhachDat = _.uniqBy(arrGheKhachDat,'maGhe')
        
        ////////////////////////////////
        //đưa dữ liệu ghế khách đặt lên redux
        dispatch({
            type:'DAT_GHE',
            arrGheKhachDat
        })
        })
    }, [])

    // console.log('chiTietPhongVe', chiTietPhongVe)

    const { thongTinPhim, danhSachGhe } = chiTietPhongVe

    // const datVes = {
    //     "maLichChieu": 0,
    //     "danhSachVe": [
    //         {
    //             "maGhe": 0,
    //             "giaVe": 0
    //         }
    //     ]
    // }

    const renderSeats = () => {
        return danhSachGhe?.map((item, index) => {

            let classGheVip = item.loaiGhe === 'Vip' ? 'gheVip' : 'vip';
            let classGheDaDat = item.daDat === true ? 'gheDaDat' : '';
            let classGheDangDat = "";

            //kiểm tra từng ghế có trong mảng hay k, nếu có thì render ra
            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === item.maGhe);


            //kiểm tra từng render xem có phải ghế khách đặt hay k
            let classGheKhachDat = "";
            let indexGheKD = danhSachGheKhachDat.findIndex(gheKD => gheKD.maGhe === item.maGhe);
            if(indexGheKD !== -1){
                classGheKhachDat = 'gheKhachDat'
            }

            let classgheDaDuocDat = '';
            if (userLogin.taiKhoan === item.taiKhoanNguoiDat) {
                classgheDaDuocDat = 'gheDaDuocDat';
            }

            if (indexGheDD != -1) {
                classGheDaDat = 'gheDangDat';
            }

            return <Fragment key={index}>
                <button onClick={() => {
                    // dispatch({
                    //     type:DAT_VE,
                    //     gheDuocChon: item
                    // })
                    const action = datGheAction(item, props.match.params.id);
                    dispatch(action)
                }} disabled={item.daDat || classGheKhachDat !== ''} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classgheDaDuocDat} text-center`} key={index}>
                    {item.daDat ? classgheDaDuocDat != ''  ? <UserOutlined /> : <CloseOutlined style={{ fontWeight: 'bold' }} /> : classGheKhachDat !== '' ? <SmileOutlined style={{ fontWeight: 'bold' }} /> : item.stt}

                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>

            // return <Fragment>
            //         {item.loaiGhe === 'Vip' ? <button className={`${style['ghe']} ${style['gheVip'] } ${style['gheDaDat']}`} key={index}>
            //     {item.stt}
            // </button> : <button className={`${style['ghe']}`} key={index}>
            //     {item.stt}
            // </button>}
            // {(index + 1) % 16 === 0 ? <br/> : ''} 
            // </Fragment>
        })
    }

    return (
        <div className=" min-h-screen mr-6">
            <div className="grid grid-cols-12">
                <div className="col-span-9">
                    <div className="flex flex-col items-center mt-5 ">
                        <div className="bg-black" style={{ width: '80%', height: 15 }} >

                        </div>
                        <div className={`${style['trapezoid']} text-center`}>
                            <h3 className="text-black mt-3">Màn Hình</h3>
                        </div>
                        <div>{renderSeats()}</div>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <table className="divide-y devive-gray-200 w-2/3" >
                            <thead className="bg-gray-50 p-5">
                                <tr>
                                    <th>Ghê chưa đặt</th>
                                    <th>Ghê đang đặt</th>
                                    <th>Ghê vip</th>
                                    <th>Ghê Đã Đặt</th>
                                    <th>Ghê đã được đặt</th>
                                    <th>Ghê khách đang đặt</th>
                                </tr>
                            </thead>
                            <tbody  className="bg-white divide-y devive-gray-200">
                                <tr>
                                    <td><button className="ghe text-center"><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                                    <td><button className="ghe gheDangDat text-center"><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                                    <td><button className="ghe gheVip text-center"><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                                    <td><button className="ghe gheDaDat text-center"><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                                    <td><button className="ghe gheDaDuocDat text-center"><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                                    <td><button className="ghe gheKhachDat text-center"><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-span-3 mt-6">
                    <h3 className="text-center text-2xl text-green-400">{danhSachGheDangDat.reduce((tongTien, ghe, i) => {
                        return tongTien += ghe.giaVe;
                    }, 0).toLocaleString()} đ</h3>
                    <hr />
                    <h3 className="text-xl"> {thongTinPhim?.tenPhim}</h3>
                    <p>Địa điểm: {thongTinPhim?.tenCumRap}</p>
                    <p>Ngày chiếu: {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</p>
                    <hr />
                    <div className="grid grid-cols-2 my-5">
                        <div className="w-4/5">
                            <span className="text-red-400 text-lg mr-2"> Ghế</span>
                            {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                                return <span key={index} className="text-green-400 mr-1 text-xl">
                                    {gheDD.stt}</span>
                            })}

                        </div>
                        <div className="text-right text-lg">
                            <span className="text-green-400 text-lg">
                                {danhSachGheDangDat.reduce((tongTien, ghe, i) => {
                                    return tongTien += ghe.giaVe;
                                }, 0).toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className="my-5">
                        <i>Email</i> <br />
                        {userLogin.email}
                    </div>
                    <hr />
                    <div className="my-5">
                        <i>SDT</i> <br />
                        {userLogin.soDT}
                    </div>
                    <hr />
                    <div className="mb-0 h-full flex flex-col items-center" style={{ marginBottom: 0 }}>
                        <div onClick={() => {
                            // const DatVes = new datVes();
                            // const arrDatVe = datVes
                            const thongTinDatVe = new ThongTinDatVe();
                            thongTinDatVe.maLichChieu = props.match.params.id;
                            thongTinDatVe.danhSachVe = danhSachGheDangDat;
                            // console.log(thongTinDatVe)
                            dispatch(datVeAction(thongTinDatVe));
                        }} className="bg-green-500 text-center cursor-pointer py-3 w-full rounded-lg font-bold text-2xl text-white">
                            ĐẶT VÉ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function callback(key) {
    console.log(key);
    
}

export default function DEMO(props) {
    const { tabActive } = useSelector(state => state.QuanLyDatVeReducer)
    
    const dispatch = useDispatch();
    console.log('tabActive',tabActive);
    
    const { userLogin} = useSelector(state => state.QuanLyNguoiDungReducer)

    React.useEffect(() => {
        return () => {
            dispatch({
                type:"CHANGE_TAB_ACTIVE",
                number:1,
            })
        }
    })
    
    const operations = <Fragment>
                {!_.isEmpty(userLogin) ? <Fragment><button 
                    onClick={() => {
                        history.push('/profile');
                    }}
                >Hello : {userLogin.taiKhoan} <div style={{width:50, height:50,display:'flex', justifyContent: 'center', alignItems: 'center'}} className="ml-5 rounded-full bg-yellow-300">{userLogin.taiKhoan.substr(0,1)}</div> </button> <button className="text-blue-500" onClick={() =>{
                    localStorage.removeItem(USER_LOGIN)
                    localStorage.removeItem(TOKEN)
                    history.push('/home');
                    window.location.reload();
                }}>Đăng Xuất</button></Fragment>: ""} 

        </Fragment>


    return <div>
        <Tabs tabBarExtraContent={operations}  defaultActiveKey="1" activeKey={tabActive.toString()} onChange={(callback) => { 
            console.log(callback);
            dispatch({
                type:"CHANGE_TAB_ACTIVE",
                number:callback.toString(),
            })
        }} type="card">
            <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1" >
                <Checkout  {...props} />
            </TabPane>
            <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
                <KetQuaDatVe {...props} />
            </TabPane>
            <TabPane tab={<NavLink to="/"><HomeOutlined /></NavLink>} key="3">
                
            </TabPane>
        </Tabs>
    </div>
}

function KetQuaDatVe(props) {

    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

    const dispatch = useDispatch();

    React.useEffect(() => {
        const action = layThongTinNguoiDungAction()
        dispatch(action)
    }, [])

    console.log('thongTinNguoiDung', thongTinNguoiDung)

    const renderItem = function () {
        return thongTinNguoiDung.thongTinDatVe?.map((tick, index) => {

            const seats = _.first(tick.danhSachGhe)
            // console.log(seats)

            return <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img src={tick.hinhAnh} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />
                    <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">{tick.tenPhim}</h2>
                        <p className="text-gray-500">Giờ Chiếu: {moment(tick.ngayDat).format('hh:mm A')}- Ngày Chiếu: {moment(tick.ngayDat).format('DD.MM.YYYY')}</p>
                        <p> Địa Điểm: {seats.tenHeThongRap}</p>
                        <p> Tên Rạp : {seats.tenCumRap} </p>
                        <p className="grid grid-cols-10 m-2">
                         Ghế: {tick.danhSachGhe.map((item, index)=>{
                            return <span key={index} className="ml-1">  {item.tenGhe}</span>
                        })}
                        </p>
                    </div>
                </div>
            </div>
        })
    }

    return <div className="p-5">
        {/* <h3>Kết quả đặt vé</h3> */}
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-900">Lịch sử đặt vé khách hàng</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hãy xem thông tin địa điểm và thời gian để xem phim vui vẻ nhé !!!!</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    {renderItem()}


                </div>
            </div>
        </section>
    </div>
}