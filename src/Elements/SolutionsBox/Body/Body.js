
import React from 'react'
import './Body.css'

const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21
]

const code = `
    function nodeDepths(root, depth = 0) {
        if (root === null) return 0;
        return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
    }
`


const Body = () => {

    return (
        <>
            <div className='solutions_body'>
                <div className='solutions_tab'>
                    <div className='solutions_tab_1'>Solution 1</div>
                    <div className='solutions_tab_2'>Solution 2</div>
                </div>

                <div className='solutions_sandbox'>
                    <div className='sandbox_nums'>
                        {
                            numbers.map((n, i) => (
                            <p 
                            className='sandbox_loc'
                            key={i}
                            >{n}</p>
                            ))
                        }
                    </div>
                    <div className='sandbox_code'>
                        { code }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body