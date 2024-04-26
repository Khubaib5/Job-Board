"use client";

import Link from "next/link";
import Image from "next/image";

import React from 'react'


const JobCard = ({job}) => {
  return (
   <>
    <Link href={`/job/${job.id}`}>
      <div className="border p-3 rounded-md flex flex-col hover:bg-gray-200 transition duration-100 hover:text-black shadow-md">
        <div className="flex justify-between">
          <div>
            <Image
              src={job.image ? job.image : "/fallbackimage.png"}
              height={40}
              width={40}
              alt={`${job.author} logo`}
            />
            <h2 className="text-sm">{job.author}</h2>
          </div>
          <h2>{job.Salary}k/year</h2>
        </div>

        <div className="mt-3 text-xl">
          <h3>{job.name}</h3>
          <p>{job.location}</p>
          <span className="bg-purple-600 text-xs px-3 rounded-md text-white">
            {job.employmentType}
          </span>
        </div>
      </div>
    </Link>
   </>
  )
}

export default JobCard