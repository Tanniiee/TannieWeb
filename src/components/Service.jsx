import React from 'react'

const services = [
    {
        id: 1,
        title: "Web Development",
        description: "Building responsive and modern websites using the latest technologies.",
        icon: "🌐"
    },
    {
        id: 2,
        title: "Mobile App Development",
        description: "Creating cross-platform mobile applications for iOS and Android.",
        icon: "📱"
    },
    {
        id: 3,
        title: "UI/UX Design",
        description: "Designing user-friendly interfaces and experiences for web and mobile apps.",
        icon: "🎨"
    },
    {
        id: 4,
        title: "SEO Optimization",
        description: "Improving website visibility and ranking on search engines.",
        icon: "🔍"
    },
    {
        id: 5,
        title: "Digital Marketing",
        description: "Creating effective online marketing strategies to boost your business.",
        icon: "📈"
    },
    {
        id: 6,
        title: "Content Creation",
        description: "Producing high-quality content for blogs, social media, and websites.",
        icon: "✍️"
    }
]

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((services) => (
            <div
              key={services.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-right text-2xl font-bold ">
                {services.icon}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {services.title}
              </h3>
              <p className="mt-2 text-gray-300">{services.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service
