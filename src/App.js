import { useRecoilState, atom } from 'recoil'
import SearchApp from './SearchApp.js'
import Login from './Login.js'
import './main.css'

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
