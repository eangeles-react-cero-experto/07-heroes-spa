export const getQueryParams = (queryParamsAsString) => {
  const urlSearchParams = new URLSearchParams(queryParamsAsString);
  const queryParamsObject = {};

  for (const [key, value] in urlSearchParams) {
    queryParamsObject[key] = value;
  }

  return queryParamsObject;
};
