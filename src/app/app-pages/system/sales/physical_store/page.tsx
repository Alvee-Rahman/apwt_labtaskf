"use client"
import Link from 'next/link';
import { useState } from 'react';

const PhysicalStoreDashboard = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    address: '',
    phone: '',
    productId: '',
    productName: '',
    unitPrice: 0,
    quantity: 1,
    totalPrice: 0,
    
  });
  
   

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleQuantityChange = (e: { target: { value: string; }; }) => {
    const quantity = parseInt(e.target.value, 10) || 0;
    setFormData((prevData) => ({
      ...prevData,
      quantity,
      totalPrice: prevData.unitPrice * quantity,
    }));
  };

  const handleSellProduct = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add your logic to handle the sale, validate inputs, and make API request if needed
    // For simplicity, let's just log the form data for now
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
    <h1>Physical Store Sales Dashboard</h1>

    <div>
      <h2>Sales Overview</h2>
     
      <p>Number of items sold: {0}</p>
      <p>Most sold item name: {'xyz'}</p>
      <p>Average sales amount:{0} </p>
    </div>

    
    <h2>Sell Products</h2>
    <form onSubmit={handleSellProduct}>
      <label>Customer Name:</label>
      <input
        type="text"
        name="customerName"
        value={formData.customerName}
        onChange={handleInputChange}
        required
      />
      <label>Address:</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        required
      />

      <label>Phone:</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        pattern="[0-9]{11,15}"
        required
      />

      <label>Product ID:</label>
      <input
        type="text"
        name="productId"
        value={formData.productId}
        onChange={handleInputChange}
        required
      />

      <label>Product Name:</label>
      <input
        type="text"
        name="productName"
        value={formData.productName}
        onChange={handleInputChange}
        required
      />

      <label>Unit Price:</label>
      <input
        type="number"
        name="unitPrice"
        value={formData.unitPrice}
        onChange={handleInputChange}
        required
      />

      <label>Quantity:</label>
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleQuantityChange}
        min="1"
        max="20"
        required
      />

      <label>Total Price:</label>
      <input
        type="number"
        name="totalPrice"
        value={formData.totalPrice}
        readOnly
      />

      <button type="submit">Sell Product</button>
    </form>

    <Link href="/system/sales/physical_store/sales_log">
      View Sales Log
    </Link>

  </div>
);
};

export default PhysicalStoreDashboard;
