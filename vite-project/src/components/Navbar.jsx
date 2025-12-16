
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="p-4 border-b mb-4">
      <div className="flex items-center gap-4">
        <Link to="/" className="font-bold">Admin</Link>
        <Link to="/products" className="text-sm">Products</Link>
        <Link to="/products/add" className="text-sm">Add Product</Link>
      </div>
    </nav>
  )
}

export default Navbar