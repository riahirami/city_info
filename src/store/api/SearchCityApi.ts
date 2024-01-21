import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {endpoints} from '../../utils/endpoints';

import {HttpMethod} from '../../enums/global';
import {APIKEY} from '../../utils/constants';

export const searchCityApi = createApi({
  reducerPath: 'searchCityApi',
  baseQuery: fetchBaseQuery(),
  endpoints: builder => ({
    getConversation: builder.query({
      query: data => ({
        url: endpoints.GET_CITY_DETAILS,
        method: HttpMethod.Get,
        headers: APIKEY,
        params: data,
      }),
      transformResponse: response => {
        return response;
      },
      transformErrorResponse: response => {
        return response;
      },
    }),
  }),
});
export const {useLazyGetConversationQuery} = searchCityApi;
