import { Button } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Link from "next/link";
import { FaQuestion } from "react-icons/fa";
import styles from "../styles/Career.module.css";

export default function OrderServices({
  tag,
  price,
  popular,
  advantages,
  link,
}) {
  return (
    <Col
      md={3}
      className="position-relative"
      style={{ border: "2px solid var(--logo-red)", borderRadius: "10px" }}
    >
      <p className="my-1 mt-3">{tag}</p>
      <h2 className="fw-bold my-1">{price}</h2>
      <hr />

      {advantages.map((e, i) => {
        return (
          <p key={i} className="my-1">
            <span className="h5 mx-2" style={{ color: "green" }}>
              <BsFillCheckCircleFill />
            </span>{" "}
            {e}
          </p>
        );
      })}

      <Link href={`${link}`}>
        <Button variant="contained" className={`materialUiButton my-4 w-100`}>
          Check Out
        </Button>
      </Link>

      {popular && (
        <span
          className="position-absolute text-white py-1 px-2"
          style={{
            top: "0",
            right: "0",
            backgroundColor: "var(--logo-red)",
            borderEndStartRadius: "15px",
            borderTopRightRadius: "10px",
          }}
        >
          POPULAR
        </span>
      )}
    </Col>
  );
}

export const CantFind = () => {
  return (
    <Row className={`${styles.bgLightGrey} mt-4 pb-4`}>
      <Col
        md={12}
        className="d-flex justify-content-center align-items-center mt-4"
      >
        <p className="fs-6 fw-bold">
          Stucked
          <FaQuestion className={`${styles.colorRed} `} />
        </p>
      </Col>
      <Col
        md={12}
        className="d-flex justify-content-center align-items-center mb-3"
      >
        <div>
          <h1 className="fw-bold">
            Can&#39;t find what you&#39;re looking for?
          </h1>
        </div>
      </Col>
      <Row className="d-flex justify-content-center align-items-center ">
        <Col
          md={7}
          className="d-flex justify-content-center align-items-center mb-3"
        >
          <p className="text-center">
            We&#39;re always looking for people with unique skills. Send us your
            CV and we&#39;ll get in touch when we have an opening that matches
            your expectations. Let&#39;s stay in touch by subscribing to our
            newsletter.
          </p>
        </Col>
        <Col
          md={12}
          className="d-flex justify-content-center align-items-center"
        >
          <Button className={`${styles.applyBtn} materialUiButton mt-2 mb-4`}>
            Get in Touch.
          </Button>
        </Col>
      </Row>
    </Row>
  );
};
