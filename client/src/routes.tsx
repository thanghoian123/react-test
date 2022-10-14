
import * as React from 'react';
import Home from './components/Home';

const routes = [
  {
    path: '/',
    exact: true,
    C: ()=>(<h1>Hello world</h1>),
  },
  {
    path: '/home',
    exact: true,
    C: ()=>(<Home/>),
  }
];

export default routes;
