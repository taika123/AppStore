import { TOKEN, USER_LOGIN } from '../../util/settings/config'
import { DANG_NHAP_TYPE, SET_THONG_TIN_NGUOI_DUNG } from '../actions/types/DangNhapType'

let user = {};

if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const stateDefault = {
    userLogin: user,

    thongTinNguoiDung: {}
    
}
console.log(user)

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case DANG_NHAP_TYPE: {
            const { thongTinDangNhap } = action
            // console.log('thongTinDangNhap',action)
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap))
            localStorage.setItem(TOKEN, thongTinDangNhap.accessToken)

            return { ...state, userLogin: thongTinDangNhap }
        }

        case SET_THONG_TIN_NGUOI_DUNG:{
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            // console.log('thongtinnguoidungg',action)
            return { ...state}
        }

        default: return { ...state }
    }
}
