// pages/admin/dashboard.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAdmin = async () => {
      const session = await getSession();
      if (!session || session.user.role !== 'admin') {
        router.push('/login');
        return;
      }

      const fetchData = async () => {
        const response = await fetch('/api/admin/data');
        const data = await response.json();
        setUsers(data.users);
        setProducts(data.products);
        setLoading(false);
      };

      fetchData();
    };

    checkAdmin();
  }, [router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.email} <button>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
