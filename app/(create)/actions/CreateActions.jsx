"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../../../lib/prisma";

// export type FormData = {
//     name: string;
//     description: string;
//     location: string;
//     author: string;
//     salary: string;
//     img: string;
//     employmentType: string;
//   };

export async function createJob(data) {
    await prisma.JobPosting.create({
      data: {
        name: data.name,
        description: data.description,
        location: data.location,
        author: data.author,
        Salary: parseFloat(data.salary),
        image: data.image,
        employmentType: data.employmentType,
      },
    });
  
    revalidatePath("/");
  }
