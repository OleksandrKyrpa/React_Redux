import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate(-1)} className="back-btn">BACK</button>
            card repo
        </div>
    )
}

export default Card