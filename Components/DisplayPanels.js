import { Button } from "@mui/material";
import { Image } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import styles from "../styles/Career.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

export function ServicesPanel({ imageSrc, imageAlt, title, desc, link }) {
  return (
    <Col>
      <div className="card py-3 px-3">
        <div className="card-body text-center p-4">
          <Image src={imageSrc} alt={imageAlt} width="50" />
          <h4 className="card-title">
            <span style={{ color: "rgb(25, 25, 25)" }}>{title}</span>
            <br />
          </h4>
          <p className="card-text">
            <span style={{ color: "rgb(89, 89, 89)" }}>{desc}</span>
            <br />
          </p>
        </div>
        <div className="text-end">
          <Link href={`${link}`}>
            <a style={{ color: "var(--logo-red)", textDecoration: "none" }}>
              See Package <FaLongArrowAltRight />
            </a>
          </Link>
        </div>
      </div>
    </Col>
  );
}

export function VacancyPanel({
  title,
  jobType,
  workExp,
  dateOpened,
  jobDesc,
  remoteJob,
}) {
  return (
    <Col md={11} className="my-4">
      <div className={`${styles.vacancyWrap} px-5 py-4`}>
        <Row>
          <Col md={4}>
            <h5 className={`${styles.vacancyTitle} my-3`}>{title}</h5>
            <p className="my-2">
              <span className="fw-bold">Job Type</span>: {jobType}
            </p>
            <p className="my-2">
              <span className="fw-bold">Work Experience</span>: {workExp}
            </p>
            <p className="my-2">
              <span className="fw-bold">Date Opened</span>: {dateOpened}
            </p>
          </Col>
          <Col md={5}>
            <p className="my-3">
              <span className="fw-bold">Job Description</span>:<br />
              {jobDesc}
            </p>
            <p className="my-2">
              <span className="fw-bold">Remote Job</span>: {remoteJob}
            </p>
          </Col>
          <Col
            md={3}
            className="d-flex justify-content-md-center justify-content-sm-start align-items-center"
          >
            <Button
              variant="contained"
              className={`${styles.applyBtn} materialUiButton my-4`}
            >
              Apply
            </Button>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

export function CoreValuesPanel({ imgSrc, desc }) {
  return (
    <Col
      md={3}
      className={`${styles.coreWrap} ${styles.vacancyWrap} d-flex justify-content-center align-items-center py-4 my-3`}
    >
      <div className="d-flex justify-content-center align-items-center flex-column py-3 px-3">
        <div
          md={2}
          className="d-flex justify-content-center align-items-center"
        >
          <Image
            src={imgSrc}
            height={64}
            width={64}
            alt="client Expectations"
          />
        </div>
        <div
          md={10}
          className="py-3 d-flex justify-content-center align-items-center"
        >
          <p className="fw-bold text-center my-2">{desc}</p>
        </div>
      </div>
    </Col>
  );
}

export function FoundersPanel({ image }) {
  return (
    <Col md={12} lg={3} className="mb-4 mb-lg-0">
      <Image
        src={image}
        className="w-100 shadow-1-strong rounded mb-4 shadowCustom rounded-circle"
        alt="Boat on Calm Water"
        style={{ border: "3px solid #E71B1E" }}
      />
    </Col>
  );
}

export function HomeHeaderPanel() {
  return (
    <section className="below-nav">
      <h3>SOFTWARE THAT DEFINES YOUR WORK!</h3>
      <p>
        Our vision is to support learning incentives and help customers and
        businesses alike flourish by providing a convenient means to satisfy
        project demands.
      </p>
    </section>
  );
}
