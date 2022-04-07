import React, {useState, useEffect} from 'react';



const Players = () => {

  const [players, setPlayers] = useState([])
  const [currentPlayerName, setCurrentPlayerName] = useState('')
  const[score, setScore] = useState(0)



  useEffect(() => {
    const existingPlayers = JSON.parse(localStorage.getItem('players'))
    //we are fetching
    if(existingPlayers){
      console.log('this is line 40 ', existingPlayers)
      setPlayers(existingPlayers)
    }
  },[])

  const onSubmit =(e)=>{

    e.preventDefault()
    //to check if the player exists
    const playerIndex = players.find((player)=> player.name === currentPlayerName)
    //in react we can not update the state directly if the input is obj
    //so we need make a copy of the obj
    const newPlayers = [...players]

    if(playerIndex === -1){
      newPlayers.push({name:currentPlayerName, score:score})

    }else{
      newPlayers[playerIndex].score = score
      console.log(score)
    }
    //make sure obj are immutable => we make a copy
    setPlayers(newPlayers)

  }
  //things to do: score
  //make the function to keep score
  return(

    <div>
      <h1>Welcome </h1>
        <form onSubmit={(e) =>onSubmit(e)}>
          <label>
            <input
              type="text"

              placeholder="Enter name"
              onChange={(e)=>setCurrentPlayerName(e.target.value)}
            />
              <button
              type="submit"
              className="answerBtn"

              >Enter Name
              </button>
          </label>
        </form>
      <div>

      </div>
    </div>
  )
}
export default Players;

 /*player={
    name: '',
  }
  array of [...player]
  if player exist =>
  have total scores so far and they can see other plays score
  otherwise => they enter their name
  user gets welcome message and a par on how to play the game
  */
