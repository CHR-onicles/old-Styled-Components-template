// Current solution is to totally copy functions from original files into same file as test to prevent import and export errors

// Helper function to convert from px to rem (1rem = 16px by default for most browsers)
const rem = (value, omitUnit = false) => {
    return `${(value / 16)}${omitUnit === true ? '' : 'rem'}`;
}

// Helper function to add alpha values to rgb and hsl colors
const alpha = (color, opacity=1) => {
    if (color.includes('#')) {
        throw new Error('Alpha function does not support Hex values, just RGB and HSL currently.');
    }
    if (opacity < 0 || opacity > 1) {
        throw new Error('Opacity cannot be less than 0 or greater than 1');
    }
    if (color.includes('a')) {
        // Format: hsla(100, 100%, .8)
        if (color[color.length - 4] === '0') color = color.slice(0, color.length - 6) + ')'; // its 6 here and 5 in the next line because I'm factoring in the space after the comma.
        else color = color.slice(0, color.length - 5) + ')';
    }
    let newColor = color.slice(0, color.length - 1) + `, ${opacity} )`; // works without adding the letter 'a' to rgb or hsl
    // console.log(newColor);
    return newColor;
}

test('Properly convert from px to rem', () => { 
    expect(rem(0)).toBe('0rem');
 })