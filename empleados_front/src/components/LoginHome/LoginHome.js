import NavbarLogout from "../navbar-logout/NavbarLogout";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Carrousel from "../carrousel/carrousel";
import Main from "../main/main";
import Products from "../products/products";
import { getSession } from "../helper/helper";

const Login_home = () => {
  return (
    <div>
      {getSession() ? <NavbarLogout /> : <Navbar />}
      <Header />
      <Carrousel />
      <Main />
      <hr></hr>
      <Products />
    </div>
  );
};

export default Login_home;
