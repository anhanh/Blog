import Link from 'next/link';

import Container from '@/components/Container';

export default function About() {
  return (
    <Container title="About – Anh Pham">
      a
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Tuan Anh. I'm a developer, freelance contractor, and
            mentor.
          </p>
          <p>
            I grew up in Da Nang and went to live in Ho Chi Minh for ten years
            then moved back. I like all geeky things like reading and watching
            sci-fi and fantasy, playing video games. Besides indoor activities,
            I also like working out, triathlon training, being in nature,
            trekking and other outdoorsy action.
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1eyEu-7cQLzejWXwZk9kRHujQv-NKPvdn"
          width="100%"
          height="280"
        />
      </div>
    </Container>
  );
}
