import {Autocomplete, Box, Stack, TextField} from '@mui/material'
import { useRecoilState, atom } from 'recoil'
import AnimalCard from './AnimalCard.js'
import Grid2 from '@mui/material/Unstable_Grid2'
let Grid = Grid2

const animal = {
    intakeNum: 440472,
    name: "stinky mcdoodoofart",
    species: "critter",
    pictureUrl: "character.gif",
    comments: ["comment1", "comment3"]
  }
const searchOptions = ["Intake Number", "Name", "Species", "Comments"]
const defaultProps= {
    options: searchOptions
}
const searchTextState = atom({key: 'searchText', default:""})
export default function SearchApp() {
  const [searchText, setSearchText] = useRecoilState(searchTextState)
  function search(e){
    e.preventDefault()
    console.log(searchText)
  }
  
  return (
    <Grid container>
      <Stack>
        <Box component="form" onSubmit={e => search(e)}>
          <Stack direction="row">
            <TextField 
                id="outlined-basic" 
                label="Search" 
                variant="outlined" 
                onChange={e => setSearchText(e.target.value)}/>
            <Autocomplete
                disablePortal
                id="SearchOptions"
                options={searchOptions}
                renderInput={(params) => <TextField {...params} label="Options" />}/>
          </Stack>
        </Box>
      </Stack>
      <Stack>
        <AnimalCard animal={animal} />
      </Stack>
    </Grid>
  )
}