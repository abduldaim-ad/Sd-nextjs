import SideBar from "./SideBar";
import TopBar from "./TopBar";

export default function DashboardWrap({ children, admin }) {
  return (
    <>
      <SideBar admin={admin} />
      <TopBar />
      {children}
    </>
  );
}
