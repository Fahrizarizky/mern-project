import Detail from "../../components/product/detail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const DetailPage = () => {
  const [detailProduct, setProduct] = useState({});
  const { _id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/product/${_id}`)
      .then((response) => setProduct(response.data));
  });
  return (
    <>
      <Detail detailProduct={detailProduct} />
    </>
  );
};

export default DetailPage;
