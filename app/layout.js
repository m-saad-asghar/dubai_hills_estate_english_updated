import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/style.css"
import 'swiper/css'
import Script from 'next/script';
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { dM_Sans, } from '@/lib/font'
export const metadata = {
    title: 'Dubai Hills Estate EN - EMAAR',
    description: 'Project by Emaar',
}

export default function RootLayout({ children }) {
     return (
         <html lang="en" className={`${dM_Sans.variable}`}>
            <head>

              {/* Google Analytics */}
        <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-ZWL7SWGJFK"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZWL7SWGJFK');
        `}
      </Script>

      {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1133346741856150');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* End Meta Pixel Code */}
      </head>
            <body>
                {children}
            </body>
        </html>
    )
}
