import { Movie } from '@prisma/client'
import { notFound } from "next/navigation";
import Image from 'next/image';
import { prisma } from "@/db";

export default async function Page({ params }: {
    params: { id: string }
}) {
    const movie = await prisma.movie.findUnique({
        where: {
            id: parseInt(params.id),
        },
    })
    if (!movie) {
        return notFound()
    }

    return (
        <main className="text-center">
            <h1 className="text-3xl font-bold">{movie.Title}</h1>
            <p>{movie.Overview}</p>
            {movie?.Poster_Url &&
                <Image src={movie.Poster_Url}
                    width={500}
                    height={500}
                    alt={`${movie.Title} poster`} />
            }
        </main>
    )
}
