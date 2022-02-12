// Helper function to convert from px to rem (1rem = 16px by default for most browsers)
export const rem = (value, omitUnit = false) => {
    return `${(value / 16)}${omitUnit === true ? '' : 'rem'}`;
}

// Helper function to add alpha values to rgb and hsl colors
export const alpha = (color, opacity = 1) => {
    const hex_pattern = /^#([A-Fa-f0-9]{6})$/
    const hsl_pattern = /hsl\(\s*([0-2]?[0-9]{1,2}|3[0-5][0-9]|360)\s*,\s*(0|[1-9][0-9]?|100)%\s*,\s*(0|[1-9][0-9]?|100)%\s*\)/ // chose to be explicit on the digits to prevent evaluating wrong digits
    const hsl_pattern_with_opacity = /hsla?\(\s*([0-2]?[0-9]{1,2}|3[0-5][0-9]|360)\s*,\s*(0|[1-9][0-9]?|100)%\s*,\s*(0|[1-9][0-9]?|100)%\s*,\s*0(\.\d+)?|1\s*\)/
    let newColor = '';
    
    if (opacity < 0 || opacity > 1) {
        throw new Error('Opacity must be between 0 and 1 inclusive');
    }
    const formatted_opacity = +String(opacity).padStart(3, 0);

    if (color.includes('#')) {
        if (!hex_pattern.test(color)) throw new Error('Invalid hexadecimal - Value provided must follow the 6-character syntax (#FFFFFF)')
        else return `${color}${Math.floor(formatted_opacity * 255).toString(16).padStart(2, 0)}`;
    }


    if (hsl_pattern.test(color)) {
        newColor = color.slice(0, color.length - 1) + `,${formatted_opacity})`;
    } else if (hsl_pattern_with_opacity.test(color)) {
        let temp = color.split(',');
        newColor = temp.reduce((acc, item, index) => {
            if (index === temp.length - 1) return `${acc},${String(opacity)})`
            if (index > 0) return acc + ',' + item
            else return acc + item;
        }, '')
    }

    // console.log(newColor);
    if (!newColor) throw new Error('Invalid color provided - only hex and hsl are supported') // ignore rgb - might as well make it hsl :)
    return newColor;
}
