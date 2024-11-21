"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const JobPage = ({ params }) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobData = async () => {
      const jobData = await getJobById(params.jobId);
      setJob(jobData);
    };

    fetchJobData();
  }, [params.jobId]);

  if (!job) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-4">{job.title}</h1>
      <p className="text-lg mb-2"><strong>Company:</strong> {job.company}</p>
      <p className="text-lg mb-2"><strong>Location:</strong> {job.location}</p>
      <p className="text-lg mb-4"><strong>Salary:</strong> {job.salary}</p>
      <p className="text-md mb-6">{job.description}</p>
      
      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-xl mb-2">How to Apply</h2>
        <p>{job.applyInstructions}</p>
        <Link href={`mailto:${job.contactEmail}`} className="mt-4 inline-block bg-blue-500 text-white p-2 rounded">Apply Now</Link>
      </div>
    </div>
  );
};

export default JobPage;
