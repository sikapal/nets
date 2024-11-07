import React from 'react'
import team01 from '../assets/team-01.jpeg'
import team02 from '../assets/team-02.jpg'
import team03 from '../assets/team-03.jpg'
import { motion } from 'framer-motion'

const OurTeam = () => {
  const teamMembers = [
    {
      name: "DJIDJOU KEVIN",
      title: "CEO",
      image: team03,
      description: "Kevin is a visionary leader and seasoned telecommunication expert. With a passion for innovation and customer-centric approach, he works with the team to provide strategique decisions",
      socialLinks: {
        mail: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "SIKAPA LUCIEN",
      title: "Telecommunications Engineer",
      image: team01,
      description: "Lucien is among the leading engineers behind our solution and he works deligently with the entire team to motivate and bring them forward ",
      socialLinks: {
        mail: "https://www-gmail.com/sikapalucien.lucien@gmail.com",
        linkedIn: "https://www.linkedin.com/in/lucien-sikapa-b8a015149",
        github: "https://www.github.com/sikapal"
      },
    },
    {
      name: "Moneze Parfait",
      title: "Software Engineer",
      image: team02,
      description: "Parfait is the Mobile and web chief Developper in our team. He is mainly behind the intuitive interfaces deployed for our uses",
      socialLinks: {
        mail: "#",
        linkedin: "#",
        github: "#",
      },
    },


  ];
  return (
    <div className="py-10 bg-white-50 " id='team'>
      <div className="container mx-0">
        <div className="text-center mb-4">
          <motion.h3
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="text-3xl font-bold text-gray-800 mb-4">Experienced & Professional Team</motion.h3>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 2 }}

            className="text-gray-500 mx-2 text-center justify-center ">
            You can rely on our amazing team provide you with the best scaled and maintainable telephony solution
          </motion.p>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {teamMembers.map((member, index) => (
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8" key={index}>
              <div className="text-center">
                <motion.img

                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -200 }}
                  transition={{ duration: 2 }}

                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-48 h-48 mx-auto mb-4 object-cover "
                />
                <motion.h5
                 whileInView={{ opacity: 1, x: 0 }}
                 initial={{ opacity: 0, x: -200 }}
                 transition={{ duration: 2 }}
                className="text-xl font-semibold text-brandPrimary">{member.name}</motion.h5>
                <motion.p
                 whileInView={{ opacity: 1, x: 0 }}
                 initial={{ opacity: 0, x: 200 }}
                 transition={{ duration: 2 }}
                className="text-neutralGrey">{member.title}</motion.p>
                <motion.p 
                 whileInView={{ opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: 200 }}
                 transition={{ duration: 2 }}
                className="mt-2 text-gray-600 text-justify mx-4">{member.description}</motion.p>
                <ul className="flex justify-center space-x-3 mt-4">
                  <li>
                    <a href={member.socialLinks.mail} className="text-gray-500 hover:text-blue-600">
                      <i className="bi bi-google"></i>
                    </a>
                  </li>

                  <li>
                    <a href={member.socialLinks.linkedin} className="text-gray-500 hover:text-pink-500 cursor-pointer">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={member.socialLinks.github} className="text-gray-500 hover:text-blue-700">
                      <i className="bi bi-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default OurTeam
