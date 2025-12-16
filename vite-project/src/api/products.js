// Minimal localStorage-backed API to allow CRUD without a backend
const STORAGE_KEY = 'products'

const seed = () => {
  const initial = [
    { id: '1', title: 'Sample Product 1', price: 10, image: 'https://via.placeholder.com/150', category: 'general', description: 'First sample' },
    { id: '2', title: 'Sample Product 2', price: 20, image: 'https://via.placeholder.com/150', category: 'general', description: 'Second sample' }
  ]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial))
  return initial
}

const readAll = () => {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return seed()
  try {
    return JSON.parse(raw)
  } catch (e) {
    return seed()
  }
}

const writeAll = (items) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export const getProducts = async () => {
  return readAll()
}

export const getProduct = async (id) => {
  const items = readAll()
  return items.find(p => p.id === String(id)) || null
}

export const addProduct = async (product) => {
  const items = readAll()
  const id = Date.now().toString()
  const newProduct = { id, ...product }
  items.push(newProduct)
  writeAll(items)
  return newProduct
}

export const updateProduct = async (id, patch) => {
  const items = readAll()
  const idx = items.findIndex(p => p.id === String(id))
  if (idx === -1) throw new Error('Not found')
  items[idx] = { ...items[idx], ...patch }
  writeAll(items)
  return items[idx]
}

export const deleteProduct = async (id) => {
  let items = readAll()
  items = items.filter(p => p.id !== String(id))
  writeAll(items)
  return true
}
