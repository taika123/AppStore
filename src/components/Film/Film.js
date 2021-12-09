import React from 'react'
export default function Film(props) {

    const { phim } = props

    return (
        
        <div class="mr-2 h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <div style={{background:`url(${phim.hinhAnh}) no-repeat ,url(https://picsum.photos/1000/200)`, backgroundPosition:"center", backgroundSize:"couver"}}>
                 <img src={phim.hinhAnh} alt={phim.hinhAnh} className="opacity-0 w-full" style={{height: "250px"}}/>
            </div>
            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 h-16">{phim.tenPhim.length > 30 ? <span>{phim.tenPhim.slice(0,30)} ...</span> : <span>{phim.tenPhim}</span>}</h1>
            <p class="leading-relaxed mb-3 h-16">{phim.moTa.length > 80 ? <span>{phim.moTa.slice(0,80)} ...</span> : <span>{phim.moTa}</span>}</p>
            <a class="text-indigo-500 inline-flex items-center">Đặt vé
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
        
    )
}
