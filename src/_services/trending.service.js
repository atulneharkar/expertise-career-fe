import 'whatwg-fetch';

import { setHeader } from '../_helpers';
import { SERVER_URL } from '../_constants';

export const trendingService = {
    addTrending,
    updateTrending,
    getAllTrendings,
    getTrendingById,
    setTrendingImage,
    removeTrending
};

function addTrending(trending) {
  return fetch(`${SERVER_URL}/trending/create`, setHeader('POST', trending, true)).then((response) => response.json());
}

function updateTrending(trendingId, trending) {
  return fetch(`${SERVER_URL}/trending/${trendingId}`, setHeader('PUT', trending, true)).then((response) => response.json());
}

function getAllTrendings() {
  return fetch(`${SERVER_URL}/trending/list/all`, setHeader('GET', null, true)).then((response) => response.json());
}

function getTrendingById(trendingId) {
  return fetch(`${SERVER_URL}/trending/${trendingId}`, setHeader('GET', null, true)).then((response) => response.json());
}

function removeTrending(trendingId) {
  return fetch(`${SERVER_URL}/trending/${trendingId}`, setHeader('DELETE', null, true)).then((response) => response.json());
}

function setTrendingImage(data, trendingId) {
  return fetch(`${SERVER_URL}/trending/trendingImage/${trendingId}`, setHeader('POST', data, true, true)).then((response) => response.json());
}