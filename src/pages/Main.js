import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { moviesNowPlaying } from '../fetching/UrlsDB'
import { Card, Button, Spinner, CardDeck, Container, Row, Col } from 'react-bootstrap'


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
        setData(responsData)
        setLoading(false)
      } catch(e) {
        console.log(e)
        setLoading(false)
      }
    }
    fetch()
  }, [])

  console.log(data)
  const CardData = () => {
    return (
      <Container>
        <CardDeck style={{width: '1200px'}}>
          {data.data.results.map(e => {
            return (
              <Row key={e.id}>
                <Col lg="auto" md="auto">
                  <Card 
                    
                    style={{ width: '12rem', alignItems: 'center', textAlign: 'center'}} 
                    border="secondary" 
                    bg="light"
                  >
                    <Card.Img 
                      variant="top" 
                      src={imgSourse + e.poster_path} 
                      style={{width: '11.56rem', height: '17.38rem'}}
                    />
                    <Card.Body>
                      <Card.Title>{e.title}</Card.Title>
                      <Card.Text>
                        {e.release_date}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>  
                </Col>
              </Row>  
            )
          })}
        </CardDeck>
      </Container>
    )
  }
  return (
    <div>
      {loading ? <SpinnerShow /> : <CardData />}  
    </div>
  )
}
export default MainMoviePage