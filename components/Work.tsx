import Link from "next/link";
import { useEffect, useState } from "react";
import Projects from "../data/data";


function Work() {
    type Data = {
        id: number,
        name: string,
        description: string,
    }

    const [projects, setProjects] = useState<Data[]>([]);

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then((projects: Data[]) => setProjects(projects));

    }, []);

    return (
        <div id='work' className='p-5 relative '>
            <h3 className='text-white text-4xl lg:text-7xl text-center mt-20 '>Work</h3>
            {
                projects.map(project => {
                    return (
                        <Link key={project.id} href={{
                            pathname: '/projects/[name]',
                            query: { name: project.name }
                        }}>
                            <div >
                                <h4 className="text-white">{project.name}</h4>
                            </div>
                        </Link>

                    )
                })
            }
        </div>

    )
}

export default Work