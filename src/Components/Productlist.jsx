import { useEffect, useState } from "react";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

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
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="container">
      <div className="">
        {products && products.length
          ? products.map((item, id) => (
              <div key={id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
                <p> {item.price}$</p>
              </div>
            ))
          : null}
      </div>
      <button onClick={() => setCount(count + 1)} className="button-container">
        Load More
      </button>
    </div>
  );
};

export default ProductList;
