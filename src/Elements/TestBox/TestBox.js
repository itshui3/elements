import React from 'react'
import './TestBox.css'
// compos
import { Top, Bottom } from './Frame'

const TestBox = () => {

    return (
        <>
            <div className='testbox'>
                <div className='testbox-inner'>
                    <Top />
                    <Bottom />
                </div>
            </div>
        </>
    )
}

export default TestBox