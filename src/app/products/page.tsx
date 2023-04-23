import MeowArticle from '@/components/MeowArticle';
import { getCat, getProducts } from '@/service/products';
import Link from 'next/link';

export default async function ProductsMain() {
  const products = await getProducts();
  const cat = await getCat();
  return (
    <section>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product?.id}>
            <Link href={`/products/${product?.id}`}>{product?.name}</Link>
          </li>
        ))}
      </ul>
      {/*  <h1>{cat}</h1> */}
      <MeowArticle />
    </section>
  );
}
