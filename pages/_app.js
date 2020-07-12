/* eslint-disable max-len */
// import '../assets/styles.less';
import React from 'react'
// import { NextSeo } from 'next-seo';
import App from 'next/app';
// import { Provider } from 'react-redux'
// import withRedux from 'next-redux-wrapper'
// import withReduxSaga from 'next-redux-saga'
// import createStore from '../app/reduxs/store'
import Layout from '../components/Layout';
import NProgress from 'nprogress';
import Router from 'next/router';
// import SEO from '../next-seo.config';
// import { appWithTranslation } from '../i18n';
import * as gtag from '../components/lib/gtag';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', (url) => {
  NProgress.done();
  gtag.pageview(url)
});
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    // console.log(pageProps,'==============2======??')
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
