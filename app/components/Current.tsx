import { getCurrentDate } from "../utils/currentDate";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface CurrentProps {
  data: {
    current?: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
    };
    location?: {
      name: string;
      region: string;
    };
  };
}

const Current = ({ data }: CurrentProps) => {

  const currentDate = getCurrentDate();
  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 bg-black/25 p-4 rounded-xl">
      <div className="flex items-center">
        <div className="p-3">
          <h1 className="md:text-3xl font-semibold ">Today</h1>
          <p className="text-white">{currentDate}</p>
        </div>
      </div>
      <div>
        {data.current ? (
          <p className="md:text-5xl text-3xl text-white">
            {data.current.temp_c.toFixed()}
            <span>°</span>
          </p>
        ) : null}
        {data.current ? <span className="text-white md:text-2xl text-xl">{data.current.condition.text}</span> : null}
      </div>
      <div>
        {data.location ? (
          <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
            <LocationOnIcon />
            <span>
              {data.location.name}, {data.location.region}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Current;
