import { Card, CardContent, Typography } from '@mui/material'

export default function AnimalCard(props){
    return (
    <Card>
        <CardContent>
            <Typography>{props.animal.name}</Typography>
        </CardContent>
    </Card>)
}