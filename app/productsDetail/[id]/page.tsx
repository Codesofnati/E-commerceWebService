type Props = {
  params: { id: string };
};

export default async function ProductDetailPage({ params }: Props) {
  const productId = params.id;

  // Fetch product by ID
  // Example API call:
  // const res = await fetch(`${process.env.API_URL}/products/${productId}`);
  // const product = await res.json();

  // Mock data
  const product = {
    id: productId,
    name: "Ethiopian Coffee",
    price: 15,
    description: "Rich and aromatic coffee from Ethiopia",
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl mt-2">${product.price}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
}
