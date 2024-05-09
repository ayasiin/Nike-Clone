
import { socialMedia } from "../Constants"
import { footerLogo } from "../assets/images"
import { copyrightSign } from "../assets/icons"
import {footerLinks}from '../Constants'


const Footer = () => {
  return (
    
    <footer className="max-container">

      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start ">
        <a href="/">
          <img src={footerLogo} alt="footerlogo"
          width={150}
          height={45}
          className="m-0"
           />

           </a>

           <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, et.</p>
           <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icons) => (
              <div
               className="flex justify-center items-center w-12 h-12 bg-white rounded-full" 
                key={icons.alt}
                >

                <img src={icons.src} alt={icons.alt}
                width={24} 
                height={24}
                />
                </div> 
                ))}
           </div>
         </div>
         
         <div className="flex flex-1 justify-between lg:gap-10 ga-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link)=>(
                  <li className="mt-3 text-white-400  font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  key={link.name}>

                    <a>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              </div>
          ))}
         </div>
      </div>
      <div className="flex justify-between text-white-500 mt-24 max-sm:flex-col max-sm:bg-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer "
        >
          <img src={copyrightSign} alt="Copy right"
          width={20}
          height={20}
          className="rounded-full m-0 " />
          <p>Copyright .All right reserved </p>
          <p className="font-montserrat cursor-pointer "></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer