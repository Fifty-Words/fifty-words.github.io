import {useEffect} from "react"
import {useRouter} from "next/router"

import '../styles/app.css'

function MyApp({ Component, pageProps })
{
  const router = useRouter()

  // track page changes on Google Analytics
  useEffect(() => {
    const handleRouteChange = url => window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_V4_MEASUREMENT_ID, {
      page_path: url,
    })

    router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])


  return <Component {...pageProps} />
}

export default MyApp
