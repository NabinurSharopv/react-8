import React from 'react'
import { useProductsQuery } from '../hooks/useProducts'

function Dashboard() {
  const { data = [], isLoading } = useProductsQuery()

  if (isLoading) return <p>Loading...</p>

  const count = data.length
  const total = data.reduce((s, p) => s + Number(p.price || 0), 0)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 max-w-md">
        <div className="p-4 border rounded">
          <div className="text-sm text-gray-600">Products count</div>
          <div className="text-xl font-bold">{count}</div>
        </div>
        <div className="p-4 border rounded">
          <div className="text-sm text-gray-600">Total value</div>
          <div className="text-xl font-bold">${total}</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
