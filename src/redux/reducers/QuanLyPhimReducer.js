import { SET_DANH_SACH_PHIM, SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../actions/types/QuanLyPhimType"
import { SET_CHI_TIET_PHIM } from "../actions/types/QuanLyRapType"

const stateDefault= {
    arrPhim: [
        {
            "maPhim": 1212,
            "tenPhim":"The Anverage",
            "biDanh": "",
            "trailer": "",
            "hinhAnh": "",
            "moTa": "",
            "maNhom": "GP00",
            "ngayKhoiChieu": "",
            "danhGia":5,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true,
        },
        {
            "maPhim": 1212,
            "tenPhim":"The Anverage",
            "biDanh": "",
            "trailer": "",
            "hinhAnh": "",
            "moTa": "",
            "maNhom": "GP00",
            "ngayKhoiChieu": "",
            "danhGia":5,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true,
        }
    ],
    dangChieu:true,
    sapChieu:true,
    arrFilmDefault: [],
    filmDetail: {}
}

export const QuanLyPhimReducer = (state= stateDefault, action) => {
    switch (action.type) {

        case SET_DANH_SACH_PHIM:{
            state.arrPhim = action.arrPhim
            state.arrFilmDefault = state.arrPhim
            return {...state}
        }

        case SET_PHIM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu

            state.arrPhim = state.arrFilmDefault.filter(film =>film.dangChieu === state.dangChieu)
            return {...state}
        }

        case SET_PHIM_SAP_CHIEU:{
            state.sapChieu = !state.sapChieu

            state.arrPhim = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu)
            return {...state}
        }

        case SET_CHI_TIET_PHIM: {
            state.filmDetail = action.filmDetail
            // console.log(action.filmDetail)
            return {...state}
        }
        default: return {...state}
    }
}