"use client";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const posters = ["/images/img-05.jpg", "/images/img-08.jpg", "/images/img-02.jpg"];

export default function Experience() {
  return (
    <section className="section bg-sand-50">
      <div className="container-px">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">Experience The Tribe Lodge</span>
            <h2 className="h-display text-4xl md:text-5xl lg:text-6xl mt-5 text-bark-900">
              A glimpse into your <em className="not-italic text-clay-600">next stay.</em>
            </h2>
            <p className="mt-5 text-bark-900/70 text-lg">
              Take a short walk-through of our suites and grounds.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {site.videos.map((src, i) => (
            <Reveal key={src} delay={i * 100}>
              <VideoCard src={src} poster={posters[i] ?? posters[0]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const onPlayClick = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <div className="relative aspect-[9/12] md:aspect-[3/4] rounded-3xl overflow-hidden group bg-bark-900">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="absolute inset-0 h-full w-full object-cover"
        playsInline
        controls={playing}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {!playing && (
        <button
          onClick={onPlayClick}
          className="absolute inset-0 flex items-center justify-center bg-bark-900/30 group-hover:bg-bark-900/40 transition-colors"
          aria-label="Play video"
        >
          <span className="h-20 w-20 rounded-full bg-sand-50/95 text-bark-900 inline-flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
            <Play className="h-7 w-7 ml-1" />
          </span>
        </button>
      )}
    </div>
  );
}
