import React, { useState } from 'react'
import Button from './Button'

const AddFriend = ({ friends, setFriends, setShow }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.pravatar.cc/48');
    return (
        <form className='form-add-friend' onSubmit={(e) => {

            e.preventDefault();

            if (!name || !image) return;

            const id = crypto.randomUUID()
            const newFriend = {
                id,
                name,
                image: `${image}?=${id}`,
                balance: 0,
            }
            setFriends((friends) => [...friends, newFriend])

            setImage('https://i.pravatar.cc/48')
            setName('')
            setShow((show) => !show)
        }
        }>
            <label>Friend Name</label>
            <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <label>Image URL</label>
            <input type='text' placeholder='Image' value={image} onChange={(e) => setImage(e.target.value)} />

            <Button data="Add" />
        </form>
    )
}

export default AddFriend