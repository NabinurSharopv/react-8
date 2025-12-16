import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="border p-3 rounded">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2" />
      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-600">{product.category}</p>
      <p className="font-bold">${product.price}</p>
      <div className="mt-2 flex gap-2">
        <Link to={`/products/${product.id}/edit`} className="px-2 py-1 bg-yellow-400 rounded">Edit</Link>
        <button onClick={() => onDelete(product.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
      </div>
    </div>
  )
}

export default ProductCard