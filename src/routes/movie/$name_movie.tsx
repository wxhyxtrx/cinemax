import DetailLayout from '@/components/layouts/views/detailLayout'
import MovieDetail from '@/pages/movie'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/movie/$name_movie')({
    component: Movie,
})
function Movie() {
    const { name_movie } = Route.useParams()
    return (
        <DetailLayout title={name_movie}>
            <MovieDetail name_movie={name_movie} />
        </DetailLayout>
    )
}
