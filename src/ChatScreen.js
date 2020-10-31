import React, { useState }from "react";
import "./ChatScreen.css"
import { Avatar } from "@material-ui/core";

function ChatScreen() {
   const [input, setInput] = useState('');
   const [messages, setMessages] = useState([
       {
           name: "salman",
           image:"https://static.toiimg.com/photo/63341881.cms",
           message:"whats up ",
        },
        {
            name: "salman",
            image:"https://static.toiimg.com/photo/63341881.cms",
            message:"are you going ok",
         },
         {
           
            message:"hey! hi salman how are you?",
         },
        
   ])
   const handleSend = (e) => {
       e.preventDefault();
       setMessages([...messages, { message: input }]);
       setInput("");

   };

    return(
       <div className="chatscreen">
           <p className="chatScreen__timestamp">You matched with salman</p>
           {messages.map((message)=>(
               message.name ? (
                <div className="chatScreen__message">
                    <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    />    
                    <p className="chatScreen__text">{message.message}</p>
              </div>
               ) :( 
                <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
               </div>
               )
            ))}

           <div className="chatScreen__input">
               <form>
                   <input
                   value={input}
                   onChange={e => setInput(e.target.value)} 
                   className="chatScreen__inputfield"
                       placeholder="Type a message"
                       type="text "
                    />
                   <button onClick={handleSend}  type="submit" className= "chatScreen__inputbutton">Send</button>
               </form>
           </div>

       </div>

    )

}

export default ChatScreen;
