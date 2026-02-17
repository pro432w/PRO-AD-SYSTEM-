export const metadata = {
  title: 'PRO ADs SYSTEM',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
        {/* Force Load Monetag Script */}
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, z, s) {
                s.src = '//libtl.com/sdk.js';
                s.async = true;
                s.dataset.zone = z;
                s.dataset.sdk = 'show_10619740';
                d.head.appendChild(s);
              })(document, '10619740', document.createElement('script'));
            `
          }} 
        />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f0f9ff', color: '#1e3a8a', fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
