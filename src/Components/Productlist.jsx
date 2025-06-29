import { useEffect, useState } from "react";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0); // Represents the 'page' number or offset
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    // async function fetchProducts
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );

      const result = await response.json();
      console.log(result);

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Ensure loading is always set to false after fetch attempt
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length >= 100) {
      setDisableButton(true);
    }
  }, [products]);

  if (loading && products.length === 0) {
    // loading state for initial load
    return <div>Loading initial products...</div>;
  }

  return (
    <div className="container">
      <div className="product-grid">
        {products && products.length ? (
          products.map((item) => (
            <div key={item.id || item.title} className="product-card">
              <img src={item.thumbnail} alt={item.title} />
              <p className="product-title">{item.title}</p>
              <p className="product-price">{item.price}$</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {!disableButton && (
        <button
          onClick={() => setCount((prevCount) => prevCount + 1)}
          className="button-container"
          disabled={loading}
        >
          {loading && products.length > 0 ? "Loading more..." : "Load More"}
        </button>
      )}
      {disableButton && (
        <div>SIKE, the API only provides 100 products at max !</div>
      )}
    </div>
  );
};

export default ProductList;
