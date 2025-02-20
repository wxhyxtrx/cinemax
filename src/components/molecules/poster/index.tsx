import Card from '@/components/atoms/card';
import { FaStar } from 'react-icons/fa';
import poster from '/assets/movie/bnr.jpg';

export default function Poster() {
    return (
        <Card className="rounded p-0 px-0 shadow-lg shadow-primary-light/50 rounded-t-xl overflow-hidden">
            <div className="relative">
                <img
                    src={poster || "/placeholder.svg"}
                    alt="Movie poster"
                    className="w-full aspect-[3/4] object-cover rounded-t-md"
                />
                <div className="absolute inset-0 p-4 bg-gradient-to-b from-transparent to-black">
                    <div className="absolute bottom-5">
                        <h3 className="font-semibold text-white text-lg mb-1">Black Panther: Wakanda Forever</h3>
                        <p className="text-sm text-gray-300 mb-2">Ryan Coogler</p>
                        <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <FaStar key={i} className="text-yellow-400" size={16} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
