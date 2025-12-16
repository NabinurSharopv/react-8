import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getProducts, getProduct, addProduct, updateProduct, deleteProduct } from '../api/products'

export const useProductsQuery = () => {
  return useQuery({ queryKey: ['products'], queryFn: getProducts })
}

export const useProductQuery = (id) => {
  return useQuery({ queryKey: ['product', id], queryFn: () => getProduct(id), enabled: !!id })
}

export const useAddProduct = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: addProduct,
    onSuccess: () => qc.invalidateQueries(['products'])
  })
}

export const useUpdateProduct = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: ({ id, patch }) => updateProduct(id, patch),
    onSuccess: () => {
      qc.invalidateQueries(['products'])
      qc.invalidateQueries(['product'])
    }
  })
}

export const useDeleteProduct = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess: () => qc.invalidateQueries(['products'])
  })
}

export default null
