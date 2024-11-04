import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../redux/actions/user';

export const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: '100%',
    color: '#ECC94B',
    backgroundColor: 'white',
};

const fileUploadStyle = {
    '&::file-selector-button': fileUploadCss,
};

function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [imagePrev, setImagePrev] = useState();
    const [image, setImage] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        };
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('name', name);
        myForm.append('email', email);
        myForm.append('password', password);
        myForm.append('file', image);

        // Dispatch the register action and check if it's successful
        const response = await dispatch(register(myForm));
        console.log("response ====>",response)
        if (response.success) {
            navigate('/login');  // Redirect to login page after successful registration
        }
    };

    return (
        <Container>
            <VStack h={'full'} justifyContent={'center'}>
                <Heading my={'10'} textTransform={'uppercase'}>Registration</Heading>
                <form onSubmit={submitHandler} style={{ width: '100%' }}>
                    <Box display='flex' justifyContent={'center'}>
                        <Avatar size={'2xl'} src={imagePrev} />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='name'>Name</FormLabel>
                        <Input required id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" type="text" focusBorderColor="yellow.500" />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='email'>Email Address</FormLabel>
                        <Input required id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="abc@gmail.com" type="email" focusBorderColor="yellow.500" />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input required id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" type="password" focusBorderColor="yellow.500" />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='chooseAvatar'>Choose Avatar</FormLabel>
                        <Input accept='image/*' required id="chooseAvatar" type="file" focusBorderColor="yellow.500" css={fileUploadStyle} onChange={changeImageHandler} />
                    </Box>
                    <Button my={4} colorScheme={'yellow'} type="submit">Sign Up</Button>
                    <Box my={4}>
                        Already Signed Up?
                        {' '}
                        <Link to="/login">
                            <Button colorScheme={'yellow'} variant={'link'}>Login</Button>
                        </Link>
                        {' '}
                        here
                    </Box>
                </form>
            </VStack>
        </Container>
    );
}

export default Register;
