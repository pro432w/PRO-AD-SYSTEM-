import Script from 'next/script'

export const metadata = {
  title: 'Verification',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <body style={{ margin: 0, padding: 0, background: '#eff6ff', fontFamily: 'sans-serif' }}>
        {children}
        <Script 
          src="//libtl.com/sdk.js" 
          strategy="lazyOnload" 
          data-zone="10619740" 
          data-sdk="show_10619740"
        />
      </body>
    </html>
  )
    }
