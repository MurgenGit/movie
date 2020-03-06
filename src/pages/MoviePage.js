import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Container, Row, Col, Image, ListGroup, OverlayTrigger, Tooltip, Dropdown } from 'react-bootstrap'
import './MoviePage.css'


const MoviePage = ({ match }) => {
  const {params: { id }} = match
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const imgURL = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/`
  const movieURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY_V3}&language=en-US`
  
  const tooltipArray = [
    {
      message: 'This is average rating',
      classes: 'far fa-circle fa-2x',
      id: 1
    },
    {
      message: 'This is average rating',
      classes: 'fas fa-circle fa-2x',
      id: 2
    },
    {
      message: 'This is average rating',
      classes: 'far fa-bookmark fa-2x',
      id: 3
    },
    {
      message: 'This is average rating',
      classes: 'far fa-star fa-2x',
      id: 4
    }
  ]

  const IconsPannel = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around'}}>
        {tooltipArray.map(element => (
          <span key={element.id}>
            <OverlayTrigger               
              placement="top"
              overlay={
                <Tooltip>
                  {element.message}
                </Tooltip>
              }
            >
              <i className={element.classes}></i>
            </OverlayTrigger>
          </span>
        ))}
      </div>
      
    )
  }
  useEffect(() => {
    const fetchURL = async () => {
      try {
        const responseData = await axios.get(movieURL)
        setData(responseData)
        setLoading(false)
      } catch(e) {
        console.log(`the single movie page error is: ${e}`)
      }
    }
    fetchURL()
    
  }, [])
  console.log(data)
  if(!loading) {
    document.title = data.data.title
  }
  
  const PageLayout = () => {
    return (
      <Container style={{backgroundColor: '#F0F8FF'}}>
        <Row>
          <Col xs={4} sm="auto" md="auto">
            <Image 
              width={300}
              height={450}
              src={imgURL + data.data.backdrop_path}
            />
          </Col>
          <Col>
            <h1>
              {data.data.title} 
              <span className="film-length">
                ({`${Math.floor(data.data.runtime / 60)}h ${data.data.runtime % 60} min`})
              </span>
            </h1>
            <h5>{data.data.tagline}</h5>
            <ListGroup variant="flush" style={{background: 'inherit'}}>
              <ListGroup.Item >
                <IconsPannel />
              </ListGroup.Item>
              <ListGroup.Item style={{fontSize: '22px'}}>{data.data.overview}</ListGroup.Item>
              <ListGroup.Item>
                {data.data.genres.map(e => {
                  return <li key={e.id}>{e.name}</li>
                })}
              </ListGroup.Item>
              <ListGroup.Item>
                <Dropdown>
                  <Dropdown.Toggle variant="light">
                    See on other sites
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item target="_blank" href={`https://imdb.com/title/${data.data.imdb_id}`}>
                      IMDB
                    </Dropdown.Item>
                    <Dropdown.Item target="_blank" href={`https://themoviedb.org/movie/${data.data.id}`}>
                      TMDB
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <div>
      { loading ? <p>Loading...</p> : <PageLayout />}
    </div>
    
  )
}

export default MoviePage