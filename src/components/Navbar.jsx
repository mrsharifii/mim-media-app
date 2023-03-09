import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

import logo from '../assets/logo.png'
import SearchBar from "./SearchBar"

const Navbar = () => (
    <Stack direction='row' alignItems='center' p={2}
    sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}>
        <Link to='/' style={{ display: 'flex', alignItems: 'center'}}>
            <img src={logo} alt='logo' height={50} />
            <Typography variant='h3' fontWeight='bold' px={2} sx={{ color: '#ece8f2'}}>
                MIM MEDIA 
            </Typography>
        </Link>
        
        <SearchBar />
    </Stack>
)

export default Navbar