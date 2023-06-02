import React, { useState } from 'react'
import "./MovieCard.css"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function MovieCard({ movie }) {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 1500);
    return (
        <>
            {
                loading ?
                    <div className="movie_card">
                        <SkeletonTheme baseColor="#202020" highlightColor="#444">
                            <Skeleton />
                        </SkeletonTheme>
                    </div>
                    :
                    <div className='movie_card'>
                        <div className="movie_img">
                            <img className='card_img' src={movie.show.image ? movie.show.image.original : "https://www.proedsolutions.com/wp-content/themes/micron/images/placeholders/placeholder_large_dark.jpg"} alt="" />
                        </div>

                        <div className="bottom">
                            <h4>{movie.show.name}</h4>
                            {
                                movie.show.genres.map((genre) => {
                                    return <h7 className="genre" >{genre}</h7>
                                })
                            }

                            <Link to={`movies/${movie.show.id}`} style={{ textDecoration: "none" }} >
                                <div className="d-grid gap-2">
                                    <Button variant="primary" size="md">
                                        Book now
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </div>
            }

        </>

    )
}
