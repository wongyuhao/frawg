import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from 'next/link';
import useSWR from "swr";

export default () => {

    const fetcher = (url) => fetch(url).then((r) => r.json());
    const {data, error} = useSWR('/api/last-played', fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>Loading...</div>


    return(
        <Link href={data.album.external_urls.spotify}>
            <div className="relative">
                <Image className="" height="500" width="500" src = {data?.album?.images[0].url}/>
                <div className='absolute bottom-1 left-0 p-2 w-full' style={{color: "white", backgroundColor:'rgba(0, 0, 0, 0.4)',}}>
                    <p className='font-bold text-2xl'>
                        {data.name}
                    </p>
                    <p className="text-xl">
                        {data.album.name}
                    </p>
            </div>
            </div>
            

        </Link>
    )
}