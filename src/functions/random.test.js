const rand = require('./random')

test('More than 0', () => {
    expect(rand.randomNumber(1, 10)).toBeGreaterThan(0);
});

test('Less than 11', () => {
    expect(rand.randomNumber(1, 10)).toBeLessThan(11);
});