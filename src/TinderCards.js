import React, { useState, useEffect } from 'react';
import database from "./firebase";
import TinderCard from "react-tinder-card";
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([ ]);
        /*{
            name: 'steve jobs',
            url: 'https://i.pinimg.com/originals/f7/c2/25/f7c22513e41733de5754babe37329002.jpg',
        },
        {
            name: 'mark zukerberg',
            url: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/09/09/11/markzuckerberg.jpg?w968',
        },*/
   

    //Piece of code that runs a the condition 
    useEffect(() => {
        //it will runs the code
       //this will run once the component isloaded,and never show it again

       database
       .collection("people")
       .onSnapshot(snapshot => (
           setPeople(snapshot.docs.map(doc=>doc.data()))
       ))
    }, []);
    return (
        <div>
            
            <div className= "tinderCards_cardContainer">
                { people.map(person => (
                  <TinderCard
                         className="swipe"
                         key={person.name}
                         preventSwipe={['up','down']}
                    >
                        <div 
                            style={{ backgroundImage: `url(${person.url})`}}   
                            className ="card"
                        >
                             <h3>{ person.name}</h3>
                        </div>
                  </TinderCard>
                ))}
            </div>
            

        </div>
    );
}

export default TinderCards;




