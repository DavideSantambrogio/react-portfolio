export const replacements = [
    { from: 'it��', to: 'ità' },
    { from: '1��', to: '1°' },
    { from: '��', to: 'è' }
];

export const replaceWords = (text, replacements) => {
    let correctedText = text;

    replacements.forEach(({ from, to }) => {
        correctedText = correctedText.replace(new RegExp(from, 'g'), to);
    });

    return correctedText;
};
