import React from 'react'
import Friend from './Friend';

const FriendsList = ({ friends, selectingPerson }) => {
    const friendsList = friends;
    const renderFriendList = friendsList.map((friend) => { return <Friend key={friend.id} friend={friend} selectingPerson={selectingPerson} /> })
    return (
        <div>{renderFriendList}</div>
    )
}

export default FriendsList