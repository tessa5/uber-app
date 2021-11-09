import React, {useEffect} from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoia3Rlc3NhIiwiYSI6ImNrdm02NnUwOTFkMGcydXRrY3BqMnVvZjAifQ.5NPC2IM1wrRGTLOk8rtNqw';

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [-1.286389, 36.817223],
            zoom: 3
        })
    
        });

    return (
        <Wrapper id="map">
            
        </Wrapper>
    )
}

export default Map
    const Wrapper = tw.div`
    flex-1 
    ` 
