import React from 'react';
import './styles/App.css';
import { ToastContainer, toast } from 'react-toastify';

import Header from './components/Header';
import Donation from './components/Donation'
import Posts from './components/Posts';
import Introduction from './components/Introduction';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="main container-fluid gx-0 mx-0 px-0">
      <ToastContainer />
      <Header />
      <Introduction />
      <Donation />
      <Posts />
    </div>
  );
}

export default App;
