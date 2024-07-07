'use client';

import Script from 'next/script';

import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import profilePic from '../../../public/assets/images/profilePhoto.png';

import {
  GithubIcon,
  LinkedInIcon,
  StackOverflowIcon,
  TwitterIcon,
} from '../components/SvgComponents';
import { EMAIL_JS } from '../constants';
import Dots from '../../../public/assets/images/Dots.png';
import Spinner from '../components/Spinner';

declare global {
  interface Window {
    // coming from 'offline-js' package, attached at lib/initializers/offline/offline.js
    emailjs: {
      send: (
        serviceKey: string,
        templateId: string,
        formData: {
          from_name: string;
          information: string;
          sender_email: string;
        }
      ) => Promise<void>;
      init: (publicKey: string) => {};
    };
  }
}

function Contact() {
  const [isFormLoading, setIsFormLoading] = useState(false);
  const contactFormRef = useRef<HTMLFormElement>(null);

  const formSubmitHandler = useCallback(async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = e.target as Record<string, any>;

    const sender_email = formData.email.value;
    const from_name = formData.name.value;
    const information = formData['additional-details'].value;

    try {
      setIsFormLoading(true);

      await window.emailjs.send(EMAIL_JS.SERVICE_KEY, EMAIL_JS.TEMPLATE_ID, {
        from_name,
        information,
        sender_email,
      });

      contactFormRef.current?.reset?.();

      alert(
        'Thanks for contacting me. I will surely revert over the mail in next 24 hours.'
      );
    } catch {
      alert('Request not submitted. Try again!');
    } finally {
      setIsFormLoading(false);
    }
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
      <div className="relative w-full h-full flex flex-col-reverse md:flex-row">
        <div className="flex flex-col h-full md:w-1/3 font-sans items-center justify-center gap-20 my-10 md:my-0">
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
          className="invisible md:visible absolute h-1/2 w-1/4 bottom-0 right-0 opacity-50"
        />
        <div className="h-full md:w-2/3 flex flex-col font-sans justify-center">
          <div className="relative flex md:w-4/5 md:h-3/5 bg-defaultLight drop-shadow-2xl pb-10 md:py-20 gap-20">
            <div className="invisible md:visible display absolute w-full h-full md:w-1/2 md:h-1/2 bg-gradient-to-r from-secondaryMain to-primaryMain -bottom-4  pl-4 pb-4 md:-left-4">
              <div className="bg-defaultLight w-full h-full"></div>
            </div>
            <div className="flex flex-col md:flex-row w-full px-8 gap-4 md:px-10 md:gap-20 z-10">
              <div className="md:w-1/4 text-4xl text-primaryDark font-bold">
                Contact Me.
              </div>
              <div className="relative md:w-3/4 text-4xl">
                <form
                  onSubmit={formSubmitHandler}
                  className="flex flex-col gap-4"
                  ref={contactFormRef}
                >
                  <label className="block">
                    <span className="text-textSecondary text-xl">
                      What is your name? *
                    </span>
                    <input
                      disabled={isFormLoading}
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
                      disabled={isFormLoading}
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
                      disabled={isFormLoading}
                      className="mt-1 block w-full rounded-sm border-textDisabled shadow-sm focus:border-primaryMain placeholder:text-textSecondary"
                      rows={3}
                      name="additional-details"
                    ></textarea>
                  </label>

                  <button
                    type="submit"
                    className="bg-primaryMain text-paperLight text-sm py-2 md:w-1/2 rounded-sm relative"
                  >
                    Send Message
                    {isFormLoading && (
                      <div className="absolute top-1/2 right-6 -translate-x-1/2 -translate-y-1/2">
                        <Spinner className="h-6 w-6 border-paperLight" />
                      </div>
                    )}
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
