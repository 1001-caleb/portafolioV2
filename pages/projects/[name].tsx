import Head from "next/head";

export default function Project(projects: any) {
    console.log(projects);
    return (
        <>
            <Head>
                <title>{projects.name}</title>
            </Head>
            <div>
                <h1>{projects.name}</h1>
                <p>{projects.description}</p>
            </div>
        </>

    )
}

export async function getStaticPaths() {
    const res = await fetch('https://portafolio-parra.vercel.app/api/projects');
    const projects = await res.json();
    const paths = projects.map((project: any) => ({
        params: { name: project.name }
    }));
    return { paths, fallback: false };
}
export async function getStaticProps(context: any) {
    const { name } = await context.params;

    const res = await fetch(`https://portafolio-parra.vercel.app/api/projects/${name}`);
    const projects = await res.json();
    console.log(projects);
    return {
        props: projects

    }
}