import { useQuery } from 'react-query';

import { HomeResponse } from './home-response.type';
import { ResponseError, ApiPath } from '../../shared';
import { api } from '../api';

const getHome = () => api.get<HomeResponse>(ApiPath.HOME).then(({ data }) => data);

export const useHome = () => useQuery<HomeResponse, ResponseError>('get-home', getHome);
