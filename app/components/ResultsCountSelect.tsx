"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"


export default function ResultsCountSelect({ initial }: { initial: number }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const setLimit = (limit: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('limit', limit)
        router.push(`${pathname}?${params}`);
    }
    return (
        <select
            className="p-2 border-2 border-black rounded"
            onChange={e => setLimit(e.target.value)}
            value={initial}
        >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
    )
}
