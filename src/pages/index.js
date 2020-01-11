import Head from 'next/head';
import styled from 'styled-components';

const H1 = styled.h1`
  color: red;
`;

const Home = () => (
  <React.Fragment>
    <Head>
      <title>My page title</title>
      <meta
        name="description"
        content="A page's description, usually one or two sentences."
      />
    </Head>
    <H1>Hi</H1>
  </React.Fragment>
);

export default Home;

// New docs with static
// blog announcement https://nextjs.org/blog/next-9-1-7#redesigned-production-build-cli-output
// github proposal https://github.com/zeit/next.js/issues/9524
// released? and how to https://github.com/zeit/next.js/issues/9524#issuecomment-573275859
// docs pull request https://github.com/zeit/next.js/pull/9301/files
// https://github.com/zeit/next.js/blob/canary/docs/concepts/_data-fetching.md
// https://github.com/zeit/next.js/blob/canary/docs/concepts/_server-side-and-client-side.md
// lazy loading modules https://nextjs.org/learn/excel/lazy-loading-modules/lazy-loading

// Apollo https://github.com/zeit/next.js/tree/canary/examples/with-apollo
