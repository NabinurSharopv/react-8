import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useProductsQuery, useDeleteProduct } from '../hooks/useProducts'

const Products = () => {
  const { data, isLoading, error } = useProductsQuery()
  const deleteMut = useDeleteProduct()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Xatolik yuz berdi</p>

  const handleDelete = (id) => {
    if (!confirm('Haqiqatan o‘chirmoqchimisiz?')) return
    deleteMut.mutate(id)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Products</h2>
        <Link to="add" className="px-3 py-1 bg-blue-500 text-white rounded">Add Product</Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data.map(product => (
          <ProductCard key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}

export default Products
