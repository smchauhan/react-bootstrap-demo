import React, { useRef, useState } from 'react'
import { Button, Carousel, Image } from 'react-bootstrap'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons'

const RBCarousels = () => {
    const slides = [
        {
            id: 1,
            src: "https://wowslider.com/sliders/demo-44/data1/images/bridge.jpg",
            text: "First slide label",
            description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            id: 2,
            src: "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
            text: "Second slide label",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 3,
            src: "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
            text: "Third slide label",
            description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        }
    ]

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
        console.log("Current Slide is " + selectedIndex)
    };
    const carouselRef = useRef()
    return (
        <div>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={true}
                interval={null}
                nextIcon={<ArrowRightCircle size={30} />}
                prevIcon={<ArrowLeftCircle size={30} />}
                indicators={false}
                ref={carouselRef}
            >
                {slides.map((slide) => {
                    return (
                        <Carousel.Item key={slide.id}>
                            <Image src={slide.src} className='w-100' />
                            <Carousel.Caption>
                                <h3>{slide.text}</h3>
                                <p>{slide.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>

            <div className='d-flex justify-align-content-start'>
                {slides.map((slide, index) => {
                    return (
                        <div className='p-1' onClick={() => setIndex(index)} >
                            <Image src={slide.src} style={{ width: "100px" }} />
                        </div>
                    )
                })}
            </div>
            <div className='mt-4'>
                <Button className='me-2' onClick={() => carouselRef.current.prev()}>
                    Previous
                </Button>
                <Button onClick={() => carouselRef.current.next()}>
                    Next
                </Button>
            </div>
        </div>
    )
}

export default RBCarousels
