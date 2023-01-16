import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Router } from './router';
import { LoadingProvider } from "./app/context/LoadingContext";
import { Header } from './app/header/header';



function App() {
  const [podcasts, setPodcasts] = useState();
  const baseURL='https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(baseURL).then((response) => {
      setLoading(false);
      setPodcasts(response.data.feed.entry);
    });
    
  }, []);

  return (
  <LoadingProvider>
    <Header loading={loading}/>
    <Router jsonData={podcasts}/>
  </LoadingProvider>
  );
}

export default App;
