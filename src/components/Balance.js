import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    const calc=(t)=>{
        let b=0
        t.forEach(tx => b+=tx.amount);
        return b;
    }
    const sign=calc(transactions)<0?"-":"+"

    return (
        <>
        <h4>
            Your Balance
        </h4>
        <h1 id="balance">
            {sign}${Math.abs(calc(transactions))}
        </h1>
            
        </>
    )
}
