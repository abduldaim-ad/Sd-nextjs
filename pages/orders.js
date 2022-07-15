import Head from "next/head";
import { Container } from "react-bootstrap";
import DashboardWrap from "../Components/DashboardComp/DashboardWrap";
import { FaUserAlt } from "react-icons/fa";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Orders({pendingOrders}) {
  console.log(pendingOrders)
  return (
    <>
      <Head>
        <title>Orders | SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <DashboardWrap admin={false}>
        <div className="smokeWhite py-4">
          <Container>
            <div>
              <p className="h4">
                <FaUserAlt /> <span className="fw-bold">/</span>{" "}
                <span className="fw-bold">Orders</span>
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
                      Client Name
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Email
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Credit Card No
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Expiration
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      CVV
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Product Name
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Product Requirements
                    </th>
                    <th
                      style={{ borderRight: "2px solid white" }}
                      className="text-center py-2 px-3"
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                {
                  pendingOrders.map((data)=>{
                    const {productName,price,email,requirements,nameOnCard,creditCardNo,expiration,cVV} = data;
                    return(
                    <tr style={{ borderBottom: "1px solid var(--text-grey)" }}>
                      <td className="py-2 px-3">{nameOnCard}</td>
                      <td className="py-2 px-3">{email}</td>
                      <td className="py-2 px-3">{creditCardNo}</td>
                      <td className="py-2 px-3">{expiration}</td>
                      <td className="py-2 px-3">{cVV}</td>
                      <td className="py-2 px-3">{productName}</td>
                      <td className="py-2 px-3">
                        <input type="checkbox" id="active" for="active"/>
                        {/* <input type="checkbox" className="close"/> */}
                        {`Check to See ${productName}'s Product Requirements`}
                        {/* <label for="active" class="menu-btn"><span></span></label> */}
                        <label for="active" class="close"></label>
                        <div class="wrapper" style={{color:"var(--smoke-white)"}}>
                        <h5 style={{float:"right"}}>Uncheck the Respective Checkbox to Hide Overlay</h5>
                        <br/><br/>
                        {requirements}
                        </div>
                        <div class="content">
                              <div class="title">
                        Fullscreen Overlay Navigation Bar</div>
                        <p>
                        (Hamburger Menu-2)</p>
                        </div>
                      </td>
                      <td
                        className="py-2 px-3 "
                        style={{ color: "var(--green)" }}
                      >
                        {price}
                      </td>
                  </tr>
                    );
                  })
                }
                </tbody>
              </table>

              <div>
                <Link href="/services">
                  <Button
                    className={`materialUiGreenButton my-2 text-white`}
                    style={{ backgroundColor: "green" }}
                  >
                    Open New Order
                  </Button>
                </Link>
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
  return {
    props:{
      pendingOrders:data
    }
  }
}