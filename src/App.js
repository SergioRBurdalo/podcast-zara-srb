import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Router } from './router';
import { LoadingProvider } from "./app/context/LoadingContext";
import { Header } from './app/header/header';



function App() {
  const [podcasts, setPodcasts] = useState();
  const [count, setCount] = useState(0);
  const baseURL='https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPodcasts(response.data.feed.entry);
      console.log('AAAAAAAAAAA',response.data.feed.entry)
    });
  }, []);

  return (
  <LoadingProvider>
    <Header/>
    <Router jsonData={podcasts}/>
  </LoadingProvider>
  );
}

export default App;
