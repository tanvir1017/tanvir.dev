export const errorHandler = (data, res, code = 400) => {
  res.status(code).json({
    success: false,
    errorMessage: data,
  });
};
export const resPonseHandler = (data, resMessage, res, code = 200) => {
  res.status(code).json({
    success: true,
    responseMessage: resMessage,
    data: data,
  });
};
export const fieldValidator = (fields) => {
  for (let key in fields) {
    if (fields[key]?.trim() === "") {
      throw `${key} required`;
    }
  }
};
