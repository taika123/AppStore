import { SET_CAROUSEL } from "../actions/types/CarouselType"


const stateDefault = {
    arrImg:[
        {
            "maBanner": 1,
            "maPhim": 1252,
            "hinhAnh":"https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png"
        }
    ]
}


export const CarouselReducer = (state = stateDefault, action) =>{
    switch (action.type) {
        
        case SET_CAROUSEL:{
            state.arrImg = action.arrImg
            return {...state}
        }
        default: return {...state}
    }
}