import React from 'react'
import { UsersList } from './UsersList'
import { MessagesWindow } from './MessagesWindow'

export const ChatWindow = () => {
    return (
        <div className='ChatWindow-container'>
            <div className='ChatWindow-usersList'>
                <UsersList />
            </div>
            <div className='ChatWindow-messages'>
                <MessagesWindow />
            </div>
        </div>

    )
}
