import Image from 'next/image';
import { IoSearchSharp } from "react-icons/io5";

const GroupCard = () => {
  return (
    <div className="container mx-auto mt-3 py-10 px-5 max-w-4xl bg-gradient-to-b from-gradientStart to-gradientEnd rounded-t-[120px]">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        {/* Group Image */}
        <div className="flex-shrink-0 lg:ml-7">
          <Image
            src="/Image/Group_Logo.png" // Replace with your image path in the `public` folder
            alt="Group"
            width={150}
            height={150}
            className="rounded-full mx-auto md:mx-0"
          />
        </div>

        {/* Group Details */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-2xl font-bold text-gray-800">Group Name</h2>
          <p className="text-sm text-gray-500 mt-2">
            Technical and Design Assistance | Bengaluru, Maharashtra
          </p>

          {/* Search Button */}
          <div className="flex justify-center md:justify-start items-center space-x-4 mt-4">
            <Image
              src="/Image/Message.png"
              width={25}
              height={25}
              alt="Message"
              className="cursor-pointer"
            />
            <button
              type="button"
              className="flex items-center space-x-2 bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-3xl hover:text-white hover:bg-blue-400 transition"
            >
              <IoSearchSharp className="mr-2" />
              Search
            </button>
          </div>

          <p className="text-sm text-gray-600 mt-3 ">Group | 5 members</p>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;