import React from 'react'
import { Link } from 'react-router-dom'

const GameItem = ({_id, game_name, game_image}) => {
    const shortTitle = game_name.length > 17 ? game_name.substr(0, 17) + '...' : game_name;

    return (
        <Link to={`/view-detail-game/${_id}`} key={_id} className="flex flex-col bg-[rgba(255, 255, 255, 0.04)] shadow-lg rounded-lg cursor-pointer hover:scale-[1.02] transition-all duration-300">
            <div>
                <img src={game_image} alt="" className="h-[220px] rounded-t-lg"/>
            </div>
            <span className="block truncate font-semibold text-primary text-center px-4 py-2">{shortTitle}</span>
        </Link>
    )
}

export default GameItem