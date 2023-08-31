/* eslint-disable prettier/prettier */


import { Stack,Text } from 'tamagui'

import MyButton from '../components/MyButton'
import { useAuth } from '../context/AuthContext'



const Home = () => {
  const {signOut} = useAuth()
  return (
    <Stack>
     <MyButton text="log out" button={true} onPress={() => signOut()} backgroundColor={'black'}  />
    </Stack>
  )
}

export default Home
