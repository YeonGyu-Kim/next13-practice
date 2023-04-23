import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  return (
    <section>
      <Link href={'/products'}>상품보기</Link>
    </section>
  );
}
