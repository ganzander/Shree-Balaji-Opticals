"use client";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "I purchased my new glasses from Shree Balaji Opticals, and the quality is outstanding. The staff was extremely helpful in helping me choose the perfect frame.",
    name: "Rajesh Gupta",
    title: "Customer",
    imageSrc:
      "https://images.unsplash.com/photo-1477814670986-8d8dccc5640d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1vZGVsJTIwZXlld2VhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    quote:
      "The eye test service was quick and professional. They provided excellent advice on the right lenses for my eyesight. Highly recommend!",
    name: "Sneha Verma",
    title: "Customer",
    imageSrc:
      "https://images.unsplash.com/photo-1477814670986-8d8dccc5640d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1vZGVsJTIwZXlld2VhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    quote:
      "I was looking for stylish sunglasses, and Shree Balaji Opticals had the perfect collection. I found exactly what I wanted!",
    name: "Amit Shah",
    title: "Customer",
    imageSrc:
      "https://images.unsplash.com/photo-1477814670986-8d8dccc5640d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1vZGVsJTIwZXlld2VhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    quote:
      "The contact lenses I bought are very comfortable. I’ve tried different brands before, but these are by far the best.",
    name: "Neha Kapoor",
    title: "Customer",
    imageSrc:
      "https://images.unsplash.com/photo-1477814670986-8d8dccc5640d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1vZGVsJTIwZXlld2VhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    quote:
      "Shree Balaji Opticals gave me great discounts on my new frames. I saved a lot and got high-quality glasses in return!",
    name: "Vikram Singh",
    title: "Customer",
    imageSrc:
      "https://images.unsplash.com/photo-1477814670986-8d8dccc5640d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1vZGVsJTIwZXlld2VhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function TestimonialSection() {
  return (
    <div className="h-screen overflow-x-hidden flex flex-col antialiased bg-[#F6F5F2] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <p className="uppercase text-2xl md:text-5xl font-bold relative z-20 bg-clip-text text-black dark:text-white py-8">
        Testimonials
      </p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
