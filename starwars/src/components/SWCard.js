import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardFooter, CardBody,
    CardTitle } from 'reactstrap';
import axios from 'axios'

import FilmText from './FilmText'

const SWCard = (props) => {

    const [homeworld, updateHomeworld] = useState('')

    useEffect(() => {
        axios.get(props.starPerson.homeworld)
            .then(res => {
                updateHomeworld(res.data.name)
            })
    }, [props.starPerson.homeworld])
    return (
        <Card>
            <CardHeader tag="h3">{ props.starPerson.name }</CardHeader>
            <CardBody>
            <CardTitle>Of { homeworld } Appears in:</CardTitle>
                {props.starPerson.films.forEach(film => 
                    <FilmText film={ film } />)}
            </CardBody>
            <CardFooter className="text-muted">Born: { props.starPerson.birth_year }</CardFooter>
        </Card>
    )
} 

export default SWCard