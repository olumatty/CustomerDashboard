import React from 'react'
import Sidebar from './scenes/global/sidebar'
import Header from './scenes/global/Header'
import Dashboard from './scenes/Dashboard/Index'

const App = () => {
  return (
    <div>
      <div className='app'>
        <Sidebar/>
        <div className='Content'>
          <Header/>
          <Dashboard/>
        </div>
      </div>
    </div>
  )
}

export default App
