import { getCurrentDate } from "../utils/currentDate";

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
    <div className="flex flex-col gap-4 bg-white/20 md:p-6 p-4 rounded-2xl backdrop-blur-sm shadow-lg w-full md:w-auto">
      <div className="space-y-2">
        <h1 className="text-xl md:text-3xl font-bold text-gray-500">Current Weather</h1>
        <p className="text-gray-200">{currentDate}</p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3">
        {data.current?.condition.icon && (
          <img
            src={`https:${data.current.condition.icon}`}
            alt={data.current.condition.text}
            className="md:w-24 md:h-24 w-16 h-16"
          />
        )}
        <div>
          <p className="text-3xl font-bold text-white">
            {data.current?.temp_c.toFixed()}
            <span className="text-3xl">°C</span>
          </p>
          <p className="text-lg text-gray-200 mt-1">
            {data.current?.condition.text}
          </p>
        </div>
      </div>
      {data.location && (
        <div className="flex items-center gap-2 text-white bg-white/20 px-4 py-2 rounded-full">
          <span className="text-sm">
            {data.location.name}, {data.location.region}
          </span>
        </div>
      )}
    </div>
  );
};

export default Current;
