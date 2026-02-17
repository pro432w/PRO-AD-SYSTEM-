import Script from 'next/script'

export const metadata = {
  title: 'PRO ADs SYSTEM',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f0f9ff', color: '#1e3a8a', fontFamily: 'sans-serif' }}>
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
