import {Routes, Route} from "react-router-dom"
import AdminLayout from "./layout/AdminLayout"
import Dashboard from "./pages/Dashboard"
import AddProduct from "./pages/AddProduct"
import EditProduct from "./pages/EditProduct"
import Products from "./pages/Products"


const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/add" element={<AddProduct />} />
      <Route path="/products/:id/edit" element={<EditProduct />} />
     </Route>
     </Routes>
    </>
  )
}

export default App