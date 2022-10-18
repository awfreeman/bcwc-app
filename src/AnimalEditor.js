import React from "react"
import { Paper, Box, Button, InputBase } from "@mui/material"
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

function InputElement({ id, value, placeholder}) {
    return(
        <>
            <InputBase placeholder={placeholder} defaultValue={value} id={id}/><br/>
        </>
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
                        <form onSubmit={() => alert("aaaa")}>
                            <h3>#{editor.intakeNum}</h3>
                            <ImageViewer images={editor.images} />
                            <InputElement id="name" placeholder="Name" value={editor.name}/>
                            <InputElement id="species" placeholder="Species" value={editor.species}/>
                            <InputElement id="comments" placeholder="Comments" value={editor.comments}/>
                        </form>
                    </Paper>
                </Box>
            </>
        )
    }
}