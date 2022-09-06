import { Paper, Box, TextField, Stack, ImageList, ImageListItem, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useRecoilState } from 'recoil'

export default function AnimalEditor(props) {
    const [editor, setEditor] = useRecoilState(props.state)
    function dismiss(e) {
        if (e == "exit" || e.target.id == "exit") {
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
                    id="exit">
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
                        maxWidth: "95%",
                        maxHeight: "95%",
                        zIndex: 200,
                    }}>
                        <Button id="exit" onClick={() => dismiss("exit")} sx={{zIndex:200, bgcolor:"red", position:"absolute"}}><CloseIcon sx={{color:"white"}}/></Button>
                        <ImageList sx={{ maxHeight:300}}>
                            {editor.images.map(uri=> 
                            <ImageListItem key={uri}>
                                <img src={uri} loading="lazy"/>
                            </ImageListItem>
                            )}
                        </ImageList>
                        <Stack
                            component="form"
                            onSubmit={e => e.preventDefault()}
                            sx={{
                                padding: "5px",
                            }}>
                            <h3>#{editor.intakeNum}</h3>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Name"
                                defaultValue={editor.name}
                                sx={{ padding: "2px", marginY:"5px" }} />
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Species"
                                defaultValue={editor.species}
                                sx={{ padding: "2px", marginY:"5px" }} />
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                multiline
                                label="Comments"
                                defaultValue={editor.comments}
                                sx={{ padding: "2px", marginY:"5px" }} />
                        </Stack>
                    </Paper>
                </Box>
            </>
        )
    }
}