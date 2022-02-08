import React, { useState, useEffect } from "react";
import CatalogItem from "../../../shared/CatalogItem";
import CatalogService from "../service/service"

export default function Catalog() {
  let [products, setProducts] = useState([]);

  async function fetchProducts() {
    const userResponse = await CatalogService.getCatalog();
    setProducts(userResponse);
  }

  let [selectedSort, setSelectedSort] = useState("");

  function sortProducts(e) {
    setSelectedSort(e.target.value)
    if (selectedSort == "price_dec") {
      products.sort((a, b) => a.price <= b.price ? -1 : 0);
    } else {
      products.sort((a, b) => a.price >= b.price ? -1 : 0);
    }
  }

  console.log(selectedSort)

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>

      <select value={selectedSort} onChange={sortProducts}>
        <option disabled value=""> сортировать по </option>
        <option value="price_dec">Стоимость по убыванию</option>
        <option value="price_inc">Стоимость по возрастанию </option>

      </select>
      <div className="pos">
        {products.map(product =>
          <CatalogItem key={product.id} item={product} />
        )}
      </div>
    </div>
  )
}
