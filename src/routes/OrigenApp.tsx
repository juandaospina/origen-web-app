import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Login, HomeAccount, CreateAccount } from '../pages';
import { Layout } from "../containers/Layout"
import { AuthProvider } from '../context/authContext';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { RecyclingRequestForm } from '../pages/RecyclingRequestForm';



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
              element = { 
                <ProtectedRoute>
                  <HomeAccount />
                </ProtectedRoute>
              }
            />

            <Route
              path='/create-account'
              element = { <CreateAccount />}
            />

            <Route
              path='/recoleccion'
              element = { <RecyclingRequestForm />}
            />

          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  )
}

