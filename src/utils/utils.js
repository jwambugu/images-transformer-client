export const errorHandler = (error) => {
  if (error.response === undefined) {
    return {
      severity: "fatal",
      status: 500,
      message: "Something went wrong. Please try again.",
      internalError: null,
    };
  }

  switch (error.response.status) {
    case 422: {
      const key = Object.keys(error.response.data.errors)[0];

      return {
        severity: "error",
        status: 422,
        message: error.response.data.errors[key][0],
        internalError: null,
      };
    }
    case 401: {
      return {
        severity: "fatal",
        status: 401,
        message: error.response.data.message,
        internalError: null,
      };
    }
    default: {
      return {
        status: 500,
        severity: "fatal",
        message: "Something went wrong. Please try again.",
        internalError: error.response.data,
      };
    }
  }
};
