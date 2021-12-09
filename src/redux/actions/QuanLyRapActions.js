import axios from 'axios';
// import { quanLyRapService } from '../../services/QuanLyRapService'
import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from './types/QuanLyRapType'
import { DOMAIN, GROUPID, TOKEN_CYBERSOFT } from '../../util/settings/config';

export const layDanhSachHeThongRapAction = () => {
    // console.log('ád')
        return async(dispatch) => {
            try{
                const result = await axios({
                    url:`${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`,
                    method:'GET',
                    headers:{
                        TokenCybersoft: TOKEN_CYBERSOFT,
                    }
                });
    
                //sử dụng tham số
                // const result = await quanLyPhimService.layDanhSachPhim();
    
                // console.log('htr',result.data);
                
                // sau khi lấy dữ liệu từ api về => redux (reducer)
                dispatch({
                    type: SET_HE_THONG_RAP_CHIEU,
                    heThongRapChieu: result.data.content,
                })
    
            }catch(err) {
                console.log('err',err);
                
            }
        }
}


export const layThongTinChiTietPhim = (id) => {
    return async(dispatch) => {
        try{
            const result = await axios({
                url:`${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
                method:'GET',
                headers:{
                    TokenCybersoft: TOKEN_CYBERSOFT,
                }
            });

            //sử dụng tham số
            // const result = await quanLyPhimService.layDanhSachPhim();

            // console.log('layThongTinChiTietPhim',result.data);
            //lấy dữ liệu từ api về => reducer
            dispatch({
                type: SET_CHI_TIET_PHIM,
                filmDetail: result.data.content,
            })
        }
        catch(err){
            console.log('err',err.response?.data)
        }
    }
}