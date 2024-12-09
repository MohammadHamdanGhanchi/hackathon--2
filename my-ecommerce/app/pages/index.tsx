import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="text-center p-10">
        <h1 className="text-4xl font-bold mb-5">Welcome to Avion</h1>
        <p className="text-lg text-gray-600">
          Discover timeless furniture that transforms your home.
        </p>
        <div className="mt-10">
          <Image src="/product1.jpg" alt="The Dandy Chair" width={600} height={400} />
        </div>
        <button className="mt-5 px-8 py-3 bg-blue-500 text-white text-lg rounded hover:bg-blue-600">
          Shop Now
        </button>
      </main>
      <Footer />
    </>
  );
};

export default Home;
