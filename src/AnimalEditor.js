import React from "react"
import { Paper, Box, TextField, Stack, Button } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useRecoilState } from "recoil"
import { nanoid } from "nanoid"
function ImageViewer(props) {
    return (
        <div className="imageViewerRoot">
            {props.images.map(uri => <img src={uri} loading="lazy" alt="" key={nanoid()}/>)}
        </div>
    )
}
export default function AnimalEditor({ state }) {
    const [editor, setEditor] = useRecoilState(state)
    function dismiss() {
        setEditor(null)
    }
    if (editor === null)
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
                onClick={() => dismiss()}
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
                        overflow: "scroll",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row-reverse"
                        }}>
                            <Button
                                variant="contained"
                                id="exit"
                                color="error"
                                onClick={() => dismiss()}
                                sx={{
                                    zIndex: 200,
                                    color: "red",
                                    bgcolor: "red",
                                    minWidth: 45,
                                    minHeight: 25,
                                    width: 35,
                                    height: 25,
                                    position: "absolute"
                                }}>
                                <CloseIcon sx={{ color: "white" }} />
                            </Button>
                        </Box>
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