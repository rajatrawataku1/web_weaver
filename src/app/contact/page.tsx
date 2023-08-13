'use client';

import Script from 'next/script';

import { useCallback } from 'react';
import Image from 'next/image';
import profilePic from '../../../public/assets/images/profilePhoto.png';

import {
  GithubIcon,
  LightModeLogo,
  LinkedInIcon,
  StackOverflowIcon,
  TwitterIcon,
} from '../components/SvgComponents';
import { EMAIL_JS } from '../constants';
import Dots from '../../../public/assets/images/Dots.png';

function Contact() {
  const formSubmitHandler = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const sender_email = e.target.email.value;
    const from_name = e.target.name.value;
    const information = e.target['additional-details'].value;

    window.emailjs
      .send(EMAIL_JS.SERVICE_KEY, EMAIL_JS.TEMPLATE_ID, {
        from_name,
        information,
        sender_email,
      })
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
  }, []);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.emailjs.init(EMAIL_JS.PUBLIC_KEY);
        }}
      />
      <div className="relative w-full h-full flex">
        <div className="flex flex-col h-full w-1/3 font-sans items-center justify-center gap-20">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-6xl text-textDisable2 font-bold">
              Rajat Rawat
            </div>
            <div className="text-4xl text-textDisable2 font-bold">
              FE ENGINEER
            </div>
            <Image
              src={profilePic}
              alt="profile-photo"
              className="border-gr bg-defaultLight shadow-sm"
              height={400}
              width={300}
            />
          </div>
          <div className="flex gap-10">
            <GithubIcon className="fill-primaryDark h-12 w-12" />
            <TwitterIcon className="fill-primaryDark h-12 w-12" />
            <LinkedInIcon className="fill-primaryDark h-12 w-12" />
            <StackOverflowIcon className="fill-primaryDark h-12 w-12" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-1xl text-textDisable2">
              My personal contact
            </div>
            <div className="text-1xl text-textDisable2">+91-9168263282</div>
          </div>
        </div>
        <Image
          src={Dots}
          alt="dots"
          className="absolute h-1/2 w-1/4 bottom-0 right-0 opacity-50"
        />
        <div className="h-full w-2/3 flex flex-col font-sans justify-center">
          <div className="relative flex w-4/5 h-3/5 bg-defaultLight drop-shadow-2xl py-20 gap-20">
            <div className="absolute w-1/2 h-1/2 bg-gradient-to-r from-secondaryMain to-primaryMain -bottom-4  pl-4 pb-4 -left-4">
              <div className="bg-defaultLight w-full h-full"></div>
            </div>
            <div className="flex w-full px-10 gap-20 z-10">
              <div className="w-1/4 text-4xl text-primaryDark font-bold">
                Contact Me.
              </div>
              <div className="w-3/4 text-4xl">
                <form
                  onSubmit={formSubmitHandler}
                  className="flex flex-col gap-4"
                >
                  <label className="block">
                    <span className="text-textSecondary text-xl">
                      What is your name? *
                    </span>
                    <input
                      required
                      type="text"
                      className="mt-1 block w-full rounded-sm border-textDisabled shadow-sm focus:border-primaryMain placeholder:text-textSecondary"
                      name="name"
                    />
                  </label>

                  <label className="block">
                    <span className="text-textSecondary text-xl">
                      What is your email? *
                    </span>
                    <input
                      required
                      type="email"
                      className="mt-1 block w-full rounded-sm border-textDisabled shadow-sm focus:border-primaryMain placeholder:text-textSecondary"
                      name="email"
                    />
                  </label>

                  <label className="block">
                    <span className="text-textSecondary text-xl">
                      Additional details *
                    </span>
                    <textarea
                      required
                      className="mt-1 block w-full rounded-sm border-textDisabled shadow-sm focus:border-primaryMain placeholder:text-textSecondary"
                      rows={3}
                      name="additional-details"
                    ></textarea>
                  </label>

                  <button
                    type="submit"
                    className="bg-primaryMain text-paperLight text-sm py-2 w-1/2 rounded-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
