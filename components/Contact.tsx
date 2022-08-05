

function Contact() {
    const links = [
        {
            id: 1,
            title: 'Curriculum',
            link: 'https://fuchsia-base-f4d.notion.site/Caleb-Parra-51643c6978954d66952e829101e020c7'
        },
        {
            id: 2,
            title: 'Linkdin',
            link: 'https://www.linkedin.com/in/caleb-parra/'
        },
        {
            id: 3,
            title: 'GitHub',
            link: 'https://github.com/1001-caleb'
        },
        {
            id: 4,
            title: 'Instagram',
            link: 'https://www.instagram.com/parracode_/?hl=es-la'
        },
        {
            id: 5,
            title: 'Twitter',
            link: 'https://twitter.com/ParraCode_'
        },

    ]

    return (
        <>
            <div id="contact" className='p-5 text-center'>

                <h3 className="text-white text-4xl lg:text-7xl mt-20 mb-10">Contact</h3>
                <a href='mailto:parra.code7@gmail.com' >
                    <p className='text-white text-xl lg:text-4xl  hover:text-cyan-500'>Send me a mail</p>
                </a>
                <a href='https://parra.vercel.app' >
                    <p className='text-gray-400 text-xl lg:text-4xl hover:text-cyan-500 '>my another social media</p>
                </a>

                <div className="flex flex-wrap gap-5 justify-center mt-10">
                    {
                        links.map(link => {
                            return (
                                <a href={link.link} key={link.id} className='' >
                                    <p className='text-gray-400 text-xl lg:text-4xl hover:text-violet-600  '>{link.title}</p>
                                </a>
                            )
                        })
                    }
                </div>

            </div>
        </>

    )
}

export default Contact