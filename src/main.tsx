import ReactDOM from 'react-dom/client'
import { createBrowserRouter,  } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import App from './App'
import Home from './Pages/Home'
const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]);

const root = document.getElementById("root")!

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);