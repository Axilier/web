import axios from 'axios';

export const apiUrl =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:4000'
        : 'https://api.axilier.com';

export const getUser = async () =>
    axios.get(`http://localhost:4000/user/me`, { withCredentials: true });

export const getGoogleAccount = () =>
    axios.get(`${apiUrl}/user/me/google`, { withCredentials: true });

export const getGoogleProfilePic = () =>
    axios.get(`${apiUrl}/user/google/profile_pic`, { withCredentials: true });

export const getLocalAccount = () =>
    axios.get(`${apiUrl}/user/me/local`, { withCredentials: true });

export const logout = () =>
    axios.get(`${apiUrl}/auth/logout`, { withCredentials: true });

export const getGoogleFileList = () =>
    axios.get(`${apiUrl}/google/list_files`, {
        withCredentials: true,
    });

export const googleEntry = (type: 'connect' | 'entry') => {
    window.open(`${apiUrl}/user/google?type=${type}`, '_self');
};

export const loginRequest = (email: string, password: string) =>
    axios.post(
        `${apiUrl}/user/local/login`,
        {
            email,
            password,
        },
        { withCredentials: true }
    );

export const localRegister = (email: string, password: string) =>
    axios.post(
        `${apiUrl}/user/local/register`,
        {
            email,
            password,
        },
        { withCredentials: true }
    );
