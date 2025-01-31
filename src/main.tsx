import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { KindeProvider } from "@kinde-oss/kinde-auth-react"
import './index.css'
import App from './App'


const queryClient = new QueryClient();

const {VITE_KINDE_CLIENT_ID, VITE_KINDE_DOMAIN, VITE_KINDE_REDIRECT_URI, VITE_KINDE_LOGOUT_URI} = import.meta.env;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <KindeProvider
        clientId={VITE_KINDE_CLIENT_ID}
        domain={VITE_KINDE_DOMAIN}
        logoutUri={VITE_KINDE_LOGOUT_URI}
        redirectUri={VITE_KINDE_REDIRECT_URI}
      >
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </KindeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
