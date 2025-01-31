import React from 'react';
import { motion } from 'framer-motion';

// Reusable ProjectSection component
const ProjectSection = ({ title, description, image, buttonText, buttonLink, reverse }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} gap-12 items-center`}
      >
        <img src={image} alt={title} className="rounded-lg w-full md:w-1/2 h-auto" />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-serif mb-6 text-center">{title}</h2>
          <p className="text-black text-justify">{description}</p>
          <button
            className="mt-6 bg-[#E75033] text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors uppercase"
            onClick={() => window.location.href = buttonLink}
          >
            {buttonText}
          </button>
        </div>
      </motion.div>
    );
  };

// Project data array
const projects = [
    {
      title: "ATTENDANCE SYSTEM",
      description: "The attendance system swiftly records entries of employees or students via card scans, securely storing data like in-time, ID, and out-time in the cloud. This aids administrators in user access management, attendance tracking, and hours calculation.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/blob-a97a651.png/:/cr=t:12.9%25,l:0%25,w:100%25,h:86.2%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "HOST A DYNAMIC WEBSITE",
      description: "Employing a dynamic webpage hosted on Amazon Web Services (AWS), this project harnesses CSS, PHP, HTML, ASP, and JavaScript to ensure dynamic functionality. Integration of client and server-side languages enhances user engagement.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/dynamic-web-pages.png/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "HOST A STATIC WEBSITE USING AWS OR OTHER CLOUDS",
      description: "In this cloud services project, Amazon S3 will serve as the primary storage solution for static web content, including documentation pages and blog posts. Leveraging the user-friendly interface of Amazon S3, developers will utilize front-end technologies such as HTML and CSS to create and manage web pages efficiently.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/1_YPm5xo2PgOw3zAHLLxpdjQ.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:88.89%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "WEBSITE WITHOUT A SERVER",
      description: "Utilizing serverless cloud architecture expedites product deployment, ensuring efficiency. Serverless websites offer scalability and cost-effectiveness by charging users based on usage. Leveraging serverless environments like DynamoDB, API, S3, and consumption-based models enhances flexibility and reduces operational overhead.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/1690383687503%20(1).jpg/:/cr=t:6.6%25,l:0%25,w:100%25,h:86.81%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "ONLINE BLOOD BANKING",
      description: "This assignment involves designing a comprehensive blood bank system, incorporating blood type, donor details, storage capacity, and deposit locations. Cloud storage houses all blood bank information, facilitating accessibility. The system matches entered data with database records, aiding users in efficiently identifying suitable blood donors.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/Blood-Bank%20(1).jpg/:/cr=t:0%25,l:1.1%25,w:97.8%25,h:100%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "BOOKSTORE ON THE CLOUD",
      description: "For this project, the initial focus will be on developing a book shop management system that categorizes books into distinct sections for convenient user access. Users can search for books using either the author's name or the book title. All data will be stored and managed within a cloud-based environment.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/e-learning-concept-isometric-mobile-or-smartph.jpg/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "SMART TRAFFIC MANAGEMENT SYSTEM",
      description: "This initiative aims to alleviate congestion during peak traffic hours by leveraging vehicle movement patterns. It proposes the installation of a wireless communication system and sensors to enhance operational efficiency. Additionally, data extraction methods will be employed to gather relevant information for informed decision-making processes.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/POLIS-website-News-and-event-format-46.png/:/cr=t:13.51%25,l:0%25,w:100%25,h:72.97%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "PROJECT FOR BUG TRACKING IN CLOUD COMPUTING",
      description: "This project enables administrators to investigate issues and engage with customers through a dedicated application. To streamline defect identification and resolution, the system will automatically generate tags and labels for new issues. This simplifies the process, facilitating swift problem-solving and enhancing customer satisfaction.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/software-bug-cover.png/:/cr=t:4.2%25,l:0%25,w:100%25,h:91.6%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "FILE STORAGE SYSTEM USING HYBRID CRYPTOGRAPHY",
      description: "This project is developing a cloud-based file storage system that uses hybrid cryptography. You will develop a system to safeguard documents stored in a database by encrypting them for use in this project. Blowfish is employed in encrypting data with a high output while using the least amount of time.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/online_backup_cloud_service-100737202-orig-1.png/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "DATA REDUNDANCY REMOVAL SYSTEM",
      description: "This project prioritizes efficient removal of unnecessary and redundant data, achieved through rapid classification of test data as either redundant or false positive. Leveraging cloud technology, the system ensures validation of newly-added data to maintain a clean, duplicate-free database.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/mysql%20database.jpg/:/cr=t:17.86%25,l:0%25,w:100%25,h:64.29%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "DETECTING DATA LEAKS USING SQL INJECTIONS",
      description: "This cloud-enabled data leak detection system operates over the Internet and does not require any particular system configuration. The system aims to enhance security and provide measures against SQL injection hacking. By storing users’ information in AES 256 encryption form, it meets all the security needs.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/data-leakage-scaled.PNG/:/cr=t:12.51%25,l:0%25,w:100%25,h:74.99%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "CLOUD-BASED BUS PASS SYSTEM",
      description: "This cloud-based adaptation of online ticket purchasing resolves issues like lost, stolen, or mispriced tickets. It mitigates overload problems faced by traditional booking websites by dynamically provisioning new servers to handle increased demand. This scalability ensures uninterrupted service delivery, enhancing user experience.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/Bus-Pass-Online-Application.png/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "MAKING A CHATBOT",
      description: "A chatbot is an AI-enabled software designed to interact with users when they visit a website. These bots are assigned to websites to streamline user interaction when they land on the website for the first time. The goal is to provide real-time and immediate responses to customer inquiries.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/a%20disney%20pixar%20style%20white%20robot%20figuring%20out%20.jpg/:/cr=t:11.71%25,l:0%25,w:100%25,h:64.29%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "AUTOMATION OF UNIVERSITY ONLINE SERVICES",
      description: "This project aims to develop a comprehensive portal for universities or colleges facilitating student registration, tracking placements in diverse companies, and accessing final results. Featuring separate login portals for teachers and students, it acts as a central hub for communication among staff, students, and companies.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/Product%20Education%20Strategy%20for%20the%20upcoming%20ye.jpg/:/cr=t:13.46%25,l:0%25,w:100%25,h:73.08%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "CLOUD COMPUTING FOR RURAL BANKING",
      description: "This cloud computing initiative aims to facilitate the hosting of a banking system online, enabling users to manage their accounts remotely without the need to visit a physical bank branch. By offering convenient access to financial services over the internet, this project seeks to enhance economic activity by promoting financial inclusion and efficiency.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/A%20visual%20representation%20of%20INDIA%20on%20a%20map%20or%20a.jpg/:/cr=t:9.42%25,l:0%25,w:100%25,h:83.33%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "PRODUCT RECOMMENDATIONS SYSTEMS",
      description: "Recommender systems have become more prevalent in our lives as a result of the emergence of Youtube, Amazon, Netflix, and other similar web services. They’re algorithms that help people find items that are relevant to them. In some businesses, recommender systems are crucial since they can produce a large amount of revenue or serve as a method to differentiate yourself from competitors.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/Product-Recommendation-Implementation.jpg/:/cr=t:7.24%25,l:0%25,w:100%25,h:85.53%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "PREDICTION OF BIRD SPECIES",
      description: "Manual classification of birds can be done by topic experts, but it has become a hard and time-consuming process due to the vast accumulation of data. Artificial intelligence-based categorization becomes critical in this situation. This classification-based AI project can be approached in two ways. If you’re a newbie, you can use a random forest to forecast bird species. To get to an intermediate level, you can utilize a convolution neural network.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/Create%20the%20following%20animals%20in%20one%20picture_Do.jpg/:/cr=t:15.7%25,l:0%25,w:100%25,h:36.11%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "NEXT WORD PREDICTION",
      description: "It’s never easy to write rapidly and without making spelling mistakes. It is not difficult to type correctly and quickly while using a keyboard on a desktop computer, but typing on small devices such as mobile phones is a different story, and it can be frustrating for many of us. With the next word prediction project, you can improve your experience of typing on small devices only by predicting the next word in a sentence fragment.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/3346e-nwp.png/:/cr=t:10.48%25,l:0%25,w:100%25,h:83.39%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "FACE RECOGNITION",
      description: "Facial recognition is a technique for recognizing or verifying a person’s identification by looking at their face. This technology can recognize persons in photographs, videos, and in real-time. A type of biometric security is facial recognition. Although there is growing interest in other applications, the technology is mostly employed for security and law enforcement.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/Facial-Recognition_cover-og.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:86.77%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "HEART DISEASE PREDICTION",
      description: "From a medical standpoint, this project is advantageous because it is designed to provide online medical advice and guidance to individuals suffering from cardiac disorders. The application will be taught and fed information about a variety of different cardiac diseases. This clever system uses artificial intelligence (AI) approaches to predict the most accurate disease that might be linked to the information provided by a patient.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/Heart-Disease-Prediction-1.png/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "AI SELF-DRIVING CARS",
      description: "Artificial intelligence algorithms enable self-driving cars. They allow an automobile to collect data about its surroundings from cameras and other sensors, analyze it, and decide what actions to take. Artificial intelligence breakthroughs have allowed cars to learn to perform these tasks better than humans. It made use of complex math and image recognition techniques.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/Imagine%20a%20diverse%20group%20of%20individuals%20a%20young.jpg/:/cr=t:8.33%25,l:0%25,w:100%25,h:83.33%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "FACE AGING",
      description: "Employing GAN architectures, our application morphs human images, projecting their appearance 30 years into the future. This innovative use of deep learning provides high-resolution transformations, offering a glimpse into the aging process with remarkable detail. Despite the complexity of implementing GANs, our technology ensures realistic alterations, enabling users to visualize their future selves accurately.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/Many%20national.jpg/:/cr=t:20.2%25,l:0%25,w:100%25,h:69.23%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "VOICE-BASED VIRTUAL ASSISTANT",
      description: "One of the more intriguing Artificial Intelligence project concepts is this. Voice-activated personal assistants are useful tools for making routine activities easier. You may use virtual voice assistants to do things like search the web for items/services, shop for products for you, compose notes and create reminders, and so much more.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/AI%20Chatbots%20helping%20employee%20for%20customer%20supp.jpg/:/cr=t:13.46%25,l:0%25,w:100%25,h:73.08%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "GAME OF CHESS",
      description: "Artificial intelligence has revolutionized chess, enhancing enjoyment by providing formidable opponents. Top-level players, including Grandmasters and Super Grandmasters, rely on AI chess engines to analyze games, gaining insights into their strategies and those of their adversaries. By leveraging advanced algorithms, these systems challenge human players, elevating the complexity and excitement of the game.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/robot-playing-chess-artificial-intelligence-fr.png/:/cr=t:3.26%25,l:0%25,w:100%25,h:75.02%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    },
    {
      title: "HUMAN POSE ESTIMATION",
      description: "The art of determining a person’s body alignment by calculating various body joints is known as human pose estimate. It’s a computer vision technique for tracking a person’s or an object’s movements. This is normally accomplished by locating critical spots for the things in question. Snapchat employs position estimation to figure out where the person’s eyes and head are in order to apply a filter.",
      image: "http://img1.wsimg.com/isteam/ip/4b112535-6cdb-4025-b6b5-792728ede249/office%20worker%20in%20glasses%20and%20a%20full-length%20sui.jpg/:/cr=t:34.43%25,l:0%25,w:100%25,h:60.71%25/rs=w:600,h:300,cg:true",
      buttonText: "CLICK HERE TO APPLY",
      buttonLink: "/contact-us"
    }
  ];

  const ProjectPage = () => {
    return (
      <div className="bg-white font-poppins">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row w-full">
          {/* Left side with image */}
          <div className="w-full md:w-1/2 relative min-h-[400px]">
            <img
              src="http://img1.wsimg.com/isteam/stock/V8BQN9z/:/rs=w:1160,h:652"
              alt="Projects"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Right side with text */}
          <div className="w-full md:w-1/2 bg-[#E75033] p-8 text-white">
            <div className="pl-8">
              <h1 className="text-4xl font-bold mb-6 pt-16">WE PROVIDE PROJECTS WITH :</h1>
              <p className="mb-8 text-2xl font-semibold">
                1. Weekly Report <br />
                2. Weekly Demo <br />
                3. Hands on Session <br />
                4. Plagiarism Check <br />
                5. Final Report
              </p>
            </div>
          </div>
        </div>
  
        {/* Projects Section */}
        <section className="px-8 py-16 max-w-7xl mx-auto space-y-24">
          {projects.map((project, index) => (
            <ProjectSection key={index} {...project} reverse={index % 2 !== 0} />
          ))}
        </section>
      </div>
    );
  };
  
  export default ProjectPage;
  