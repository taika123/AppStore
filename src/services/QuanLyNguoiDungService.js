// import { GROUPID } from "../util/settings/config";
// import { TOKEN_CYBERSOFT } from "../util/settings/config";
import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
    constructor() {
        super();

    }

    layThongTinDangNhap = (thongTinDangNhap) => { //taiKhoan: '', matKhau: ''
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);   
    }
    
    layThongTinNguoiDungAction = () => { 
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
        );   
    }

    dangKy = (postRequest) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, postRequest);
    }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();