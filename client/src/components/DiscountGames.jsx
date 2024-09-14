import Slider from "react-slick"
import FeatureImg from '../images/knight_age.png'
import { Link } from 'react-router-dom'
import { IoMdEye } from "react-icons/io"
import { MdPayments } from "react-icons/md"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const items = [
    {
        id: '1',
        thumbnail: FeatureImg,
        name_g: "Knight Age"
    },
    {
        id: '5',
        thumbnail: FeatureImg,
        name_g: "HTTH"
    },
    {
        id: '3',
        thumbnail: FeatureImg,
        name_g: "LOL"
    },
    {
        id: '4',
        thumbnail: FeatureImg,
        name_g: "Knight Age"
    },
    {
        id: '2',
        thumbnail: FeatureImg,
        name_g: "Knight Age"
    },
]

const DiscountGames = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    
    return (
        <div className="max-w-screen-2xl md:px-12 my-auto mb-20">
            <h1 className="text-center font-bold text-3xl pb-6 text-primary">Game Discount</h1>
            <Slider {...settings}>
                <div className="flex flex-col lg:flex-row pb-6">
                    <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 md:gap-14 gap-8">
                        {
                            items.map(({ id, thumbnail, name_g }) => 
                                <div key={id} className='bg-[rgba(255, 255, 255, 0.04)] rounded-[14px] h-66 shadow-lg items-center 
                                flex justify-center items-center relative'>
                                    <div>
                                        <img src={thumbnail} alt="" className='rounded-t-[14px]'/>
                                        <h5 className='text-xl font-semibold text-primary px-5 py-1 text-center'>{name_g}</h5>
                                        <div className="flex justify-between items-center px-3 pb-3">
                                            <Link to="/view-detail-game" className='btn-primary'><IoMdEye className="size-6"/></Link>
                                            <Link to="/payment-game" className="py-3 px-8 font-semibold text-white 
                                            rounded-lg bg-red-700 hover:outline-none hover:ring hover:ring-red-300 transition-all duration-100"><MdPayments className="size-6"/></Link>
                                        </div>
                                    </div>
                                    <span className="fixed absolute top-0 end-0 text-white font-semibold bg-red-500 px-3 py-1 
                                    rounded-tr-[14px] rounded-bl-[14px]">35%</span>
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row pb-6">
                    <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 md:gap-14 gap-8">
                        {
                            items.map(({ id, thumbnail, name_g }) => 
                                <div key={id} className='bg-[rgba(255, 255, 255, 0.04)] rounded-[14px] h-66 shadow-lg items-center 
                                flex justify-center items-center relative'>
                                    <div>
                                        <img src={thumbnail} alt="" className='rounded-t-[14px]'/>
                                        <h5 className='text-xl font-semibold text-primary px-5 py-1 text-center'>{name_g}</h5>
                                        <div className="flex justify-between items-center px-3 pb-3">
                                            <Link to="/view-detail-game" className='btn-primary'><IoMdEye className="size-6"/></Link>
                                            <Link to="/payment-game" className="py-3 px-8 font-semibold text-white 
                                            rounded-lg bg-red-700 hover:outline-none hover:ring hover:ring-red-300 transition-all duration-100"><MdPayments className="size-6"/></Link>
                                        </div>
                                    </div>
                                    <span className="fixed absolute top-0 end-0 text-white font-semibold bg-red-500 px-3 py-1 
                                    rounded-tr-[14px] rounded-bl-[14px]">35%</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Slider>
        </div>
    )
}


export default DiscountGames