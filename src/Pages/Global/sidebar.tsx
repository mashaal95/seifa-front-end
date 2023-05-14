import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { colourTokens } from "../../theme";
import Home from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import BarChartIcon from "@mui/icons-material/StackedBarChartOutlined";
import TableIcon from "@mui/icons-material/TableRowsOutlined";
import AllIcon from "@mui/icons-material/TableViewOutlined";

type ItemProps = {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: any;
};

const Item = (props: ItemProps) => {
  const theme = useTheme();
  const { title, to, icon, selected, setSelected } = props;
  const colours = colourTokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colours.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colours = colourTokens(theme.palette.mode);
  const [isCollapse, setCollapse] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colours.primary[400]} !important`
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important"
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important"
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important"
        }
      }}
    >
      <ProSidebar collapsed={isCollapse}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setCollapse(!isCollapse)}
            icon={isCollapse ? <MenuOutlinedIcon /> : <MenuOutlinedIcon />}
            style={{
              margin: "10px 0 20px 0",
              color: colours.grey[100]
            }}
            {...(!isCollapse && (
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                marginLeft={"15px"}
              >
                <Typography variant="h3" color={colours.grey[100]}>
                  Seifa 2011 vs Seifa 2016
                </Typography>
                <IconButton onClick={() => setCollapse(!isCollapse)}>
                  <MenuOutlinedIcon></MenuOutlinedIcon>
                </IconButton>
              </Box>
            ))}
          ></MenuItem>

          {!isCollapse && (
            <Box mb={"25px"}>
              <Box display={"flex"} justifyContent="center" alignItems="center">
                <img
                  alt="profile"
                  width="100px"
                  height="100px"
                  src="https://media.licdn.com/dms/image/C5603AQHDcjjZokBRMQ/profile-displayphoto-shrink_800_800/0/1599324441263?e=1689206400&v=beta&t=-5vIAUDdZPFg-mtLqkUpgVuDqG70N_PEIUNrU2l7uGw"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colours.grey[100]}
                  fontWeight={"bold"}
                  sx={{ m: "10px 0 0 0" }}
                >
                  Mashaal Ahmed
                </Typography>
                <Typography
                  variant="h5"
                  color={colours.greenAccent[500]}
                  fontWeight={"bold"}
                  sx={{ m: "10px 0 0 0" }}
                >
                  Software Developer
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menu */}
          <Box paddingLeft={isCollapse ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<Home />}
              selected={selectedTab}
              setSelected={setSelectedTab}
            ></Item>

            <Typography
              variant="h6"
              color={colours.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
              display={isCollapse ? "none" : "block"}
            >
              Pages
            </Typography>

            <Item
              title="Seifa Table"
              to="/table"
              icon={<TableIcon />}
              selected={selectedTab}
              setSelected={setSelectedTab}
            />

            <Item
              title="Seifa All Data"
              to="/all"
              icon={<AllIcon />}
              selected={selectedTab}
              setSelected={setSelectedTab}
            />

            <Item
              title="Seifa Bar Chart"
              to="/bar"
              icon={<BarChartIcon />}
              selected={selectedTab}
              setSelected={setSelectedTab}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
