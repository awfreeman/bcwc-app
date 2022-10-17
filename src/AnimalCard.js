import React from "react"
import { Card, CardContent, Stack } from "@mui/material"

export default function AnimalCard({ animal, setEditorState }) {
    return (
        <Card component='a' sx={{ margin: 1, cursor: "pointer" }} onClick={() => setEditorState(animal)}>
            <CardContent>
                <Stack direction="row" alignItems="start">
                    <img src={animal.mainImage} width={100} alt="" />
                    <Stack>
                        <div>#{animal.intakeNum}</div>
                        <div>{animal.name}</div>
                        <div>{animal.species}</div>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>)
}