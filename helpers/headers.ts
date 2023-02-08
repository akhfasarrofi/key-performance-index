import axios from 'axios';

export const komtimAxiosIns = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_API_KOMTIM,
    timeout: 12000,
    headers: {
        'Application-Name': 'Web Komerce',
    },
});
