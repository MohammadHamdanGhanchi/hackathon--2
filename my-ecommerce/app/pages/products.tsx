import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';

const products = [
  { id: 1, name: 'The Dandy Chair', price: '£250', image: '/product1.jpg' },
  { id: 2, name: 'Rustic Vase Set', price: '£85', image: '/product2.jpg' },
];

const Products = () => {
  return (
    <>
      <Navbar />
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-5">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="border p-5 rounded shadow-lg">
              <Image src={product.image} alt={product.name} width={300} height={200} />
              <h2 className="text-xl font-bold mt-3">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Add to Basket
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
