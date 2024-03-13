import React, { useContext } from "react";
import Cam from '../img/cam.png'
import MORE from '../img/more.png'
// import info from '../img/info.svg'
import Messeges from './Messeges'
import Input from './Input'
import { ChatContext } from "../Context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className="chatInfo">
      <span>{data.user?.displayName}</span>
        <div className="chatIcon">
          <img src={Cam} alt=""  />
          <img src={MORE} alt=""  />
          {/* <img src={info} alt="" /> */}
        </div>
       
      </div>
      <Messeges/>
      <Input/>
    </div>
  )
}

export default Chat