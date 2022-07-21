import { useState,Suspense,memo} from 'react'
import './App.css'
import RoutesConfig from './routes/index'

function App() {
  return (
    <div className="App">

       
     
      <Suspense fallback={<div>loading...</div>}>
        <RoutesConfig />
      </Suspense>


    </div>
  )
}
export default memo(App)
