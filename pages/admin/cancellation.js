import Head from "next/head";
import { RiAdminFill } from "react-icons/ri";
import DashboardWrap from "../../Components/DashboardComp/DashboardWrap";
import { Container } from "react-bootstrap";

export default function Cancellation() {
  return (
    <>
      <Head>
        <title>Cancellation | SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <DashboardWrap admin={true}>
        <div className="smokeWhite py-4">
          <Container>
            <div>
              <p className="h4">
                <RiAdminFill /> <span className="fw-bold">/</span>{" "}
                <span className="fw-bold">Pending Cancellation</span>
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
                      Date
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Product/Services
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Reason
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Type
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Cancel By Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--text-grey)" }}>
                    <td className="py-2 px-3">dd/mm/yyyy</td>
                    <td className="py-2 px-3">AI</td>
                    <td className="py-2 px-3">No need more</td>
                    <td className="py-2 px-3">Intermediate</td>
                    <td
                      className="py-2 px-3 "
                      style={{ color: "var(--green)" }}
                    >
                      dd/mm/yyyy
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--text-grey)" }}>
                    <td className="py-2 px-3">dd/mm/yyyy</td>
                    <td className="py-2 px-3">AI</td>
                    <td className="py-2 px-3">No need more</td>
                    <td className="py-2 px-3">Intermediate</td>
                    <td
                      className="py-2 px-3 "
                      style={{ color: "var(--green)" }}
                    >
                      dd/mm/yyyy
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--text-grey)" }}>
                    <td className="py-2 px-3">dd/mm/yyyy</td>
                    <td className="py-2 px-3">AI</td>
                    <td className="py-2 px-3">No need more</td>
                    <td className="py-2 px-3">Intermediate</td>
                    <td
                      className="py-2 px-3 "
                      style={{ color: "var(--green)" }}
                    >
                      dd/mm/yyyy
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--text-grey)" }}>
                    <td className="py-2 px-3">dd/mm/yyyy</td>
                    <td className="py-2 px-3">AI</td>
                    <td className="py-2 px-3">No need more</td>
                    <td className="py-2 px-3">Intermediate</td>
                    <td
                      className="py-2 px-3 "
                      style={{ color: "var(--green)" }}
                    >
                      dd/mm/yyyy
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Container>
        </div>
      </DashboardWrap>
    </>
  );
}
