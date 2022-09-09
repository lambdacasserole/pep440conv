#!/usr/bin/env node

import getStdin from 'get-stdin';


/**
 * Transforms a regular semver string to a PEP-440 compatible version string.
 *
 * @param {string} semverStr the string to transform
 * @returns {string} the transformed string
 */
function toPep440(semverStr) {
    const tokens = semverStr.split('-');
    return [tokens[0], ...tokens.slice(1).map((t) => t.replace('.', ''))].join('-');
}


(async () => {
    const stdin = await getStdin();
    console.log(toPep440(stdin));
})();
