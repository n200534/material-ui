import { Group, Home, Pages, SettingsTwoTone, Store } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
function Sidebar({mode,setmode}) {
    return (
        <Box

            flex={1}
            p={2}
            sx={{
                display: { xs: "none", sm: "block" }
            }}

        >
            <Box sx={{
                position:"fixed"
            }}>

            <List>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <Pages />
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <Group />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <Store />
                        </ListItemIcon>
                        <ListItemText primary="MarketPlace" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <SettingsTwoTone />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <DarkModeIcon />
                        </ListItemIcon>
                        <Switch onChange={e=>setmode(mode==='light'?"dark":"light")} />
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
        </Box >
    )
}

export default Sidebar