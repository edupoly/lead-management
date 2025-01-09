import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from './features/users/Login.jsx'
import Signup from './features/users/Signup.jsx'
import Dashboard from './Dashboard.jsx'
import Home from './Home.jsx'
import LeadBoard from './Leads/LeadBoard.jsx'
import NewLead from './Leads/NewLead.jsx'
import EditLead from './Leads/EditLead.jsx'
import LeadDetails from './Leads/LeadDetails.jsx'
import AddLeadRemarks from './Leads/AddLeadRemarks.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<Signup/>
        },
        {
          path:'/dashboard',
          element:<Dashboard/>,
          children:[
            {
              path:'/dashboard/',
              element:<LeadBoard/>
            },
            {
              path:'/dashboard/addlead',
              element:<NewLead/>
            },
            {
              path:'/dashboard/edit',
              element:<EditLead/>
            },
            {
              path:'/dashboard/leaddetails/:id',
              element:<LeadDetails/>
            },
            {
              path:'/dashboard/addremark/:id',
              element:<AddLeadRemarks/>
            }
          ]
        }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
