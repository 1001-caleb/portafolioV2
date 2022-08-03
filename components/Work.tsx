import { useEffect, useState } from "react";
import Projects from "../data/data";

function Work() {
    const [projects, setProjects] = useState<typeof Projects[]>([]);

    useEffect(() => {
        fetch('/api/projects')
        .then(res => res.json())
        .then((projects: typeof Projects[]) => setProjects(projects));
        console.log(projects);
    }, []);
    
    return (

        <>
            <div id='work' className='p-5 relative '>
                <h3 className='text-white text-4xl lg:text-7xl text-center mt-20 '>Work</h3>
            </div>
        </>

    )
}

export default Work