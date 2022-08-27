import { Box, Button, FormGroup, TextField } from "@mui/material"
import { Container } from "@mui/system";
import { useState } from "react";


export default function Login(props) {

    const [uname, setuname] = useState("")
    const [pass, setpass] = useState("")

    function onLogin(e) {
        props.LoginCallback({ username: uname, token: "Token" })
    }

    return (
        <Container maxWidth="sm">
            <FormGroup>
                <TextField required id="outlined-required" label="Username" onChange={e => setuname(e.target.value)} />
                <TextField required id="outlined-password-input" label="Password" type="password" onChange={e => setpass(e.target.value)} />
                <Button variant="contained" onClick={onLogin}>Login</Button>
            </FormGroup>
        </Container>
    );
}