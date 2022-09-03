import { Card, CardContent, div, Stack} from '@mui/material'

import { Container } from '@mui/system'

export default function AnimalCard(props) {
    return (
        <Card>
            <CardContent>
                <Stack direction="row" alignItems="start">
                    <img src='/character.gif' width={100}/>
                    <Stack>
                        <div>#{props.animal.intakeNum}</div>
                        <div>{props.animal.name}</div>
                        <div>{props.animal.species}</div>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>)
}