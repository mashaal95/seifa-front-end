import { Box,IconButton, useTheme } from "@mui/material"
import {useContext} from 'react'
import { ColourContext} from "../../theme"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlined  from "@mui/icons-material/DarkModeOutlined"

const Topbar = () => {
    const theme = useTheme()

    const colourMode = useContext(ColourContext)
    return (
        <Box display={'flex'} justifyContent={'right'} p={2}>
            {/* Light mode dark mode switch */}
            <IconButton onClick={colourMode.toggleColourMode}>
                {theme.palette.mode === 'dark' ? (<DarkModeOutlined/>) : (<LightModeOutlinedIcon/>)}
            </IconButton>
        </Box>
    )
}

export default Topbar