import Utils from "../helpers/Utils";

const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  if (!action.api || !action.types) {
    return next(action);
  }
  const {
    api,
    types: [START, SUCCESS, ERROR],
    data,
  } = action;

  dispatch({
    type: START,
    data,
  });

  return new Promise((resolve, reject) => {
    let requestCount = 0;
    api(data)
      .then((response) => {
        if (response.status === 201 || response.status === 204) {
          return true
        }
        if (response.status !== 200) {
          throw new Error(`${response.data.message || "unknown error"}\n`);
        } else {
          return response;
        }
      })
      .then((response) => {
          return response && response.data
            ? response.data
            : response
        }
      )
      .then((response) => {
        dispatch({
          data: response,
          type: SUCCESS,
          request: data,
        });

        resolve(response);
      })
      .catch((error) => {
        let errorMessage = Utils.validateResponse(error);
        const errorType = error.message;

        if (errorMessage === 10000) {
          requestCount++;

          if (requestCount < 10) {
            return api(data);
          }
        }
        if (errorMessage === 10000) {
          errorMessage =
            "No Internet Connection, Check your connection & restart the application\n";
        }

        if (errorMessage) {
          dispatch({
            type: ERROR,
            error: errorMessage,
          });

          return reject(errorMessage);
        }
      });
  });
};

export default apiMiddleware;