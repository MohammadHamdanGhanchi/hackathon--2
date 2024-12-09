import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-100 shadow-md">
      <div className="logo text-2xl font-bold">
        <Link href="/">Avion</Link>
      </div>
      <ul className="flex gap-5 text-lg">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
