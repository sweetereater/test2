import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// components 
import Header from './Components/Header/Header';
import MainPage from './Components/Main/MainPage';
import Service from './Components/Service/Service';

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route path="/:id/details">
          <Service />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
