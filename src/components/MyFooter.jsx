import React from 'react'
import logo from '../assets/logo2.jpg'
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";


const MyFooter = () => {
  return (
    <Footer container className='bg-gray-50 mx-auto'>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='space-y-4 mb-8'>
            <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt="logo" className='w-10 inline-block items-center' /><span className='text-brandPrimary'>NETS-TELECOM</span></a>

            <div>
              <p className='mb-1'>Copyright © 2025 Nets-Telecom Sarl.</p>
              <p>All rights reserved</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="contact-us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Whatsapp</Footer.Link>
                <Footer.Link href="#">(+237)699617645</Footer.Link>
                <Footer.Link href="#">(+237)621602124</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <div className='cursor-pointer text-violet-500 font-bold'>
                  <Footer.Link href="https://drive.google.com/drive/folders/1UfttCT4dA1E0SEDCIdh002ms1j7WFvc1?usp=sharing" target="_blank" rel="noopener noreferrer">Télécharger l'APK ici</Footer.Link>
                </div>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Nets-Telecom™" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />

          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter
