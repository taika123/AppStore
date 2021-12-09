import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {store} from './redux/configStore'
//ant design
import 'antd/dist/antd.css';
import './index.css';
//slick react
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {DOMAIN } from "./util/settings/config"

//cấu hình realtime (websocket với signalR)
import * as signalR from "@aspnet/signalr"

//kết nối đến serve lắng nghe sự kiện từ serve = websocket
export const connecttion = new signalR.HubConnectionBuilder().withUrl(`${DOMAIN}/DatVeHub`).configureLogging(signalR.LogLevel.Information).build();

connecttion.start().then(function() {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}).catch(error => {
  console.log(error);
})
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//         <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
