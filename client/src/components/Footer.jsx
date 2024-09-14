import Logo from '../images/logo-1.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
            <div>
                <div className='md:w-1/2 space-y-8'>
                    <Link to='/' className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                        <img src={Logo} alt="" className='w-28 inline-block items-center'/>
                        <span className='text-white'>Game Store</span>
                    </Link>
                    <p className='md:w-1/2'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat consectetur delectus. 
                        Quis vel explicabo quod molestias facere iure et.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer