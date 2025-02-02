import React from 'react';

const Comment = ({ data }) => {
    const { user, comment, replies } = data;
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
            <img className='w-12 h-12' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
            <div className='px-3'>
                <p className='font-bold'>
                    {user}
                </p>
                <p>
                    {comment}
                </p>
            </div>
        </div>
    );
}

export default Comment;