
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'


export default function Home() {
  
  return (
    <>
    <Wrapper>
      <Header>
        <UberLogo >Uber</UberLogo>
        <Profile>
          <Avatar src='avatar.jpeg'></Avatar>
          <Login>Sign Out</Login>
          <Menu>Menu</Menu>
        </Profile>
      </Header>
      
      <Map />
      <ActionItems>
        <ActionButtons>
          <Link href='/search' passHref>
            <ActionButton><ActionImage src='https://i.ibb.co/cyvcpfF/uberx.png' />Ride</ActionButton>
          </Link>
            <ActionButton><ActionImage src='https://i.ibb.co/n776JLm/bike.png' />Wheels</ActionButton>
            <ActionButton><ActionImage src='https://i.ibb.co/5RjchBg/uberschedule.png' />Reserve</ActionButton>
          
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
      
      </Wrapper>
</>
  )
}

const Wrapper = tw.div`
  flex 
  flex-col 
  h-screen
` 
const Header = tw.div`
  text-white 
  bg-black 
  h-16 
  py-3
  flex
  flex-row
` 
const ActionItems = tw.div`
  flex-1 p-8 
`
const ActionButtons = tw.div`flex`
const ActionButton = tw.button`
  bg-gray-200 flex flex-1 flex-col m-2 h-32 items-center justify-center rounded-md text-xl bold transform hover:scale-105
`
const ActionImage = tw.img`
h-3/5
` 
const UberLogo = tw.div`
  text-2xl
  bold
  pl-6
  flex-1
` 

const Profile = tw.div`
  flex items-center mr-6 
`
const Avatar = tw.img`
h-12 w-12 border border-gray-200 p-px rounded-full
`

const Login = tw.button`
mx-4 bg-gray-200 text-black bold px-2 py-1 rounded-2xl  `

const Menu = tw.menu`
`

const InputButton = tw.button`h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 rounded-md`