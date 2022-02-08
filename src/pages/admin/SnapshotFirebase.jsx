import React, { useState, useEffect, Fragment } from "react";
import AddProductService from "./service/service";
import {
  Link
} from "react-router-dom";

function SnapshotFirebase() {
  const [products, setProducts] = useState([]);
  const [name, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState("");

  async function getProducts() {
    const response = await AddProductService.getProductList();
    setProducts(response);
  }

  async function addProduct() {
    await AddProductService.getAdd(name, price, description);
    getProducts();
  }

  //async function deleteProduct() {
  // await AddProductService.deleteProduct(products);
  // getProducts();
  //}

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Fragment>
      <h1>Работа с товарами</h1>
      <div className="inputBox">
        <h3>Добаить товар</h3>
        <p>Название товара</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>Стоимость товара</p>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <p>Описание товара</p>
        <textarea value={description} onChange={(e) => setDesc(e.target.value)} />
        <button onClick={() => addProduct()}>
          Добавить
        </button>
      </div>
      <hr />

      {products.map((products) => (
        <div>
          <h2>{products.name}</h2>
          <p>{products.price}</p>

          <div>
            <button onClick={() => AddProductService.deleteProduct(products)}>Удалить</button>

            <Link to={`/edit/${products.id}`}>Редактировать</Link>

          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default SnapshotFirebase;
