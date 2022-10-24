import React from 'react';

function PictureOfTheDay({ data, visible }) {
  const today = new Date();
  const todayDate = today.toDateString();
  return (
    <div className="px-4 mt-10 text-slate-700">
      {visible && (
        <div className="flex flex-col items-center pb-20">
          <p className="mb-6 font-semibold">{todayDate}</p>
          <img src={data.hdurl} alt="" className="drop-shadow-md" />
          <div className="flex flex-col items-center justify-center gap-4 px-4 text-center leading-relaxed mt-8 md:text-lg">
            <h1>
              <span className="font-semibold">Image Credit: </span>
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
