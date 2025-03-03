import type { Metadata } from 'next'
import ListProduct from '@/components/molecules/list-product.module'

export const metadata: Metadata = {
    title: 'Product - Sumber Makmur'
}

export default function page() {
    return (
        <div className='p-5'>
            <ListProduct />
        </div>
    )
}
