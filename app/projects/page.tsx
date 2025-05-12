"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeading } from "@/components/section-heading"
import { ArrowRight, Github, ExternalLink, Code, Layout, Server, Database, Smartphone } from "lucide-react"

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const projects = [
    {
      title: "Modern E-commerce Platform",
      description:
        "A full-featured online store with product management, cart, and checkout functionality. Built with Next.js, Tailwind CSS, and integrated with Stripe for payments.",
      image: "/12.PNG",
      tags: ["Next.js", "Tailwind CSS", "Typescript", "Shadcn",],
      category: "fullstack",
      github: "https://github.com/mr-hamza-3335/Hamza-s-Furniture-Store",
      demo: "https://hamza-s-furniture-store.vercel.app/",
      features: [
        "User authentication and profiles",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Payment processing with Stripe",
        "Order management and tracking",
        "Admin dashboard for inventory management",
      ],
    },
    {
      title: "Revolutionizing E-Commerce Trends (Blog Website)",
      description:
        "Explore the latest innovations and insights shaping the future of online shopping",
      image: "/e.PNG",
      tags: ["React", "Next.js", "Tailwind CSS", "Typescript", "Responsive Design"],
      category: "fullstack",
      github: "https://github.com/mr-hamza-3335/blog-website",
      demo: "https://blog-website-pi-pearl.vercel.app/",
      features: [
        "AI-powered task prioritization",
        "Natural language task creation",
        "Smart categorization and tagging",
        "Deadline suggestions based on task complexity",
        "Progress tracking and analytics",
        "Cross-device synchronization",
      ],
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website built with Next.js and Tailwind CSS. Features include dark mode, animations, and contact form functionality.",
      image: "/port.PNG",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      category: "fullstack",
      github: "https://github.com/mr-hamza-3335/AmeerHamza.com",
      demo: "https://ameer-hamza-com.vercel.app/",
      features: [
        "Real-time messaging with typing indicators",
        "File and media sharing",
        "User presence indicators",
        "Message read receipts",
        "Group chat functionality",
        "End-to-end encryption",
      ],
    },
    {
      title: "Dynamic Resume Builder",
      description:
        "Create and edit resumes effortlessly with this form-based tool. Input your details, and get a professional resume ready instantly.",
      image: "/resume.PNG",
      tags: ["HTML", "CSS", "TypeScript"],
      category: "frontend",
      github: "https://github.com/mr-hamza-3335/milestone4",
      demo: "https://milestone4-one-alpha.vercel.app/",
      features: [
        "Responsive design for all devices",
        "Dark/light mode toggle",
        "Smooth page transitions and animations",
        "Project showcase with filtering",
        "Contact form with validation",
        "Performance optimized with Next.js",
      ],
    },
    {
      title: "Professional Static Resume",
      description:
        "A concise and visually appealing static resume showcasing my skills, experience, and achievements.",
      image: "/3.PNG",
      tags: ["HTML", "CSS", "Typescript"],
      category: "frontend",
      github: "https://github.com/mr-hamza-3335/milestone2",
      demo: "https://milestone2-lac.vercel.app/",
      features: [
        "Current weather conditions display",
        "5-day forecast with hourly breakdowns",
        "Interactive charts for temperature, humidity, and wind",
        "Location search with autocomplete",
        "Saved locations for quick access",
        "Weather alerts and notifications",
      ],
    },
    {
      title: "Baldia Town: Discover Your Local Community",
      description:
        "Explore the heart of Baldia Town with insights on its culture, landmarks, and local events.",
      image: "/17.PNG",
      tags: ["React", "Next.js", "Typescript", "Responsive Design"],
      category: "frontend",
      github: "https://github.com/mr-hamza-3335/baldia-town",
      demo: "https://baldia-town.vercel.app/",
      features: [
        "Search by ingredients or recipe name",
        "Filter by dietary restrictions and cuisine",
        "Save favorite recipes",
        "Create shopping lists from ingredients",
        "User ratings and reviews",
        "Recipe sharing functionality",
      ],
    },
    {
      title: "NextGen E-Commerce Platform",
      description:
        "A feature-rich e-commerce website offering seamless browsing, secure payments, and a modern user interface for an exceptional shopping experience.",
      image: "/store1.PNG",
      tags: ["Responsive Design", "Next.js", "Tailwind CSS", "Typescript"],
      category: "fullstack",
      github: "https://github.com/mr-hamza-3335/my-website",
      demo: "https://my-website-blond-alpha.vercel.app/",
      features: [
        "Content creation and editing",
        "Media library management",
        "User role management",
        "Publishing workflow with approvals",
        "Content versioning and history",
        "Analytics and reporting",
      ],
    },
    {
      title: "Modern Digital Clock",
      description:
        "A sleek and responsive digital clock displaying real-time hours, minutes, and seconds with a minimalist design.",
      image: "/clock.PNG",
      tags: ["HTML", "CSS", "Javascript"],
      category: "fullstack",
      github: "https://github.com/mr-hamza-3335/digital-clock",
      demo: "https://digital-clock-dun-tau.vercel.app/",
      features: [
        "Request routing to microservices",
        "Authentication and authorization",
        "Rate limiting and throttling",
        "Request/response transformation",
        "Logging and monitoring",
        "Cache management with Redis",
      ],
    },
    {
      title: "Password Strength Meter Web App",
      description:
        "A simple web app that checks password strength based on length, character types, and complexity using Python and Streamlit.",
      image: "/p1.PNG",
      tags: ["Python", "Streamlit", "Anaconda"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335/password-strength-meter/blob/main/app.py",
      demo: "https://pgn9ox4eohvytrt7m3wqyq.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },
    {
      title: "Interactive Portfolio Web App (Python + Streamlit)",
      description:
        "A dynamic personal portfolio built using Python and Streamlit with smooth navigation, project showcase, and custom styling.",
      image: "/p2.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335/my-streamlit-website/blob/main/app.py",
      demo: "https://my-app-websitegit-dbfugrp7qrvexq9v4lk4kh.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },
    {
      title: "Growth Mindset Challenge App (Python + Streamlit)",
      description:
        "A simple self-reflection app to set daily goals, track learning, and stay motivated — built using Python and Streamlit.",
      image: "/p3.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335/mindset/blob/main/app.py",
      demo: "https://mindset-web-app-98pnn8a4bsnjqjszfueorh.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },{
      title: "Google Unit Converter App (Python + Streamlit)",
      description:
        "A smart unit converter built with Streamlit, allowing users to convert values across Length, Weight, and Temperature units in real-time.",
      image: "/p4.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335/unit-converter1/blob/main/app.py",
      demo: "https://elqup489xshcrp6syptzyi.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },{
      title: "Guess the Number Game (User vs Computer)",
      description:
        "An interactive number guessing game built with Streamlit where the computer guesses the number chosen by the user, using dynamic feedback and a smart algorithm in a responsive UI.",
      image: "/p5.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335/unit-converter1/blob/main/app.py",
      demo: "https://guessnumberuserpy-me9rz3urryam7bs8ja3ewc.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },{
      title: "Rock, Paper, Scissors Game - Python Streamlit App",
      description:
        "An interactive Rock, Paper, Scissors game built with Streamlit where users play against the computer with instant result display and custom UI.",
      image: "/p7.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335/rock_paper_scissors/blob/main/app.py",
      demo: "https://dre4v7niz57yucyq5yb9gc.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },{
      title: "Hangman Game - Python Streamlit App",
      description:
        "An interactive Hangman word-guessing game created using Python and Streamlit where the player guesses letters to uncover a randomly chosen word.",
      image: "/p8.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335/hangman_game/blob/main/hangman_streamlit.py",
      demo: "https://hangmanapppy-epacnwsr48uyr3zq9tpzbj.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },{
      title: "Countdown Timer - Streamlit App",
      description:
        "A real-time countdown timer created using Python and Streamlit that allows users to set time in hours, minutes, and seconds with a live countdown and progress bar.",
      image: "/p9.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335/countdown_timer/blob/main/app.py",
      demo: "https://nabtyakdmsmm2xsxqsyfa9.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },{
      title: "Password Generator",
      description:
        "A smart and customizable password generator that asks users questions, applies custom password rules, checks strength, and allows export/download — all built using Python and Streamlit.",
      image: "/p10.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335/password_generator/blob/main/app.py",
      demo: "https://4d5gfdrssiz5zefpfshuc8.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },{
      title: "Advanced BMI Calculator - Streamlit App",
      description:
        "This BMI Calculator helps users determine their Body Mass Index in both metric and imperial units, gives weight status guidance, and lets them download their results.",
      image: "/p11.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335/BMI-Calculator/blob/main/app.py",
      demo: "https://ibbmmpnqrkw7o35naurj9f.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },{
      title: "Mad Libs Story Generator - Streamlit App",
      description:
        "This app lets users enter fun words and generates a random, humorous story based on their inputs. A perfect beginner-level Python + Streamlit project for learning interactivity and UI components.",
      image: "/p12.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335/mad-libs-app/blob/main/mad_libs.py",
      demo: "https://madlibspy-sgdsqijkhsvhad7syo6crk.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },{
      title: "GitHub User Information Scraper",
      description:
        "A tool to extract and display public user information from GitHub profiles.",
      image: "/p13.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335/Web-Scraping-Program",
      demo: "https://webscrapingpy-aokeclp9pw7ey7p4zekyqc.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },{
      title: "Weather Info - Check Current & 5-Day Forecast",
      description:
        "Get real-time weather updates and 5-day forecasts for any location.",
      image: "/p14.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335/Weather-Program",
      demo: "https://ksdff9ezuz4kdcla2ojo8y.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },
    {
      title: "Tic Tac Toe - Streamlit Edition",
      description:
        "A classic Tic Tac Toe game built with Streamlit for interactive web play.",
      image: "/p15.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335/tic-tac-toe-game",
      demo: "https://gamepy-fa5itrscnhng4n6byeier7.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },
    {
      title: "Secure Data Encryption System",
      description:
        "A system for securely encrypting and decrypting sensitive data using robust algorithms.",
      image: "/p16.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335/Secure-Data-Encryption-System",
      demo: "https://eamfieueg8sujcdxevao4h.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },
    {
      title: "Welcome to Secure Vault",
      description:
        "A secure platform to store, manage, and access confidential data safely.",
      image: "/p17.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335/Weather-Program",
      demo: "https://github.com/mr-hamza-3335?tab=repositories",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },
    {
      title: "Advanced QR Code Generator & Decoder",
      description:
        "A powerful tool to create and decode QR codes with advanced customization options.",
      image: "/p18.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335?tab=repositories",
      demo: "https://524bb3m8u74fa3k9f42m9f.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },
    {
      title: "Advanced Photo Editor App",
      description:
        "A feature-rich photo editing app offering advanced tools for image enhancement and customization.",
      image: "/p19.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335?tab=repositories",
      demo: "https://photomanipulationpy-jkzcjvnyxrsauhgsfqx57x.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },
    {
      title: "Minesweeper Game",
      description:
        "A classic Minesweeper puzzle game with interactive grid-based gameplay.",
      image: "/p20.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335?tab=repositories",
      demo: "https://minesweepergit-9d4hzgbsftfwtm6dkmblxn.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },
    {
      title: "Markov Chain Text Composer",
      description:
        "A text generation tool that uses Markov chains to create coherent and stylistic content.",
      image: "/p21.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335?tab=repositories",
      demo: "https://mjfra7qk9tfvy7vjaif7b6.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },
    {
      title: "Guess the Number Game",
      description:
        "A fun interactive game where players try to guess a randomly generated number.",
      image: "/p22.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335?tab=repositories",
      demo: "https://guessnumbercomputerapppy-keyx8b7ywkxelvfegllvm2.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },{
      title: "Bulk File Renamer",
      description:
        "A tool to efficiently rename multiple files at once using customizable patterns and rules.",
      image: "/p23.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335?tab=repositories",
      demo: "https://filerenamerpy-7uxvpfhbfrbsmuluh5zocz.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },{
      title: "Binary Search Visualizer",
      description:
        "A tool that visually demonstrates the binary search algorithm, showing each step of the search process.",
      image: "/p24.PNG",
      tags: ["Python", "Streamlit", "Anaconda","github"],
      category: "backend",
      github: "https://github.com/mr-hamza-3335?tab=repositories",
      demo: "https://59gz5y2arrokqv2qte72aq.streamlit.app/",
      features: [
        "CRUD operations for inventory items",
        "Order processing and fulfillment",
        "Stock level tracking and alerts",
        "Supplier management",
        "Reporting and analytics",
        "Swagger documentation",
      ],
    },
  ]

  return (
    <div className="animate-in">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge className="mb-4 px-3 py-1 text-sm" variant="secondary">
              My Work
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
              Featured Projects
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              A showcase of my work, demonstrating my skills and expertise in web development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all" className="text-sm sm:text-base">
                All Projects
              </TabsTrigger>
              <TabsTrigger value="fullstack" className="text-sm sm:text-base">
                <Code className="h-4 w-4 mr-2 hidden sm:inline-block" />
                Full Stack
              </TabsTrigger>
              <TabsTrigger value="frontend" className="text-sm sm:text-base">
                <Layout className="h-4 w-4 mr-2 hidden sm:inline-block" />
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="text-sm sm:text-base">
                <Server className="h-4 w-4 mr-2 hidden sm:inline-block" />
                Backend
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    index={index}
                    hoveredProject={hoveredProject}
                    setHoveredProject={setHoveredProject}
                    variants={fadeInUp}
                  />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="fullstack" className="space-y-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {projects
                  .filter((project) => project.category === "fullstack")
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      project={project}
                      index={index}
                      hoveredProject={hoveredProject}
                      setHoveredProject={setHoveredProject}
                      variants={fadeInUp}
                    />
                  ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="frontend" className="space-y-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {projects
                  .filter((project) => project.category === "frontend")
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      project={project}
                      index={index}
                      hoveredProject={hoveredProject}
                      setHoveredProject={setHoveredProject}
                      variants={fadeInUp}
                    />
                  ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="backend" className="space-y-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {projects
                  .filter((project) => project.category === "backend")
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      project={project}
                      index={index}
                      hoveredProject={hoveredProject}
                      setHoveredProject={setHoveredProject}
                      variants={fadeInUp}
                    />
                  ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-16 md:py-24 glass-effect">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Project Spotlight" subtitle="A closer look at one of my featured projects" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 grid gap-8 md:grid-cols-2 items-center"
          >
    <div className="relative">
  <div className="aspect-video overflow-hidden rounded-lg border border-white/10 glass-effect shadow-lg relative">
    <Image
      src="/12.PNG"
      alt="E-commerce Platform"
      fill
      className="object-cover"
    />
  </div>
  <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-lg bg-primary/20 blur-md"></div>
</div>


            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold gradient-text">Modern E-commerce Platform</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Next.js", "Tailwind CSS", "Typescript", "React", "Shadcn"].map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-primary/10 text-primary-foreground animate-pulse-scale"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground">
                A full-featured online store with product management, cart, and checkout functionality. Built with
                Next.js, Tailwind CSS, and integrated with Stripe for payments.
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="space-y-1">
                  {[
                    "User authentication and profiles",
                    "Product catalog with search and filtering",
                    "Shopping cart and checkout process",
                    "Payment processing with Stripe",
                    "Order management and tracking",
                    "Admin dashboard for inventory management",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild className="gradient-border hover-button">
                  <Link href="https://hamza-s-furniture-store.vercel.app/" target="_blank" className="relative overflow-hidden">
                    <span className="relative z-10">View Live Demo</span>
                    <motion.div
                      className="absolute inset-0 bg-primary/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <ExternalLink className="ml-2 h-4 w-4 relative z-10" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="border-white/10 hover:border-white/20">
                  <Link href="https://github.com/mr-hamza-3335/Hamza-s-Furniture-Store" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="My Development Process"
            subtitle="How I approach projects from concept to completion"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                icon: <Layout className="h-10 w-10 text-primary" />,
                title: "1. Planning & Design",
                description:
                  "I start by understanding requirements, creating wireframes, and designing the user interface with a focus on user experience.",
              },
              {
                icon: <Code className="h-10 w-10 text-primary" />,
                title: "2. Development",
                description:
                  "Writing clean, efficient code following best practices. I build components and features incrementally with regular testing.",
              },
              {
                icon: <Database className="h-10 w-10 text-primary" />,
                title: "3. Testing & Refinement",
                description:
                  "Rigorous testing across devices and browsers, optimizing performance, and refining the user experience based on feedback.",
              },
              {
                icon: <Smartphone className="h-10 w-10 text-primary" />,
                title: "4. Deployment & Support",
                description:
                  "Deploying to production with CI/CD pipelines, monitoring performance, and providing ongoing support and updates.",
              },
            ].map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="hover-card">
                <Card className="h-full overflow-hidden transition-all hover:shadow-md border-white/10 glass-effect group tilt-card">
                  <CardContent className="p-6">
                    <div className="mb-4 relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="group-hover:animate-pulse-scale"
                      >
                        {step.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold gradient-text">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 glass-effect">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">Have a project in mind?</h2>
              <p className="text-muted-foreground md:text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
                <Button size="lg" asChild className="gradient-border group">
                  <Link href="/contact" className="relative overflow-hidden">
                    <span className="relative z-10">Start a Project</span>
                    <motion.div
                      className="absolute inset-0 bg-primary/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white/10 hover:border-white/20">
                  <Link href="https://github.com/mr-hamza-3335" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

interface ProjectCardProps {
  project: any
  index: number
  hoveredProject: number | null
  setHoveredProject: (index: number | null) => void
  variants: any
}

function ProjectCard({ project, index, hoveredProject, setHoveredProject, variants }: ProjectCardProps) {
  return (
    <motion.div
      variants={variants}
      className="hover-card"
      onMouseEnter={() => setHoveredProject(index)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <Card className="h-full overflow-hidden border-white/10 glass-effect group">
        <div className="relative overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold gradient-text">{project.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag: string, i: number) => (
              <Badge
                key={i}
                variant="secondary"
                className="bg-primary/10 text-primary-foreground group-hover:animate-pulse-scale"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="mt-6 flex gap-2">
            <Button asChild variant="outline" size="sm" className="flex-1 border-white/10 hover:border-white/20">
              <Link href={project.github} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="flex-1 border-white/10 hover:border-white/20">
              <Link href={project.demo} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
