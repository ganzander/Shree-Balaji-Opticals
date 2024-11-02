"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function ServiceSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full min-h-screen bg-[#eee] py-20 dark:bg-black">
      <h2 className="w-full uppercase text-center pl-4 text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        SERVICES
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Eyewear",
    title: "Explore our latest eyewear collection.",
    src: "https://images.unsplash.com/photo-1553194671-078621819afe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEV5ZXdlYXIlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",
    redirectRoute: "/",
  },
  {
    category: "Lenses",
    title: "Get the perfect lenses for your vision.",
    src: "https://images.unsplash.com/photo-1558254916-5f7e6fc7c33e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEV5ZXdlYXIlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",
    redirectRoute: "/",
  },
  {
    category: "Sunglasses",
    title: "Stylish sunglasses for every occasion.",
    src: "https://images.unsplash.com/photo-1553632183-c17a0664a8b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fEV5ZXdlYXIlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",
    redirectRoute: "/",
  },
  {
    category: "Eye Tests",
    title: "Book a comprehensive eye test today.",
    src: "https://images.unsplash.com/photo-1559069994-41b136ee0e33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEV5ZXdlYXIlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",
    redirectRoute: "/",
  },
  {
    category: "Contact Lenses",
    title: "Comfortable and clear contact lenses.",
    src: "https://images.unsplash.com/photo-1530834395125-2a7eb8848ac0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEV5ZXdlYXIlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",
    redirectRoute: "/",
  },
  {
    category: "Offers",
    title: "Special discounts on frames and lenses.",
    src: "https://images.unsplash.com/photo-1587069841489-397256e1683e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEV5ZXdlYXIlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",
    redirectRoute: "/",
  },
  {
    category: "Accessories",
    title: "Explore our eyewear accessories.",
    src: "https://images.unsplash.com/photo-1557002666-513ca8eaa3c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fEV5ZXdlYXIlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",
    redirectRoute: "/",
  },
];
