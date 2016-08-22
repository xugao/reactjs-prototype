import React from 'react';
import ReactDOM from 'react-dom';
import { autorun } from 'mobx';
import Gleam from './Gleam';
import './index.css';
import GleamState from './GleamState';

autorun(() => {
  ReactDOM.render(
    <Gleam store={GleamState}/>,
    document.getElementById('root'));
});
