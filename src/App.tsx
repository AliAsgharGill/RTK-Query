import { Outlet, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Read from './components/Read'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Header from './components/Header'
import Create from './components/AddEdit'
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Read />
      },
      {
        path: "/add",
        element: <Create />
      }
    ]
  },

])
function App() {

  return (
    <>
      <Provider store={store} >
        <Header />
        <Outlet />
      </Provider>
    </>
  )
}

export default App
