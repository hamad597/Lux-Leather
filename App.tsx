import ProductAdmin from './ProductAdmin';

// Other imports...

function App() {
  return (
    <Routes>
      {/* Other routes... */}
      <Route path="/admin/products" element={<ProductAdmin />} />
    </Routes>
  );
}