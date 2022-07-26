import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Login, HomeAccount, CreateAccount } from '../pages';
import { Layout } from "../containers/Layout"
import { AuthProvider } from '../context/authContext';



export const OrigenApp = () => {

  return (
    <AuthProvider>
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

            <Route
              path='/account'
              element = { <HomeAccount />}
            />

            <Route
              path='/create-account'
              element = { <CreateAccount />}
            />

          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  )
}

