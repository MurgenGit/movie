import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { moviesNowPlaying } from '../fetching/UrlsDB'
import { Card, Spinner, CardColumns, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Main.css'


function SpinnerShow() {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  )
}

const MainMoviePage = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const imgSourse = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/`
  useEffect(() => {
    const fetch = async () => {
      try {
        const responsData = await axios(moviesNowPlaying)
        setData(responsData.data)
        setLoading(false)
      } catch (e) {
        console.log(e)
        setLoading(false)
      }
    }
    fetch()
  }, [])

  console.log(data)

  return (
    <Container>
      {loading ? <SpinnerShow /> : <CardColumns xs={5} className="movie-list"> 
        {data.results.map(e => {
          return (
            <Card 
              key={e.id}
              className="main-page-card"
              border="secondary"
              bg="light"
            >
              <Link to={{ pathname: `/movie/${e.id}` }}>
              <Card.Img
                variant="top"
                src={imgSourse + e.poster_path}
                style={{ width: '11.56rem', height: '17.38rem' }}
              />
              <Card.Body>
                <Card.Title>{e.title}</Card.Title>
                <Card.Text>
                  {e.release_date}
                </Card.Text>
              </Card.Body>
            </Link>
            </Card>
          )
        })}
      </CardColumns>}
    </Container>
  )
}
export default MainMoviePage