function AddProduct() {
  return (
    <div>
      <h1>Yangi Product qo‘shish</h1>
      <form>
        <input placeholder="Title" />
        <input placeholder="Price" type="number" />
        <input placeholder="Image URL" />
        <input placeholder="Category" />
        <textarea placeholder="Description"></textarea>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
