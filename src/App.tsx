import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './component/BrowserRouter';


function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
