import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/user.context.jsx'
import App from './App.jsx'
import './index.scss'
import { ShopProvider } from './contexts/shop.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ShopProvider>
          <App />
        </ShopProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
