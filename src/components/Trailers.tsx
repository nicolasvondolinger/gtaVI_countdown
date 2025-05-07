'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function Trailers() {
  const { translations } = useLanguage();

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-6">{translations.trailers}</h3>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="w-full md:w-1/2">
          <iframe
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/QdBZY2fkU-0"
            title="GTA VI Trailer 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full md:w-1/2">
          <iframe
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/VQRLujxTm3c"
            title="GTA VI Trailer 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}