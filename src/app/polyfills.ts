// Polyfills for older browsers (IE11, old Safari, etc.)
// Imported at the top of layout.tsx before any other code

// Core-js polyfills for missing ECMAScript features
import "core-js/stable";

// Regenerator runtime for async/await and generators
import "regenerator-runtime/runtime";

// Web APIs polyfills
import "whatwg-fetch"; // fetch API
import "url-polyfill"; // URL/URLSearchParams
import "object.assign"; // Object.assign (IE11)
import "promise-polyfill/src/polyfill"; // Promise (IE11)