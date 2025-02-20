import Card from '@/components/atoms/card'
import { BsBadgeVr } from 'react-icons/bs'
import Text from '@/components/ui/text'
import React from 'react'
import { BsBadge3D } from 'react-icons/bs'
import { PiCouchBold } from 'react-icons/pi'
import { Link } from '@tanstack/react-router'
import { FaChevronRight } from 'react-icons/fa'
import { cn } from '@/lib/utils'
interface CinemaProps {
    name: string
    address?: string
    className?: string
}

export default function Cinema({ name, address, className }: CinemaProps) {
    return (
        <Card
            className={cn(
                "p-4 my-4 rounded-xl cursor-pointer hover:bg-primary-light/80",
                className
            )}
        >
            <div className="mt-4 leading-snug text-start">
                <Text className=" font-semibold text-base text-line-dark allTab:text-xl">
                    {name}
                </Text>
                <Text className=" text-sm allTab:text-lg w-full line-clamp-1 text-line-gray text-ellipsis overflow-hidden">
                   {address}
                </Text>
                <div className="mt-4 text-blue-600 flex items-center justify-between allTab:text-xl">
                    <div className="flex gap-2 items-center text-xl">
                        <BsBadge3D />
                        <BsBadgeVr />
                        <PiCouchBold />
                    </div>
                    <div className=" flex items-end gap-1">
                        <Link to="/cinema/detail" className="font-bold">
                            See Cinemax
                        </Link>
                        <FaChevronRight />
                    </div>
                </div>
            </div>
        </Card>
    )
}
