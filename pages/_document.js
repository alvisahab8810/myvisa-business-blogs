import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>     
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />            
            <meta name="description" content="Katen - Minimal Blog & Magazine HTML Theme" />
            <meta name="author" content="Hemant" /> 
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png" />
            {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous"/> */}
            {/* <!-- STYLES --> */}
            {/* <link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css" media="all"/> */}
            {/* <link rel="stylesheet" href="/css/all.min.css" type="text/css" media="all"/> */}
            {/* <link rel="stylesheet" href="/css/slick.css" type="text/css" media="all"/> */}
            {/* <link rel="stylesheet" href="/css/simple-line-icons.css" type="text/css" media="all"/> */}
            {/* <link rel="stylesheet" href="/css/style.css" type="text/css" media="all"/> */}


            {/* <link rel="icon" href="/favicon/favicon.ico" />           
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="64x64" href="/favicon/favicon-64x64.png" /> */}

            <script src="/js/jquery.min.js"></script>
            <script src="/js/popper.min.js"></script>
            <script src="/js/bootstrap.min.js"></script>
            <script src="/js/slick.min.js"></script>
            <script src="/js/jquery.sticky-sidebar.min.js"></script>
            <script src="/js/custom.js"></script>
            
        </Head>
        <body>
          <Main />
          <NextScript />            
        </body>
      </Html>
    )
  }
}

export default MyDocument