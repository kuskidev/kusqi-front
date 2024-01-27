import React from 'react'
import Post from './components/post/Post'
import { PostList } from './lib/posts/posts-list'

export default function Home() {
    return (
        <main className="flex w-full h-screen">
            <div className="w-1/4 h-full "></div>
            <div className="w-3/4 h-fit flex flex-row items-center border-b-2 border-l-2 border-base-300">
                <div className="pt-32 pb-20 w-3/5 h-fit flex flex-col gap-10 items-center">
                    {PostList.map((item, index) => (
                        <Post
                            key={index}
                            body={item.body}
                            id={item.id}
                            media={item.media}
                            publishedAt={item.publishedAt}
                            shop={item.shop}
                            title={item.title}
                        />
                    ))}
                </div>
                <div className="flex flex-row w-2/5 h-full items-center justify-center gap-7"></div>
            </div>
        </main>
    )
}
