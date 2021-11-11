import React, {useEffect, useState} from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Map from './components/Map'
import { useRouter } from 'next/router'
import Link from 'next/link'
import RideSelector from './components/RideSelector'

const Confirm = () => {
const router = useRouter();
const { pickupPoint, dropoffPoint} = router.query

    const [pickupCoordinates, setPickupCoordinates] = useState([0,0])
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0])



    const getPickupCoordinates = (pickupPoint) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickupPoint}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1Ijoia3Rlc3NhIiwiYSI6ImNrdm02NnUwOTFkMGcydXRrY3BqMnVvZjAifQ.5NPC2IM1wrRGTLOk8rtNqw',
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center)
        })
    }
const getDropoffCoordinates = (dropoffPoint) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoffPoint}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1Ijoia3Rlc3NhIiwiYSI6ImNrdm02NnUwOTFkMGcydXRrY3BqMnVvZjAifQ.5NPC2IM1wrRGTLOk8rtNqw',
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center)
        })
}

    useEffect(() => {
        getPickupCoordinates(pickupPoint);
        getDropoffCoordinates(dropoffPoint);
    }, [pickupPoint, dropoffPoint])
    return (
        <Wrapper>
            <ButtonContainer>
                <Link href='/search' passHref>
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                </Link>
            </ButtonContainer>
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <ActionItems>
                <RideSelector 
                    pickupCoordinates={pickupCoordinates}
                    dropoffCoordinates={dropoffCoordinates}
                />
                <ConfirmButton>Confirm Ride</ConfirmButton>
            </ActionItems>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex 
flex-col 
h-screen
`

const ActionItems =tw.div`flex-1 flex flex-col h-1/2`


const ConfirmButton = tw.button`bg-black px-4 py-2 text-white text-xl m-4`
const ButtonContainer =tw.div`rounded-full absolute top-4 left-4 z-10 bg-white shadow-md `
const BackButton =tw.img`h-full object-contain cursor-pointer` 