
import * as React from 'react';
import Home from './views/Home';

import History from './views/History';

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
  },
  {
    path: '/history',
    exact: true,
    C: ()=>(<History/>),
  }
];

export default routes;
