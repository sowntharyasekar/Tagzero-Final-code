import {
  AppDev,
  Laptop,
  WhyChooseUs,
  OurMission,
  OurValues,
  WhoWeAre,
  Channel,
  WebDev,
  Analytics,
  Code,
  Discovery,
  Dashboard,
  WorkSpace,
  Data,
  Digitalmarketing,
  Streamliningoperation,
  Revamping,
  EnhancingUI,
} from "../constants/svglocations";

export const aboutUsCardsList = [
  {
    image: <WhoWeAre />,
    title: "Who We Are:",
    text: (
      <>
        At <span className="about-us-text">TagZero</span>, we transform data
        into actionable insights that drive business success. As a leading
        analytics and consulting firm, we help organizations unlock the power of
        their data to make smarter decisions and achieve their goal.
      </>
    ),
  },
  {
    image: <OurValues />,
    title: "Our Values:",
    text: (
      <>
        {" "}
        Integrity, innovation, and excellence define us at{" "}
        <span className="about-us-text">TagZero</span>. We prioritize
        collaboration and client success, delivering tailored, high-quality
        solutions. Transparency and a commitment to results guide everything we
        do.
      </>
    ),
  },
  {
    image: <OurMission />,
    title: "Our Mission:",
    text: (
      <>
        {" "}
        Our mission is to empower businesses with innovative, data-driven
        solutions that deliver real results. We are committed to being your
        trusted partner in navigating the complexities of data and turning
        challenges into opportunities.
      </>
    ),
  },
  {
    image: <WhyChooseUs />,
    title: "Why Choose Us:",
    text: (
      <>
        <span className="about-us-text">TagZero</span> offers proven expertise,
        tailored solutions, and end-to-end support to help you achieve your
        goals. Our client-focused approach ensures we understand your unique
        needs, delivering impactful results that drive your success.
      </>
    ),
  },
];

export const serviceCardsList = [
  {
    image: <Laptop />,
    title: "Web Development",
    text: [
      "Custom Mobile App Development",
      "Web Application Development",
      "API Development and Integration",
      "App Maintenance and Support",
    ],
  },
  {
    image: <AppDev />,
    title: "App Development",
    text: [
      "Custom Website Development",
      "E-Commerce Development",
      "Web Application Development",
      "Website Maintenance and Support",
    ],
  },
  {
    image: <Channel />,
    title: "Digital marketing",
    text: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Content Marketing",
      "Email Marketing",
    ],
  },
  {
    image: <WebDev />,
    title: "Web deployment",
    text: [
      "Pre-Launch Testing and Quality Assurance",
      "Staging and Rollout",
      "Website Launch",
      "Post-Launch Support and Maintenance",
    ],
  },
  {
    image: <Analytics />,
    title: "Marketing analytics",
    text: [
      "Campaign Performance Analysis",
      "Customer Segmentation",
      "ROI and Budget Analysis",
      "Reporting and Dashboards",
    ],
  },
  {
    image: <Code />,
    title: "Software development",
    text: [
      "Custom Software Development",
      "Mobile and Web App Development",
      "Software Testing and Quality Assurance",
      "Maintenance and Support",
    ],
  },
];

export const howWeWorkList = [
  {
    title: "Discovery",
    text: "We begin by understanding your business needs, goals, and challenges to create a strategic plan.",
    image: <Discovery className="w-auto" />,
    col: "4",
  },
  {
    title: "Design",
    text: "We develop intuitive designs that reflect your vision, focusing on user experience and functionality",
    image: <Dashboard className="w-auto" />,
    col: "6",
  },
  {
    title: "Development",
    text: "We bring your project to life with clean coding, seamless integration, and thorough testing.",
    image: <WorkSpace className="w-auto" />,
    col: "6",
  },
  {
    title: "Launch",
    text: "We ensure a smooth and successful launch, handling all technical aspects and final checks.",
    image: <Data className="w-auto" />,
    col: "4",
  },
];
export const Casestudieslist = [
  {
    title: "Revamping E-Commerce for TrendShop",
    image: <Digitalmarketing className="imagewidthcase" />,
    text:[
        {
    title:"Challenge",
      text:"Outdated platform struggling with high traffic and user experience."},
      {
        title:"Solution",
        text:"Developed a scalable, user-friendly e-commerce platform with modern payment integrations.",
      },
      {
        title:"Outcome",
        text:"500% increase in traffic, 30% lower cart abandonment, 25% higher conversions.",
      }]
  },
  {
    title: "Digital Marketing Success for HealthPlus",
    image: <Streamliningoperation className="imagewidthcase" />,
    text:[
        {
    title:"Challenge",
      text:"Low brand visibility in a competitive market."},
      {
        title:"Solution",
        text:"implemented SEO, PPC campaigns, and content marketing.",
      },
      {
        title:"Outcome",
        text:"200% boost in organic traffic, 40% growth in lead generation.",
      }]
    
  },
  {
    title: "Streamlining Operations at TechGlobal",
    image: <Revamping className="imagewidthcase" />,
    text:[
        {
    title:"Challenge",
      text:"Disjointed client management systems."},
      {
        title:"Solution",
        text:"Created a custom CRM for integrated sales and client management.",
      },
      {
        title:"Outcome",
        text:"35% increase in sales productivity, 20% better customer retention.",
      }]

  },
  {
    title: "Enhancing User Experience for TravelMate",
    image: <Revamping className="imagewidthcase" />,
    text:[
        {
    title:"Challenge",
      text:"Outdated mobile app lacking modern features."},
      {
        title:"Solution",
        text:"Designed a new app with real-time updates and seamless booking.",
      },
      {
        title:"Outcome",
        text:"40% increase in downloads, 25% more bookings.",
      }],
    
  },
  {
    title: "Development",
    image: <Revamping className="imagewidthcase" />,
    text:[
        {
    title:"Challenge",
      text:"Outdated mobile app lacking modern features."},
      {
        title:"Solution",
        text:"Designed a new app with real-time updates and seamless booking.",
      },
      {
        title:"Outcome",
        text:"40% increase in downloads, 25% more bookings.",
      }],},
  {
    title: "Launch",
    image: <Revamping className="imagewidthcase" />,
    text:[
        {
    title:"Challenge",
      text:"Outdated mobile app lacking modern features."},
      {
        title:"Solution",
        text:"Designed a new app with real-time updates and seamless booking.",
      },
      {
        title:"Outcome",
        text:"40% increase in downloads, 25% more bookings.",
      }],  },
];
