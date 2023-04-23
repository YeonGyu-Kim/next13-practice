import { getProduct, getProducts } from '@/service/products';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params?.slug}`,
    description: `${params?.slug} description`,
  };
}

export default async function ProductsPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }
  return <h1>{`${product?.name} 소개`} </h1>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product?.id,
  }));
}
