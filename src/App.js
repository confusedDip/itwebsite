import React, {Suspense} from 'react';
import './App.css';
//import Loadable from 'react-loadable'; 
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import Loading from './components/LoadingComponent';

// const LoadableMain = Loadable({
//   loader: () => import('./components/MainComponent'),
//   loading: () => <div>Loading ...</div>
// });

function App() {

  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={<Loading/>}>
          <Main />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
