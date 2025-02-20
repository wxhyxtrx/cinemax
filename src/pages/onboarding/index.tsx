import { useState, useEffect } from "react"
import bgUserBoard from "/assets/image/bgUser.png"
import boarding3 from "/assets/image/boarding3.png"
import peopleBoard1 from "/assets/image/peopleBoard1.png"
import { dataStatic } from "../../constants/datastatic"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Text from "@/components/ui/text"
import Card from "@/components/atoms/card"
import { Button } from "@/components/ui/button"
import { FiChevronRight, FiFilm } from "react-icons/fi"
import { useNavigate } from "@tanstack/react-router"

const Onboarding = () => {
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleDotClick = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {dataStatic.onboardings.map((value, idx) => (
            <CarouselItem key={idx} className="w-full">
              {value.id === 1 ? (
                <div className="bg-onboarding w-full h-screen bg-cover">
                  <Card className="absolute bottom-5 mx-7 p-6  rounded-2xl">
                    <div className="text-center flex flex-wrap gap-1">
                      <Text variant="h4" className="font-semibold text-primary-purple">
                        {value.title}
                      </Text>
                      <Text variant="span" className="leading-normal text-line-gray">
                        {value.subtitle}
                      </Text>
                    </div>
                    <div className="flex flex-1 justify-between items-center pt-5">
                      <div className="flex justify-center gap-2 py-4">
                        {dataStatic.onboardings.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`p-1 rounded-full transition-colors drop-shadow-[0_15px_15px_rgba(32,23,182,0.5)] shadow-inner shadow-primary-purple-500/40 ${index === current ? "bg-primary-blue w-8" : "bg-gray-600"
                              }`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                      <Button className="flex items-center gap-5" onClick={() => handleDotClick(1)}>
                        <span className='font-semibold'>Next</span>
                        <FiChevronRight size={16} color='#fff' />
                      </Button>
                    </div>
                  </Card>
                </div>
              ) : (
                <div className="flex flex-col justify-end gap-24 w-full h-screen py-5">
                  {value.id === 2 && (
                    <div className="flex justify-center items-center">
                      <img src={bgUserBoard || "/placeholder.svg"} alt="Background" />
                      <img src={peopleBoard1 || "/placeholder.svg"} className="absolute mt-16" alt="People" />
                    </div>
                  )}
                  {value.id === 3 && (
                    <div className="flex justify-center items-center">
                      <img
                        src={boarding3 || "/placeholder.svg"}
                        className="aspect-square object-contain me-10"
                        alt="Boarding"
                      />
                    </div>
                  )}
                  <Card className="mx-7 rounded-2xl p-6">
                    <div className="text-center flex flex-wrap gap-1">
                      <Text variant="h4" className="font-semibold text-primary-purple">
                        {value.title}
                      </Text>
                      <Text variant="span" className="leading-normal text-line-gray">
                        {value.subtitle}
                      </Text>
                    </div>
                    <div className="flex flex-1 justify-between items-center pt-5">
                      <div className="flex justify-center gap-2 py-4">
                        {dataStatic.onboardings.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`p-1 rounded-full transition-colors drop-shadow-[0_15px_15px_rgba(32,23,182,0.5)] shadow-inner shadow-primary-purple-500/40 ${index === current ? "bg-primary-blue w-8" : "bg-gray-600"
                              }`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                      <Button className="flex items-center gap-5" onClick={value.id === 3 ? () => navigate({ to: "/auth" }) : () => handleDotClick(idx + 1)}>
                        {value.id === 3 ?
                          <>
                            <span className='font-semibold'>Let's Go!</span>
                            <FiFilm size={16} color='#fff' />
                          </>
                          :
                          <>
                            <span className='font-semibold'>Next</span>
                            <FiChevronRight size={16} color='#fff' />
                          </>
                        }
                      </Button>
                    </div>
                  </Card>
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

    </div>
  )
}

export default Onboarding

