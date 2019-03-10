import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';

/* 
import Home from './home/home';
import Portfolio from './portfolio/portfolio';
import OSS from './open-source/open-source';
import Misc from './misc/misc'; */
import Bar from './bar';
import './index.scss';


const mountNode = document.getElementById('root');

ReactDOM.render(<Bar />, mountNode);