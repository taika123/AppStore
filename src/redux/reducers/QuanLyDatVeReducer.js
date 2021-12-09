import { CHUYEN_TAB, DAT_VE, DAT_VE_CLEAR, SET_QUAN_LY_DAT_VE } from "../actions/types/QuanLyDatVeType";


const stateDefault = {
    chiTietPhongVe: {},
    danhSachGheDangDat: [],//danh sách ghế đang đặt
    danhSachGheKhachDat: [{maGhe:48041},{maGhe:48042}],
    tabActive: 1,
    
}

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_QUAN_LY_DAT_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe;
            return { ...state }
        }
        case DAT_VE:{
            // console.log(action)
            // return { ...state}
            //cập nhật danh sách ghê đang đặt

            let danhSachGheUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheUpdate.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe);
            if(index != -1){
                //nếu tìm thấy ghế được chọn trong mảng có nghĩa là trước đó đã click rồi => xóa đi
                danhSachGheUpdate.splice(index, 1)
            }
            else{
                danhSachGheUpdate.push(action.gheDuocChon)
            }
            return {...state, danhSachGheDangDat:danhSachGheUpdate}
            
        }
        case DAT_VE_CLEAR:{
            state.danhSachGheDangDat = [];
            return {...state}
        }

        case CHUYEN_TAB:{
            state.tabActive = 2;
            return {...state}
        }

        case 'CHANGE_TAB_ACTIVE':{
            state.tabActive = action.number;
            return {...state}
        }
        case 'DAT_GHE':{
            state.danhSachGheKhachDat = action.arrGheKhachDat;
            return {...state}
        }

        default: return { ...state }
    }
}