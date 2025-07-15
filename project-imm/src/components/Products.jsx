import { useEffect, useState } from 'react';

export function ProductsList () {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3080/products`)
        .then ((res) => res.json())
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
            price: data.get(`price`)
        };

        fetch('http://localhost:3080/products', {
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: {
        'Content-Type': 'application/json',
      },
        })
    
        .then((res) => res.json())
        .then((createdProduct) => {
            setProducts((prevProducts) => [...prevProducts, createdProduct]);
            e.target.reset();
        });
    }


    return (
        <div className='container-lg p-3'>
            <h1>Products</h1>

            {!products && <strong>Loading ...</strong>}

            <div className="container-lg">

                <div className="table-responsive">
                <table className='table table-hover table-sm' >
                
                    <thead className='table-group-divider table-dark'>
                        <tr>
                            <th></th>
                            <th>product name</th>
                            <th>description</th>
                            <th>category</th>
                            <th>sku</th>
                            <th>stock</th>
                            <th>price/£</th>
                        </tr>
                    </thead>

                    
                        <tbody className='table-group-divider'>
                            {products && products.map((product) => (
                            <tr key={product.id}>
                                <td><img src={product.imgurl} alt={product.title} style={{width:"100px"}}/></td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td>{product.sku}</td>
                                <td>{product.stock}</td>
                                <td>{product.price}</td>
                            </tr>
                            ))}
                        </tbody>
                    
                </table>
                </div>
                
                <div className='d-grid gap-2 d-md-flex justify-content-md-end p-3'>
                <button 
                    type='button' 
                    className='btn btn-dark' 
                    data-bs-toggle="modal"
                    data-bs-target="#add-product-modal">
                    Add New Product
                </button>
            </div>          

            <div className="modal fade" id='add-product-modal' tabIndex={"-1"} aria-labelledby=''>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="container p-4 modal-content text-bg-dark">

                        <form onSubmit={handleAddProduct}>

                            <div className='mb-3'>
                                <label htmlFor="imgurl" className='form-label'>Img Url</label>
                                <input type="text" className='form-control text-bg-dark' id="imgurl" name="imgurl"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="title" className='form-label'>Product Name</label>
                                <input type="text" className='form-control text-bg-dark' id="title" name="title" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className='form-label'>Description</label>
                                <input type="text" className='form-control text-bg-dark' id="description" name="description" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="category" className='form-label'>Category</label>
                                <input type="text" className='form-control text-bg-dark' id="category" name="category" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="sku" className='form-label'>SKU</label>
                                <input type="text" className='form-control text-bg-dark' id="sku" name="sku" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="stock" className='form-label'>Stock</label>
                                <input type="text" className='form-control text-bg-dark' id="stock" name="stock" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="price" className='form-label'>Price</label>
                                <input type="text" className='form-control text-bg-dark' id="price" name="price" />
                            </div>

                            <div className='d-grid gap-2 d-md-flex justify-content-md-end pt-2'>
                                <button 
                                    type="submit" 
                                    className='btn btn-success'>
                                        Add Product
                                </button>
                            </div>
                        
                        </form>

                    </div>
                </div>
            </div>
            </div>

        </div>

        
    )



}

