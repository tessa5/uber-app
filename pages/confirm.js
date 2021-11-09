import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Map from './components/Map'

const Confirm = () => {
    return (
        <Wrapper>
            <Map />
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