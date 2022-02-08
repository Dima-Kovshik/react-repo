import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import TovarService from "../detail_tovar/service/service";

export default function DetailTovar() {

  let [products, setProducts] = useState({});
  const id = useParams().id;
  async function fetchProducts() {
    const userResponse = await TovarService.getDetail(id);
    setProducts(userResponse);
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (

    <div className="pos">

      <h1>Название товара: {products.name}</h1>
      <h2>Стоимость товара: {products.price}</h2>
      <h2>Описание товара: {products.description}</h2>

    </div>
  )
}
