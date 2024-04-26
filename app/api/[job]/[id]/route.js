import {prisma} from "../../../../lib/prisma"
import { NextRequest, NextResponse } from "next/server"


export const GET = async (req, {params}) => {
  const {id} = params

  try {
    const post = await prisma.jobPosting.findUnique({
      where: { id },
    });

    return new NextResponse(JSON.stringify(post, null, 2), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, null, 2),
      { status: 500 }
    );
  }
}