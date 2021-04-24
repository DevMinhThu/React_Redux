import React from "react";

function ProductItem(props) {
  const { index, product } = props;
  const statusName = product.status ? "Còn Hàng" : "Hết Hàng";
  const statusClass = product.status ? "warning" : "default";

  const onDelete = (id) => {
    if (confirm("Bạn có muốn xóa không?")) {//eslint-disable-line
      props.onDelete(id)
    }
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}$</td>
      <td>
        <span className={`label label-${statusClass}`}>{statusName}</span>
      </td>
      <td>
        <button type="button" className="btn btn-success mr-10">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            onDelete(product.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ProductItem;
