import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import MetricCard from '@/components/metrics/Card';

export default function GitHub() {
  const { data } = useSWR('/api/github', fetcher);

  const followers = new Number(data?.followers);
  const link = 'https://github.com/anhanh';

  return (
    <MetricCard header="GitHub Followers" link={link} metric={followers} />
  );
}
