import React, { useContext, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Badge, Divider, Chip, Avatar, Button, NavbarMenuItem, NavbarMenuToggle, NavbarMenu, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";
import { userContext } from "../../Context/UserContext";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaShopify, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../assets/images/Logo.png";

export default function App() {
  const menuItems = [
    "Products",
    "Categories",
    "Brand",
    "AboutUs",
    "ContactUs",
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let { userToken, setUserToken } = useContext(userContext);
  let logOutNavegate = useNavigate();

  function logOut() {
    localStorage.removeItem('userToken');
    setUserToken(null);
    logOutNavegate('login');
  }

  let { pathname } = useLocation();
  let subpage = pathname.split('/')?.[1];

  function Linkness(type = null) {
    if (subpage === '') {
      subpage = 'home';
    }
    let classes = 'rounded p-1';
    if (type === subpage) {
      classes += " bg-main text-white";
    }
    return classes;
  }

  return (
    <>
      <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} isBordered className="py-1">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
        <NavbarBrand>
          {userToken ?
            <NavLink to="/">
              <img src={logo} alt="E-commerce" className="w-40 p-2" />
            </NavLink>
            :
            <img src={logo} alt="E-commerce" className="w-40 p-2" />
          }
        </NavbarBrand>

        {userToken ?
          <>
            <div className="relative bg-main py-1 hidden sm:flex rounded-lg">
              <input
                type="search"
                className="relative w-96 block flex-auto py-1 px-2 mx-1 rounded-lg outline-none"
                placeholder="Search"
                aria-label="Search"
                id="exampleFormControlInput3"
                aria-describedby="button-addon3"
              />
              <button
                className="z-[2] inline-block p-2 me-3 text-white capitalize font-main text-sm"
                data-twe-ripple-init
                data-twe-ripple-color="white"
                type="button"
                id="button-addon3"
              >
                Search
              </button>
            </div>

            <NavbarContent as="div" justify="end">
              <NavLink to="Cart">
                <Badge content="5" size="md" className="bg-socMain text-white">
                  <Chip className="bg-transparent text-4xl hover:text-main hover:transition-all hover:duration-1000 ease-out duration-1000 my-[0.45rem]"><FaShopify /></Chip>
                </Badge>
              </NavLink>
              <Divider orientation="vertical" className="h-10 m-0" />
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="success"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                  </DropdownItem>
                  <DropdownItem key="Profile">
                    <NavbarItem>
                      <NavLink to="/Profile">Profile</NavLink>
                    </NavbarItem>
                  </DropdownItem>
                  <DropdownItem onClick={() => { logOut() }} key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent>
          </>
          : ""
        }

        {userToken == null ?
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
            <NavLink to="login">
                <Button color="success" className="capitalize" variant="bordered">login</Button>
              </NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink to="singUp">
                <Button color="success"  className="capitalize" variant="flat">Sign Up</Button>
              </NavLink>
            </NavbarItem>
          </NavbarContent>
          : ""
        }

        {userToken !== null ?
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <NavLink
                  to={item}
                  color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
                  className={Linkness(item)}
                  href="#"
                  size="lg"
                >
                  {item}
                </NavLink>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
          : ""
        }
      </Navbar>

      {userToken ?
        <Navbar className="bg-gray-100 py-1 hidden sm:flex">
          <NavbarContent className="hidden sm:flex gap-5 ms-2 w-full" justify="start">
            <NavbarItem>
              <NavLink to="/" className={Linkness("home")}>Home</NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink to="/Products" className={Linkness("Products")}>Products</NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink to="/Categories" className={Linkness("Categories")}>Categories</NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink to="/Brand" className={Linkness("Brand")}>Brand</NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink to="/AboutUs" className={Linkness("AboutUs")}>About Us</NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink to="/ContactUs" className={Linkness("ContactUs")}>Contact Us</NavLink>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex text-xl">
              <FaTwitter />
            </NavbarItem>
            <NavbarItem className="hidden lg:flex text-xl">
              <FaFacebook />
            </NavbarItem>
            <NavbarItem className="hidden lg:flex text-xl">
              <FaInstagram />
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        : ""
      }
    </>
  );
}
