import { FaFileAlt } from "react-icons/fa";
import { RiDownload2Line } from "react-icons/ri";



const ProjectSamples = () => {
  
  return (
    <section className="bg-white p-4 max-w-3xl  mx-auto">
          <h2 className="text-xl font-bold text-black mb-3">Project Samples</h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 mt-2 border-2 border-blue-400 rounded-md bg-blue-50 text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition cursor-pointer">
            <FaFileAlt className="text-xl" />
            <a href="#" className="hover:underline">
              Doc file 25 MB
            </a>
            <RiDownload2Line className="text-xl" />
          </div>
    </section>
  );
};

export default ProjectSamples;
