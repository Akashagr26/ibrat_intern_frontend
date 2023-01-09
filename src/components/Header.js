import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, resetCart } from "../features/cartSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("token");
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(resetCart());
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleCart = (e) => {
    e.preventDefault();
    try {
      if (user) {
        navigate("/cart");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { cart, totalQuantity } = useSelector((state) => state.cartVal);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  // useEffect(() => {
  //   dispatch(resetCart());
  // }, [handleLogout]);

  return (
    <>
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <Link className="" to="/">
              Dashboard
            </Link>
          </MDBNavbarBrand>
          <div>
            <MDBBtn outline onClick={handleCart}>
              Cart {totalQuantity}
            </MDBBtn>
            <MDBBtn outline onClick={handleLogout}>
              Logout
            </MDBBtn>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Header;
