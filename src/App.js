import { useEffect, useState } from 'react';
import axios from 'axios';
import NasaLogo from './assets/nasa-logo.svg';
import PictureOfTheDay from './PictureOfTheDay';

function App() {
  const APIKey = 'e2xACaTuX6ZhnIvz4b2b6saHquh0hLPecdckViQg';
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${APIKey}`)
      .then((response) => setData(response.data));
  }, []);

  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div
      className={`bg-gray-50 min-h-screen font-open flex justify-center ${
        !visible && 'items-center'
      }`}
    >
      <div className="flex flex-col items-center max-w-5xl mx-auto">
        <div className={`flex flex-col items-center ${visible && 'pt-10'}`}>
          <img
            src={NasaLogo}
            alt="Nasa-Logo"
            className="z-10 drop-shadow-md cursor-pointer"
            onClick={handleClick}
          />
          <span
            className="border border-gray-200 px-10 py-3 rounded-2xl -mt-4 text-[#0B3D91] text-center cursor-pointer hover:shadow font-semibold"
            onClick={handleClick}
          >
            Astronomy Picture of the Day?
          </span>
        </div>
        <PictureOfTheDay data={data} visible={visible} />
      </div>
    </div>
  );
}

export default App;
