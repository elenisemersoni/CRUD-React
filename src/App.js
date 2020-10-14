import React from 'react';
import {Link, Route} from 'react-router-dom';
import routesConfig from './routesConfig';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link className='=px-2' to='/'>Home</Link>
          <Link className='px-2' to='/user'>User</Link>
          <Link className='px-2' to='/login'>Login</Link>
        </nav>
      </header>
      {routesConfig.map(
        (value, key) => {
          return <Route 
          key={key} 
          path={value.path} 
          component={value.component} 
          exact={value.exact}
          ></Route>
        }
      )}
    </div>
  );
}


export default App;
