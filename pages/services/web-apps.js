import { Row } from "react-bootstrap";
import OrderServices, { CantFind } from "../../Components/ServicesOrder";

export default function WebApps() {
  const webAppsPackages = [
    {
      popular: false,
      advantages: [
        "Vexillologist pitchfork",
        "Vexillologist pitchfork",
        "Vexillologist pitchfork",
        "Vexillologist pitchfork",
      ],
      tag: "STANDARD",
      price: "$38",
      link: "/checkout/web-app-standard",
    },
    {
      popular: true,
      advantages: [
        "Vexillologist pitchfork",
        "Vexillologist pitchfork",
        "Vexillologist pitchfork",
        "Vexillologist pitchfork",
      ],
      tag: "PRO",
      price: "$100",
      link: "/checkout/web-app-pro",
    },
    {
      popular: false,
      advantages: [
        "Vexillologist pitchfork",
        "Vexillologist pitchfork",
        "Vexillologist pitchfork",
        "Vexillologist pitchfork",
      ],
      tag: "BUSINESS",
      price: "$200",
      link: "/checkout/web-app-business",
    },
  ];
  return (
    <div className="pt-4 px-3">
      <div className="w-100 text-center py-2 mt-2 mb-4">
        <h2 className="my-2 fw-bold">Pricing</h2>
        <p className="my-2">Checkout our pricing according to market</p>
      </div>

      <Row className="d-flex justify-content-evenly align-items-center">
        {webAppsPackages.map((e, i) => {
          return (
            <OrderServices
              key={i}
              popular={e.popular}
              advantages={e.advantages}
              tag={e.tag}
              price={e.price}
              link={e.link}
            />
          );
        })}
      </Row>
      <CantFind />
    </div>
  );
}
