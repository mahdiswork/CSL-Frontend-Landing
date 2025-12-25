"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import thumb1 from "@/assets/images/thumbnails/thumb1.png";
import thumb2 from "@/assets/images/thumbnails/thumb1.png";
import thumb3 from "@/assets/images/thumbnails/thumb1.png";
import PopupVideo from "@/components/shared/popup/PopupVideo";

const videos = [
  {
    name: "Video 1",
    title: "Video 1 Title",
    thumbnail: thumb1,
  },
  {
    name: "Video 2",
    title: "Video 2 Title",
    thumbnail: thumb2,
  },
  {
    name: "Video 3",
    title: "Video 3 Title",
    thumbnail: thumb3,
  },
  {
    name: "Video 4",
    title: "Video 4 Title",
    thumbnail: thumb3,
  },
];

const VideoReview = () => {
  return (
    <section className="py-16">
      <div className="container pt-60px pb-60px overflow-hidden">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12">
          Our Students Success Story
        </h2>

        <Carousel className="relative">
          <CarouselContent>
            {videos.map((video, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="rounded-2xl overflow-hidden">
                  {/* Thumbnail */}
                  <div className="relative h-48">
                    <Image
                      src={video.thumbnail}
                      alt={video.name}
                      fill
                      className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="bg-primary/60 p-3 rounded-full cursor-pointer hover:scale-110 transition">
                        {/* <Play className="text-white hover:text-gray-300 transition-colors" /> */}
                        <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center z-10">
                          <PopupVideo />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{video.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {video.title}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default VideoReview;