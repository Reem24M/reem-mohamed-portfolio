"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroCard() {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped((prev) => !prev);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative mx-auto flex h-[520px] w-full max-w-[620px] items-center justify-center [perspective:1400px]">

            {/* ========================================= */}
            {/* AMBIENT GLOW */}
            {/* ========================================= */}

            <motion.div
                animate={{
                    opacity: [0.15, 0.35, 0.15],
                    scale: [0.9, 1.05, 0.9],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute h-[360px] w-[360px] rounded-full bg-primary/30 blur-[110px]"
            />

            {/* ========================================= */}
            {/* GRADIENT ORBIT 1 */}
            {/* ========================================= */}

            <motion.div
                animate={{
                    rotate: 360,
                    opacity: [0.15, 0.45, 0.15],
                    scale: [0.96, 1.03, 0.96],
                }}
                transition={{
                    rotate: {
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                    },
                    opacity: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    scale: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                className="absolute h-[430px] w-[430px] rounded-full border border-primary/40"
                style={{
                    borderImage:
                        "linear-gradient(135deg, rgba(139,92,246,.7), rgba(37,99,235,.15), rgba(217,70,239,.7)) 1",
                }}
            />

            {/* ========================================= */}
            {/* GRADIENT ORBIT 2 */}
            {/* ========================================= */}

            <motion.div
                animate={{
                    rotate: -360,
                    opacity: [0.08, 0.35, 0.08],
                    scale: [1.02, 0.95, 1.02],
                }}
                transition={{
                    rotate: {
                        duration: 24,
                        repeat: Infinity,
                        ease: "linear",
                    },
                    opacity: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    scale: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                className="absolute h-[500px] w-[500px] rounded-full border border-accent/30"
            />

            {/* ========================================= */}
            {/* ORBITING DOTS */}
            {/* ========================================= */}

            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute h-[430px] w-[430px]"
            >
                <motion.span
                    animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_20px_rgba(139,92,246,0.9)]"
                />
            </motion.div>

            <motion.div
                animate={{
                    rotate: -360,
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute h-[500px] w-[500px]"
            >
                <motion.span
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [0.7, 1.15, 0.7],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                    }}
                    className="absolute bottom-8 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_18px_rgba(217,70,239,0.9)]"
                />
            </motion.div>

            {/* ========================================= */}
            {/* 3D FLIP CARD */}
            {/* ========================================= */}

            <motion.div
                animate={{
                    rotateY: flipped ? 180 : 0,
                }}
                transition={{
                    duration: 1.25,
                    ease: [0.45, 0, 0.55, 1],
                }}
                style={{
                    transformStyle: "preserve-3d",
                }}
                className="relative z-10 h-[360px] w-[560px] sm:h-[390px] sm:w-[620px]"
            >

                {/* ======================================= */}
                {/* FRONT — FLOATING IMAGE */}
                {/* ======================================= */}

                <div
                    className="absolute inset-0"
                    style={{
                        backfaceVisibility: "hidden",
                    }}
                >
                    <motion.div
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative h-full w-full"
                    >
                        {/* Image Glow */}
                        <div className="absolute bottom-5 left-1/2 h-[260px] w-[220px] -translate-x-1/2 rounded-full bg-primary/20 blur-[80px]" />

                        {/* Image */}
                        <div className="relative h-full w-full">
                            <Image
                                src="/images/reem.png"
                                alt="Reem Mohamed"
                                fill
                                priority
                                sizes="(max-width: 768px) 95vw, 520px"
                                className="object-contain scale-[1.2]"
                            />

                            {/* Very subtle bottom fade */}
                            {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/20 to-transparent" /> */}
                        </div>

                        {/* Floating Label */}
                        {/* <motion.div
                            animate={{
                                opacity: [0.45, 0.9, 0.45],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-xs tracking-[0.3em] text-primary"
                        >
                            FRONTEND DEVELOPER
                        </motion.div> */}
                    </motion.div>
                </div>

                {/* ======================================= */}
                {/* BACK — TERMINAL */}
                {/* ======================================= */}

                <div
                    className="absolute inset-0 overflow-hidden rounded-3xl border border-secondary/60 bg-[#070b1b]/95 shadow-[0_0_70px_rgba(37,99,235,0.3)] backdrop-blur-xl"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >

                    {/* Terminal Header */}
                    <div className="flex h-14 items-center border-b border-white/10 px-5">
                        <div className="flex gap-2">
                            <span className="h-3.5 w-3.5 rounded-full bg-red-400" />
                            <span className="h-3.5 w-3.5 rounded-full bg-yellow-400" />
                            <span className="h-3.5 w-3.5 rounded-full bg-green-400" />
                        </div>

                        <span className="ml-auto font-mono text-xs text-slate-400">
                            reem@portfolio: ~/intro
                        </span>
                    </div>

                    {/* Terminal Content */}
                    <div className="relative h-[374px] overflow-hidden p-7 font-mono text-sm leading-7">
                        {/* Glow */}
                        <div className="pointer-events-none absolute right-0 top-0 h-60 w-60 rounded-full bg-secondary/15 blur-[90px]" />

                        <div className="relative">

                            <div className=" text-slate-500">
                                ~/portfolio/intro.ts
                            </div>

                            <div>
                                <span className="text-accent">const</span>{" "}
                                <span className="text-secondary">Reem</span> = {"{"}
                            </div>

                            <div className="pl-5">
                                <span className="text-slate-300">role:</span>{" "}
                                <span className="text-green-300">
                                    "Frontend Developer"
                                </span>
                                ,
                            </div>

                            <div className="pl-5">
                                <span className="text-slate-300">learning:</span>{" "}
                                <span className="text-green-300">
                                    "Full Stack"
                                </span>
                                ,
                            </div>

                            <div className="pl-5">
                                <span className="text-slate-300">stack:</span>{" "}
                                [
                                <span className="text-green-300">
                                    "React", "Next.js", "TypeScript", "Node.js"
                                </span>
                                ]
                            </div>

                            <div className="pl-5">
                                <span className="text-slate-300">passion:</span>{" "}
                                <span className="text-green-300">
                                    "Building for the web"
                                </span>
                            </div>

                            <div>
                                {"}"};
                            </div>

                            <div className="mt-5">
                                <span className="text-accent">console</span>
                                .
                                <span className="text-secondary">log</span>
                                <span className="text-white">(</span>
                            </div>

                            <div className="pl-5 text-green-300">
                                "Let's build something amazing!"
                            </div>

                            <div>
                                )
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                    }}
                                    className="ml-1 inline-block h-5 w-2 bg-primary align-middle"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Terminal Footer */}
                    <div className="flex h-12 items-center justify-between border-t border-white/10 px-5">
                        <span className="font-mono text-xs text-slate-500">
                            intro.ts
                        </span>

                        <span className="font-mono text-xs text-secondary">
                            READY
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}