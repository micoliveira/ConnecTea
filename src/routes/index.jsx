import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout } from '../components/layout/DefaultLayout';
import { Home } from '../components/pages/Home';
import { Login } from '../components/pages/Login';
import { Cadastro } from '../components/pages/Cadastro';
import { PoliticaPrivacidade } from '../components/pages/Politicas';
import { TermosDeUso } from '../components/pages/Politicas/TermosDeUso';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />, // O Layout envolve todas as rotas filhas
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/cadastro',
        element: <Cadastro />,
      },
      { path: '/politica-privacidade',
        element: <PoliticaPrivacidade /> 
      },
      { path: '/termos-de-uso', 
        element: <TermosDeUso /> }
    ],
  },
]);