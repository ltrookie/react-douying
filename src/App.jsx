import { useState,Suspense } from 'react'
import './App.css'
import RoutesConfig from './routes/index'
// import Bottom from '@/components/Botton'
// import Header from './pages/Home/Header'


function App() {


  return (
    <div className="App">

       
      {/* <Header/> */}
      <Suspense fallback={<div>loading...</div>}>
        <RoutesConfig />
      </Suspense>
      {/* <Footer/> */}
      {/* <Bottom/> */}

       


    </div>
  )
}

export default App
