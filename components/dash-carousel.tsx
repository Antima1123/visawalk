'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const images = [
  {
    img: "./carousel.png"
  },
  {
    img: "./carousel1.png",
    h1: "Australia Immigration",
    p: "Choose a pathway that suits your profile the best. Begin your journey by selecting from a wide range of visa categories."
  },
]

export default function Component() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()  
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative max-w-screen-2xl mx-auto w-full md:h-[35rem] h-[16rem] overflow-hidden">
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          <AnimatePresence initial={false} custom={currentIndex}>
            {images.map((src, index) => (
              <motion.div
                key={src.img}
                custom={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentIndex ? 1 : 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-[0_0_100%] h-full min-w-0 relative"
              >
                <img
                  src={src.img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover object-top"
                />
                 <div className=' w-full absolute top-1/3 justify-center gap-y-2 items-center flex flex-col text-white'>
                  <h1 className="md:text-4xl text-2xl font-[600]">{src.h1}</h1>
                  <p className='hidden md:flex'>{src.p}</p>
                </div>
                
                <div className=' w-full absolute top-2/3 justify-center items-center flex'>
                    <button className='px-12 font-semibold py-2 rounded-full bg-gradient-to-r from-[#79c08d] from-10% to-[#bdd78d] to-90%  ...'>
                        Check your eligibility
                    </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 " />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
        onClick={scrollNext}
      >
        <ChevronRight className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
      </Button>
    </div>
  )
}
