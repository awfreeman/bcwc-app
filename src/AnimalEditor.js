import { Paper, Box, TextField, Stack, ImageList, ImageListItem, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useRecoilState } from 'recoil'
import { Image } from '@mui/icons-material'
function ImageViewer(props) {
    return (
        <div class="imageViewerRoot">
            {props.images.map(uri => <img src={uri} loading="lazy" />)}
        </div>
    )
}
export default function AnimalEditor(props) {
    const [editor, setEditor] = useRecoilState(props.state)
    function dismiss() {
        setEditor(null)
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
                    onClick={e => dismiss()}
                    id="exit">
                </Box>
                <Box sx={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    right: 0
                }}>
                    <Paper sx={{
                        minWidth: "70%",
                        maxWidth: "95%",
                        maxHeight: "95%",
                        zIndex: 200,
                        overflow: "scroll"
                    }}>
                        <Button variant="contained" id="exit" color="error" onClick={() => dismiss()} sx={{ zIndex: 200, color: "red", bgcolor: "red", position: "absolute", }}><CloseIcon sx={{ color: "white" }} /></Button>
                        <ImageViewer images={editor.images} />
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
                                sx={{ padding: "2px", marginY: "5px" }} />
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Species"
                                defaultValue={editor.species}
                                sx={{ padding: "2px", marginY: "5px" }} />
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                multiline
                                label="Comments"
                                defaultValue={editor.comments}
                                sx={{ padding: "2px", marginY: "5px" }} />
                        </Stack>
                    </Paper>
                </Box>
            </>
        )
    }
}