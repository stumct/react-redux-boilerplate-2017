import React from 'react';
import Home from '../Components/Home';
import About from '../Components/About';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about/test',
        component: About,
      },
    ],
  },
];

export default routes;
