import { db } from '@/lib/db';

export const GET = async (req: Request) => {
  try {
    const posts = await db.post.findMany();

    return Response.json(
      { posts },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return Response.json(
      {
        msg: 'Something went wrong',
      },
      {
        status: 500,
      }
    );
  }
};
