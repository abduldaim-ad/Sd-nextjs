import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { ImBlocked } from "react-icons/im";
import { BsChatQuote } from "react-icons/bs";
import styles from "../../styles/Dashboard.module.css";
import { GrClose, GrServices } from "react-icons/gr";
import Link from "next/link";
import { useStateContext } from "../../contexts/contextProvider";
import { Image } from "react-bootstrap";

export default function SideBar({ admin }) {
  const { sidebarIsOpened, setSidebarIsOpened } = useStateContext();

  return (
    <div>
      <div
        className={`position-fixed ${styles.sideBarWrap} ${
          sidebarIsOpened && "activeSidebar"
        }`}
      >
        <div className="d-flex justify-content-between align-items-center py-2 px-2">
          <Link href="/">
            <a>
              <Image
                src="/images/home/logo.png"
                style={{ height: "70px" }}
                alt="Logo"
              />
            </a>
          </Link>
          <button
            className={`my-2 px-2 mx-2 h5 fw-bold  ${styles.buttonEffects}`}
            onClick={() => {
              setSidebarIsOpened(false);
            }}
          >
            <GrClose />
          </button>
        </div>

        <div className="my-2">
          <div>
            {admin && (
              <>
                <p className="fw-lighter mx-3" style={{ opacity: "0.6" }}>
                  DASHBOARD
                </p>
                <SideBarButton
                  text={"Dashboard"}
                  reLink="/admin/dashboard"
                  icon={<AiOutlineHome className="h5" />}
                />
                <SideBarButton
                  text={"Pending Orders"}
                  reLink="/admin/pending-orders"
                  icon={<FiShoppingCart />}
                />
                <SideBarButton
                  text={"Tickets Awaiting"}
                  reLink="/admin/tickets"
                  icon={<BsChatQuote />}
                />
                <SideBarButton
                  text={"Cancellation"}
                  reLink="/admin/cancellation"
                  icon={<ImBlocked />}
                />
              </>
            )}
            {!admin && (
              <>
                <p className="fw-lighter mx-3" style={{ opacity: "0.6" }}>
                  DASHBOARD
                </p>
                <SideBarButton
                  text={"Dashboard"}
                  reLink="/dashboard"
                  icon={<AiOutlineHome className="h5" />}
                />
                <SideBarButton
                  text={"Orders"}
                  reLink="/orders"
                  icon={<FiShoppingCart />}
                />
                <SideBarButton
                  text={"Open new Ticket"}
                  reLink="/tickets"
                  icon={<BsChatQuote />}
                />
                <p className="fw-lighter mx-3" style={{ opacity: "0.6" }}>
                  SHORTCUT
                </p>
                <SideBarButton
                  text={"Order a new Service"}
                  reLink="/services"
                  icon={<GrServices />}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const SideBarButton = ({ text, reLink, icon }) => {
  return (
    <div className="px-2">
      <Link href={`${reLink}`}>
        <a className={styles.buttonText}>
          <button
            className={`${styles.buttonEffects} ${styles.buttonHover} my-2 py-2 px-4 w-100 d-flex justify-content-start align-items-center flex-row`}
          >
            {icon}
            <p className="h5 mx-3">{text}</p>
          </button>
        </a>
      </Link>
    </div>
  );
};
