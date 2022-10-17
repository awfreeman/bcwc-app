import React from "react"
import { ButtonGroup, Stack, Button, Popper, MenuList, MenuItem, Paper, InputBase } from "@mui/material"
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material"
import { useRecoilState, atom } from "recoil"
import AnimalEditor from "./AnimalEditor.js"
import AnimalCard from "./AnimalCard.js"
import { useRef, useState } from "react"

const animal = [{
    intakeNum: 440472,
    name: "animal1",
    species: "animal",
    pictureUrl: "character.gif",
    comments: "CommentText",
    mainImage: "./character.gif",
    images: ["./images/character.gif", "./images/character2.gif"]
},
{
    intakeNum: 440473,
    name: "animal2",
    species: "animal",
    pictureUrl: "character.gif",
    comments: "CommentText",
    mainImage: "./character.gif",
    images: ["./images/character.gif", "./images/character2.gif"]
},
{
    intakeNum: 440474,
    name: "animal3",
    species: "animal",
    pictureUrl: "character.gif",
    comments: "CommentText",
    mainImage: "./character.gif",
    images: ["./images/character.gif", "./images/character2.gif"]
},
{
    intakeNum: 440475,
    name: "animal4",
    species: "animal",
    pictureUrl: "character.gif",
    comments: "CommentText",
    mainImage: "./character.gif",
    images: ["./images/character.gif", "./images/character2.gif"]
},
{
    intakeNum: 440476,
    name: "animal5",
    species: "animal",
    pictureUrl: "character.gif",
    comments: "CommentText",
    mainImage: "./character.gif",
    images: ["./images/character.gif", "./images/character2.gif"]
},
{
    intakeNum: 440477,
    name: "animal6",
    species: "animal",
    pictureUrl: "character.gif",
    comments: "CommentText",
    mainImage: "./character.gif",
    images: ["./images/character.gif", "./images/character2.gif"]
},
]
const searchOptions = ["All", "Intake#", "Name", "Species", "Comments"]

const searchTextState = atom({ key: "searchText", default: "" })
const editorState = atom({ key: "editorState", default: null })
const resultsState = atom({ key: "resultsState", default: null })

export default function SearchApp() {
    const [searchText, setSearchText] = useRecoilState(searchTextState)
    const [, setEditorState] = useRecoilState(editorState)
    const [searchOption, setSearchOption] = useState(searchOptions[0])
    const [searchResults, setSearchResults] = useRecoilState(resultsState)

    function search(e) {
        e.preventDefault()
        if (searchText.length < 3)
            return
        switch (searchOption) {
        case "Intake#":
            break
        case "Name":
            break
        case "Species":
            break
        case "Comments":
            break
        default:
            break
        }
        setSearchResults(animal.map(x => (x.name.toLowerCase().search(searchText.toLowerCase()) !== -1) ? <AnimalCard animal={x} setEditorState={setEditorState} /> : <></>))
    }

    return (
        <>
            <AnimalEditor state={editorState} />
            <Stack direction="column" alignItems="center" >
                <Paper
                    component="form"
                    onSubmit={e => search(e)}
                    sx={{
                        display: "flex",
                        width: "500px",
                        maxWidth: "80%"
                    }}>
                    <InputBase
                        placeholder="Search"
                        onChange={e => setSearchText(e.target.value)}
                        sx={{ flexGrow: 1 }}>
                    </InputBase>
                    <Dropdown callback={setSearchOption} options={searchOptions} selection={searchOption} />
                </Paper>
                <div className="animalGrid">
                    {searchResults}
                </div>
            </Stack>
        </>
    )
}

function Dropdown(props) {
    const [popen, setPopen] = useState(false)
    const anchorRef = useRef(null)


    let options = props.options.map(elem =>
        <MenuItem onClick={() => {
            props.callback(elem)
            setPopen(!popen)
        }}key={elem}>{elem}</MenuItem>
    )

    function openList() {
        setPopen(!popen)
    }

    return (
        <>
            <ButtonGroup sx={{ boxShadow: 0 }} variant="contained" ref={anchorRef}>
                <Button sx={{
                    textTransform: "none",
                    width: 100,
                    fontSize: 16,
                    borderRadius: 0,
                    boxShadow: 0
                }}>{props.selection}</Button>
                <Button size="small" onClick={() => openList()}>{popen ? <ArrowDropUp /> : <ArrowDropDown />}</Button>
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