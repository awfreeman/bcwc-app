import { Paper, Box, TextField, Stack } from '@mui/material'
import { useRecoilState } from 'recoil'

export default function AnimalEditor(props) {
    const [editor, setEditor] = useRecoilState(props.state)
    function dismiss(e) {
        if (e.target.id == "bg") {
            setEditor(null)
        }
    }
    if (editor == null)
        return <></>
    else {
        return (
            <>
                <Box sx={{
                    top: 0,
                    right: 0,
                    position: "fixed",
                    zIndex: 100,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0, 0, 0, 0.5)"
                }}
                    onClick={e => dismiss(e)}
                    id="bg">
                </Box>
                <Box sx={{
                    position: "absolute", 
                    display: "flex", 
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    top:0,
                    right:0
                }}>
                    <Paper sx={{
                        minWidth: "70%",
                        minHeight: "70%",
                        maxWIdth: "95%",
                        maxHeight: "95%",
                        zIndex: 200,
                    }}>
                        <img src="./character.gif" width="300" />
                        <Stack
                            component="form"
                            onSubmit={e => e.preventDefault()}
                            sx={{
                                maxWidth: "70%",
                                padding: "5px",
                            }}>
                            <h3>#{editor.intakeNum}</h3>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                defaultValue={editor.name}
                                sx={{ padding: "2px" }} />
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                defaultValue={editor.species}
                                sx={{ padding: "2px" }} />
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                multiline
                                defaultValue={editor.comments}
                                sx={{ padding: "2px" }} />
                        </Stack>
                    </Paper>
                </Box>
            </>
        )
    }
}