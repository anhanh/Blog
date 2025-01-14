import { google } from 'googleapis';

import googleAuth from '@/lib/google';

export default async function handler(_, res) {
  const auth = await googleAuth.getClient();
  const youtube = google.youtube({
    auth,
    version: 'v3'
  });

  const response = await youtube.channels.list({
    id: 'UCu3g5hrNoS1MKZolBeXVzAw',
    part: 'statistics'
  });

  const channel = response.data.items[0];
  const { subscriberCount, viewCount } = channel.statistics;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    subscriberCount,
    viewCount
  });
}
