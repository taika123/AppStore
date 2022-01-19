import axios from 'axios';
import { DOMAIN, TOKEN_CYBERSOFT } from '../../util/settings/config';
// import { quanLyNguoiDung } from '../../services/QuanLyNguoiDung';

import { history } from '../../App'
import { DANG_NHAP_TYPE, SET_THONG_TIN_NGUOI_DUNG } from './types/DangNhapType';
import { quanLyNguoiDungService } from '../../services/QuanLyNguoiDungService';
// import { request } from '../../api/request';
// import { createAction } from '.';
// import { actionType } from './types/type';

export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            // console.log(DOMAIN)
            // // var UrlBaseLogin = DOMAIN + "/api/QuanLyNguoiDung/DangNhap"
            // const result = await axios({
            //     url: `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
            //     // url: UrlBaseLogin,
            //     method: 'POST',
            //     headers: {
            //         TokenCybersoft: TOKEN_CYBERSOFT,
            //     },
            //     data: {
            //         taiKhoan: thongDangNhap.taiKhoan,
            //         matKhau: thongDangNhap.matKhau
            //     }
            // });

            const result = await quanLyNguoiDungService.layThongTinDangNhap(thongTinDangNhap)
            console.log('quanlydangnhap', result.data);
            
            // sau khi lấy dữ liệu từ api về => redux (reducer)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_TYPE,
                    thongTinDangNhap: result.data.content,
                })
            }
            //chuyển hướng đăng nhập về trang trước đó
            history.push('/home')

        } catch (err) {
            console.error('error', err.response.data)
        }
    }
}


export const layThongTinNguoiDungAction = (thongDangNhap) => {
    return async (dispatch) => {
        try {
            // console.log(DOMAIN)
            // var UrlBaseLogin = DOMAIN + "/api/QuanLyNguoiDung/DangNhap"
            // const result = await axios({
            //     url: `${DOMAIN}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
            //     // url: UrlBaseLogin,
            //     method: 'POST',
            //     headers: {
            //         TokenCybersoft: TOKEN_CYBERSOFT,
            //     },
            //     data: {
            //         taiKhoan: thongDangNhap.taiKhoan,
            //         matKhau: thongDangNhap.matKhau
            //     }
            // });
            const result = await quanLyNguoiDungService.layThongTinNguoiDungAction()
            console.log('quanlydangnhap', result.data);
            // sau khi lấy dữ liệu từ api về => redux (reducer)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content,
                })
            }

        } catch (err) {
            console.error('error', err.response?.data)
        }
    }
}


export const dangKy = (postRequest) => {
    return async(dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangKy(postRequest)
            console.log('dangKy',result);

            // if (result.data.statusCode === 200) {
            //     dispatch({
            //         type: DANG_KY_TYPE,
            //         dangKy: result.data.content,
            //     })
            // }
             //chuyển hướng đăng nhập về trang trước đó
             history.push('/login')
        }catch (err) {
            console.error('error', err.response.data)
        }
    }
}







 // return (dispatch) => {
            //     request ({
            //         method:'POST',
            //         url:`${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
            //         params:{
            //             headers:{
            //                 TokenCybersoft: TOKEN_CYBERSOFT,
            //             }
            //         },

            //         data: userLogin,
            //     })
            //     .then (res => {
            //         console.log('res',res.data);
            //         dispatch(createAction(actionType.SET_ME, res.data))
            //         localStorage.setItem('a', res.data.accessToken);
            //         callback();
            //     })
            //     //chuyển hướng đăng nhập về trang trước đó
            //     //  history.goBack()
            //     .catch (err => {
            //         console.log({...err}, err.response.data)
            //         alert(err.response.data)
            //     })
            // }