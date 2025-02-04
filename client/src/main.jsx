import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(  // สร้าง root และแสดงผลลัพธ์ใน element ที่มี id="root"
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // แสดงผลลัพธ์ใน element ที่มี id="root"
)
