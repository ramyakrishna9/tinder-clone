import React from 'react';
import "./Chats.css";
import Chat from "./Chat"

function Chats() {
    return(
        <div className="Chats">
            <Chat
            name="priyanka chopra"
            message="hi how are you"
            timestamp="40mins ago"
            profiePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqcmEYQOjQv31Drtki2VkfgMZwKYlNupRBOQ&usqp=CAU"
            />
              <Chat
            name="salman khan"
            message="hi how are you"
            timestamp="50mins ago"
            profiePic="https://static.toiimg.com/photo/63341881.cms"
            />
              <Chat
            name="rakul"
            message="hi how are you"
            timestamp="2hrs ago"
            profiePic="https://images.ganeshaspeaks.com/OtherImages/Rakul-750-min.jpg"
            />

        </div>
    )

}

export default Chats;