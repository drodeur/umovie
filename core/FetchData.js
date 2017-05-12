import fetch from 'isomorphic-fetch';

export default function fetchData(url, options) {
  return new Promise((resolve, failure) => {
    let status;
    fetch(url, options)
      .then(response => {
        status = response.status;
        return response.text();
      })
      .then((data) => {
        if (data) {
          try {
            data = JSON.parse(data);
          } catch(error) { 
            console.warn('Cannot evaluate JSON...');
          }
        }

        if (status >= 400) {
          failure({ status, data });
        } else {
          resolve(data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  });
};