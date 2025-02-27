import Image from "next/image";
// import { ArrowRight } from "lucide-react";


interface StartupCardProps {
  logo: string;
  name: string;
  description: string;
  bgClass: string;
}

const StartupCard: React.FC<StartupCardProps> = ({ logo, name, description, bgClass }) => {
  return (
    <div className={`flex items-center justify-between p-4 rounded-full ${bgClass} shadow-md w-full max-w-md`}>
      <div className="flex items-center space-x-3">
        <Image src={logo} alt={name} width={40} height={40} className="rounded-full" />
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      {/* <ArrowRight className="text-gray-700" /> */}
    </div>
  );
};

export default StartupCard;
