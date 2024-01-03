import ReactDOM from 'react-dom/client'
import { router } from './App.tsx'
import './index.css'
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(

  <RouterProvider router={router} />
);
