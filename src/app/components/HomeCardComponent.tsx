import { NameComponent } from './NameComponent';
import Image from 'next/image';
import profilePic from '../../../public/assets/images/profilePhoto.png';

import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  StackOverflowIcon,
} from './SvgComponents';
import Link from 'next/link';

export default function HomeCardComponent() {
  return (
    <div className=" w-full h-full flex flex-col">
      <div className="text-paperLight font-sans md:w-full md:h-full bg-gradient-to-r from-secondaryMain to-primaryMain flex-col px-8 py-16 md:px-20 md:py-36 opacity-75">
        <div className="mb-20 md:mb-72">
          <div className="text-paperLight text-4xl mb-3">Hello!</div>
          <div className="text-paperLight text-6xl mb-6">
            I am Rajat, Frontend Engineer
          </div>
          <div className="text-paperLight text-2xl max-w-7xl mb-10">
            Passionate about creating captivating user interfaces that blend
            aesthetics and seamless functionality. A frontend engineer committed
            to elevating the user experience to new heights through innovative
            design and intuitive interactions.
          </div>
          <Link
            href={'/contact'}
            className="bg-paperLight px-4 py-2 rounded-sm text-2xl hover:shadow-2xl text-secondaryMain"
          >
            Hire Me
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-10">
          <hr className="w-full" />
          <div className="flex gap-4 md:gap-10">
            <GithubIcon className="fill-paperLight h-12 w-12" />
            <TwitterIcon className="fill-paperLight h-12 w-12" />
            <LinkedInIcon className="fill-paperLight h-12 w-12" />
            <StackOverflowIcon className="fill-paperLight h-12 w-12" />
          </div>
          <hr className="w-full" />
        </div>
      </div>
    </div>
  );
}
