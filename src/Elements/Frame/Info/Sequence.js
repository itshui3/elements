import React from 'react'
import './Sequence.css'

const Sequence = () => {
    return (
        <>
            <p className='sequence-label'>sequence</p>
            <div className='sequence-dataWrapper'>
                <div className='sequencedata-left'>
                    <p className='sequence-leftText'>1</p>
                </div>
                <div className='sequencedata-right'>
                    <p className='sequence-rightText'><mark>[1, 6, -1, 10]</mark></p>
                </div>
            </div>
        </>
    )
}

export default Sequence