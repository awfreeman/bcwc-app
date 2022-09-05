import { ButtonGroup, Stack, TextField, Button, Popper, MenuList, MenuItem, Paper } from '@mui/material'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { useRecoilState, atom } from 'recoil'
import AnimalEditor from './AnimalEditor.js'
import AnimalCard from './AnimalCard.js'
import Grid2 from '@mui/material/Unstable_Grid2'
import { useRef, useState } from 'react'
let Grid = Grid2

const animal = {
    intakeNum: 440472,
    name: "stinky mcdoodoofart",
    species: "critter",
    pictureUrl: "character.gif",
    comments: ["comment1", "comment3"]
}
const searchOptions = ["Intake#", "Name", "Species", "Comments"]

const searchTextState = atom({ key: 'searchText', default: "" })
const editorState = atom({ key: "editorState", default: null })
export default function SearchApp() {
    const [searchText, setSearchText] = useRecoilState(searchTextState)
    const [editor, setEditorState] = useRecoilState(editorState)
    const [searchOption, setSearchOption] = useState(searchOptions[0])
    function search(e) {
        e.preventDefault()
        console.log(searchText)
    }
    return (
        <>
            <AnimalEditor state={editorState} />
            <Stack direction="column" alignItems="center" >
                <Stack component="form" direction="row" alignContent="stretch" onSubmit={e => search(e)}>
                    <TextField
                        id="outlined-basic"
                        label="Search"
                        variant="outlined"
                        onChange={e => setSearchText(e.target.value)}
                        sx={{ flex: 1, maxWidth: 400 }}
                    />
                    <Dropdown callback={setSearchOption} options={searchOptions} selection={searchOption} />
                </Stack>
                <div className="animalGrid">
                    <AnimalCard animal={animal} setEditorState={setEditorState} />
                    <AnimalCard animal={animal} setEditorState={setEditorState} />
                    <AnimalCard animal={animal} setEditorState={setEditorState} />
                    <AnimalCard animal={animal} setEditorState={setEditorState} />
                    <AnimalCard animal={animal} setEditorState={setEditorState} />
                </div>
            </Stack>
        </>
    )
}

function Dropdown(props) {
    const [popen, setPopen] = useState(false)
    const anchorRef = useRef(null);
    let options = []
    props.options.forEach(elem => {
        options.push(
            <MenuItem onClick={() => {
                props.callback(elem)
                setPopen(!popen)
            }}>{elem}</MenuItem>)
    })

    function openList(e) {
        setPopen(!popen)
    }

    return (
        <>
            <ButtonGroup variant="contained" ref={anchorRef}>
                <Button sx={{ textTransform: "none", width: 100, fontSize: 16 }}>{props.selection}</Button>
                <Button size="small" onClick={e => openList(e)}>{popen ? <ArrowDropUp /> : <ArrowDropDown />}</Button>
            </ButtonGroup>
            <Popper open={popen} anchorEl={anchorRef.current}>
                <Paper sx={{ width: 145 }}>
                    <MenuList>
                        {options}
                    </MenuList>
                </Paper>
            </Popper>
        </>
    )
}