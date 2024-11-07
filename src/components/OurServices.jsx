import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import service1 from '../assets/Service1.jpg'
import service2 from '../assets/Service2.jpg'
import service3 from '../assets/Service3.jpg'
import { motion } from "framer-motion"

const imageVariants = (duration) => ({
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

const divVariants = (duration) => ({
    initial: { x: -10 },
    animate: {
        x: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }

}
)

const OurServices = () => {

    const services = [
        { id: 1, Title: "NEXT TELEPHONY SYSTEM", description: "Our software are personnalised for you to have a better experience", image: service1 },
        { id: 2, Title: "ENTERPRISE NETWORK", description: "We deploy your Local Network with the necesary security mesures", image: service2 },
        { id: 3, Title: "DIGITAL TRANSFORMTION", description: "We develop  web and mobile applications using the latest technologies", image: service3 }
    ]
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='service'>
            <div className='text-center md:w-1/2 mx-auto'>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -200 }}
                    transition={{ duration: 1.5 }}

                    className='text-4xl text-neutralDGrey  mb-4 font-semibold'>
                    Our Services
                </motion.h2>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className=' text-sm text-neutralGrey  mb-8 md:w-3/4 mx-auto'>
                    At NETS-TELECOM we offer and design a telephony system based on your specifications and business operations.​  Our mobile server, softphone and our team ensure seamless communications at reduced costs and increased productivity. Explore our services below to discover how we tailor our expertise to meet your unique needs
                </motion.p>
            </div>

            {/*All services */}

            <div


                className='grid  lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-8 items-center justify-center '>
                {
                    services.map(service =>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 2 }}
                            key={service.id} className='mx-auto relative mb-12 cursor-pointer '>

                            <motion.img
                                initial="initial"
                                animate="animate"
                                variants={imageVariants(6)}
                                src={service.image} alt="service-img" className='ml-auto rounded-3xl' />
                            <motion.div
                            initial="initial"
                            animate="animate"
                            variants={divVariants(6)}
                            className='text-center px-5 py-8  bg-white shadow-lg rounded-md md:w-3/4 mx-auto items-center justify-center absolute left-0
                                         right-0 -bottom-12'>
                                <h3 className='text-2xl font-semibold text-neutralDGrey mb-3 '>{service.Title}</h3>
                                <div className='flex items-center justify-center gap-8 '></div>
                                <p className='text-sm text-neutralGrey mb-3 text-justify'>{service.description}
                                    <br />   <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700 '>Read More
                                        <FaArrowRight className='inline-block ml-2' /> </a>
                                </p>

                            </motion.div>
                        </motion.div>)
                }
            </div>
        </div>
    )
}

export default OurServices
