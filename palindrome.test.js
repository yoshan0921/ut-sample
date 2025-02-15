const isPalindrome = require('./palindrome');

test('racecar is a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
});

test('hello is not a palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
});

test('A man, a plan, a canal, Panama is a palindrome', () => {
    expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
});