import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ProjectsPage from './pages/ProjectsPage.jsx';
import TechnologiesPage from './pages/TechnologiesPage.jsx';
import { GlobalProvider } from './GlobalContext.jsx'; // Importa il tuo GlobalProvider

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <GlobalProvider> 
        <App />
      </GlobalProvider>
    )
  },
  {
    path: '/projects',
    element: (
      <GlobalProvider> 
        <ProjectsPage />
      </GlobalProvider>
    )
  },
  {
    path: '/technologies',
    element: (
      <GlobalProvider> 
        <TechnologiesPage />
      </GlobalProvider>
    )
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
