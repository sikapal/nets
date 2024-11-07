import React from 'react'
import banner3 from '../assets/banner3.png'
import image9 from '../assets/icons/image 9.png'
import { motion } from "framer-motion"

const buttonVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [20, -20],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }

}
)
const Products = () => {
    return (
        <div id='product'>
            {/*about text*/}
            <div className='px lg:px-14 max-w-screen-2xl mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                   
                <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5 }}
                        className='md:w-3/5 mx-4'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>
                            The quality of how product is a assured and secured
                        </h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8 text-justify'>
                            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
                            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit
                            erat a magna. Donec quis erat at libero ultrices mollis. In hac
                            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
                            facilisis finibus. In euismod augue vitae nisi ultricies,
                            non aliquet urna tincidunt. Integer in nisi eget nulla commodo
                            faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
                            Donec consectetur faucibus ipsum id gravida.
                        </p>
                        <motion.button
                            initial="initial"
                            animate="animate"
                            variants={buttonVariants(1)}
                            className='btn-primary'>Learn More</motion.button>

                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -200 }}
                        transition={{ duration: 2 }}>
                        <img src={banner3} alt="aboutImg" />
                    </motion.div>
                   

                </div>

            </div>

            {/*grey section */}

            <div className=' lg:px-14 max-w-screen-2xl w-full mx-auto bg-neutralSilver py-16'>

                <div className='flex flex-col md:flex-row justify-between items-center gap-8' id='testimonial'>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -200 }}
                        transition={{ duration: 2 }}
                        className='md:w-1/3 '>
                        <img src={image9} alt="" />
                    </motion.div>

                    <div className='md:w-2/3 mx-4'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 200 }}
                            transition={{ duration: 2 }}>
                            <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>
                                Nets Telecom's deployment is fueled by the visionary leadership of our Chief Executive Officer,
                                Djidjou Kevin, whose expertise in telecommunications and passion for innovation have shaped
                                our cutting-edge VoIP solutions.
                                With over 4 years of industry experience, he has cultivated a deep understanding
                                of the complex communication needs of modern businesses. Under Kevin's guidance,
                                our team has developed tailored solutions that bridge geographical divides,
                                foster seamless collaboration, and drive growth.
                                Kevin's commitment to innovation and customer satisfaction has been
                                instrumental in establishing Nets Telecom as a trusted partner for organizations.
                                Through strategic partnerships, forward-thinking initiatives,
                                and a customer-centric approach,our team continues to propel our company forward,
                                ensuring we remain at the forefront of telecommunications excellence.
                            </p>
                            <h5 className='text-brandPrimary text-xl font-semibold mb-4'>Our Team</h5>
                            <p className='text-base text-neuralGrey mb-8 font-bold'>NETS-TELECOM</p>
                            <div>
                                {/* <div className='flex items-center gap-8 flex-wrap'>
                                    <img src="/src/assets/icons/company1.png" alt="company" />
                                    <img src="/src/assets/icons/company2.png" alt="company" />
                                    <img src="/src/assets/icons/company3.png" alt="company" />
                                    <img src="/src/assets/icons/company4.png" alt="company" />
                                    <img src="/src/assets/icons/company5.png" alt="company" />
                                    <img src="/src/assets/icons/company6.png" alt="company" />
                                    <img src="/src/assets/icons/company7.png" alt="company" />

                                    <div className='flex flex-row item-center gap-8'>
                                        <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>View all our customers
                                            <FaArrowRight className='inline-block ml-2' /> </a>

                                    </div>
                                </div> */}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products
