import "../styles/globals.css";
import '../styles/orders.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ContextProvider } from "../contexts/contextProvider";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const { pathname } = router;
  const adminPathChecker = pathname.split("/");

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
      <ContextProvider>
        <LoadingBar
          color="#E71B1E"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        {!adminPathChecker.includes("dashboard") &&
          !adminPathChecker.includes("admin") &&
          !adminPathChecker.includes("tickets") &&
          !adminPathChecker.includes("orders") && <Navbar />}
        <Component {...pageProps} />
        {!adminPathChecker.includes("dashboard") &&
          !adminPathChecker.includes("admin") &&
          !adminPathChecker.includes("tickets") &&
          !adminPathChecker.includes("orders") && <Footer />}
      </ContextProvider>
  );
}

export default MyApp;
