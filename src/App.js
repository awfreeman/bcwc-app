import Grid2 from '@mui/material/Unstable_Grid2';
import { useRecoilState, atom } from 'recoil';
import AnimalCard from './AnimalCard.js';
import Login from './Login.js';

let Grid = Grid2
const dbid="LocalStorage"
const userState = atom({key:'user', default:null})
let animal = {
  intakeNum:440472,
  name:"stinky mcdoodoofart",
  species:"dawg",
  pictureUrl:"picurl",
  comments:["comment1", "comment2"]
}
const request = indexedDB.open(dbid, 1)
request.onerror = (event) => {
  alert("db open failed");
}
request.onupgradeneeded = (event) => {
  const db = event.target.result;
  db.createObjectStore('Animals', {autoIncrement:true})
}
request.onsuccess = (event) => {
  const db = event.target.result
  const transaction = db.transaction('Animals', 'readwrite')
  const objectStore = transaction.objectStore("Animals")
  objectStore.add(animal)
}

function App() {
  const [user, setUser] = useRecoilState(userState)
  function LoginCallback(user){
    setUser(user)
  }

  if(user == null){
    return (<Login LoginCallback={LoginCallback}/>)
  }
  else{
    return(<Home/>)
  }
}

function Home(){
  const [user, setUser] = useRecoilState(userState)
  return (
      <Grid container>
        <AnimalCard animal={animal}/>
      </Grid>
  )
}

export default App;
