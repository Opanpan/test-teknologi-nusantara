import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CustomCard from "./CustomCard";

export default function CardList() {
  const dataList = useSelector((state) => state.data);
  const api = dataList.data;
  console.log(api);

  return (
    <Row>
      {api.map((item, i) => {
        return (
          <Col className="d-flex justify-content-center">
            <CustomCard
              key={i}
              title={item.title}
              body={item.body}
              userId={item.userId}
            />
          </Col>
        );
      })}
    </Row>
  );
}
