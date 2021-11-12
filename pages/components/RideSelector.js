import React, {useState,useEffect} from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import {carList } from '../../data/carList'

const RideSelector = ({pickupCoordinates,dropoffCoordinates}) => {
    const [rideDuration, setRideDuration] = useState(0)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        rideDuration = fetch(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoia3Rlc3NhIiwiYSI6ImNrdm02NnUwOTFkMGcydXRrY3BqMnVvZjAifQ.5NPC2IM1wrRGTLOk8rtNqw`
            )
            .then(response => response.json())
            .then(data => {
                setRideDuration(data.routes[0].duration / 10)
            })
    }, [pickupCoordinates, dropoffCoordinates])
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more...</Title>
            <CarList>
                {carList.map((car, index)=> (
                    <Car key={index}>
                        <CarImage src={car.imgUrl}/>
                        <CarDetails>
                            <Services>{car.service}</Services>
                            <Time>3min away</Time>
                        </CarDetails>
                        <Price>{'KES' + (rideDuration* car.multiplier).toFixed(2)}</Price>
                    </Car>
                ))}
                
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`flex flex-col flex-1 overflow-y-scroll`
const Title = tw.div`text-gray-500 text-center text-xs py-3 border-b`
const CarList = tw.div`overflow-y-scroll border-b`
const Car = tw.div`flex p-4 items-center` 
const CarImage = tw.img`h-16 mr-4` 
const CarDetails = tw.div`flex-1`
const Services = tw.div`font-medium `
const Time = tw.div`txt-xs text-blue-400`
const Price = tw.div`text-sm`