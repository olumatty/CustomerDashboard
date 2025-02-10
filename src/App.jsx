import React from 'react'
import Sidebar from './scenes/global/sidebar'
import Header from './scenes/global/Header'
import Dashboard from './scenes/Dashboard/Index'

const App = () => {
  return (
    <div>
      <div className='app'>
        <Sidebar/>
        <div className='Content ml-16 md:ml-28 lg:ml-60 w-full '>
          <Header/>
          <Dashboard/>
        </div>
      </div>
    </div>
  )
}

export default App
