import Text from '@/components/ui/text'
import { useRouter } from '@tanstack/react-router'
import { ArrowLeftIcon } from 'lucide-react'
import React from 'react'
import View from '.'
import Tab from '@/components/molecules/tab'
interface DetailLayoutProps {
    title: string
    children: React.ReactNode
}

function DetailLayout({ title, children }: DetailLayoutProps) {
    const router = useRouter()

    return (
        <View>
            <div className=' flex items-center gap-5 bg-black p-4'>
                <button className='text-white-gray' onClick={() => router.history.back()}>
                    <ArrowLeftIcon size={20} />
                </button>
                <Text variant='h4' className='text-white-gray capitalize w-[calc(100%-20px)] text-center'>{title}</Text>
            </div>
            {children}
            <Tab />
        </View>
    )
}

export default DetailLayout
