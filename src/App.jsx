
import Layout from './Layout/Layout';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
 const x = createBrowserRouter([
    {
      path : "",
      element : <Layout/>,children:[
        {
          index : true,
          element : <Home/>
        },
        {
          path : "about",
          element : <About/>
        },
        {
          path : "portfolio",
          element : <Portfolio/>
        },
        {
          path : "contact",
          element : <Contact/>
        },
        {
          path : "*",
          element : <NotFound/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider
      router={x}/>
    </>
  )
}

export default App
