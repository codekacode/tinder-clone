import { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TiderCards.css"

function TinderCards() {

	const [people, setPeople] = useState([
		{ 
			name: "Elon Musk",
			url: "https://www.thesoftwarereport.com/wp-content/uploads/2020/11/Elon-Musk-300x193.jpg"
		},
		{ 
			name: "Jeff Bezos",
			url: "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
		},
		{ 
			name: "Sandra Bullock",
			url: "https://www.usmagazine.com/wp-content/uploads/2022/03/Sandra-Bullock-Taking-Step-Back-From-Acting-Be-With-Her-Family-For-While.jpg?quality=78&strip=all"
		},
		{ 
			name: "Sohn",
			url: "https://www.places-concert.com/images/visuels/artists_sohn_11052022102447.jpg"
		}
	]);
	// const [lastDirection, setLastDirection] = useState();

	const swiped = (direction, nameToDelete) => {
		console.log("Removing" + nameToDelete)
		// setLastDirection(direction)
	}
	const outOfFrame = (name) => {
		console.log(name + " left the scrren!")
	}

  return (
    <div className="tinderCards">
			<div className="tinderCards__container">
				{people.map((person) => (
						<TinderCard
							className="swipe"
							key={person.name}
							preventSwipe={["up", "down"]}
							onSwipe={(dir) => swiped(dir, person.name)}
							onCardLeftScreen={() => outOfFrame(person.name)}
						>
							<div
							style={{backgroundImage: `url(${person.url})` }}
							className="card"
							>
								<h3>{person.name}</h3>
							</div>
						</TinderCard>	
					))}
			</div>	
    </div>
  )
}

export default TinderCards