import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import movies from "../data/MoviesDetails"


export default function MovieDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const movie = movies.find((m) => m.id === Number(id))


  return (
    <div>
      <img src={movie.image} />
      <h2>{movie.title}</h2>
    </div>
  )
}