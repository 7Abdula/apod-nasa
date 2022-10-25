import React from 'react';

function PictureOfTheDay({ data, visible }) {
  const today = new Date();
  const todayDate = today.toDateString();
  return (
    <div className="px-4 mt-10 text-slate-700">
      {visible && (
        <div className="flex flex-col items-center pb-20">
          <p className="mb-6 font-semibold">{todayDate}</p>
          {data.media_type === 'image' ? (
            <img src={data.hdurl} alt="" className="drop-shadow-md" />
          ) : (
            <div className="pb-[56.25%] relative block w-full">
              <iframe
                className="drop-shadow-md w-full h-full absolute left-0 top-0"
                src={data.url}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="video"
              ></iframe>
            </div>
          )}

          <div className="flex flex-col items-center justify-center gap-4 px-4 text-center leading-relaxed mt-8 md:text-lg">
            <h1>
              <span className="font-semibold">Credit: </span>
              {data.copyright}
            </h1>
            <p>
              <span className="font-semibold">Title: </span>
              {data.title}
            </p>
            <p>
              <span className="font-semibold">Description: </span>
              {data.explanation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PictureOfTheDay;
