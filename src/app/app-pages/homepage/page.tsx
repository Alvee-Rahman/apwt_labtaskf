// pages/index.js
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <nav>
        <ul>
          <li>
            <Link href="/app-pages/registration">
              Signup
            </Link>
          </li>
          <li>
            <Link href="/app-pages/login">
              Login
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
