'use client';
import React, { useState, useEffect } from 'react';
import HouseMoneyIcon from '@/components/SVGs/houseMoneyIcon';
import Link from 'next/link';
import { ApplyLoanModal } from "@/components/loans/apply-loan-modal";
import BooksIcon from '@/components/SVGs/books';
import CarImageIcon from '@/components/SVGs/carImage';
import RocketIcon from '@/components/SVGs/rocketIcon';

const promos = [
    {
        id: "rent",
        title: "Need to pay rent urgently?",
        desc: "Booster gives you access to a pool of lenders, at a competitive rates and flexible terms.",
        bgClass: "bg-[#DCEAF8]",
        textClass: "text-[#112d4e]",
        btnClass: "bg-[#1F7AEA] hover:bg-[#1860bb] text-white",
        curveBg: "bg-white",
        IconComponent: () => (
             <div className="scale-[1.2] mt-4">
                 <HouseMoneyIcon />
             </div>
        )
    },
    {
        id: "tuition",
        title: "Tuition fees?\nNo worries!",
        desc: "Get up to ₦1,000,000 educational\nloan, easy!",
        bgClass: "bg-[#1F7AEA]",
        textClass: "text-white",
        btnClass: "bg-white hover:bg-gray-100 text-[#1F7AEA]",
        curveBg: "bg-white",
        IconComponent: () => (
             <div className="flex flex-col items-center mt-6 z-10 w-[240px]">
                 <BooksIcon />
             </div>
        )
    },
    {
        id: "car",
        title: "Get your dream car with a Boost!",
        desc: "No collateral nor paper work!",
        bgClass: "bg-[#DCEAF8]",
        textClass: "text-[#112d4e]",
        btnClass: "bg-[#1F7AEA] hover:bg-[#1860bb] text-white",
        curveBg: "bg-white",
        IconComponent: () => (
             <div className="flex flex-col items-center mt-6 z-10 w-[240px]">
                 <CarImageIcon />
             </div>
        )
    },
    {
        id: "rocket",
        title: "Designed to get you ahead!",
        desc: "Get up to ₦1,000,000 educational\nloan, easy!",
        bgClass: "bg-[#1F7AEA]",
        textClass: "text-white",
        btnClass: "bg-white hover:bg-gray-100 text-[#1F7AEA]",
        curveBg: "bg-white",
        IconComponent: () => (
             <div className="flex flex-col items-center mt-6 z-10 w-[220px]">
                 <RocketIcon />
             </div>
        )
    }
];

export default function PromoCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-advance logic
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % promos.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const activePromo = promos[activeIndex];

    return (
        <div className={`relative overflow-hidden h-[694px] rounded-[32px] p-8 flex flex-col items-center pt-16 text-center transition-colors duration-500 ${activePromo.bgClass}`}>
            
            {/* Top Text Content */}
            <div className={`relative z-10 px-2 mt-4 flex flex-col items-center transition-opacity duration-300 ${activePromo.textClass}`}>
                <h2 className="text-[26px] font-extrabold leading-tight tracking-tight whitespace-pre-line">
                    {activePromo.title}
                </h2>
                <p className={`text-[13px] mt-4 mb-8 font-medium leading-relaxed max-w-[90%] whitespace-pre-line ${activePromo.textClass === 'text-white' ? 'text-white/90' : 'text-[#112d4e]/80'}`}>
                    {activePromo.desc}
                </p>
                <ApplyLoanModal>
                    <button className={`text-[13px] font-semibold px-8 py-2.5 rounded-full shadow-sm transition-all ${activePromo.btnClass}`}>
                        Apply for Loan
                    </button>
                </ApplyLoanModal>
            </div>

            {/* Decorative background bottom circle curve with Interactive Component */}
            <div className={`absolute w-[200%] h-[400px] ${activePromo.curveBg} rounded-t-[50%] left-1/2 bottom-[20px] -translate-x-1/2 flex items-start justify-center pt-8 border-t border-white/50 shadow-[0_-10px_20px_rgba(255,255,255,0.2)] transition-all duration-500`}>
                {activePromo.IconComponent && <activePromo.IconComponent />}
            </div>

            {/* Slider Dots aligned at the very bottom */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {promos.map((_, index) => (
                    <button 
                        key={index} 
                        onClick={() => setActiveIndex(index)}
                        className={`transition-all duration-300 rounded-full h-1.5 ${activeIndex === index ? (activePromo.textClass === 'text-white' ? "bg-white w-4" : "bg-[#1F7AEA] w-4") : (activePromo.textClass === 'text-white' ? "bg-white/40 w-1.5" : "bg-[#1F7AEA]/30 w-1.5")}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
            
        </div>
    );
}
