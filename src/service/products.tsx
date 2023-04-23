import axios from 'axios';
import { readFile } from 'fs/promises';
import path from 'path';

export type Product = {
  id: string;
  name: string;
  price: number;
};

export async function getProducts(): Promise<Product[]> {
  const filaPath = path.join(process.cwd(), 'data', 'products.json');
  return await readFile(filaPath, 'utf-8').then((data) => JSON.parse(data));
  /*  return await fetch('https://meowfacts.herokuapp.com', {
    next: { revalidate: 0 },
  })
    .then((res) => res.json())
    .then((data) => data?.data[0]); */
}

export async function getProduct(id: string) {
  const product = await getProducts();
  return product.find((item) => item?.id === id);
  /*   return await fetch('https://meowfacts.herokuapp.com', {
    next: { revalidate: 3 },
    cache: 'reload'
  }) 
    .then((res) => res.json())
    .then((data) => data?.data[0]);*/
}

export async function getCat() {
  return await fetch('https://meowfacts.herokuapp.com', {
    //next: { revalidate: 0 },
    //cache: 'reload',
  })
    .then((res) => res.json())
    .then((data) => data?.data[0]);
}
