import { searchMovies } from '@/actions/get-movies';

export default function FilterForm() {
    return (
        <form action={searchMovies} className='flex gap-x-2'>
            <input
                className='p-2 border-2 border-black rounded'
                type="text"
                name="search"
                placeholder="Search by title..."
            />
            <button className='p-2 rounded text-white border-2 border-blue-500 bg-blue-500 duration-200 hover:bg-blue-900'>Search</button>
        </form >
    )
}
