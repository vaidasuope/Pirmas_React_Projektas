import React, {useState} from 'react'
import './hooks.css'

const Hooks = () => {
    const [skaicius, keistiSkaiciu] = useState(4)

    const mazintiSkaiciu = () => {
        keistiSkaiciu(buvesSkaicius => buvesSkaicius - 1)
    }
    const didintiSkaiciu = () => {
        keistiSkaiciu(buvesSkaicius => buvesSkaicius + 1)
    }
    return (
        <div className='m-2 hooks'>
            <button onClick={mazintiSkaiciu}>-</button>
            <span>{skaicius}</span>
            <button onClick={didintiSkaiciu}>+</button>
        </div>
    )
}
export default Hooks;