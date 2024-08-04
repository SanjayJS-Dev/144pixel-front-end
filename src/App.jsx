import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import {
  Close,
  Home,
  Menu,
  Info,
  Instagram,
  Phone,
  WebStories,
  AddAPhoto,
  KeyboardDoubleArrowDown,
  NavigateBefore,
  NavigateNext
} from "@mui/icons-material"
import 'aos/dist/aos.css';
import './App.css';
import pic1 from './assets/images/cover1.jpg'
import pic2 from './assets/images/cover2.jpg'
import pic3 from './assets/images/cover3.jpg'
import pic4 from './assets/images/cover4.jpg'
import pic5 from './assets/images/cover5.jpg'
import pic6 from './assets/images/cover6.jpg'
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';

const App = () => {

  const slides = [pic1, pic2, pic3, pic4, pic5, pic6]
  const [image, setImage] = useState(0)

  const [menu, openMenu] = useState(false)

  const [downBtn, setDownBtn] = useState(true)
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setDownBtn(false)
    }
  }

  useEffect(() => {
    setTimeout(()=>{if (image==slides.length-1) setImage(0); else setImage(image+1)},3000)
  })

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      once: true,
    });
    window.addEventListener("scroll", handleScroll)
  }, []);

  return (
    <>
      <div className="w-full h-screen transparent overflow-hidden" onClick={() => menu && openMenu(false)}>
        <div className="py-5 md:py-10 top-0 container z-50 flex flex-wrap justify-between items-center">
          <span className="text-2xl text-white select-none space-grotesk-700 flex gap-2 items-center"> MEDIAGROOTS <AddAPhoto /></span>
          <div className="md:hidden rounded-full z-50">
            {
              !menu ?
                <IconButton onClick={() => openMenu(true)}>
                  <Menu sx={{ color: 'white' }} />
                </IconButton>
                :
                <IconButton onClick={() => openMenu(false)}>
                  <Close sx={{ color: 'white' }} />
                </IconButton>
            }
          </div>
          <div className={`select-none text-white z-50 rounded-md border md:border-none backdrop-blur md:backdrop-blur-0 flex flex-col ${menu ? "mt-5 h-auto p-5" : "h-0 border-none"} overflow-hidden w-full md:flex-row md:h-auto md:w-auto md:mt-0 space-grotesk-400 transition-all duration-300 ease-out gap-5 md:gap-10`}>
            <Link to={"#"} className="flex gap-2 p-2 items-center hover:text-teal-200 hover:font-semibold transition duration-500"> <Home /> Home  </Link>
            <Link to={"#"} className="flex gap-2 p-2 items-center hover:text-teal-200 hover:font-semibold transition duration-500"> <Info /> About  </Link>
            <Link to={"#"} className="flex gap-2 p-2 items-center hover:text-teal-200 hover:font-semibold transition duration-500"> <WebStories /> Stories  </Link>
            <Link to={"#"} className="flex gap-2 p-2 items-center hover:text-teal-200 hover:font-semibold transition duration-500"> <Instagram /> Reels  </Link>
            <Link to={"#"} className="flex gap-2 p-2 items-center hover:text-teal-200 hover:font-semibold transition duration-500"> <Phone /> Contact  </Link>
          </div>
        </div>
        <div className="absolute top-0 -z-0 flex flex-col justify-center h-screen w-full text-white">

          <div className="flex flex-col h-screen justify-center gap-2 container">
            <span data-aos="fade-down" className="space-grotesk-700 text-xl md:text-5xl font-black select-none"> AD FILMS | CINEMATOGRAPHY </span>
            <span data-aos="fade-up" className="space-grotesk-400 text-md md:text-3xl font-medium select-none"> Based nowhere, Found everywhere </span>
            <span className="mt-2 space-grotesk-400 text-sm md:text-xl select-none font-light px-10 py-3 border rounded-md w-fit hover:rounded-3xl hover:bg-white hover:text-black transition-all duration-500"> BOOK NOW </span>
          </div>

          <div className="w-full flex items-center justify-between absolute bottom-36 text-white outfit select-none">
            <IconButton sx={{ marginLeft: 5 }} onClick={() => { image == 0 ? setImage(slides.length - 1) : setImage(image - 1) }}>
              <NavigateBefore fontSize='large' sx={{ color: 'gray' }} />
            </IconButton>
            {(image + 1) + " / " + slides.length}
            <IconButton sx={{ marginRight: 5 }} onClick={() => { image == slides.length - 1 ? setImage(0) : setImage(image + 1) }}>
              <NavigateNext fontSize='large' sx={{ color: 'gray' }} />
            </IconButton>
          </div>

          {
            downBtn &&
            <div className="fixed w-full flex justify-center bottom-5 md:bottom-10 animate-bounce">
              <KeyboardDoubleArrowDown fontSize='large' />
            </div>
          }

        </div>
      </div>
      {
        slides.map((slide, index) => (
          <img key={index} src={slide} className={`select-none ${index == image ? "opacity-100" : "opacity-0"} absolute top-0 -z-50 w-full h-screen object-cover transition-all duration-1000 overflow-y-hidden`} />
        ))
      }
    </>
  );
}

export default App;
