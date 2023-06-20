import React from 'react'
import Button from './Button'

const Friend = ({ friend, selectingPerson }) => {
    const handleClick = () => { selectingPerson(friend) }
    return (
        <li>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>

            {friend.balance < 0 && <p className='red'>You owe {friend.name} {Math.abs(friend.balance)}</p>}
            {friend.balance > 0 && <p className='green'>You have to collect $ {friend.balance} from your friends</p>}
            {friend.balance === 0 && <p >You You don't owe anyone anything</p>}

            <Button data="Select" onclick={handleClick} />
        </li>
    )
}

export default Friend