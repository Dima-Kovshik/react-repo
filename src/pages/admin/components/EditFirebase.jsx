import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import AddProductService from "../service/service";


export default function EditFirebase() {
  const [products, setProducts] = useState({});
  const name = useRef();
  const description = useRef();
  const price = useRef();
  const { id } = useParams();

  async function fetchProducts() {
    const userResponse = await AddProductService.getDetailEdit(id);
    setProducts(userResponse);
  }



  useEffect(() => {
    fetchProducts();
  });

  return (
    <div>
      <p>Название товара</p>
      <input
        type="text"
        defaultValue={products.name}
        ref={name}
      />
      <p>Стоимость товара</p>
      <input
        type="text"
        defaultValue={products.price}
        ref={price}
      />
      <p>Описание товара</p>
      <textarea
        defaultValue={products.description}
        ref={description} />
      <button onClick={() => AddProductService.getEditProduct(id, name, price, description)} >Редактировать
      </button>
    </div>
  )
}
