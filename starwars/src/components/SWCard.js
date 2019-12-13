import React, { useState, useEffect } from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import axios from 'axios'

const SWCard = (props) => {

    const [homeworld, updateHomeworld] = useState('')
    const [films, updateFilms] = useState([])

    useEffect(() => {
        axios.get(props.starPerson.homeworld)
            .then(res => {
                updateHomeworld(res.data.name)
            })
        props.starPerson.films.forEach(film => {
            axios.get(film)
                .then(res => {
                    updateFilms(oldFilms => [...oldFilms, res.data.title])
                })
        })
        console.log(films)
    }, [])

    return (
        <Card>
            <CardHeader tag="h3">{ props.starPerson.name }</CardHeader>
            <CardBody>
            <CardTitle>Of { homeworld }</CardTitle>
                {films.forEach(film => 
                    <CardText>{ film }</CardText>)}
            </CardBody>
            <CardFooter className="text-muted">Born: { props.starPerson.birth_year }</CardFooter>
        </Card>
    )
} 

export default SWCard