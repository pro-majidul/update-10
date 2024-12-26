import axios from 'axios';
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import useUsers from './useUsers';


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useSecureAxios = () => {
    const { logOutUser } = useUsers()
    const navigate = useNavigate()
    useEffect(() => {

        axiosSecure.interceptors.response.use(

            response => {
                return response
            }
            ,
            error => {
                if (error.status === 401 || error.status === 403) {
                    console.log('unauthorize !  set logout and Go to login page');
                    logOutUser()
                        .then(() => {
                            console.log('user log out please login again');
                            navigate('/login')
                        }).catch(error => {
                            console.log(error);
                        })

                }
                return Promise.reject(error)
            }

        )
    }, [])

    return axiosSecure
};

export default useSecureAxios;