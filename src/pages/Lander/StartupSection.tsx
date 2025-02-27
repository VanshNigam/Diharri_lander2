import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Startup {
  logo: string;
  name: string;
  description?: string;
  textColor: string;
  gradient: string;
}

const startups: Startup[] = [
  {
    logo: "/Lander/Ibm_logo.png",
    name: "IBM",
    description: "AI Evaluator and Services",
    textColor: "text-[#244187]",
    gradient: "bg-[#EEF2FF] border border-[#A5B4FC]",
  },
  {
    logo: "/Lander/Duolingo_logo.png",
    name: "Duolingo",
    textColor: "text-[#40BF4D]",
    gradient: "bg-white border border-[#A5B4FC]",
  },
  {
    logo: "/Lander/Udemy_logo.png",
    name: "Udemy",
    textColor: "text-[#9D55F5]",
    gradient: "bg-white border border-[#A5B4FC]",
  },
];

const StartupCard: React.FC<Startup> = ({ logo, name, description, textColor, gradient }) => {
  return (
    <div className={`flex items-center w-[40vw] justify-between p-6 md:p-10 rounded-full shadow-md ${gradient}`}>
      <div className="flex items-center gap-4">
        <Image src={logo} alt={name} width={40} height={40} className="rounded-full" />
        <div>
          <p className={`text-[1.3rem] font-[450] ${textColor}`}>{name}</p>
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
      </div>
      <ArrowRight size={20} className="text-[#244187]" />
    </div>
  );
};

const StartupSection: React.FC = () => {
  return (
    <div className="w-full md:w-[50%] flex flex-col items-end mt-8 md:mt-0">
      <div className="mt-6 space-y-4 w-full">
        <h3 className="text-[1.6rem] font-extrabold text-[#244187]">Start-ups to work for</h3>
        {startups.map((startup, index) => (
          <StartupCard key={index} {...startup} />
        ))}
      </div>
    </div>
  );
};

export default StartupSection;
