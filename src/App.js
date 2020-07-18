import React from 'react';
import './App.css';
import Loadable from 'react-loadable'; 
import {BrowserRouter} from 'react-router-dom';

const LoadableMain = Loadable({
  loader: () => import('./components/MainComponent'),
  loading: () => <div>Loading ...</div>
});

function App() {

  return (
    <BrowserRouter>
      <div>
          <LoadableMain />
      </div>
    </BrowserRouter>
  );
}

export default App;
