import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class FFDocument extends Document{
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html className="cnspro">
                <Head />
                <body>
                    <Main />
                    <NextScript />

                    {/* Include jquery here */}
                    <script src="/js/jquery.min.js"></script>
                    {/* <script src="/js/revolution/js/jquery.themepunch.tools.min.js"></script> */}
                    <script src="/js/revolution/js/source/jquery.themepunch.tools.min.js"></script>
                    <script src="/js/revolution/js/jquery.themepunch.revolution.min.js"></script>


                    {/* <script type="text/javascript" src="/js/revolution/js/extensions/revolution.extension.video.min.js"></script>
                    <script type="text/javascript" src="/js/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
                    <script type="text/javascript" src="/js/revolution/js/extensions/revolution.extension.actions.min.js"></script>
                    <script type="text/javascript" src="/js/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
                    <script type="text/javascript" src="/js/revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
                    <script type="text/javascript" src="/js/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
                    <script type="text/javascript" src="/js/revolution/js/extensions/revolution.extension.migration.min.js"></script>
                    <script type="text/javascript" src="/js/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
                    <script type="text/javascript" src="/js/revolution/js/extensions/revolution.extension.carousel.min.js"></script> */}
                    {/* <script src="/js/revolution/js/extensions/revolution.extension.navigation.min.js"></script> */}

                    <script src="/js/config-revolution.js"></script>
                </body>
            </Html>
        )
    }
}

export default FFDocument