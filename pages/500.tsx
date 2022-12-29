import Link from "next/dist/client/link";
import NewNav from "../components/NewNav";

let navigation = [
    { slug: {_type: 'slug', current: 'about'}, title: 'About' },
    { slug: {_type: 'slug', current: 'process'}, title: 'Process' },
    { slug: {_type: 'slug', current: 'my-work'}, title: 'My Work' },
    { slug: {_type: 'slug', current: 'contact'}, title: 'Contact' }
]

export default function Custom500() {
    return (
        <main>
            <section className="w-screen relative pt-4 lg:pt-8 lg:mb-16">
                <NewNav
                    navigation={navigation}
                    logo='/RossRings-Icon.PNG'
                />
            </section>
            <section className="px-10 2xl:mx-52 lg:mx-10 lg:p-8 my-6 text-center">
                <h1 className="text-2xl">500 - Server-side error occurred</h1>
                <Link href='/' className="text-firefly-300 underline">Return to Home</Link>
            </section>
        </main>
    )
}