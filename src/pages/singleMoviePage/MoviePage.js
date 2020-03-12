import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row, Col, Image, Dropdown } from 'react-bootstrap'
import IconsPanel from './IconsPanel'

import { getMovieUrl, imgURL } from '../../fetching/UrlsDB'
import './MoviePage.css'


const MoviePage = ({ match }) => {
  const { params: { id } } = match
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchURL = async () => {
      try {
        const responseData = await axios.get(getMovieUrl(id))
        setData(responseData.data)
        setLoading(false)
      } catch (e) {
        console.log(`the single movie page error is: ${e}`)
      }
    }
    fetchURL()
  }, [id])

  console.log(data)
  if (!loading) {
    document.title = data.title
  }

  const PageLayout = () => {
    return (
      <Container >
        <Row className="movie-page-container">
          <Col xs={4} sm="auto" md="auto">
            <Image
              width={300}
              height={450}
              src={imgURL + data.backdrop_path}
            />
          </Col>
          <Col>
            <h1>
              {data.title}
              <span className="film-length">
                ({`${Math.floor(data.runtime / 60)}h ${data.runtime % 60} min`})
              </span>
            </h1>
            <h5>{data.tagline}</h5>

            <IconsPanel rate={data.vote_average} />

            <p style={{ fontSize: '22px' }}>{data.overview}</p>
            <ul>
              {data.genres.map(e => {
                return <li key={e.id}>{e.name}</li>
              })}
            </ul>
            <Dropdown>
              <Dropdown.Toggle variant="light">
                See on other sites
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item target="_blank" href={`https://imdb.com/title/${data.imdb_id}`}>
                  IMDB
                </Dropdown.Item>
                <Dropdown.Item target="_blank" href={`https://themoviedb.org/movie/${data.id}`}>
                  TMDB
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <div>
      {loading ? <p>Loading...</p> : <PageLayout />}
    </div>

  )
}

export default MoviePage