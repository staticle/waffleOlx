import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
const IndexPage = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default IndexPage;
