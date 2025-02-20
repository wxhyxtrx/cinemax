import PrivateLayout from "@/components/layouts/views/privateLayout"
import { InputGroup } from "@/components/molecules/inputgroup"
import MovieSoon from "@/components/molecules/movieSoon"
import Poster from "@/components/molecules/poster"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { FiSliders } from "react-icons/fi"
import Text from "@/components/ui/text"
import { FiSearch } from "react-icons/fi"
import { useState } from "react"
import FilterSearch from "@/components/molecules/filter/filterSearch"
import { Link } from "@tanstack/react-router"

const Home = () => {
  const [search, setSearch] = useState("")
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedValues, setSelectedValues] = useState<string[]>(["all"])

  const dataFilter = [
    { label: "All", value: "all" },
    { label: "Action", value: "action" },
    { label: "Comedy", value: "comedy" },
    { label: "Drama", value: "drama" },
  ]

  return (
    <PrivateLayout>
      <div id="search-bar" className="relative">
        <InputGroup
          type="search"
          placeholder="I want to watch..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          prefix
          iconPrefix={<FiSearch size={18} />}
          subfix
          iconSubfix={
            <FilterSearch
              open={filterOpen}
              setOpen={setFilterOpen}
              trigger={<FiSliders size={18} className="cursor-pointer" onClick={() => setFilterOpen(!filterOpen)} />}
              dataFilter={dataFilter}
              selectedValues={selectedValues}
              setSelectedValues={setSelectedValues}
            />
          }
          className="bg-primary-light border-primary-light"
        />
      </div>
      {search ? (
        <div className="py-4">
          <Text variant="h6" className="font-semibold">
            Search Result
          </Text>
          <div className="py-4 space-y-4">
            <MovieSoon />
            <MovieSoon />
            <MovieSoon />
          </div>
          <Text className="font-medium text-dark-gray">
            0 results found for "{search}"
          </Text>
        </div>
      ) : (
        <section className="py-4 space-y-4">
          {/* Poster */}
          <Carousel
            opts={{
              align: "center",
              loop: true,
              watchFocus: true,
              startIndex: 2,
              inViewThreshold: 0.5,
              active: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pl-5 basis-3/4">
                  <Link to="/movie/$name_movie" params={{ name_movie: "aquaman" }}>
                    <Poster />
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Comming Soon */}
          <div className="">
            <Text variant="h6" className="font-semibold">
              Comming Soon
            </Text>
            <div className="py-4 space-y-4">
              <MovieSoon />
              <MovieSoon />
              <MovieSoon />
            </div>
          </div>
        </section>)
      }
    </PrivateLayout>
  )
}

export default Home

