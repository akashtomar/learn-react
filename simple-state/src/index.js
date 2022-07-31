import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clock from './components/Clock';
import ToggleButton from './components/Toggle';
import LoginControl from './components/LoginControl';
import SampleList from './components/NumberList';
import NameForm from './components/NameForm';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock />
    <ToggleButton />
    <LoginControl />
    <SampleList />
    <NameForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
