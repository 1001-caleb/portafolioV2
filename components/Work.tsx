import Image from 'next/image'


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
            <div id='work' className='p-5 '>
                <h3 className='text-white text-4xl lg:text-7xl text-center mt-20 '>Work</h3>
                <div className='mt-10'>
                    <div className='relative w-60 flex align-middle justify-center flex-wrap'>
                        <div className='relative h-20 bg-white p-5 flex flex-col transition-all ease-in-out delay-75 hover:h-80'>
                            <div className='relative -top-10'>
                                <img src='https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg' />
                            </div>
                            <div className='relative -top-20 opacity-0 hover:opacity-100 mt-10'>
                                <h3>This is content</h3>
                                <p>DIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Work