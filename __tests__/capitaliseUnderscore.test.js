const { capitaliseUnderscore } = require('../utils/capitaliseUnderscore');

describe('capitaliseUnderscore', () => {
  test('should return a string', () => {
    const testStr = 'simon le bon';
    const result = capitaliseUnderscore(testStr);
    expect(typeof result).toBe('string');
  });

  test('should return a with first letters capitalised', () => {
    const testStr = 'simon';
    const result = capitaliseUnderscore(testStr);
    expect(result).toBe('Simon');
  });

  test('when passed a string with spaces, should capitalise every word and insert an underscore', () => {
    const testStr = 'simon jackson';
    const result = capitaliseUnderscore(testStr);
    expect(result).toBe('Simon_Jackson');
  });
  test('when passed a string with spaces, should capitalise every word and insert an underscore', () => {
    const testStr = 'simon le bon';
    const result = capitaliseUnderscore(testStr);
    expect(result).toBe('Simon_Le_Bon');
  });
});
