import React from 'react'
import AboutImage from '../assets/images/avatar/avatar.png'

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:md-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a mobile developer skilled in Java, JavaScript, and
              TypeScript, with expertise in React Native and Firebase. I am
              passionate about building high-quality apps, optimizing user
              experience, and continuously learning new technologies.
            </p>
            <p className="text-lg mb-8">
              Short-Term Goals (3–6months): Secure a full-time job in mobile
              development. Improve skills in React Native, Kotlin, and Firebase.
              Gain real-world project experience. Develop and launch an app on
              Google Play or App Store. Long-Term Goals (3–5 years): Become a
              Senior Mobile Developer. Expand into Full-Stack development. Lead
              a development team. Launch a startup or innovative product.
            </p>
            <p className="text-lg mb-8">
              Long-Term Goals (3–5 years): Become a Senior Mobile Developer.
              Expand into Full-Stack development. Lead a development team.
              Launch a startup or innovative product.
            </p>
            <div className="space-y-4">
              {/* HTML,CSS */}
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
                </div>
              </div>
              {/* ReactJS */}
              <div className="flex items-center">
                <label htmlFor="reactjs" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              {/* NodeJS */}
              <div className="flex items-center">
                <label htmlFor="nodejs" className="w-2/12">
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
                </div>
              </div>
              {/* React Native */}
              <div className="flex items-center">
                <label htmlFor="reactnative" className="w-2/12">
                  React Native
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>
            </div>
            {/* Kinh nghiệm */}
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  3+
                </h3>
                <p>Years of Experience</p>
              </div>

              {/* dự án  */}
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  50+
                </h3>
                <p>Projects Completed</p>
              </div>

              {/* Khách hàng */}
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
