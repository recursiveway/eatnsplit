import React from 'react'
import Button from './Button'

const AddFriendButton = ({ onclick }) => {
    return (
        // onClick = { setShow((show) => !show)}
        <Button data={"Add Friend"} onclick={onclick} />
    )
}

export default AddFriendButton