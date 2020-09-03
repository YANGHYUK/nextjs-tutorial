import "styles/globals.css"
// import { withRedux, createWrapper, MakeStore } from "next-redux-wrapper"
// import withReduxSaga from "next-redux-saga"
import wrapper from "store/configure"

function MyApp({ Component, pageProps }) {
  console.log({ Component, pageProps })
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
