import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Errorpage from './components/Errorpage';
import About from './routes/About';
import Resturent from './routes/Resturent';
import Login from './routes/Login';
import Home from './routes/Home';
import Body from './components/Body';
import Orderpage from './components/Orderpage';
import Resturentpage from './components/Resturentpage';
import { lazy,Suspense} from 'react';//lazy and suspence 
import UsercontextProvider from './components/context/usercontextprovider';
import Profile from "./components/context/profile"
import Pogin from "./components/context/login";
const Grocery=lazy(()=>import("./components/Grocery"));//instead of importing this component in regular methos use the lazy loading technique .it will inccreace the perfrormance of the code 



const Apoutlet = () => {
  return (


 <>
 <UsercontextProvider>
   <Header />
      <Outlet />

      <Footer />
 </UsercontextProvider>
 </>
    
  
  );
}

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Apoutlet />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/resturent",
        element: <Resturent />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path:"/resturent/:resid",
        element:<Resturentpage/>
      },
      {
        path:"/grocery",
        element:(
          <Suspense fallback={<h1>Loading Grocery page...</h1>}>
            <Grocery />
          </Suspense>
        )
      }
      ,
    {
      path:"/orderpage",
      element:<Orderpage/>
    }
    ]
  }
]);

function App() {
  return <RouterProvider router={approuter} />;
}

export default App;
