import React, { useState, useEffect } from 'react'
import { CardText } from 'reactstrap'
import axios from 'axios'

const FilmText = (props) => {
    
    const [filmTitle, updateTitle] = useState('')

    useEffect(() => {
        axios.get(props.film)
            .then(res => {
                updateTitle(res.data.title)
            })
    }, [])
    return (
       <CardText>
           { filmTitle }
       </CardText>
    )
}

export default FilmText