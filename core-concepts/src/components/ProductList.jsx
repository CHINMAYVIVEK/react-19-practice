export const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: "35000" },
    { id: 2, name: "Phone", price: "15000" },
    { id: 3, name: "Tablet", price: "7000" },
  ];

  const productElements = products
    .filter((product) => {
      return product.price > 7000;
    })
    .map((product) => {
      return (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
        </div>
      );
    });
  return (
    <div>
      <h2>Our Product</h2>
      {productElements}
    </div>
  );
};
