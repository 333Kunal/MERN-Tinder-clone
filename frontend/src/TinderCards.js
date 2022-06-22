import { SwipeDown } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "./axios";

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
      async function fetchData(){
        const req = await axios.get("/tinder/card");

        setPeople(req.data);
      }

      fetchData();
    }, [])
      // {
      //   name: "Elon musk",
      //   URL: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/330px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
      // },
      // {
      //   name: "Jeff Bezos",
      //   URL: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/330px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg",
      // },
      // {
      //   name: "Conor McGregor",
      //   URL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Conor_McGregor_2018.jpg/330px-Conor_McGregor_2018.jpg",
      // },
      // {
      //   name: "Kane Williamson",
      //   URL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Kane_Williamson_in_2019.jpg/330px-Kane_Williamson_in_2019.jpg",
      // },
    

    const swiped =(direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen! ");
    }

    return (
      <div className="tinderCards">
        <div className="tinderCards_cardContainer">
          {people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `URL(${person.imgUrl})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    );
}

export default TinderCards;
