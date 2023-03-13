import React from "react";
import {
  Row,
  Col,
  Button,
} from "reactstrap";

import { BsCurrencyRupee } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";

const ProductCard = () => {
  return (
    <div>
      <Row>
        <Col>
          <img
            src="https://i.dummyjson.com/data/products/1/1.jpg"
            alt="this is product imae"
            className="mt-3"
          />
        </Col>
        <Col className="text-start">
          <div className="title">
            <p className="h5 mt-3">iPhone 9</p>
            <p>An apple mobile which is nothing like apple</p>
          </div>

          <div className="price mt-5">
            <span className="h4 text-starts">
              <BsCurrencyRupee />
              549
              <div className="rate mt-3 my-auto">
                <p>
                  4.5 <BsFillStarFill />
                </p>
              </div>
            </span>
          </div>

          <Button className="mt-3">Add To Cart</Button>
        </Col>
      </Row>
    </div>
  );
};

export default ProductCard;
