export const processParams = (params) => {
    const searchString = Object.entries(params)
        .filter(param => {
        // accept numbers and booleans even if falsy
        if (typeof param[1] === 'number' || typeof param[1] === 'boolean') {
            return true;
        }
        // don't accept any other falsy values
        else if (!param[1]) {
            return false;
        }
        // don't accept empty arrays
        else if (param[1].length && param[1].length === 0) {
            return false;
        }
        // don't accept empty objects
        else if (!Object.keys(param).length) {
            return false;
        }
        else {
            return true;
        }
    })
    .map(param => `${param[0]}=${encodeURIComponent(param[1])}`)
    .join('&');

    return searchString.length
    ? `?${searchString}`
    : '';
};