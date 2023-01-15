import './App.css';
import { Router } from './router';
import { LoadingProvider } from "./app/context/LoadingContext";
import { Header } from './app/header/header';



function App() {
  return (
  <LoadingProvider>
    <Header/>
    <Router />
  </LoadingProvider>
  );
}

export default App;
