import Head from "next/head";
import { RiAdminFill } from "react-icons/ri";
import DashboardWrap from "../Components/DashboardComp/DashboardWrap";
import { Container } from "react-bootstrap";
import { Button } from "@mui/material";

export default function Tickets() {
  return (
    <>
      <Head>
        <title>Tickets | SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <DashboardWrap admin={false}>
        <div className="smokeWhite py-4">
          <Container>
            <div>
              <p className="h4">
                <RiAdminFill /> <span className="fw-bold">/</span>{" "}
                <span className="fw-bold">Tickets</span>
              </p>
            </div>
            <div>
              <table className="w-100 my-5">
                <thead
                  style={{ backgroundColor: "#1a4d80" }}
                  className="text-white"
                >
                  <tr>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Department
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Subject
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Requestor
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Last Reply
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--text-grey)" }}>
                    <td className="py-2 px-3">Web Development</td>
                    <td className="py-2 px-3">Web App</td>
                    <td className="py-2 px-3">User</td>
                    <td className="py-2 px-3">2h</td>
                    <td
                      className="py-2 px-3 "
                      style={{ color: "var(--green)" }}
                    >
                      Pending
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="my-2">
                <p className="h4">
                  <span className="fw-bold">Open Ticket</span>
                </p>
              </div>

              <div className="d-flex justify-content-center align-items-center flex-column py-4 my-2">
                <form className="w-100">
                  <input
                    type="text"
                    className="w-100 mb-2 py-1 px-2"
                    placeholder="Subject"
                  />
                  <textarea
                    className="w-100 mb-2 py-1 px-2"
                    placeholder="Message"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                  <Button
                    variant="contained"
                    className={`my-4`}
                  >
                    Open
                  </Button>
                </form>
              </div>
            </div>
          </Container>
        </div>
      </DashboardWrap>
    </>
  );
}
