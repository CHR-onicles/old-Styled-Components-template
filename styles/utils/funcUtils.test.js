import { alpha, rem } from './funcUtils'


test('Properly convert from px to rem', () => {
    expect(rem(0)).toBe('0rem');
    expect(rem(16)).toBe('1rem');
    expect(rem(48, true)).toBe('3');
    expect(rem(32, true) + 'em').toBe('2em');
});

test('Throw error if hex value is wrong', () => {
    expect(() => alpha('#g125ff')).toThrow(Error); // wrap expected error function to prevent it from executing and failing the test
});

test('Throw error if hex value is less than 6 characters', () => {
    expect(() => alpha('#fff')).toThrow(Error);
});

test('Throw error if hex value is more than 6 characters', () => {
    expect(() => alpha('#fffffff')).toThrow(Error);
});

test('Properly add opacity to hex values', () => {
    expect(alpha('#ffffff', 0)).toBe('#ffffff00');
});

test('Throw error if opacity argument for alpha function is greater than 1', () => {
    expect(() => alpha('hsl(0,0%,0%)', 2)).toThrow(Error);
});

test('Throw error if opacity argument for alpha function is less than 0', () => {
    expect(() => alpha('hsl(0,0%,0%)', -1)).toThrow(Error);
});

test('Throw error if rgb or any other wrong format is provided', () => {
    expect(() => alpha('rgb(0,0%,0%)', 0.3)).toThrow(Error);
});

test('Alpha function should accept and convert hsl values', () => {
    expect(alpha('hsl(0,0%,0%)', 0.2)).toBe('hsl(0,0%,0%,0.2)');
})

test('Alpha function should accept and convert hsl values with opacity already provided', () => {
    expect(alpha('hsl(0, 0%, 0%, 0.5)', .1)).toBe('hsl(0, 0%, 0%,0.1)'); // "hsl" and "hsla" are aliases and both support alpha values so I'll stick with "hsl"
})
