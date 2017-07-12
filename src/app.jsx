import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SiteLayout from './app/layouts/SiteLayout';

let siteData = {
  logo: 'SiteLogo',
  menu: [
    {
      id: 1,
      title: 'Main Page',
      uri: 'index.html'
    },
    {
      id: 2,
      title: 'Company',
      uri: 'company.html'
    },
    {
      id: 3,
      title: 'Contacts',
      uri: 'contact.html'
    }
  ],
    sideMenu: [
      {
        id: 1,
        title: 'Elements',
        uri: 'elements.html'
      },
      {
        id: 2,
        title: 'Console',
        uri: 'console.html'
      },
      {
        id: 3,
        title: 'Sources',
        uri: 'sources.html'
      },
      {
        id: 3,
        title: 'Network',
        uri: 'network.html'
      },
      {
        id: 3,
        title: 'Performance',
        uri: 'performance.html'
      }
    ],
  content: [
    {
      id: 1,
      title: 'React makes it painless to create interactive', 
      text: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.'
    }
  ]
};

const app = document.getElementById('app');
//console.log(siteData);
ReactDOM.render(
    <SiteLayout site={siteData} />, app);
