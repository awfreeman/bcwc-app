import { useState } from 'react';
import Login from './Login.js';

function App() {
  const [user, setUser] = useState(null)
  function LoginCallback(user){
    setUser(user)
  }

  if(user == null){
    return (<Login LoginCallback={LoginCallback}/>)
  }
  else{
    return("yes")
  }
}

export default App;
