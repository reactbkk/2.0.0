import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

const ga = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-99360357-1', 'auto');
  ga('send', 'pageview');
`

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html lang='th'>
        <Head>
          <title>React Bangkok 2.0.0</title>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta
            property='og:image'
            content='https://reactbkk.github.io/2.0.0/static/og-image-v2.jpg'
          />
          <meta
            property='og:description'
            content='จากเสียงตอบรับที่ดีใน 2 ครั้งที่ผ่านมา กับ React Bangkok 1.0.0 และ 1.1.0 เราได้กลับมาอีกครั้งกับ React Bangkok 2.0.0 ที่ยิ่งใหญ่กว่าเดิม และอัดแน่นไปด้วยความรู้และประสบการณ์จาก Speakers มากมาย หัวข้อที่จะมีในวันงานแบ่งเป็น 2 track คือ Beginner Track สำหรับผู้ที่มีพื้นฐาน React น้อย และ Intermediate Track สำหรับผู้ที่เขียน React มาบ้างพอสมควรแล้ว ในวันที่ 3 มิถุนายน 2560 ณ สถาบันเทคโนโลยีปทุมวัน'
          />
          <meta property='og:title' content='React Bangkok 2.0.0' />
          <meta name='theme-color' content='#222' />
          <meta name='apple-mobile-web-app-title' content='ReactBKK' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <link rel='shortcut icon' type='image/png' href='static/favicon.png' sizes='32x32' />
          <link rel='apple-touch-icon' href='https://reactbkk.github.io/2.0.0/static/icon-ios-fullsize.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='https://reactbkk.github.io/2.0.0/static/icon-ios-152.png' />
          <link rel='apple-touch-icon' sizes='167x167' href='https://reactbkk.github.io/2.0.0/static/icon-ios-167.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='https://reactbkk.github.io/2.0.0/static/icon-ios-180.png' />
          <script dangerouslySetInnerHTML={{ __html: ga }} />
          <script defer src='static/service-worker-registration.js' />
          <link rel='manifest' href='static/manifest.json' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
