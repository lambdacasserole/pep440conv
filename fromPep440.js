#!/usr/bin/env node

import getStdin from 'get-stdin';


/**
 * Transforms a PEP-440 compatible version string token into a regular semver string token.
 *
 * @param {string} token the token to transform
 * @returns {string} the transformed token
 */
function fromPep440Token(token) {
    const chars = []
    let dotted = false
    token.split('').forEach((c)=> {
        if (/[0-9]/.test(c) && !dotted) {
            chars.push('.');
            dotted = true;
        }
        chars.push(c);
    })
    return chars.join('');
}

/**
 * Transforms a PEP-440 compatible version string into a regular semver string.
 *
 * @param {string} pepVersionStr the string to transform
 * @returns {string} the transformed string
 */
function fromPep440(pepVersionStr) {
    const tokens = pepVersionStr.split('-');
    return [tokens[0], ...tokens.slice(1).map(fromPep440Token)].join('-');
}


(async () => {
    const stdin = await getStdin();
    console.log(fromPep440(stdin));
})();
