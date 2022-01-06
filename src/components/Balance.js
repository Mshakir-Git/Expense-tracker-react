import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    const calc=(t)=>{
        let b=0
        t.forEach(tx => b+=tx.amount);
        return b;
    }

    return (
        <>
        <h4>
            Your Balance
        </h4>
        <h1 id="balance">
            ${calc(transactions)}
        </h1>
            
        </>
    )
}
