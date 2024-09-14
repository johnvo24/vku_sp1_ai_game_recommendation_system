import Thumbnail1 from '../images/lienquan.png'
import Thumbnail2 from '../images/knight_age.png'
import Thumbnail3 from '../images/honor_of_kings.png'
import Thumbnail4 from '../images/sh_gamota.png'
import { Link } from "react-router-dom"

const FeatureGamesNow = () => {
    const ApiFeatureGames = [
        {
            id: '1',
            thumbnail: Thumbnail1,
            title: 'Arena of Valor'
        },
        {
            id: '2',
            thumbnail: Thumbnail2,
            title: 'Knight Age'
        },
        {
            id: '3',
            thumbnail: Thumbnail3,
            title: 'Honor of Kings'
        },
        {
            id: '4',
            thumbnail: Thumbnail4,
            title: 'Survival Heroes'
        },
    ]

    return (
        <div className="my-20 md:px-12 px-4 max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <div className="lg:w-1/4">
                    <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">Features Games Now</h3>
                    <p className="text-base text-tartiary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolore dolorem molestiae 
                        est nostrum in nisi corrupti ratione nobis magnam!
                    </p>
                </div>
                {/* feature card */}
                <div className="w-full lg:w-3/4">
                    <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-start md:gap-10 gap-6'>
                        {
                            ApiFeatureGames.map((items) => 
                                <div key={items.id} className='bg-[rgba(255, 255, 255, 0.04)] rounded-[14px] h-66 shadow-3xl p-6 items-center 
                                flex justify-center items-center hover:-translate-y-4 transition-all duration-300'>
                                    <div>
                                        <img src={items.thumbnail} alt="" className='rounded-[14px]'/>
                                        <h5 className='text-xl font-semibold text-primary py-1 text-center'>{items.title}</h5>
                                        <Link to="/view-detail-game" className='btn-primary block text-center'>View Detail</Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureGamesNow