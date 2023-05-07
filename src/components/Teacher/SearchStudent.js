import { Button, Card, Form, InputGroup, Table } from "react-bootstrap";
import PaginationCustom from "../../layouts/Common/PaginationCustom";

const SearchStudent = () => {
    // useEffect() 

  return (
    <>
      <Card className="shadow mt-2 ">
        <Card.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text>
          Tìm kiếm sinh viên
        </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Nhập mssv, họ tên..."
              className="me-2"
              aria-label="Search"
            />
            <Button type="submit" className="btn btn-primary">
              Tìm
            </Button>
          </InputGroup>
        </Card.Body>
      </Card>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    <PaginationCustom/>
    </>
  );
};

export default SearchStudent;
