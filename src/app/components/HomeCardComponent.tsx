import { NameComponent } from './NameComponent';
import Image from 'next/image';
import profilePic from '../../../public/assets/images/profilePhoto.png';

import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  RajatRawatLogo,
} from './SvgComponents';

export default function HomeCardComponent() {
  return (
    <div className=" w-full h-full flex flex-col">
      <div className="relative text-paperLight font-sans w-full h-4/6 bg-gradient-to-r from-secondaryMain to-secondaryLight flex-col pl-20 py-36 opacity-75">
        <div className="text-paperLight text-4xl mb-3">Hello!</div>
        <div className="text-paperLight text-6xl mb-10">
          I am Rajat, Frontend Engineer
        </div>
        <div className="text-paperLight text-2xl mb-20 max-w-7xl">
          A frontend engineer committed to elevating the user experience to new
          heights through innovative design and intuitive interactions.
        </div>

        <div className="flex gap-10">
          <GithubIcon className="fill-paperLight h-12 w-12" />
          <TwitterIcon className="fill-paperLight h-12 w-12" />
          <LinkedInIcon className="fill-paperLight h-12 w-12" />
        </div>
        <RajatRawatLogo className="w-14 absolute top-1/2 -translate-y-1/2 right-10 opacity-30" />
      </div>

      <div className="relative h-2/6">
        <div className="absolute right-1/4 bottom-10 border-gr bg-defaultLight">
          <div className="bg-gradient-to-r from-secondaryMain to-secondaryLight p-1 m-4">
            <Image
              src={profilePic}
              alt="profile-photo"
              className="border-gr bg-defaultLight"
              height={400}
              width={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
