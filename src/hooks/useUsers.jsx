import React, { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';

const useUsers = () => {
    const users = useContext(authContext);
    return users
};

export default useUsers;