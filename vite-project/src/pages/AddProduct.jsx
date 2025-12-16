import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddProduct } from '../hooks/useProducts'

function AddProduct() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('https://via.placeholder.com/150')
  const [category, setCategory] = useState('general')
  const [description, setDescription] = useState('')
  const addMut = useAddProduct()
  const nav = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    await addMut.mutateAsync({ title, price: Number(price || 0), image, category, description })
    nav('/products')
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-3">Yangi Product qo‘shish</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-2 max-w-md">
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="border p-2" />
        <input placeholder="Price" type="number" value={price} onChange={e => setPrice(e.target.value)} className="border p-2" />
        <input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} className="border p-2" />
        <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} className="border p-2" />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="border p-2"></textarea>
        <div>
          <button type="submit" className="px-3 py-1 bg-blue-500 text-white rounded">Add Product</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct;
