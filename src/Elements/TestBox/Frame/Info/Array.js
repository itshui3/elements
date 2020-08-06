import React from 'react'
import './Array.css'

const Array = () => {
    return (
        <>
            <p className='array-label'>array</p>
            <div className='array-dataWrapper'>
                <div className='arraydata-left'><p>1</p></div>
                <div className='arraydata-right'><p><mark>[5, 1, 22, 25, 6, -1, 8, 10]</mark></p></div>
            </div>
        </>
    )
}

export default Array