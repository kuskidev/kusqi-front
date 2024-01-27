import { PostType } from '@/app/types/components-types'
import React from 'react'

type Props = PostType

const Post = ({ body, id, media, title, shop, publishedAt }: Props) => {
    return (
        <div className="flex flex-col align-top items-center rounded-lg w-[500px] max-w-lg h-[700px] min-h-[700px] border border-base">
            <div className="w-full h-[14%] bg-base-100 border-b flex flex-row">
                <div className="w-1/5 h-full flex flex-row items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-primary"></div>
                </div>
                <div className="w-4/5 h-full flex flex-col justify-center">
                    <p className="font-bold text-lg">{shop}</p>
                    <p className="text-base-300 text-sm">{publishedAt}</p>
                </div>
            </div>
            <div className="w-full h-[72%] border-b carousel">
                {media.map((item) => (
                    <div key={id} className="carousel-item w-full">
                        <img src={item} className="w-full" alt={`${title} ${body}`} />
                    </div>
                ))}
            </div>
            <div className="w-full h-[14%]"></div>
        </div>
    )
}

export default Post
