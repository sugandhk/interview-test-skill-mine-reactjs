import { $axios } from "./axios.instance";

/**
 * @function getApiUrl: Set API request
 * @param {Object} data API request configuration
 */
function getApiUrl(data: { path: string }) {
  return `/${data?.path}`;
}

/**
 * @function getApiRequest: Set API request
 * @param {Object} data API request data
 */
function getApiRequest(data: {}) {
  const req = Object.assign({}, data);
  return req;
}

/**
 * @function To call get API's
 * @param param0 get data
 * @returns api response on success or error on fail
 */
const getDataApi = ({ path = "no-path-provided", data = {} }) => {
  try {
    return new Promise((resolve, reject) => {
      $axios
        .get(getApiUrl({ path }), {
          params: getApiRequest(data),
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  } catch (error) {
    return (error as Error).message;
  }
};

const getCookiesDataApi = ({ path = "no-path-provided", data = {} }) => {
  try {
    return new Promise((resolve, reject) => {
      $axios
        .get(getApiUrl({ path }), {
          params: getApiRequest(data),
          withCredentials: true
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  } catch (error) {
    return (error as Error).message;
  }
};
/**
 * @function To call post API's
 * @param param0 post data
 * @returns api response on success or error on fail
 */
const postDataApi = ({ path = "no-path-provided", data = {} }) => {
  try {
    return new Promise((resolve, reject) => {
      $axios
        .post(getApiUrl({ path }), getApiRequest(data))
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  } catch (error) {
    return (error as Error).message;
  }
};

/**
 * @function To call put API's
 * @param param0 put data
 * @returns api response on success or error on fail
 */
const putDataApi = ({ path = "no-path-provided", data = {} }) => {
  try {
    return new Promise((resolve, reject) => {
      $axios
        .put(getApiUrl({ path }), getApiRequest(data))
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  } catch (error) {
    return (error as Error).message;
  }
};

/**
 * @function To call delete API's
 * @param param0 delete data
 * @returns api response on success or error on fail
 */
const deleteDataApi = ({ path = "no-path-provided", data = {} }) => {
  try {
    return new Promise((resolve, reject) => {
      $axios
        .delete(getApiUrl({ path }), getApiRequest(data))
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  } catch (error) {
    return (error as Error).message;
  }
};

const patchDataApi = ({ path = "no-path-provided", data = {} }) => {
  try {
    return new Promise((resolve, reject) => {
      $axios
        .patch(getApiUrl({ path }), getApiRequest(data))
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  } catch (error) {
    return (error as Error).message;
  }
};

export { getDataApi, postDataApi,getCookiesDataApi, putDataApi, deleteDataApi, patchDataApi };
