

function Services() {
    const services = [
        {
            id: 1,
            title: 'Figma designs',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ',
            price: '$$'
        },
        {
            id: 2,
            title: 'Web design',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ',
            price: '$$'
        },
        {
            id: 3,
            title: 'Discord bot development',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ',
            price: '$$'
        },
        {
            id: 4,
            title: 'Mentoring',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ',
            price: '$$'
        },


    ]

    return (
        <>
            <div className='p-5 '>
                <h3 className='text-white text-4xl lg:text-7xl text-center mt-20 '>Services</h3>
                <div className='flex flex-wrap lg:flex-nowrap gap-5 mt-10'>
                    {
                        services.map(service =>{
                            return(
                                <div className='bg-white w-max h-70 p-10'> 
                                    <h3 className='text-2xl mb-5'>{service.title}</h3>
                                    <p className=''>{service.desc}</p>
                                    <p className='bg-cyan-500 absolute object-bottom'>{service.price}</p>
                                </div>
                            ) 
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Services