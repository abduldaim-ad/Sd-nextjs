import Head from "next/head";
import { Image } from "react-bootstrap";
import { FoundersPanel, HomeHeaderPanel } from "../Components/DisplayPanels";

export default function Home() {
  let founderImages = [
    { image: "/images/home/founder1.jpg" },
    { image: "/images/home/co-founder2.jpg" },
    { image: "/images/home/co-founder3.jpg" },
    { image: "/images/home/ceo4.jpg" },
  ];

  return (
    <div style={{ overflowX: "hidden" }}>
      <Head>
        <title>SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <HomeHeaderPanel />
      <PostHeaderQuote />

      <h3
        style={{
          textAlign: "center",
          color: "#545454",
          fontWeight: "bold",
          paddingBottom: "2%",
          paddingTop: "1%",
          textShadow: "2px 1px 10px #a1a1a1",
        }}
      >
        OUR RECENT PROJECTS
      </h3>
      <div className="row" style={{ padding: "0 5%" }}>
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <Image
            src={"/images/home/dummyImage.png"}
            className="w-100 shadow-1-strong rounded mb-4 shadowCustom"
            alt="Boat on Calm Water"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <Image
            src={"/images/home/dummyImage.png"}
            className="w-100 shadow-1-strong rounded mb-4 shadowCustom"
            alt="Boat on Calm Water"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <Image
            src={"/images/home/dummyImage.png"}
            className="w-100 shadow-1-strong rounded mb-4 shadowCustom"
            alt="Boat on Calm Water"
          />
        </div>
      </div>
      {/* Founders and CEO */}
      <h3
        style={{
          textAlign: "center",
          color: "#545454",
          fontWeight: "bold",
          paddingBottom: "2%",
          paddingTop: "3%",
          textShadow: "2px 1px 10px #a1a1a1",
        }}
      >
        FOUNDERS & CEO
      </h3>
      <div className="row" style={{ padding: "0 5%" }}>
        {founderImages.map((e, i) => {
          return <FoundersPanel key={i} image={e.image} />;
        })}
      </div>
    </div>
  );
}

const PostHeaderQuote = () => {
  return (
    <section className="first-time_quote">
      <div className="first-time">
        <p>
          <b>First time here?</b> Read our welcome message to have an
          introduction about our product and services.
        </p>
      </div>

      <div className="quote">
        <Image
          src={"/images/home/quote-symbol.png"}
          alt="Quote Symbol"
          className="quote-symbol"
        />
        <p className="quote-description">
          <span className="first-letter">S</span>ayabiDevs is a startup birthed
          by passionate and experienced domain experts and motivated individuals
          who love working together as a team, and is here to provide effective
          and on-time solutions to your IT problems.
        </p>
        <p
          className="mb-5"
          style={{ textAlign: "center", width: "150%", fontWeight: "bold" }}
        >
          Bilal Ahmer (Founder)
        </p>
      </div>
    </section>
  );
};
