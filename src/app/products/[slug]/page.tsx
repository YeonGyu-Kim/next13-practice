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

export default function ProductsPage({ params }: Props) {
  return <h1>{`${params?.slug} Products Page`} </h1>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
