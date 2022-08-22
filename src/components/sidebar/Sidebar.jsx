import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import Credential from "../../service/Credential";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo" >winklix</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
            <Link to="/" style={{textDecoration:"none"}}>
        <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
            </Link>
          <p className="title"> ACTIVE LISTS</p>
          <Link to="/customer" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Customer</span>
            </li>
          </Link>
          <Link to="/serviceprovider" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>Service Provider</span>
          </li>
          </Link>
          <Link to="/category" style={{ textDecoration: "none" }}>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Category</span>
          </li>
          </Link>
          <Link to="/subcategory" style={{ textDecoration: "none" }}>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Sub Category</span>
          </li>
          </Link>
          <p className="title">ADD</p>
          <Link to="/add-cat" style={{textDecoration:"none"}}>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Add Category</span>
          </li>
          </Link>
          <Link to="/add-sub-cat" style={{textDecoration:"none"}}> 
          <li>
            <LocalShippingIcon className="icon" />  
            <span> Add Sub Category</span>
          </li>
          </Link>
          <Link to="/add-sub-cat" style={{textDecoration:"none"}}> 
          <li>
            <LocalShippingIcon className="icon" />  
            <span> Manage Price</span>
          </li>
          </Link>
          <p className="title">SERVICE</p>
          <Link to={`/activeserv`} style={{
            textDecoration:"none"
          }}>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Active Service Providers</span>
          </li>
          </Link>
          <Link to={`/inactiveserv`} style={{
            textDecoration:"none"
          }}>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>InActive Service Provider</span>
          </li>
          </Link>
          <Link to={`/rb`} style={{
            textDecoration:"none"
          }}>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Recent Booking</span>
          </li>
        </Link>
          <p className="title">PAYMENTS</p>
          <Link  to={`/alor`} style={{
            textDecoration:"none"
          }}>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>All Orders</span>
          </li>
          </Link>
          <Link to={`/contact`} style={{textDecoration:"none"}}>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Contact us</span>
          </li>
          </Link>
          {/* <Link to={`/about`} style={{textDecoration:"none"}}>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>About us</span>
          </li>
          </Link> */}
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <Link to="" onClick={()=>{
            Credential.logoutUserInFrontEnd();
            window.location.href="/"
          }}  style={{textDecoration:"none"}} >
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
