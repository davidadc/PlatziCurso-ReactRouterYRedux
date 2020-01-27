import getManifest from '../getManifest';

let files;

if (process.env.NODE_ENV === 'production') {
  files = getManifest();
} else {
  files = {
    'main.css': 'assets/app.css',
    'main.js': 'assets/app.js',
    'vendors.js': 'assets/vendor.js',
  };
}

const render = (html, preloadedState) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Platzi Video</title>
      <link rel="stylesheet" href="${files['main.css']}" type="text/css"></link>
    </head>
    <body>
      <div id="app">${html}</div>
      <script>
      // WARNING: See the following for security issues around embedding JSON in HTML:
      // https://redux.js.org/recipes/server-rendering/#security-considerations
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
        /</g,
        '\\u003c'
      )}
    </script>
      <script src="${files['main.js']}" type="text/javascript"></script>
      <script src="${files['vendors.js']}" type="text/javascript"></script>
    </body>
  </html>
  `;
};

export default render;
