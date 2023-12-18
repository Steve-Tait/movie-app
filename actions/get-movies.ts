"use server";

import { prisma } from "@/db";
import { SearchOptions } from "@/type/types";
import { redirect } from "next/navigation";

export const getMovies = async ({ search = '', page = 1, limit = 10 }: SearchOptions) => {
    try {
        const results = await prisma.movie.findMany({
            skip: (page - 1) * limit,
            take: limit,
            where: {
                Title: {
                    contains: search,
                }
            },
        });
        return JSON.parse(JSON.stringify(results));
    } catch (error) {
        return { error }
    }
};

export const searchMovies = async (formData: FormData) => {
    const search = (formData.get('search') || '') as string;
    let params = new URLSearchParams({ search });
    redirect(`/?${params}`)
}