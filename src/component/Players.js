import React, {useState, useEffect} from 'react';
let cc = console.log
//name player input
//if player is stored => it shows their lst sscore
//if not then enter name
//if there are 2 of the same name askes the player to rename

//top player's name and their score
//having list players in select / drop down with name of player their score
const Players = () => {
  //{score, setScore}

  const [players, setPlayers] = useState([])

  const [currentPlayerName, setCurrentPlayerName] = useState('')

  const[score, setScore] = useState(0)
  //load

  useEffect(() => {
    let existingPlayers = JSON.parse(localStorage.getItem('players'))

    if (existingPlayers) {
      if (typeof existingPlayers === 'string') {
         // TODO: figure out why our first JSON.parse isn't working
         existingPlayers = JSON.parse(existingPlayers);
      }
      setPlayers(existingPlayers)

   }
    }
  ,[])

  const onSubmit =(e)=>{

    e.preventDefault()
    //to check if the player exists
    const allPlayers = [...players]//all player array

    const playerIndex = allPlayers.findIndex((player)=> player.name === currentPlayerName)

    if(playerIndex === -1){

      allPlayers.push({name:currentPlayerName, score:score})

    }else{

      allPlayers[playerIndex].score = score
    }
    //make sure obj are immutable => we make a copy
    setPlayers(allPlayers) //update the new players

  }
  //things to do: score
  //make the function to keep score

  return(

    <div>
      <h1>Welcome 🐝 {currentPlayerName} </h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <label>
            <input
              type="text"
              placeholder="Enter name"
              onChange={(e)=>setCurrentPlayerName(e.target.value)}
            />
              <button
              type="submit"
              className="answerBtn"
              >Save
              </button>
          </label>
        </form>
      <div>

      </div>
    </div>
  )
}
export default Players;

