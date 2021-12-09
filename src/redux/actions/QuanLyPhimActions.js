// import axios from "axios";
import { quanLyPhimService } from "../../services/QuanLyPhimService";
// import { DOMAIN } from "../../util/settings/config";
import { SET_DANH_SACH_PHIM } from "./types/QuanLyPhimType";


export const  layDanhSachPhimAction = () => {
    return async(dispatch) => {
        try{
            // const result = await axios({
            //     url:`${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim`,
            //     method:'GET',
            //     headers:{
            //         TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjciLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDc3MzQ0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0Nzg4MjAwMH0.adTs_7mDpRC34Pwdsgpu-EUnD_gW9Z8REnUnl05QysA',
            //     }
            // });

            //sử dụng tham số
            const result = await quanLyPhimService.layDanhSachPhim();

            // console.log(result);
            
            // sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrPhim: result.data.content,
            })

        }catch(err) {
            console.log('err',err);
            
        }
    }
}