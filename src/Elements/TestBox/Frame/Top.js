import React from 'react'
import './Top.css'

const Top = () => {
    return (
        <>
            <div className='Top-cont'>
                <div className='Top-tests'>
                    <p>Tests</p>
                </div>
                <div className='Top-quickTest'>
                    <p>Quick Test</p>
                </div>
                <div className='Top-sandbox'>
                    <p className='Top-sandbox-text'>Sandbox</p>
                </div>
            </div>
        </>
    )
}

export default Top