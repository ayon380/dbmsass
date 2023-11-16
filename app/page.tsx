"use client"
import React from 'react';
import BookForm from '../components/BookForm'
import EcomForm from '../components/EcomForm';
import EcomGet from '../components/EcomGet'
import BookGet from '../components/BookGet'
export default function Home() {
  const [page, setPage] = React.useState("");
  const [books, setBooks] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const getBooks = async () => {
    const response = await fetch('/api/library/get', { cache: 'no-store' });
    const res = await response.json();
    setBooks(res.data);
    // console.log(res.data);

  }
  const getProducts = async () => {
    const response = await fetch('/api/ecom/get', { cache: 'no-store' });
    const res = await response.json();
    setProducts(res.data);
    console.log(res.data);

  }
  React.useEffect(() => {
    getBooks();
    getProducts();
  }, []);
  return (
    <main>
      <div>
        <button className='' onClick={() => { setPage("book") }}>Book</button>
        <button onClick={() => { setPage("ecom") }}>Ecom</button></div>
      {page === "book" ? <div> <BookForm getBooks={getBooks} />
        <BookGet books={books} /></div> : null}
      {page === "ecom" ? <div><EcomForm getProducts={getProducts} /><EcomGet products={products} /></div> : null}
    </main>
  )
}
