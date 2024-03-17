'use client';

import { NewsArticle } from "@/utils/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NewsHeadlines() {

    const [articles, setArticles] = useState<NewsArticle[]>()

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=ph&category=health&apiKey=d2361ae2afd04a45876f404b2af0a7b4')
            .then(res => res.json())
            .then(data => setArticles(data.articles.slice(0, 4)))
    }, [])

    return (
        <div className="my-4 h-full w-full pb-16 md:pb-0">
            <span className="text-xl font-bold font-serif">Related News Articles</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full my-2">
                {
                    articles?.map(art => {
                        const date = new Date(art.publishedAt).toDateString()

                        return (
                            <Link
                                key={art.title}
                                href={art.url}
                                className="h-full border border-neutral-600 flex flex-col justify-between hover:bg-neutral-600 rounded-2xl font-serif">
                                <div className="m-4 flex flex-col gap-2">
                                    <span className="font-bold text-sm md:text-md text-left">{art.title.split(' - ')[0]}</span>
                                    <span className="text-xs">{art.author}</span>
                                </div>
                                <div className="m-4 flex flex-col gap-2">
                                    <span className="text-xs italic">{date}</span>
                                    <span className="text-xs">Source: {art.source.name}</span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}