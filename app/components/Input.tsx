"use client";
import SearchIcon from "@mui/icons-material/Search";

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ handleSearch, setLocation }: InputProps) => {
  return (
    <form className="flex items-center md:w-2/4 w-full order-2 md:order-1  py-1">
      <input
        type="text"
        className="w-full  py-2 outline-none rounded-lg focus:border-2 focus:border-blue-500 text-black"
        placeholder="Search here..."
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="ml-[-25px] text-black cursor-pointer">
        <SearchIcon />
      </div>
    </form>
  );
};

export default Input;
