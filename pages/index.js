import Link from 'next/link';
import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Tuan Anh
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm a developer, freelance contractor, and mentor. You’ve found my
          personal slice of the internet –&nbsp;
          <Link href="/blog">
            <a>check my blog</a>
          </Link>
          {" while you're here or "}
          <Link href="/about">
            <a>learn more about me.</a>
          </Link>
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular
        </h3>
        <BlogPost
          title="Past, Present, and Future of React State Management"
          summary="Learn about the history of state management in React and what the preferred solutions are today."
          slug="react-state-management"
        />
        <Timeline />
      </div>
    </Container>
  );
}
