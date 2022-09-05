import { Paper, Box } from '@mui/material'
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
            <Box sx={{
                top: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                zIndex: 500,
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "rgba(0, 0, 0, 0.5)"
            }}
                onClick={e => dismiss(e)}
                id="bg">
                <Paper>
                    <p>Doodoo feces</p>
                </Paper>
            </Box>
        )
    }
}