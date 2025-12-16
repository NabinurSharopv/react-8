import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductQuery, useUpdateProduct } from '../hooks/useProducts'

const EditProduct = () => {
  const { id } = useParams()
  const nav = useNavigate()
  const { data: product, isLoading } = useProductQuery(id)
  const upd = useUpdateProduct()

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    if (product) {
      setTitle(product.title || '')
      setImage(product.image || '')
    }
  }, [product])

  if (isLoading) return <p>Loading...</p>
  if (!product) return <p>Product topilmadi</p>

  const onSubmit = async (e) => {
    e.preventDefault()
    await upd.mutateAsync({ id, patch: { title, image } })
    nav('/products')
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-3">Edit Product</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-2 max-w-md">
        <input value={title} onChange={e => setTitle(e.target.value)} className="border p-2" />
        <input value={image} onChange={e => setImage(e.target.value)} className="border p-2" />
        <div>
          <button type="submit" className="px-3 py-1 bg-yellow-500 rounded">Save</button>
        </div>
      </form>
    </div>
  )
}

export default EditProduct
