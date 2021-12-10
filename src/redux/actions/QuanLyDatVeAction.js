import axios from "axios";
import { connecttion } from "../..";
import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { DOMAIN, TOKEN_CYBERSOFT } from "../../util/settings/config";
import { ThongTinDatVe } from "../../_core/model/ThongTinDatVe";
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";
import { SET_QUAN_LY_DAT_VE } from "./types/QuanLyDatVeType";
// import { TOKEN } from "../../util/settings/config"
import {DAT_VE_CLEAR } from './types/QuanLyDatVeType'
import {CHUYEN_TAB} from './types/QuanLyDatVeType'
import {DAT_VE} from './types/QuanLyDatVeType'
export const layChiTietPhongVeAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET',
                headers: {
                    TokenCybersoft: TOKEN_CYBERSOFT,
                }
            });

            // console.log('datve', result.data);

            // sau khi lấy dữ liệu từ api về => redux (reducer)

            // const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu)

            dispatch({
                type: SET_QUAN_LY_DAT_VE,
                chiTietPhongVe: result.data.content,
            })


        }
        catch (err) {
            console.error(err.response.data);
        }
    }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async dispatch => {
        try {
            dispatch(displayLoadingAction)
            // const result = await axios({
            //     url: `${DOMAIN}/api/QuanLyDatVe/DatVe`,thongTinDatVe,
            //     method: 'POST',
            //     headers: {
            //         TokenCybersoft: TOKEN_CYBERSOFT,
            //         Authorization: 'Bearer ' + localStorage.getItem(TOKEN) 
            //     },

            //     // data: {
            //     //     thongTinDatVe
            //     // },
            // });
            const result = await quanLyDatVeService.datVe(thongTinDatVe)
            console.log('datves', result.data);
            //đặt vé thành công gọi api load lại phòng vé
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            
            //clear vé đang đặt để chuyển tab
            await dispatch({
                type: DAT_VE_CLEAR,
            })

           await dispatch(hideLoadingAction)

           dispatch({
               type: CHUYEN_TAB
           })

        } catch (err) {
            console.error(err.response?.data)
            dispatch(hideLoadingAction)
        }
    }
}

export const datGheAction = (item, maLichChieu) => {

    return async (dispatch, getState) => {
        //đưa thông tin ghế lên reducer
        await dispatch({
            type: DAT_VE,
            gheDuocChon: item
        })

        //call api về backend
        let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat
        let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan

        console.log('danhSachGheDangDat',danhSachGheDangDat);
        console.log('taiKhoan',taiKhoan);
        console.log('maLichChieu',maLichChieu);

        //biến mảng thành chuỗi
        danhSachGheDangDat = JSON.stringify(danhSachGheDangDat)

        //call signalR
        // connecttion.invoke('datGhe', taiKhoan,danhSachGheDangDat, maLichChieu)
    }
}