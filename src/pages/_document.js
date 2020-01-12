/**
 * PWA Offline Support
 * https://dev.to/kylessg/achieving-a-perfect-100-google-lighthouse-audit-score-with-next-js-and-redux-5p0
 * https://www.npmjs.com/package/next-offline
 * https://github.com/pingboard/next-pwa-boilerplate
 * See _app.js
 */

/**
 * Favicons
 * https://realfavicongenerator.net/
 */

/**
 * Meta Tags
 * https://github.com/joshbuchea/HEAD
 */

import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(
        ctx,
      );
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Default EMMET HTML */}

          {/* Avoid duplication of meta tags */}
          {/* https://nextjs.org/docs/api-reference/next/head */}

          <meta charSet="UTF-8" key="charSet" />

          {/* https://nextjs.org/blog/next-8-0-4#default-viewport-meta-tag */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
            key="viewport"
          />
          <meta
            http-equiv="X-UA-Compatible"
            content="ie=edge"
            key="X-UA-Compatible"
          />

          {/* Step 5: Output the styles in the head  */}
          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
