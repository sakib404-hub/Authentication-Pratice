import React from 'react';

const UserFound = ({ user }) => {
    const photo = user.photoURL;
    return (
        <div className='t-4 bg-green-100 text-green-700 px-5 py-3 rounded-lg shadow-md flex flex-col items-center space-y-2'>
            <div>
                <img
                    src={photo}
                    alt='Profile Picture'
                    className='w-16 h-16 rounded-full shadow' />
            </div>
            <h3 className='font-semibold text-lg'>{user.displayName}</h3>
            <p className='text-sm text-gray-700'>{user.email}</p>
        </div>
    );
};

export default UserFound;