
import { createRef } from "react";
import Instagram from "../components/Instagram";
import Slider from "../components/Slider";
// import TextComponent from "../components/TextComponent";
import {PortableText} from '@portabletext/react'
import TextComponent, { RichTextComponent } from "../components/TextComponent";
import { about, homepage } from "../lib/queries"
import { client } from "../lib/sanity"

type InstagramData = {
    id: number;
    name: string;
    type: string;
};

export default function test({ data, images }) {
    console.log(data)
    
    let imgArr = images.slice(0,5)
    
    return (
        <>
            <section className="px-10 2xl:mx-52 lg:mx-10 lg:p-8">
                <Instagram items={imgArr} />
            </section>
            <section className="px-10 2xl:mx-52 lg:mx-10 lg:p-8">
                <PortableText value={data.pageData[0].content} components={RichTextComponent} />
            </section>
        </>
    )
}

export async function getServerSideProps() {
    const data = await client.fetch(about)

    const url = `https://graph.instagram.com/me/media?fields=media_url,permalink,media_type&access_token=${process.env.INSTAGRAM_TOKEN}`
    const igData = await fetch(url)
    const feed = await igData.json()

    const images = feed.data.filter(function (obj) {
        return obj.media_type === "IMAGE";
    });
  
    return {
        props: {
            data,
            images
        }
    }
}
