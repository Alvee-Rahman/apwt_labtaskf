import Link from 'next/link';

const SalesDashboard = () => {
  return (
    <div>
      <h1>Sales Dashboard</h1>
      <p>Number of products sold for current date and last seven days for each channel</p>
      <Link href="/system/sales/physical_store">
        Physical Store
      </Link>
      <br />
      <Link href="system/sales/social_media">
        Social Media
      </Link>
      <br />
      <Link href="/system/sales/ecommerce">
        Ecommerce Web App
      </Link>
    </div>
  );
};

export default SalesDashboard;
