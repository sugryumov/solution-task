const removeUrlAnchor = (url) => {
  return url.split("#")[0];
};

module.exports = removeUrlAnchor;
