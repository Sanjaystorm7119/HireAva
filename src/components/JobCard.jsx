import { assets } from "../assets/assets";

const JobCard = ({ job }) => {
  return (
    <div className="border p-6 shadow rounded ">
      <div>
        <img src={assets.ava_icon_32} alt="company_icon" />
      </div>
      <h4 className="font-medium text-xl mt-2">{job.title}</h4>
      <div className="flex gap-2">
        <span className="bg-blue-50 border border-blue-200 px-2 py-1.5 rounded">
          {job.location}
        </span>
        <span className="bg-purple-50 border border-purple-200 px-4 py-1.5 rounded">
          {job.level}
        </span>
      </div>
      <p
        className="text-gray-500 text-sm my-4"
        dangerouslySetInnerHTML={{
          __html: job.description.slice(0, 120)+"...",
        }}
      ></p>
      <div className="flex gap-4 text-sm">
        <button className="bg-blue-500 border border-blue-800 text-white rounded p-1">Apply now</button>
        <button className="bg-gray-50 border text-gray-700 border-gray-200 rounded p-1">Know more</button>
      </div>
    </div>
  );
};

export default JobCard;
