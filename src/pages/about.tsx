import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import Banner from '../../public/banner.jpg';

dayjs.extend(relativeTime);

export default function AboutPage() {
	return (
		<div className="space-y-8">
			<h1 className="block text-3xl font-bold sm:text-4xl md:text-6xl">
				About
			</h1>

			<div className="space-y-8">
				<p>
					Yo! I'm a full-stack engineer from India. I care about
					performant, accessible code. I'm a huge fan of making, reading and
					contributing to open source &amp; you can{' '}
					<a
						href="https://github.com/sponsors/dinxsh"
						rel="noreferrer"
						target="_blank"
					>
						sponsor me on GitHub
					</a>
					{/**/}. Programming since ten, I've learned a lot about core
					programming principles, scaling, and systems architecture. A large
					proportion of my life is spent listening to all sorts of electronic
					music.
				</p>
			</div>
		</div>
	);
}
