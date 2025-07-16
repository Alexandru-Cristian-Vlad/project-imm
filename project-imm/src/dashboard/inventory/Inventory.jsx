import { useEffect, useState } from "react";

export function Inventory() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3080/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function handleAddProduct(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    const newProduct = {
      userId: 1,
      imgurl: data.get(`imgurl`),
      title: data.get(`title`),
      description: data.get(`description`),
      category: data.get(`category`),
      sku: data.get(`sku`),
      stock: data.get(`stock`),
      price: data.get(`price`),
    };

    fetch("http://localhost:3080/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((createdProduct) => {
        setProducts((prevProducts) => [...prevProducts, createdProduct]);
        e.target.reset();
      });
  }

  return (
    <div className="container-lg p-3">
      <h1 className="p-3">Inventory</h1>

      {/* Fake header row for desktop */}
      <div className="d-none d-md-flex bg-dark text-white fw-bold p-2 rounded">
        <div className="col-1 text-center">
          <input type="checkbox" disabled />
        </div>
        <div className="col-2">Image</div>
        <div className="col-3">Product</div>
        <div className="col-2">Category</div>
        <div className="col-2">SKU</div>
        <div className="col-1">Stock</div>
        <div className="col-1">Price</div>
      </div>

      {/* Product card "rows" */}
      {products.map((product) => (
        <div key={product.id} className="card p-2 my-2 shadow-sm">
          <div className="row align-items-center">
            <div className="col-1 text-center">
              <input type="checkbox" />
            </div>
            <div className="col-2">
              <img
                src={product.imgurl}
                alt={product.title}
                className="img-fluid rounded"
                style={{ maxHeight: "60px", objectFit: "cover" }}
              />
            </div>
            <div className="col-3">
              <strong>{product.title}</strong>
              <div className="text-muted small">{product.description}</div>
            </div>
            <div className="col-2">{product.category}</div>
            <div className="col-2">{product.sku}</div>
            <div className="col-1">{product.stock}</div>
            <div className="col-1">£{product.price}</div>
          </div>
        </div>
      ))}

      {/* Action Buttons for Selected Items */}

      <div className="d-flex justify-content-end gap-2 mt-4">
        <button className="btn btn-dark">Edit Selected</button>
        <button className="btn btn-danger">Delete Selected</button>
      </div>

      {/* Add New Product button */}
      <div className="d-grid gap-2 d-md-flex justify-content-md-end p-3">
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#add-product-modal"
        >
          Add New Product
        </button>
      </div>

      {/* Add New Product Modal */}
      <div
        className="modal fade"
        id="add-product-modal"
        tabIndex={"-1"}
        aria-labelledby=""
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="container p-4 modal-content text-bg-dark">
            <form onSubmit={handleAddProduct}>
              <div className="mb-3">
                <label htmlFor="imgurl" className="form-label">
                  Img Url
                </label>
                <input
                  type="text"
                  className="form-control text-bg-dark"
                  id="imgurl"
                  name="imgurl"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  className="form-control text-bg-dark"
                  id="title"
                  name="title"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control text-bg-dark"
                  id="description"
                  name="description"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control text-bg-dark"
                  id="category"
                  name="category"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="sku" className="form-label">
                  SKU
                </label>
                <input
                  type="text"
                  className="form-control text-bg-dark"
                  id="sku"
                  name="sku"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Stock
                </label>
                <input
                  type="text"
                  className="form-control text-bg-dark"
                  id="stock"
                  name="stock"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control text-bg-dark"
                  id="price"
                  name="price"
                />
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end pt-2">
                <button type="submit" className="btn btn-success">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
