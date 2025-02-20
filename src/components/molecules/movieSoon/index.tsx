import { Link } from '@tanstack/react-router'
import Card from '../../atoms/card'
import Text from '../../ui/text'
import poster from "/assets/movie/aquaman.jpg"
export default function MovieSoon() {
    return (
        <Card className="w-full rounded-lg p-2">
            <Link className='flex gap-2 ' to="/movie/$name_movie" params={{ name_movie: "aquaman" }}>
                <img src={poster} alt="movie" className="object-cover size-16 rounded" />
                <div className='w-[calc(100%-73px)] space-y-0.5'>
                    <Text className='text-base font-normal truncate overflow-hidden'>Aquaman ENd Game WORDL BROW heifhvowiehfiohweo fhwioehfowieh</Text>
                    <div className='flex flex-wrap gap-2'>
                        <Text className='text-xs font-normal'>Action</Text>
                        <Text className='text-xs font-normal'>Adventure</Text>
                    </div>
                    <Text className='text-sm font-normal'>Release : 2025-01-01</Text>
                </div>
            </Link>
        </Card>
    )
}
