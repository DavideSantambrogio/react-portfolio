import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ProjectsPage from './pages/ProjectsPage.jsx';
import { GlobalProvider } from './GlobalProvider'; // Importa il tuo GlobalProvider

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <GlobalProvider> {/* Avvolgi l'App con GlobalProvider */}
        <App />
      </GlobalProvider>
    )
  },
  {
    path: '/projects',
    element: (
      <GlobalProvider> {/* Avvolgi ProjectsPage con GlobalProvider */}
        <ProjectsPage />
      </GlobalProvider>
    )
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
