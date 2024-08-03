import React from 'react';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Head from './components/Head';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import store from './utils/store';

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  // Children will go to where my Body actually is.
  children:[
    {
      path:"/",
      element: <MainContainer/>
    },
    {
      path:"watch",
      element: <WatchPage/>
    }
  ]
}]);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}/>
        <Body />
      </div>
    </Provider>
  );
}

export default App;