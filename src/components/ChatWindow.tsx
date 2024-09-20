import React from 'react'
import { UsersList } from './UsersList'
import { MessagesWindow } from './MessagesWindow'
import { ProfilePage } from './ProfilePage'

export const ChatWindow = () => {
    return (
        <div className='ChatWindow-container'>
            <div className='ChatWindow-usersList'>
                <UsersList />
                <ProfilePage />
            </div>
            <div className='ChatWindow-messages'>
                <MessagesWindow />
            </div>
        </div>

    )
}
