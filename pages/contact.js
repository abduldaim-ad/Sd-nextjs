import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { ContactForm, ContactAddress } from "../Components/ContactComp";
import { ImLocation } from "react-icons/im";
import styles from "../styles/Contact.module.css";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact | SayabiDevs</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>

            <div className={styles.headerBackImage}>
                <Container className="py-5 mb-5">
                    <h2 className="text-white fw-bold text-center my-5 py-5">
                        Describe your work and
                        <br />
                        Fill this contact form.
                    </h2>
                </Container>
            </div>

            <Container>
                <Row>
                    <Col lg={8}>
                        <ContactForm />
                    </Col>
                    <Col lg={4}>
                        <ContactAddress />
                    </Col>
                </Row>

                <div className="d-flex justify-content-center align-items-center">
                    <h3 className="fw-bold d-flex justify-content-center align-items-center my-3">
                        <ImLocation className={`${styles.colorRed} mx-3`} />
                        Locate us on Google Maps
                    </h3>
                </div>
                <div className="d-flex justify-content-center align-items-center my-2">
                    <iframe
                        title="Sayabi Devs"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d324694.47804974875!2d67.00375592228902!3d25.02944651806963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1656474757134!5m2!1sen!2s"
                        width="100%"
                        height="500"
                        style={{ border: "0", margin: "2% 10%" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </Container>
        </div>
    );
}
