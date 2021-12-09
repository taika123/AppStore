// import { GROUPID } from "../util/settings/config";
// import { TOKEN_CYBERSOFT } from "../util/settings/config";
import { DOMAIN } from "../util/settings/config";
import { ThongTinDatVe } from "../_core/model/ThongTinDatVe";
import { baseService } from "./baseService";

export class QuanLyDatVeService extends baseService {
    constructor() {
        super();
    }
    // layChiTietPhongVe = (maLichChieu) => {
    //     return this.post(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu`, maLichChieu)
    // }

    datVe = (thongTinDatVe = new ThongTinDatVe()) => {
        return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe)
    }
}

export const quanLyDatVeService = new QuanLyDatVeService();