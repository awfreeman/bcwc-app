import { Card, CardContent, Typography, Stack} from '@mui/material'

import { Container } from '@mui/system'

export default function AnimalCard(props) {
    let comments = []
    props.animal.comments.forEach(element => {
        comments.push(
        <Card key={Math.random()}>
            <Typography>{element}</Typography>
        </Card>)
    })
    return (
        <Card>
            <CardContent>
                <Stack direction="row">
                    <img src='/character.gif' width={100}/>
                    <Stack>
                        <Typography>{props.animal.name}</Typography>
                        <Typography>{props.animal.species}</Typography>
                    </Stack>
                </Stack>
                <Container>
                    {comments}
                </Container>
            </CardContent>
        </Card>)
}