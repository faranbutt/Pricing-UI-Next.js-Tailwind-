import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Head from '@/components/Head'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head />
    </div>
  );
}
