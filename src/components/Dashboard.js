import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import Header from "./Header";

const Dashboard = () => {
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `${process.env.REACT_APP_BASE_URL_PROD}/api/products/get`
      );
      console.log(data);
      setProducts(data);
    };
    fetchData();
  }, []);

  // const kart = useSelector((state) => state.cartVal);
  const dispatch = useDispatch();

  return (
    <div className="main_container">
      <Header />
      <section>
        <MDBContainer className="mt-3">
          <MDBRow className="mb-3">
            {products &&
              products?.data.map((product) => {
                return (
                  <MDBCol key={product.id} size="md-4">
                    <MDBCard>
                      <MDBCardImage
                        src={product.thumbnail}
                        position="top"
                        alt="..."
                      />
                      <MDBCardBody>
                        <MDBCardTitle>{product.title}</MDBCardTitle>
                        <MDBCardText>{product.description}</MDBCardText>
                        <MDBCardText>{product.price}</MDBCardText>
                        <MDBBtn onClick={() => dispatch(addToCart(product))}>
                          Add to Cart
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                );
              })}
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Dashboard;
