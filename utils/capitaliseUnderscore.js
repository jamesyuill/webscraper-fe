const capitaliseUnderscore = (string) => {
  const splitString = string.split(' ');

  const capitalised = splitString.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return capitalised.join('_');
};

module.exports = { capitaliseUnderscore };
