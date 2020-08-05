import React from 'react'
// css
import './Bottom.css'
// compos
import { Array, Sequence } from './Info'

const Bottom = () => {
    return (
        <>
            <div className='bottom-cont'>
                <div className='bottom-dataBox'>
                    <Array />
                    <Sequence />
                </div>
            </div>
        </>
    )
}

export default Bottom