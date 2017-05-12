import fetchData from 'project-core/FetchData';

export function getNextPage(pageNumber) {
  return {
    type: 'MOVIE_NEXT_PAGE',
    promise: fetchData(__API_URL__ + '/umovie.py', {method: 'GET'})
  };
}