export type Project = {
  id: string
  title: string
  category: string
  subcategory: string
  image: string
  slug: string
  description: string
  fullDescription: string
  technologies: string[]
  results: {
    label: string
    value: string
  }[]
  challenge: string
  solution: string
  outcome: string
  client?: string
  date: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered E-Commerce Revolution",
    category: "Web Development",
    subcategory: "Full-Stack Development",
    image: "/work/ecommerce-ai-platform.jpg",
    slug: "ecommerce-ai-platform",
    description: "Intelligent shopping platform with AI recommendations and personalized experiences",
    fullDescription:
      "Developed a next-generation e-commerce platform featuring AI-powered product recommendations, real-time inventory management, and personalized shopping experiences. The platform handles 50,000+ daily transactions with 99.9% uptime.",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "TensorFlow", "AWS"],
    results: [
      { label: "Conversion Rate Increase", value: "47%" },
      { label: "Average Order Value Growth", value: "35%" },
      { label: "Customer Retention", value: "92%" },
      { label: "Page Load Speed", value: "0.8s" },
    ],
    challenge: "Creating a seamless shopping experience with real-time AI recommendations while maintaining high performance",
    solution: "Implemented microservices architecture with edge computing for personalized recommendations and optimized database queries",
    outcome: "Achieved 47% increase in conversion rates and reduced cart abandonment by 38%",
    client: "RetailPro Solutions",
    date: "2024",
  },
  {
    id: "2",
    title: "Brand Identity System",
    category: "Branding",
    subcategory: "Visual Identity",
    image: "/work/brand-identity-system.jpg",
    slug: "brand-identity-system",
    description: "Comprehensive brand identity with logo, colors, typography, and complete guidelines",
    fullDescription:
      "Created a complete brand identity system from scratch, including logo design, color palette, typography guidelines, and comprehensive brand guidelines. The identity reflects innovation, trust, and forward-thinking values.",
    technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy"],
    results: [
      { label: "Brand Recognition", value: "+78%" },
      { label: "Brand Consistency", value: "100%" },
      { label: "Design Assets", value: "500+" },
      { label: "Implementation Time", value: "3 months" },
    ],
    challenge: "Developing a distinctive brand identity in a competitive market while ensuring versatility across platforms",
    solution: "Conducted extensive market research and competitor analysis to create a unique, memorable brand system",
    outcome: "Successfully launched brand across all touchpoints with 100% consistency",
    client: "TechVision Startups",
    date: "2024",
  },
  {
    id: "3",
    title: "Social Media Campaign - 500K Reach",
    category: "Marketing",
    subcategory: "Social Media Strategy",
    image: "/work/social-media-viral-campaign.jpg",
    slug: "social-media-viral-campaign",
    description: "Multi-platform campaign achieving 500K+ impressions and viral engagement",
    fullDescription:
      "Orchestrated a comprehensive social media campaign across Instagram, TikTok, LinkedIn, and YouTube that achieved 500,000+ impressions in the first month with an engagement rate of 8.5%, significantly above industry average of 1.2%.",
    technologies: ["Instagram", "TikTok", "LinkedIn", "YouTube", "Analytics", "Content Creation"],
    results: [
      { label: "Total Impressions", value: "520K+" },
      { label: "Engagement Rate", value: "8.5%" },
      { label: "Follower Growth", value: "125K" },
      { label: "Website Traffic Increase", value: "340%" },
    ],
    challenge: "Breaking through social media noise in a saturated market to create viral, shareable content",
    solution: "Data-driven content strategy with A/B testing, influencer partnerships, and user-generated content",
    outcome: "Exceeded engagement targets by 400% and built a highly engaged community",
    client: "FashionForward Brands",
    date: "2024",
  },
  {
    id: "4",
    title: "Mobile App UI/UX Design",
    category: "UI/UX Design",
    subcategory: "Mobile Application",
    image: "/work/mobile-app-ui-ux.jpg",
    slug: "mobile-app-ui-ux",
    description: "Intuitive mobile interface designed for 1M+ users with focus on accessibility",
    fullDescription:
      "Designed and prototyped a comprehensive mobile application interface for a fintech platform serving 1M+ users. The design prioritized accessibility, intuitive navigation, and seamless user experience across iOS and Android platforms.",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research", "Analytics"],
    results: [
      { label: "User Satisfaction Score", value: "4.8/5" },
      { label: "App Store Rating", value: "4.7★" },
      { label: "DAU Increase", value: "156%" },
      { label: "Support Tickets", value: "-64%" },
    ],
    challenge: "Simplifying complex financial operations into an intuitive user experience for diverse user groups",
    solution: "Extensive user research, usability testing, and iterative design with accessibility standards",
    outcome: "Achieved 4.8/5 user satisfaction and reduced support tickets by 64%",
    client: "FinanceFlow Ltd",
    date: "2023",
  },
  {
    id: "5",
    title: "Product Packaging Design",
    category: "Design",
    subcategory: "Packaging Design",
    image: "/work/sustainable-packaging-design.jpg",
    slug: "sustainable-packaging-design",
    description: "Eco-friendly packaging that increased shelf appeal and sustainability perception",
    fullDescription:
      "Designed sustainable packaging for a consumer product line that not only increased shelf appeal but also communicated brand values and environmental commitment. The design increased perceived value and brand recall.",
    technologies: ["3D Design", "Adobe Illustrator", "Material Science", "Sustainability"],
    results: [
      { label: "Sales Increase", value: "52%" },
      { label: "Brand Recall", value: "+68%" },
      { label: "Sustainability Score", value: "95/100" },
      { label: "Production Cost", value: "-12%" },
    ],
    challenge: "Creating premium packaging that communicates sustainability without compromising aesthetics or increasing costs",
    solution: "Collaborated with material engineers to find innovative, eco-friendly materials and optimized production methods",
    outcome: "Achieved 52% sales increase with improved sustainability perception",
    client: "EcoBeauty Corp",
    date: "2023",
  },
  {
    id: "6",
    title: "Corporate Website Redesign",
    category: "Web Development",
    subcategory: "Corporate Websites",
    image: "/work/enterprise-website-redesign.jpg",
    slug: "enterprise-website-redesign",
    description: "Modern enterprise website generating 200+ leads monthly with SEO optimization",
    fullDescription:
      "Redesigned enterprise website with focus on lead generation, SEO optimization, and modern design. Implemented conversion-optimized landing pages, improved site performance, and created a seamless user journey.",
    technologies: ["Next.js", "Tailwind CSS", "SEO", "Analytics", "CMS Integration"],
    results: [
      { label: "Monthly Leads Generated", value: "200+" },
      { label: "Organic Traffic", value: "+310%" },
      { label: "Conversion Rate", value: "6.2%" },
      { label: "Page Load Speed", value: "1.2s" },
    ],
    challenge: "Converting a dated corporate site into a modern lead generation machine while maintaining brand authority",
    solution: "Comprehensive SEO strategy, conversion rate optimization, and modern responsive design",
    outcome: "Generated 200+ monthly leads with 6.2% conversion rate",
    client: "TechCorp International",
    date: "2023",
  },
]

export default projects
