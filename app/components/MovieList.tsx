import { Movie } from '@prisma/client'
import Link from 'next/link'
import { Key } from 'react'

export default function MovieList({ movies }: {
    movies: Movie[]
}) {
    return (
        <ul>
            {movies && movies.map((movie: Movie, key: Key) => (
                <li key={key}>
                    <Link href={`movies/${movie.id}`}>{movie.Title}</Link>
                </li>
            ))}
        </ul>
    )
}
