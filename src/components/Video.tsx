import React from "react";

interface IVideoProps {
  id: string;
}

export default function Video({ id }: IVideoProps) {
  return (
    <div className='aspect-video'>
      <iframe>
        src={`https://www.youtube.com/embed/${id}`}
        title="Youtube video player" allow="accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope; picture-in-picture;
        web-share"
      </iframe>
    </div>
  );
}
