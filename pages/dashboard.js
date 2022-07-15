import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { ImCart } from "react-icons/im";
import { BsChatFill } from "react-icons/bs";
import Link from "next/link";
import DashboardWrap from "../Components/DashboardComp/DashboardWrap";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div>
        <DashboardWrap admin={false}>
          <div className="smokeWhite">
            <Container>
              <Row className="my-3">
                <OrdersBoxes
                  text="Orders"
                  number={4}
                  bgColor={"--red-shade"}
                  link="/orders"
                  icon={<ImCart className="h3" />}
                />

                <OrdersBoxes
                  text="Tickets"
                  number={5}
                  bgColor={"--green"}
                  link="/tickets"
                  icon={<BsChatFill className="h3" />}
                />
              </Row>
            </Container>
          </div>
        </DashboardWrap>
      </div>
    </>
  );
}

const OrdersBoxes = ({ link, number, text, icon, bgColor }) => {
  return (
    <Col lg={4} className="my-3">
      <Link href={`${link}`}>
        <a style={{ textDecoration: "none" }}>
          <div
            className="d-flex justify-content-between align-items-center text-white py-3 px-4"
            style={{
              backgroundColor: `var(${bgColor})`,
              borderRadius: "10px",
            }}
          >
            <div>{icon}</div>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <span className="h5 align-self-start fw-bold">{number}</span>
              <span className="h5 align-self-start">{text}</span>
            </div>
          </div>
        </a>
      </Link>
    </Col>
  );
};
