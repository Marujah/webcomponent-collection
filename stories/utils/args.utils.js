export const convertArgs = (args) => Object.keys(args).map(e => {
    if (typeof args[e] === 'function') {
      return;
    }
    return `${e}="${args[e]}" `;
  }).toString().replace(/\s*,\s*/gi, ' ');