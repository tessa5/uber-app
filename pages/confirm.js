import React, {useEffect, useState} from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Map from './components/Map'

const Confirm = () => {
    const [pickup, setPickup] = useState()
    const [dropoff, setDropoff] = useState()



    const getPickupCoordinates = () => {
        const pickup = 'Gigiri';
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1Ijoia3Rlc3NhIiwiYSI6ImNrdm02NnUwOTFkMGcydXRrY3BqMnVvZjAifQ.5NPC2IM1wrRGTLOk8rtNqw',
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setPickup(data.features[0].center)
        })
    }
const getDropoffCoordinates = () => {
    const dropoff = 'Westlands';
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1Ijoia3Rlc3NhIiwiYSI6ImNrdm02NnUwOTFkMGcydXRrY3BqMnVvZjAifQ.5NPC2IM1wrRGTLOk8rtNqw',
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropoff(data.features[0].center)
        })
}

    useEffect(() => {
        getPickupCoordinates();
        getDropoffCoordinates();
    }, [])
    return (
        <Wrapper>
            <Map
                pickupCoordinates={pickup}
                dropoffCoordinates={dropoff}
            />
            <ActionItems>
                
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

const ActionItems =tw.div`flex-1`