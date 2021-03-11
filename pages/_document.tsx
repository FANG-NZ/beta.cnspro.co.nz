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
                </body>
            </Html>
        )
    }
}

export default FFDocument