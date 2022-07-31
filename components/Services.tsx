

function Services() {
    const services = [
        {
            id: 1,
            title: 'Figma designs',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ',
            price: '$ 100'
        },
        {
            id: 2,
            title: 'Web design',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ',
            price: '$ 100'
        },
        {
            id: 3,
            title: 'Discord bot development',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ',
            price: '$ 100'
        },
        {
            id: 4,
            title: 'Mentoring',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ',
            price: '$ 100'
        },


    ]

    return (
        <>
            <div id="service" className='p-5 '>
                <h3 className='text-white text-4xl lg:text-7xl text-center mt-20 '>Services</h3>
                <div className='flex flex-wrap lg:flex-nowrap gap-5 mt-10'>
                    {
                        services.map(service => {
                            return (
                                <>
                                    <div key={service.id} className='bg-white w-50 h-50  relative'>
                                        <div className="p-10">
                                            <h3 className='text-2xl mb-5'>{service.title}</h3>
                                            <p className=''>{service.desc}</p>
                                        </div>
                                        
                                        <p className='bg-blue-500 absolute w-full bottom-0 text-white px-10 py-1'>{service.price}</p>

                                    </div>
                                </>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Services