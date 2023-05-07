import { Pagination } from "react-bootstrap"

const PaginationCustom = ({active, total}) => {
    let items = []
    for (let number = 1; number <= total; number++) {
        items.push(
          <Pagination.Item key={number} active={number === active}>
            {number}
          </Pagination.Item>,
        );
      }
    return(
        <Pagination>{items}</Pagination>
    )
}


export default PaginationCustom