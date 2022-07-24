import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "../containers/Layout"

import { Home, Login } from '../pages';


export const OrigenApp = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path='/'
            element = { <Home /> }
          />

          <Route
            path='/login'
            element = { <Login />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

