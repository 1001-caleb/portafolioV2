import Particles from 'react-particles';

function Header() {
    return (
        <section className='w-screen h-screen p-5  grid place-items-center'>
            <div>
                <Particles 
                />
                <h1 className=' text-white text-5xl lg:text-9xl font-semibold  text-center'>
                    Creative <br />
                    Innovative <br />
                    <span className="bg-gradient-to-r from-cyan-500 to-violet-600 text-transparent bg-clip-text">Software Developer</span>
                </h1>
                <p className='text-gray-400 text-center mt-20 lg:text-2xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

        </section>
    )
}

export default Header