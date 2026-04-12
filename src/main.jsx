//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { createRoot } from 'react-router-dom/client'
import './index.css'
//import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { CookiesProvider } from 'react-cookie';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TodoIndex} from './to-do/todo-index.jsx';
import { Provider } from 'react-redux';
import store from './store/store.jsx';


createRoot(document.getElementById('root')).render(
  <CookiesProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}> 
     <Provider store={store}>
       <TodoIndex />
     </Provider>
    </LocalizationProvider>
  </CookiesProvider>
);
 