import React, { Fragment, useEffect, useState } from 'react'
import "./MovieDetail.css"
import { Link, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import BookMovie from '../BookMovie/BookMovie'
import AlertMsg from '../AlertMsg/AlertMsg'

export default function MovieDetail() {
  const [movie, setMovie] = useState({})
  const [sumbitted, setSumbitted] = useState(false)
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <Fragment>
      <div className="alert">
        {sumbitted && <AlertMsg />}
      </div>
      <div className="movie_detail">
        <img className='movie_card_img' src={movie.image && movie.image.original} alt="" />
        <div className="details">
          <h1>{movie.name}</h1>
          <div className='summary' dangerouslySetInnerHTML={{ __html: movie.summary }} />

          <div className="buttons">
            <Link to={movie.officialSite} ><Button style={{ fontWeight: "600" }} variant="warning">Official Site</Button></Link>
            <BookMovie movie={movie} setSumbitted={setSumbitted} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
