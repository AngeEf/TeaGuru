import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export default function Layout({ initState }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.initState=${JSON.stringify(initState)}`,
          }}
        />
        <script defer src="/js/app.js" />
        <script defer src="/js/vendor.js" />
        {/* maptiler */}
        <script src="https://cdn.maptiler.com/maplibre-gl-js/v2.2.0-pre.2/maplibre-gl.js" />
        <link href="https://cdn.maptiler.com/maplibre-gl-js/v2.2.0-pre.2/maplibre-gl.css" rel="stylesheet" />
        {/* mapbox */}
        <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" />
        {/* bootstrap */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        {/* <link href="/styles/main.css" rel="stylesheet" /> */}
        <link href="/App.css" rel="stylesheet" />

        <title>React SSR</title>
      </head>
      <body>
        <div id="root">
          <StaticRouter location={initState.path}>
            <App {...initState} />
          </StaticRouter>
        </div>
      </body>
    </html>
  );
}
