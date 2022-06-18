import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/main.scss';
import './assets/styles/aboutUs.scss';
import './assets/styles/my-resume.scss';
import './assets/styles/font-icons.scss';
import './assets/styles/add-company.scss';
import './assets/styles/profile-company.scss';
import './assets/styles/media.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components/postJop/post.scss";
import "./components/talants/talants.scss";
import './assets/styles/profile-cv.scss';
import './assets/styles/edit-password.scss';
import './assets/styles/for-chat.scss';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from './store/store';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


