import Navbar from "../components/navbar";
import Footer from "../components/footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="p-10 text-center">
        <h1 className="text-3xl font-bold mb-5">About Avion</h1>
        <p className="text-lg text-gray-600">
          At Avion, we believe in crafting furniture that lasts a lifetime. Each
          piece is a testament to timeless design and impeccable craftsmanship.
        </p>
        <div className="mt-10">
          <img src="/about-image.jpg" alt="About Avion" className="w-full max-w-2xl mx-auto" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
