// "use client"
// import React, { useState } from 'react'
// import { motion, useAnimation } from 'framer-motion'
// import { Howl } from 'howler'
// import confetti from 'canvas-confetti'
// import BackgroundObjects from './components/BackgroundObjects'
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

// const hoverSound = new Howl({
//   src: ['/hover-sound.mp3']
// })

// const ContactForm: React.FC = () => {
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     message: ''
//   })
//   const controls = useAnimation()

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormState(prev => ({ ...prev, [name]: value }))
//     hoverSound.play()
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     // Here you would typically send the form data to your backend
//     console.log('Form submitted:', formState)

//     // Animate form
//     await controls.start({ scale: 0.8, opacity: 0 })

//     // Trigger confetti and fireworks
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { y: 0.6 }
//     })

//     // Reset form and animation
//     setFormState({ name: '', email: '', message: '' })
//     controls.start({ scale: 1, opacity: 1 })
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900 animate-gradient-bg overflow-hidden">
//       <BackgroundObjects />
//       <motion.form
//         onSubmit={handleSubmit}
//         className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg z-10 w-full max-w-md"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Us</h2>
//         <motion.div
//           className="space-y-4"
//           animate={controls}
//         >
//           <motion.input
//             type="text"
//             name="name"
//             value={formState.name}
//             onChange={handleInputChange}
//             placeholder="Your Name"
//             className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           />
//           <motion.input
//             type="email"
//             name="email"
//             value={formState.email}
//             onChange={handleInputChange}
//             placeholder="Your Email"
//             className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           />
//           <motion.textarea
//             name="message"
//             value={formState.message}
//             onChange={handleInputChange}
//             placeholder="Your Message"
//             className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           />
//           <motion.button
//             type="submit"
//             className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Send Message
//           </motion.button>
//         </motion.div>

//         <div className="mt-8 text-white">
//           <div className="flex items-center space-x-4">
//             <FaMapMarkerAlt />
//             <p>123 Software St, Suite 100</p>
//           </div>
//           <div className="flex items-center space-x-4 mt-4">
//             <FaPhoneAlt />
//             <p>(123) 456-7890</p>
//           </div>
//           <div className="flex items-center space-x-4 mt-4">
//             <FaEnvelope />
//             <p>info@softwarecompany.com</p>
//           </div>
//         </div>
//       </motion.form>
//     </div>
//   )
// }

// export default ContactForm
