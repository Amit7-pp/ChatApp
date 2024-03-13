import React from 'react'
// import Messeges from '../components/Messeges';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

export const Home = () => {
  return (
    <div className='home'> 
      <div className='container'>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}
export default Home;
