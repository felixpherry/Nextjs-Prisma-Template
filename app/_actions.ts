import { cache } from 'react';

import { db } from '@/lib/db';
import { unstable_cache } from 'next/cache';

export const revalidate = 3600;

export const fetchPosts = cache(async () => {
  return await db.post.findMany();
});
