import React, {useState} from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Link from 'next/link'

const Search = () => {

    const[pickupPoint, setPickupPoint] = useState('')
    const[dropoffPoint, setDropoffPoint] = useState('')

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href='/' passHref>
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                </Link>
            </ButtonContainer>
            <InputContainer>
                <FromToIcon>
                    <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png'/>
                    <VerticalLine src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png'/>
                    <Square src="https://img.icons8.com/ios-glyphs/30/000000/square.png"/>
                </FromToIcon>
                <Inputboxes> 
                    <Input 
                    placeholder="Enter pickup location"
                    value={pickupPoint}
                    onChange={(e)=> setPickupPoint(e.target.value)}
                    />
                    <Input 
                    placeholder="Enter your destination"
                    value={dropoffPoint}
                    onChange={(e) => setDropoffPoint(e.target.value)}
                    />
                </Inputboxes>
                <PlusIcon src="https://img.icons8.com/ios-filled/50/000000/plus.png"/> 
            </InputContainer>
            <SavedPlaces>
                <StartIcon src="https://img.icons8.com/material-two-tone/24/000000/star--v3.png"/> Saved Places
            </SavedPlaces>
            <Link href={{pathname: '/confirm', query: {pickupPoint: pickupPoint, dropoffPoint: dropoffPoint}}} passHref>
                <ConfirmedButton>Confirm Location</ConfirmedButton>
                </Link>
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`bg-gray-200 h-screen`
const ButtonContainer =tw.div`bg-white px-4`
const BackButton =tw.img`h-12 cursor-pointer` 
const InputContainer =tw.div`bg-white flex items-center px-4 mb-2` 
const FromToIcon =tw.div`w-10 flex flex-col items-center mr-2 items-center`
const Circle = tw.img`h-2.5 w-2.5`
const VerticalLine = tw.img`h-10`
const Square = tw.img`h-3` 
const Inputboxes = tw.div`flex flex-col flex-1 `
const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-xl p-2 outline-none border-none 
`
const PlusIcon =tw.img`w-10 h-10 ml-3`
const SavedPlaces = tw.div`flex items-center bg-white px-4 py-2`
const StartIcon = tw.img`h-10 w-10 p-2 mr-2`
const ConfirmedButton =tw.button`bg-black px-4 py-2 text-white text-xl mx-4 my-2`