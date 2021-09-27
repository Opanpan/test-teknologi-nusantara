import { Col, Card } from "react-bootstrap";

export default function CustomCard(props) {
  return (
    <Card style={{ width: "18rem" }} className="mt-4">
      <Card.Body>
        <Card.Title style={{ fontWeight: "800" }}>{props.title}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">User ID {props.userId}</small>
      </Card.Footer>
    </Card>
  );
}
