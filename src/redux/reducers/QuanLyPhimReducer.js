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
}

export const QuanLyPhimReducer = (state= stateDefault, action) => {
    switch (action.type) {


        default: return {...state}
    }
}