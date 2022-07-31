import Image from 'next/image'
import Link from 'next/link'
import image1 from '../public/img1.png'

function Work() {

    const works = [
        {
            id: 1,
            img: 'project1',
            title: '',
            desc: '',
            link: ''
        },
        {
            id: 2,
            img: '',
            title: '',
            desc: '',
            link: ''
        }
    ]

    return (

        <>
            <div id='work' className='p-5 relative '>
                <h3 className='text-white text-4xl lg:text-7xl text-center mt-20 '>Work</h3>
            </div>
        </>

    )
}

export default Work