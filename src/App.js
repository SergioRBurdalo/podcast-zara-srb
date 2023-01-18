import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Router } from './router';
import { LoadingProvider } from "./app/context/LoadingContext";
import { Header } from './app/header/header';
import { fetchData } from './app/services/services'



function App() {
  
  const [podcasts, setPodcasts] = useState();
  const baseURL='https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    fetchData({isLoading, baseURL, setPodcasts});    
  }, []);

  return (
  <LoadingProvider>
    <Header loading={loading}/>
    <Router isLoading={isLoading} jsonData={podcasts}/>
  </LoadingProvider>
  );
}

export default App;
