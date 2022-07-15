import Head from "next/head";
import { Image } from "react-bootstrap";
import { ServicesPanel } from "../../Components/DisplayPanels";

export default function Home() {
  let ourServices = [
    {
      imageSrc: "/images/services/images.png",
      imageAlt: "Mobile Development",
      title: "Mobile Application",
      desc: "Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. Mobile applications are essential these days for every business. We provide all type of mobile development including IOS, Android&nbsp; &nbsp;and Windows.",
      link: "/services/mobile-apps"
    },
    {
      imageSrc:
        "/images/services/transparent-web-development-icon-web-design-icon-design-icon-5da1ac0687e196.1781253615708764225566.jpg",
      imageAlt: "Web Development",
      title: "Web App",
      desc: "Web app development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services. responsive web applications are essentials for every business.",
      link: "/services/web-apps"
    },
    {
      imageSrc: "/images/services/dsci.png",
      imageAlt: "Content Writing Data Science",
      title: "Content Writing Data Science",
      desc: "Getting a credible data science writing online can be difficult if you don’t know how to research it. If you are looking for competent personnel, you are in right place.Our writers have vast experience in data collection; hence they can gather both primary and secondary data with ease.We offer top-quality services; therefore, we compose are within your instructions",
      link: "/services/data-science"
    },
    {
      imageSrc: "/images/services/ai.png",
      imageAlt: "AI and Machine learning",
      title: "AI and Machine learning",
      desc: "We provide AI software development services create custom artificial intelligence solutions that provide insights and automate processes for your business.",
      link: "/services/ai"
    },
  ];

  return (
    <div>
      <Head>
        <title>Services | SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div style={{ backgroundColor: "#ff0018" }}>
        <div className="container">
          <div className="row">
            <div className="col my-5" style={{ color: "var(--bs-white)" }}>
              <h1 className="text-center text-primary">
                <strong>
                  <span style={{ color: "rgb(255, 255, 255)" }}>
                    Our Services
                  </span>
                </strong>
              </h1>
              <p
                className="fw-light text-center"
                style={{
                  padding: "0px",
                  paddingLeft: "48px",
                  paddingRight: "74px",
                }}
              >
                Retaining customer base is important for any enterprise, it
                takes great effort to make good customer relationship and minute
                error can ruin it. Owing to our outstanding customer service we
                have maintained the 85 % customer retention rate. We, the best
                IT service provider company in Noida help your business in
                getting loyalty back by transforming into latest advanced IT
                technology. Our BA, Designing, Developing, Support and
                Consultant team are always at your service to assist you in
                consultant, implementation, integration and support. We are the
                trustful answer for enterprises that are inclining towards
                digital era. Digitizing your work help in overall 25 % reduction
                in the core capital of the company and hence better ROI.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Image
              src="/images/services/service.jpg"
              style={{
                "filter ": "blur(0px)",
                opacity: "0.58",
                paddingLeft: "0px",
                marginLeft: "-13px",
              }}
              width="102%"
              alt="our services"
            />
          </div>
        </div>
      </div>
      <div className="container py-4 py-xl-5">
        <div className="row gy-4 d-flex justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3">
          {ourServices.map((e, i) => {
            return (
              <ServicesPanel
                key={i}
                imageSrc={e.imageSrc}
                imageAlt={e.imageAlt}
                title={e.title}
                desc={e.desc}
                link={e.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
