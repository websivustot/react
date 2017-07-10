import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SiteLayout from './app/layouts/SiteLayout';

let siteData = {
  logo: 'logo.png',
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
    },
  ],
  content: [
    {
      id: 1,
      text: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.'
    }
  ]
};

const app = document.getElementById('app');
//console.log(siteData);
ReactDOM.render(
    <SiteLayout site={siteData} />, app);
