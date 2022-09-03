import Grid2 from '@mui/material/Unstable_Grid2'
import { Box, Stack, TextField } from '@mui/material'
import { useRecoilState, atom } from 'recoil'
import SearchApp from './SearchApp.js'
import Login from './Login.js'
import './main.css'
let Grid = Grid2

const dbid = "LocalStorage"
const userState = atom({ key: 'user', default: null })


function App() {
    const [user, setUser] = useRecoilState(userState)
    function LoginCallback(user) {
        setUser(user)
    }

    if (user == null) {
        return (<Login LoginCallback={LoginCallback} />)
    }
    else {
        return (<SearchApp />)
    }
}

export default App;
