import { Carousel } from 'flowbite-react'
import React from 'react'
import banner1 from "../assets/banner1.png"
import banner2 from "../assets/banner2.png"
import banner4 from "../assets/banner4.png"

const Home = () => {
    return (
        <div className='bg-neutralSilver mt-4' id='home'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-2 min-h-screen h-screen'>
                <Carousel className='w-full mx-2 duration-8000'>
                    <div className="my-28 md:my-8 md:mx-2 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={banner4} alt="img" />
                        </div>
                        {/*hero text here*/}

                        <div className='md:w-1/2 md:mt-2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>NETS-TELEPHONY Insights
                                <span className='text-brandPrimary leading snug'> from 1 year</span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8  justify-center'>Where to change telephony in your business. Discover how  Nets-Telephony with its portable server can cut your telecommunication costs by up to  <span className='text-brandPrimary leading snug font-bold'>70%!</span> </p>
                           <button className='btn-primary'>Contact-us</button>                          </div>
                    </div>

                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={banner2} alt="img" />
                        </div>
                        {/*hero text here*/}

                        <div className='md:w-1/2 '>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Ease your communications
                                <span className='text-brandPrimary overflow-y leading snug'> from now henceforth</span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8 text-center justify-center'>Break free from traditional phone network constraints. Our scalable solution adapts to your needs. Our Telephony system enables teams to collaborate effectively and enjoy flexibility and mobility at <span className='text-brandPrimary leading snug font-bold'> No Cost</span>.</p>
                           
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={banner1} alt="img" />
                        </div>
                        {/*hero text here*/}

                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>NETS-TELEPHONY is Secured, Reliable
                                <span className='text-brandPrimary leading snug'> And flexible</span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8 text-center justify-center'>Protect your business communications with our security features, uptime guarantee up to 98.99% and a guarantee of more than 300 simultaneous communications. </p>
                           {/* <button className='btn-primary'>Register</button> */}
                        </div>
                    </div>
                   
                </Carousel>
            </div>
        </div>
    )
}

export default Home
