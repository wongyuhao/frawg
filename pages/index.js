import Head from 'next/head'
import { GraphQLClient, gql } from 'graphql-request'
import ytstring from './api/yt'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Player from '../components/player'
import exitImg from "../public/exit.jpeg"
import klImg from "../public/kl2.jpeg"

export default function Home({galleryImages, youtubeLinks, quotes}) {
  const yt = youtubeLinks[0];
  const DWindow = dynamic(()=> import("../components/window.js"), { ssr: false })
  return (
    <div className='mx-auto'>
      <div className='wrapper h-full w-full p-2 lg:p-5 ' >
      <Head>
        <title>HAO.PLACE</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        </style> 
      </Head>
      <div className='w-full text-center'>
        <a className='text-white text-4xl pt-10 pb-5' style={{fontFamily:"VT323"}} href="https://haoyudoing.com">{"< hao.place >"}</a>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly ">
      <DWindow
        className="w-1/3"
        title="WELCOME."
        content={
          <Image src = {klImg}/>
        }
        quotes={quotes}
      />
      <DWindow
        className="w-1/3"
        title="LAST VIBED TO - "
        content={
          <Player/>
        }
        quotes={quotes}
      />
      {
        yt ?
        <DWindow
        className="w-1/3"
        title="WORTH A LISTEN -"
        content={
          <Link href={yt.source}>
          <div className="overflow-hidden" style={{position:"relative"}}>
            <Image width="100%" height="100%" layout="responsive" objectFit="cover" src = {ytstring(yt.source)}/>
            <div className='absolute bottom-1 left-0 p-2 w-full' style={{color: "white", backgroundColor:'rgba(0, 0, 0, 0.4)',}}>
              <p className='font-bold text-xl'>{yt.title}</p>
            </div>
          </div>
          </Link>
        }
        quotes={quotes}
      />
        : <></>
      }
      <DWindow
        className="w-1/3 "
        title="RETURN TO REALITY - CLICK HERE"
        content={
          <Link href="https://haoyudoing.com" >
            <Image src = {exitImg}/>
          </Link>
        }
        quotes={quotes}
      />
      {
        galleryImages?.map(
          (i)=>     
          <DWindow
            className="w-1/3"
            title={i.title.toUpperCase()}
            content={
              <Link href={i.url || "https://haoyudoing.com"}>
                <Image width="500" height="500" src = {i.asset.url}/>
              </Link>
            }
            quotes={quotes}
          />
          
        
        )
      }
      </div>
      
      <div className='w-full text-center'>
        <a className='text-white text-2xl m-10' style={{fontFamily:"VT323"}} href="https://haoyudoing.com">{"< haoyudoing.com © 2022 >"}</a>
      </div>
    </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const client = new GraphQLClient(process.env.GRAPHCMS);
  const query = gql`
  query MyQuery {
    galleryImages {
      asset {
        url
      }
      title
      url
    }
    youtubeLinks(last: 1) {
      source
      title
    }
    quotes {
      text
    }
  }  
  `;
  const data = await client.request(query);

  return {
    props: { galleryImages: data.galleryImages, youtubeLinks: data.youtubeLinks, quotes: data.quotes  },
  };
}
