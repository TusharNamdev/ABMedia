import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ Only this App declaration
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css'; // Tailwind base

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> {/* ✅ Only use App once here */}
    </Provider>
  </React.StrictMode>
);





