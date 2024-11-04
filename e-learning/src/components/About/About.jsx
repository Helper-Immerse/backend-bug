import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import introVideo from '../../assets/videos/intro.mp4'
import termsAndCondition from '../../assets/docs/termsAndCondition'

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar src="https://media.licdn.com/dms/image/v2/D5603AQGN8WcYx5flHw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718257777314?e=1735776000&v=beta&t=XUo2t3-C5cbRYPtJ7VV9nbK4cXIDxndVXsa3z5EKF6o" boxSize={['40', '48']} />
      <Text children="CEO" opacity={0.7} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Laxmi sharma" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`HelperImmerse is a dynamic, accessible platform dedicated to delivering high-quality web and app development services, along with tutoring in web development, at the most affordable prices. We focus on empowering individuals and businesses by providing customized solutions in web and app development and ensuring robust support to learners looking to advance their technical skills. Our expert-led tutorials cover front-end, back-end, and full-stack development, tailored to equip learners with in-demand industry skills. With a dedicated team of developers and mentors, we ensure our clients and students receive top-notch services and support, every step of the way`}
      />
    </VStack>
  </Stack>
)

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      loop
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  </Box>
)

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms & Condition"
      textAlign={['center', 'left']}
      my="4"
    />

    <Box h="sm" p="4" overflowY={'scroll'}>
      <Text
        fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={['center', 'left']}
      >
        {termsAndCondition}
      </Text>
      <Heading
        my="4"
        size={'xs'}
        children="Refund only applicable for cancellation within 7 days."
      />
    </Box>
  </Box>
)
const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
        Explore other platforms first, then come to us for an unmatched experience in quality, affordability, and exclusive content.
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>

      <VideoPlayer />

      <TandC termsAndCondition={termsAndCondition} />

      <HStack my="4" p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'Payment is secured by Razorpay'}
        />
      </HStack>
    </Container>
  )
}

export default About
