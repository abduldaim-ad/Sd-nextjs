import Head from "next/head";
import { Container } from "react-bootstrap";
import DashboardWrap from "../../Components/DashboardComp/DashboardWrap";
import { RiAdminFill } from "react-icons/ri";
import { Button } from "@mui/material";
import Checkout from '../../models/CheckoutModel'

export default function Orders({pendingOrders}) {
  console.log("Ok")
  console.log(pendingOrders)

  return (
    <>
      <Head>
        <title>Orders | SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <DashboardWrap admin={true}>
        <div className="smokeWhite py-4">
          <Container>
            <div>
              <p className="h4">
                <RiAdminFill /> <span className="fw-bold">/</span>{" "}
                <span className="fw-bold">Pending Orders</span>
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
                      ID
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Order#
                    </th>
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
                      Client Name
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Payment Method
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Total
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Payment Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--text-grey)" }}>
                    <td className="py-2 px-3">2387498</td>
                    <td className="py-2 px-3">2387</td>
                    <td className="py-2 px-3">dd/mm/yyyy</td>
                    <td className="py-2 px-3">Name</td>
                    <td className="py-2 px-3">Jazz Cash</td>
                    <td className="py-2 px-3">100,000</td>
                    <td
                      className="py-2 px-3 "
                      style={{ color: "var(--green)" }}
                    >
                      Complete
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--text-grey)" }}>
                    <td className="py-2 px-3">2387498</td>
                    <td className="py-2 px-3">2387</td>
                    <td className="py-2 px-3">dd/mm/yyyy</td>
                    <td className="py-2 px-3">Name</td>
                    <td className="py-2 px-3">Jazz Cash</td>
                    <td className="py-2 px-3">100,000</td>
                    <td
                      className="py-2 px-3 "
                      style={{ color: "var(--green)" }}
                    >
                      Complete
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--text-grey)" }}>
                    <td className="py-2 px-3">2387498</td>
                    <td className="py-2 px-3">2387</td>
                    <td className="py-2 px-3">dd/mm/yyyy</td>
                    <td className="py-2 px-3">Name</td>
                    <td className="py-2 px-3">Jazz Cash</td>
                    <td className="py-2 px-3">100,000</td>
                    <td
                      className="py-2 px-3 "
                      style={{ color: "var(--green)" }}
                    >
                      Complete
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--text-grey)" }}>
                    <td className="py-2 px-3">2387498</td>
                    <td className="py-2 px-3">2387</td>
                    <td className="py-2 px-3">dd/mm/yyyy</td>
                    <td className="py-2 px-3">Name</td>
                    <td className="py-2 px-3">Jazz Cash</td>
                    <td className="py-2 px-3">100,000</td>
                    <td
                      className="py-2 px-3 "
                      style={{ color: "var(--green)" }}
                    >
                      Complete
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <div>
                <Button
                  className={`materialUiGreenButton my-2 text-white`}
                  style={{ backgroundColor: "green" }}
                >
                  Accept Orders
                </Button>

                <Button
                  className={`materialUiButton my-2 mx-3 text-white`}
                  style={{ backgroundColor: "green" }}
                >
                  Cancel Orders
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </DashboardWrap>
    </>
  );
}

export async function getStaticProps(){
  const res = await fetch('http://localhost:3000/api/pendingOrder')
  const data = await res.json()
  return{
    props:{
      pendingOrders:data
    }
  }
}