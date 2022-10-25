import { client } from "../lib/sanity";
import { homepage } from "../lib/queries";

export async function getData() {
    const res = await client.fetch(homepage);

    return res.json()
}

export default async function Page() {
    const data = await getData();
    console.log(data)
    return <h1 className="text-2xl font-bold">Hello, Next.js!</h1>;
}

