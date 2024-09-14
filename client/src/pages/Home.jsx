import Banner from '../images/banner_lmht.jpg'
import FeatureGamesNow from '../components/FeatureGamesNow'
import DiscountGames from '../components/DiscountGames'

const Home = () => {
    return (
        <>
            {/* // this is banner */}
            <div className='md:px-12 max-w-screen-2xl mx-auto mt-28 py-4'>
                <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
                    <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
                        {/* banner img */}
                        <div>
                            <img src={Banner} alt="" className='lg:h-[386px]'/>
                        </div>
                        {/* banner content */}
                        <div className='md:w-3/5'>
                            <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>League of Legends</h2>
                            <p className='text-[#ebebeb] text-2xl mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sit. Minima vero 
                                exercitationem officia tenetur vitae aut asperiores quos eveniet.
                            </p>
                            <div className='space-x-5 space-y-4'>
                                <button className='btn-primary'>Get Started</button>
                                <button className='btn-primary'>View Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FeatureGamesNow />
            <DiscountGames />
        </>
    )
}

export default Home