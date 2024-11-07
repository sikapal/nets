import React from 'react'
import image1 from '../assets/icons/membership.png'
import image2 from '../assets/icons/association.png'
import image3 from '../assets/icons/group-club.png'
import company1 from "../assets/icons/company1.png"
import company2 from "../assets/icons/company2.png"
import company3 from "../assets/icons/company3.png"
import company4 from "../assets/icons/company4.png"
import company5 from "../assets/icons/company5.png"
import company6 from "../assets/icons/company6.png"
import company7 from "../assets/icons/company7.png"
import { motion } from "framer-motion"

const Clients = () => {

    const iconVariants = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            }
        }

    }
    )

    const services = [
        { id: 1, Title: "Membership Organisations", description: "Our software are personnalised for you to have a better experience", image: image1 },
        { id: 2, Title: "National Organisations", description: "Connect your nationwide teams and department within your local server", image: image2 },
        { id: 3, Title: "International Organisations", description: "Overcome geographical barriers and collaborate across borders", image: image3 }
    ]

    return (
        <div className='md:px-14 px-4 py-4 max-w-screen-2xl mx-auto' id='client'>
            <div className='text-center '>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients
                </motion.h2>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -200 }}
                    transition={{ duration: 2 }}
                    className='text-neutralGrey'> We have been working with several clients</motion.p>
                {/*company logo */}

                <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                    <motion.img initial="initial"
                        animate="animate"
                        variants={iconVariants(2.5)}
                        src={company1} alt="company" />
                    <motion.img initial="initial"
                        animate="animate"
                        variants={iconVariants(2)}
                        src={company2} alt="company" />
                    <motion.img initial="initial"
                        animate="animate"
                        variants={iconVariants(1.5)}
                        src={company3} alt="company" />
                    <motion.img initial="initial"
                        animate="animate"
                        variants={iconVariants(2.5)}
                        src={company4} alt="company" />
                    <motion.img initial="initial"
                        animate="animate"
                        variants={iconVariants(2.5)}
                        src={company5} alt="company" />
                    <motion.img initial="initial"
                        animate="animate"
                        variants={iconVariants(2.5)}
                        src={company6} alt="company" />
                    <motion.img initial="initial"
                        animate="animate"
                        variants={iconVariants(2.5)}
                        src={company7} alt="company" />

                </div>
            </div>

            {/*services card*/}
            <div className='mt-20 md:w-1/2 mx-auto text-center'>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className='text-4xl text-neutralDGrey font-semibold mb-2'>Manage your calls within your Enterprise with a single system</motion.h2>
                <motion.p 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -200 }}
                  transition={{ duration: 2 }}
                className='text-neutralGrey'> Who is NETS-Telecom suitable for ?</motion.p>

            </div>

            {/*card */}
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full'>

                        <div>
                            <motion.div
                                initial="initial"
                                animate="animate"
                                variants={iconVariants(2.5)}
                                className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>  <img src={service.image} alt="service-img" className='ml-5' /></motion.div>
                            <h4 className='text-2xl font-nold text-neutralDGrey mb-2 px-2'>{service.Title}</h4>
                            <p className='text-sm text-neutralGrey'>{service.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Clients
