"use client"

import { Navigation } from "@/components/navigation"
import { ButtonRipple } from "@/components/button-ripple"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { projectsData } from "@/lib/utils"
import { ExternalLink } from "lucide-react"

export default function ProjectDetail() {
  const params = useParams()
  const projectId = params.id

  const project = projectsData[String(projectId)] || projectsData["1"]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <section className="pt-32 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">{project.name}</h1>

          <div className="relative rounded-lg overflow-hidden mb-12">
            <Image
              src={project.mainImage || "/placeholder.svg"}
              alt={project.name}
              width={1200}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="mb-12 rounded-lg bg-gray-900 p-4 overflow-hidden">
            <div className="flex gap-6 tag-scroll">
              {[...project.tags, ...project.tags, ...project.tags].map((tag: string, idx: number) => (
                <button
                  key={idx}
                  className="flex-shrink-0 px-4 py-2 rounded-full bg-[#247DA6] text-white text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  {tag}
                </button>
              ))}
            </div>
            <style jsx>{`
              .tag-scroll {
                animation: scroll-horizontal 30s linear infinite;
              }
              .tag-scroll:hover {
                animation-play-state: paused;
              }
              @keyframes scroll-horizontal {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-33.333% - 1.5rem));
                }
              }
            `}</style>
          </div>

          <div className="grid grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-sm font-bold text-gray-400 mb-2">MY ROLE</h3>
              <p className="text-lg font-semibold">{project.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-400 mb-2">YEAR</h3>
              <p className="text-lg font-semibold">{project.year}</p>
            </div>
          </div>

          {project.link && (
            <div className="mb-12">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ButtonRipple className="inline-flex items-center gap-2">
                  View Project <ExternalLink size={18} />
                </ButtonRipple>
              </a>
            </div>
          )}

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">WHAT</h2>
            <p className="text-base leading-relaxed text-gray-300 mb-6">{project.what}</p>
            {project.focus && (
              <ul className="space-y-2 text-gray-300">
                {project.focus.map((item: string, idx: number) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-[#247DA6]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">FEATURES</h2>
            <ul className="space-y-3 text-gray-300">
              {project.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-[#247DA6] flex-shrink-0">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-16 text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">DEMO VID</h2>
            <div className="bg-gray-800 rounded-lg w-full aspect-video flex items-center justify-center">
              <p className="text-gray-400">Insert video or link here</p>
            </div>
          </div>

          <div className="flex justify-center">
            <Link href="/projects">
              <ButtonRipple>Back to Projects</ButtonRipple>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
