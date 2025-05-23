import axios from "axios"

const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'HCitx9vUVehlHjE_eSe3KXCWcxgRLuPBQiV6Qy5BpQE';

export interface Photos {
    id: string;
    alt_description: string;
    urls: {
        small: string;
        regular: string;
        full: string;
        thumb: string;
    };
    user: {
        name: string;
        portfolio_url: string;
    };
}

export interface ForApi {
    total: number;
    total_pages: number;
    results: Photos[];
}

export const fetchPhotos = async (query: string, page: number) => {
    const { data } = await axios.get<ForApi>(`${BASE_URL}/search/photos`, {
        params: {
            page,
            query,
            client_id: ACCESS_KEY
        }
    });
    return data;
}