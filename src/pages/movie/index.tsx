import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import Text from '@/components/ui/text'
import { dataStatic } from '@/constants/datastatic'
import { useState } from 'react'
import { BsBadge3D, BsBadgeVr } from 'react-icons/bs'
import { PiCouchBold } from 'react-icons/pi'
import banner from "/assets/movie/aquaman.jpg"


interface MovieDetailProps {
    name_movie: string
}

function MovieDetail({ name_movie }: MovieDetailProps) {
    const [showMore, setShowMore] = useState(false);
    const [selectedCinema, setSelectedCinema] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.";

    return (
        <div>
            <div className="relative w-full">
                <img
                    src={banner}
                    alt="Banner Movie"
                    className="object-cover w-full h-full"
                />
                <div className="absolute px-2 inset-0 bg-gradient-to-t from-zinc-950 to-black/40">
                    <div className='relative h-full w-full flex items-end'>
                        <Avatar className='size-24 absolute -bottom-10 left-2'>
                            <AvatarImage src={banner} className='object-cover' />
                            <AvatarFallback>{name_movie.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <Text variant='h4' className=" w-full ps-28 overflow-hidden text-ellipsis whitespace-nowrap capitalize font-bold mb-1">{name_movie}</Text>
                    </div>
                    <div className='ps-28 flex flex-col'>
                        <Text variant='span' className='text-white-gray'>Action, Adventure, Fantasy</Text>
                        <Text variant='span' className='text-white-gray'>2024</Text>
                    </div>
                </div>
            </div>
            <div className='px-4 mt-16'>
                <Drawer>
                    <DrawerTrigger asChild>
                        <div>
                            <Button variant='default' className='w-full'>Buy Ticket</Button>
                        </div>
                    </DrawerTrigger>
                    <DrawerContent className='bg-black border-black flex justify-normal pt-5 px-2 shadow-md shadow-primary-verde'>
                        <DrawerTitle className='p-4'>
                            <Text variant='span' className='text-line-gray'>Find Your Favorite Theater</Text>
                        </DrawerTitle>
                        <div id='cinema-place' className='space-y-2 '>
                            {dataStatic.looping.slice(0, 3).map((idx) => (
                                <Collapsible 
                                    key={idx} 
                                    open={selectedCinema === idx}
                                    onOpenChange={() => {
                                        setSelectedCinema(idx);
                                        setSelectedTime(null);
                                    }}
                                    className={`w-full py-2.5 rounded-lg ${selectedCinema === idx ? 'border border-primary-purple-500' : ''}`}
                                >
                                    <CollapsibleTrigger className='w-full text-start px-4 mb-2 flex justify-between items-center'>
                                        <div className='space-y-2'>
                                            <Text className='text-base text-white-gray w-full'>Cinemplex 21</Text>
                                            <div className='flex flex-wrap gap-2 text-lg text-primary-purple-500'>
                                                <BsBadge3D />
                                                <BsBadgeVr />
                                                <PiCouchBold />
                                            </div>
                                        </div>
                                        <Text className='text-lg font-semibold text-white-gray'>IDR 100.000</Text>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className='px-4 pb-0 space-y-2'>
                                        <Text variant='span' className='text-white-gray'>21-02-2025</Text>
                                        <div className='flex flex-nowrap gap-2'>
                                            {['10:00', '13:00', '16:00', '19:00'].map((time) => (
                                                <Button 
                                                    key={time} 
                                                    variant='outline' 
                                                    size='sm' 
                                                    className={`w-full rounded ${selectedTime === time ? 'bg-primary-purple-500' : ''}`}
                                                    onClick={() => setSelectedTime(time)}
                                                >
                                                    {time}
                                                </Button>
                                            ))}
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                            ))}
                        </div>
                        <DrawerFooter className='mt-5'>
                            <Button variant='default' className='w-full capitalize'>Reserve your seat</Button>
                            <DrawerClose asChild className='mt-2'>
                                <div className='text-white-gray text-center hover:underline cursor-pointer'>Cancel</div>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
            <div className='px-4 mt-5'>
                <Text variant='h4' className='text-white-gray'>Description</Text>
                <Text variant='p' className='text-white-gray'>
                    {showMore ? description : `${description.substring(0, 50)}...`}
                </Text>
                <button onClick={() => setShowMore(!showMore)} className='text-blue-500'>
                    {showMore ? 'Show less' : 'Show more'}
                </button>
            </div>
            <div className='px-4 mt-5 space-y-2'>
                <Text variant='h6' className='text-white-gray'>Language</Text>
                <div className='flex items-center gap-2'>
                    <Text variant='span' className='text-white-gray'>English</Text>
                    <Text variant='span' className='text-white-gray'>French</Text>
                    <Text variant='span' className='text-white-gray'>Spanish</Text>
                </div>
                <Text variant='h6' className='text-white-gray'>Runtime</Text>
                <Text variant='span' className='text-white-gray'>123 Minutes</Text>
                <div className='flex items-center gap-2'>
                    <Text variant='h6' className='text-white-gray'>Production</Text>
                    <Text variant='span' className='text-white-gray'>USA</Text>
                    <Text variant='span' className='text-white-gray'>Produced by</Text>
                    <Text variant='span' className='text-white-gray'>Warner Bros</Text>
                </div>
                <Text variant='h6' className='text-white-gray'>Cast</Text>
                <div className='flex items-center gap-2'>
                    <Text variant='span' className='text-white-gray'>Jason Momoa</Text>
                    <Text variant='span' className='text-white-gray'>Amber Heard</Text>
                    <Text variant='span' className='text-white-gray'>Willem Dafoe</Text>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
