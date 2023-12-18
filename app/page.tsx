import { Movie } from '@prisma/client'
import { getMovies } from "@/actions/get-movies";
import { SearchOptions } from '@/type/types';
import MovieList from "./components/MovieList";
import FilterForm from "./components/FilterForm";
import ResultsCountSelect from "./components/ResultsCountSelect";
import PaginationButton from "./components/PaginationButton";

export default async function Home({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const search: string = (searchParams.search || '') as string;
    const page: number = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
    const limit: number = typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 10;
    const searchOptions: SearchOptions = {
        search,
        page,
        limit
    }
    const movies: Movie[] = await getMovies(searchOptions);
    return (
        <main className="text-black container mx-auto p-4">
            <div className='sticky bg-white py-4 top-0 flex justify-between items-center'>
                <FilterForm />
                <ResultsCountSelect initial={limit} />
                <nav className="flex gap-x-4 justify-between"
                    aria-label={`Pagination Navigation,Current Page ${page}`}>
                    <PaginationButton
                        isDisabled={page === 1}
                        href={`/?${new URLSearchParams({
                            search,
                            page: (page - 1).toString(),
                            limit: limit.toString()
                        })}`}>Prev page</PaginationButton>
                    <PaginationButton
                        isDisabled={movies.length < limit}
                        href={`/?${new URLSearchParams({
                            search,
                            page: (page + 1).toString(),
                            limit: limit.toString()
                        })}`}>Next page</PaginationButton>
                </nav>
            </div>
            <MovieList movies={movies} />
        </main >
    )
}
