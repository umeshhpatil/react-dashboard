// Sales data for bar chart
export const salesData = [
  { name: 'Jan', sales: 4000, target: 2400 },
  { name: 'Feb', sales: 3000, target: 2500 },
  { name: 'Mar', sales: 2000, target: 2600 },
  { name: 'Apr', sales: 2780, target: 2700 },
  { name: 'May', sales: 1890, target: 2800 },
  { name: 'Jun', sales: 2390, target: 2900 },
  { name: 'Jul', sales: 3490, target: 3000 },
];

// Product data for pie chart
export const productData = [
  { name: 'Electronics', value: 400 },
  { name: 'Clothing', value: 300 },
  { name: 'Home', value: 300 },
  { name: 'Beauty', value: 200 },
  { name: 'Other', value: 100 },
];

// Stat data for metric cards
export const statData = {
  totalUsers: 8249,
  totalRevenue: 524600,
  totalOrders: 1432,
  conversionRate: 24.8
};

// Transaction data for the table
export const transactionData = [
  {
    id: '1001',
    customer: 'John Smith',
    customerInitial: 'JS',
    date: '2024-04-01',
    amount: 120.50,
    status: 'Completed'
  },
  {
    id: '1002',
    customer: 'Emma Johnson',
    customerInitial: 'EJ',
    date: '2024-04-01',
    amount: 75.20,
    status: 'Pending'
  },
  {
    id: '1003',
    customer: 'Michael Brown',
    customerInitial: 'MB',
    date: '2024-03-31',
    amount: 249.99,
    status: 'Completed'
  },
  {
    id: '1004',
    customer: 'Sarah Davis',
    customerInitial: 'SD',
    date: '2024-03-30',
    amount: 54.75,
    status: 'Failed'
  },
  {
    id: '1005',
    customer: 'Robert Wilson',
    customerInitial: 'RW',
    date: '2024-03-29',
    amount: 199.50,
    status: 'Completed'
  },
  {
    id: '1006',
    customer: 'Linda Miller',
    customerInitial: 'LM',
    date: '2024-03-29',
    amount: 87.25,
    status: 'Processing'
  }
];

// Customer data
export const customerData = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '(555) 123-4567',
    location: 'New York, USA',
    joinDate: '2023-01-15',
    totalSpent: 1245.60,
    status: 'Active',
    avatar: 'JS'
  },
  {
    id: 2,
    name: 'Emma Johnson',
    email: 'emma.johnson@example.com',
    phone: '(555) 234-5678',
    location: 'London, UK',
    joinDate: '2023-02-28',
    totalSpent: 879.30,
    status: 'Active',
    avatar: 'EJ'
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    phone: '(555) 345-6789',
    location: 'Toronto, Canada',
    joinDate: '2023-03-10',
    totalSpent: 2540.00,
    status: 'Active',
    avatar: 'MB'
  },
  {
    id: 4,
    name: 'Sarah Davis',
    email: 'sarah.davis@example.com',
    phone: '(555) 456-7890',
    location: 'Sydney, Australia',
    joinDate: '2023-01-05',
    totalSpent: 427.80,
    status: 'Inactive',
    avatar: 'SD'
  },
  {
    id: 5,
    name: 'Robert Wilson',
    email: 'robert.wilson@example.com',
    phone: '(555) 567-8901',
    location: 'Berlin, Germany',
    joinDate: '2023-04-20',
    totalSpent: 1873.25,
    status: 'Active',
    avatar: 'RW'
  },
  {
    id: 6,
    name: 'Linda Miller',
    email: 'linda.miller@example.com',
    phone: '(555) 678-9012',
    location: 'Paris, France',
    joinDate: '2023-05-12',
    totalSpent: 694.50,
    status: 'Active',
    avatar: 'LM'
  },
  {
    id: 7,
    name: 'David Garcia',
    email: 'david.garcia@example.com',
    phone: '(555) 789-0123',
    location: 'Madrid, Spain',
    joinDate: '2023-06-08',
    totalSpent: 315.20,
    status: 'Active',
    avatar: 'DG'
  },
  {
    id: 8,
    name: 'Jennifer Lee',
    email: 'jennifer.lee@example.com',
    phone: '(555) 890-1234',
    location: 'Seoul, South Korea',
    joinDate: '2023-06-25',
    totalSpent: 1120.75,
    status: 'Inactive',
    avatar: 'JL'
  }
];

// Order data
export const orderData = [
  {
    id: 'ORD-001',
    customer: 'John Smith',
    customerInitial: 'JS',
    date: '2024-04-01',
    items: 3,
    total: 120.50,
    status: 'Delivered',
    paymentMethod: 'Credit Card'
  },
  {
    id: 'ORD-002',
    customer: 'Emma Johnson',
    customerInitial: 'EJ',
    date: '2024-04-01',
    items: 1,
    total: 75.20,
    status: 'Processing',
    paymentMethod: 'PayPal'
  },
  {
    id: 'ORD-003',
    customer: 'Michael Brown',
    customerInitial: 'MB',
    date: '2024-03-31',
    items: 5,
    total: 249.99,
    status: 'Delivered',
    paymentMethod: 'Credit Card'
  },
  {
    id: 'ORD-004',
    customer: 'Sarah Davis',
    customerInitial: 'SD',
    date: '2024-03-30',
    items: 2,
    total: 54.75,
    status: 'Cancelled',
    paymentMethod: 'Debit Card'
  },
  {
    id: 'ORD-005',
    customer: 'Robert Wilson',
    customerInitial: 'RW',
    date: '2024-03-29',
    items: 4,
    total: 199.50,
    status: 'Delivered',
    paymentMethod: 'Credit Card'
  },
  {
    id: 'ORD-006',
    customer: 'Linda Miller',
    customerInitial: 'LM',
    date: '2024-03-29',
    items: 2,
    total: 87.25,
    status: 'Processing',
    paymentMethod: 'PayPal'
  },
  {
    id: 'ORD-007',
    customer: 'David Garcia',
    customerInitial: 'DG',
    date: '2024-03-28',
    items: 1,
    total: 35.99,
    status: 'Shipped',
    paymentMethod: 'Credit Card'
  },
  {
    id: 'ORD-008',
    customer: 'Jennifer Lee',
    customerInitial: 'JL',
    date: '2024-03-27',
    items: 3,
    total: 125.45,
    status: 'Delivered',
    paymentMethod: 'Debit Card'
  },
  {
    id: 'ORD-009',
    customer: 'John Smith',
    customerInitial: 'JS',
    date: '2024-03-26',
    items: 2,
    total: 89.99,
    status: 'Delivered',
    paymentMethod: 'Credit Card'
  },
  {
    id: 'ORD-010',
    customer: 'Emma Johnson',
    customerInitial: 'EJ',
    date: '2024-03-25',
    items: 1,
    total: 45.50,
    status: 'Delivered',
    paymentMethod: 'PayPal'
  }
];

// Product inventory data
export const productInventoryData = [
  {
    id: 'P001',
    name: 'Smartphone X Pro',
    category: 'Electronics',
    price: 899.99,
    stock: 45,
    rating: 4.8
  },
  {
    id: 'P002',
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 149.99,
    stock: 78,
    rating: 4.5
  },
  {
    id: 'P003',
    name: 'Men\'s Casual T-Shirt',
    category: 'Clothing',
    price: 24.99,
    stock: 120,
    rating: 4.2
  },
  {
    id: 'P004',
    name: 'Women\'s Running Shoes',
    category: 'Clothing',
    price: 79.99,
    stock: 36,
    rating: 4.7
  },
  {
    id: 'P005',
    name: 'Smart Home Speaker',
    category: 'Electronics',
    price: 129.99,
    stock: 52,
    rating: 4.4
  },
  {
    id: 'P006',
    name: 'Stainless Steel Cookware Set',
    category: 'Home',
    price: 189.99,
    stock: 18,
    rating: 4.6
  },
  {
    id: 'P007',
    name: 'Facial Care Kit',
    category: 'Beauty',
    price: 49.99,
    stock: 65,
    rating: 4.3
  },
  {
    id: 'P008',
    name: 'Fitness Tracker Watch',
    category: 'Electronics',
    price: 89.99,
    stock: 42,
    rating: 4.4
  }
]; 