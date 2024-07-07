import HistoryItem from '../components/CompanyHistoryItem';
import ProjectItem from '../components/ProjectsItem';
import EducationItem from '../components/EducationItem';
import SkillItem from '../components/SkillItem';
import InterestItem from '../components/InterestItem';

import {
  ReactIcon,
  HtmlIcon,
  CssIcon,
  BabelIcon,
  PlaywrightLogo,
  ReactTestingLibrary,
  JavascriptIcon,
  WebpackIcon,
  TypeScriptIcon,
  ReduxIcon,
  JestIcon,
  MailIcon,
  LocationIcon,
  GithubIcon,
  LinkedInIcon,
  MobileIcon,
  StackOverflowIcon,
} from '../components/SvgComponents';

export default function Resume() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex font-sans flex-col gap-4 bg-gradient-to-r from-secondaryMain to-primaryMain text-paperLight md:mx-10 p-8 md:pl-14">
        <div className="text-4xl">Rajat Rawat</div>
        <div className="text-2xl">Mid Level Frontend Engineer</div>
        <div className="text-l">
          An Enthusiastic Engineer with 3 years of experience, always ready to
          take new challenges and create new and efficient solutions.
        </div>
      </div>

      <div className="flex flex-col md:flex-row font-sans gap-4 bg-gradient-to-r from-secondaryMain to-primaryMain text-paperLight md:mx-10 p-8 md:pl-14">
        <div className="flex flex-col md:w-1/2 gap-6 md:gap-4">
          <div className="flex items-center gap-2">
            <MailIcon className="h-6 w-6 fill-paperLight" />
            <div className="font-medium">rajatrawataku@gmail.com</div>
          </div>

          <div className="flex items-center gap-2">
            <LocationIcon className="h-6 w-6 fill-paperLight" />
            <div className="font-medium">Bangalore, India</div>
          </div>

          <div className="flex items-center gap-2">
            <GithubIcon className="h-6 w-6 fill-paperLight" />
            <div className="font-medium">https://github.com/rajatrawataku1</div>
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 gap-6 md:gap-4">
          <div className="flex items-center gap-2">
            <MobileIcon className="h-6 w-6 fill-paperLight" />
            <div className="font-medium">+91-9168263282</div>
          </div>
          <div className="flex items-center gap-2">
            <LinkedInIcon className="h-6 w-6 fill-paperLight" />
            <div className="font-medium">
              https://www.linkedin.com/in/rajat-rawat-1121bb127/
            </div>
          </div>
          <div className="flex items-center gap-2">
            <StackOverflowIcon className="h-6 w-6 fill-paperLight" />
            <div className="font-medium">
              https://www.linkedin.com/in/rajat-rawat-1121bb127/
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 w-full p-10">
        <div className="flex flex-col md:w-1/2 gap-10">
          <div className="flex flex-col font-sans mb-10">
            <div className="text-secondaryDark font-semibold text-2xl mb-10 md:ml-14 underline underline-offset-4">
              WORK EXPERIENCE
            </div>

            <div className="flex flex-col gap-10 border-l-2 p-4">
              <div className="relative">
                <div className="absolute bg-primaryDark w-7 h-7 rounded-full -left-8 top-1 border-4 border-paperLight" />
                <div className="ml-2 md:ml-10">
                  <HistoryItem
                    title="Software Engineer (UI)"
                    company="Rippling"
                    contentItems={[
                      'Implementing all the product requirements for Spend Management onfront-end in both WebApp and Mobile Platforms.',
                      'Creating generic components for Spend Management app.',
                      'Following test drive development using both unit and integration testing.',
                    ]}
                    time={{
                      startDate: '04/2022',
                      endDate: 'present',
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10 border-l-2 p-4">
              <div className="relative">
                <div className="absolute bg-primaryDark w-7 h-7 rounded-full -left-8 top-1 border-4 border-paperLight" />
                <div className="ml-2 md:ml-10">
                  <HistoryItem
                    title="UI Engineer II"
                    company="Flipkart Internet Private Limited"
                    contentItems={[
                      'Creating, launching and maintaining Flipkart Travel Flights Category on Desktop platform.',
                      'Creating Travel Filter and Sort package which can be consumed across all UI platforms for client side sort and filter application.',
                      'Upgrading various packages like React, Babel, Jest and other legacy packages on desktop for better developer experience and to get the best out of frameworks. Implemented Module and No Module pattern - Directly shipping ES6 code to modern browsers.',
                      "Created Delayed Data Widget Handler which helps in splitting widgets data across two API calls. Majorly used in page API's having high latencies",
                    ]}
                    time={{
                      startDate: '07/2022',
                      endDate: '04/2022',
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10 border-l-2 p-4">
              <div className="relative">
                <div className="absolute bg-primaryDark w-7 h-7 rounded-full -left-8 top-1 border-4 border-paperLight" />
                <div className="ml-2 md:ml-10">
                  <HistoryItem
                    title="UI Engineer I"
                    company="Flipkart Internet Private Limited"
                    contentItems={[
                      'Refactored MultiWidget Framework in desktop platform for better separation of concerns across different pages.',
                      'Implemented and Integrated MultiWidget Modal and Bundling with MW framework. Creating Client Side Section Logical Slot which is currently used in different pages across Flipkart like Booking Review Page and Cart Page.',
                      'Worked in Grocery POD and implemented major Business Continuity Tasks during Covid times. Took part in various Test Driven Development using Jest, TypeScript Migrations tasks which helped in refactoring codebase.',
                    ]}
                    time={{
                      startDate: '07/2019',
                      endDate: '07/2020',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col font-sans mb-10">
            <div className="text-secondaryDark font-semibold text-2xl mb-10 md:ml-14 underline underline-offset-4">
              EDUCATION
            </div>

            <div className="flex flex-col gap-10 border-l-2 p-4 w-full">
              <div className="relative">
                <div className="absolute bg-primaryDark w-7 h-7 rounded-full -left-8 top-1 border-4 border-paperLight" />
                <div className="ml-2 md:ml-10">
                  <EducationItem
                    courseName="Bachelor of Engineering (B.E), Computer Science & Engineering"
                    instituteName="Army Institute of Technology, Pune"
                    time={{
                      startDate: '07/2015',
                      endDate: '07/2019',
                    }}
                    result="8.79 SGPA"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10 border-l-2 p-4 w-full">
              <div className="relative">
                <div className="absolute bg-primaryDark w-7 h-7 rounded-full -left-8 top-1 border-4 border-paperLight" />
                <div className="ml-2 md:ml-10">
                  <EducationItem
                    courseName="Senior Secondary"
                    instituteName="Army Public School Raiwala"
                    time={{
                      startDate: '04/2014',
                      endDate: '04/2015',
                    }}
                    result="95%"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10 border-l-2 p-4 w-full">
              <div className="relative">
                <div className="absolute bg-primaryDark w-7 h-7 rounded-full -left-8 top-1 border-4 border-paperLight" />
                <div className="ml-2 md:ml-10">
                  <EducationItem
                    courseName="High School"
                    instituteName="Army Public School Raiwala"
                    time={{
                      startDate: '04/2012',
                      endDate: '04/2013',
                    }}
                    result="10 CGPA"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:w-1/2 gap-10">
          <div className="flex flex-col font-sans mb-10">
            <div className="text-secondaryDark font-semibold text-2xl mb-10 underline underline-offset-4">
              PROJECT
            </div>

            <div className="flex flex-col gap-10">
              <ProjectItem
                title="Travel Flight Filter-Sort SDK"
                contentItems={[
                  'NPM package to filter and sort Flights Listings according to the various options selected by users.',
                  'Package used across all UI platforms (Desktop and Mobile platforms) hence higher reusability and less maintenance.',
                ]}
              />

              <ProjectItem
                title="Flights Pre Order and Post Order Flow"
                contentItems={[
                  'Flights Search Result and Review page load experience with various client interactions like filter, sort, grouping, book flight, add/select travellers, apply coupons, super-coin, insurance, authentication/ 2FA.',
                  'Flights Post order flow - booking confirmation, details , self serve reschedule, cancellation page load experience.',
                ]}
              />

              <ProjectItem
                title="MultiWidget Framework and Modal revamp"
                contentItems={[
                  "Adding separate bundle support for Modal widgets apart from page bundle. Plug and play invocation - if some other pages want's to have MultiWidget Modal.",
                  'Contributed in revamping and migrating critical pages to new revamped framework having.',
                ]}
              />
            </div>
          </div>

          <div className="flex flex-col font-sans mb-10">
            <div className="text-secondaryDark font-semibold text-2xl mb-10 underline underline-offset-4 under">
              ACHIEVEMENTS
            </div>

            <div className="flex flex-col gap-10">
              <ul className="list-disc marker:text-primaryLight list-inside">
                <li className="text-xl py-4 :first:pt-0 last:pb-0">
                  Above&beyond performance Award in Flipkart
                </li>
                <li className="text-xl py-4 :first:pt-0 last:pb-0">
                  Rajkot Smart City Hackathon 2017 - 3rd
                </li>
                <li className="text-xl py-4 :first:pt-0 last:pb-0">
                  DMC by Facebook & YKA - Winner
                </li>
                <li className="text-xl py-4 :first:pt-0 last:pb-0">
                  DMC by Facebook & YKA - Winner
                </li>
                <li className="text-xl py-4 :first:pt-0 last:pb-0">
                  NSE Hackathon 2018 - 3rd
                </li>
                <li className="text-xl py-4 :first:pt-0 last:pb-0">
                  Hacko_1.0 Hackathon 2018 - Winner
                </li>
                <li className="text-xl py-4 :first:pt-0 last:pb-0">
                  Airbus Aerothon 2019 - Winner
                </li>
                <li className="text-xl py-4 :first:pt-0 last:pb-0">
                  Codiecon 2019 - Winner
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col font-sans mb-10">
            <div className="text-secondaryDark font-semibold text-2xl mb-10 underline underline-offset-4 under">
              SKILLS
            </div>
            <div className="flex flex-wrap gap-4">
              <SkillItem
                iconComponent={
                  <ReactIcon className="h-8 w-8 fill-textSecondary" />
                }
                name="React"
              />

              <SkillItem
                iconComponent={
                  <HtmlIcon className="h-8 w-8 fill-textSecondary" />
                }
                name="HTML"
              />

              <SkillItem
                iconComponent={
                  <CssIcon className="h-8 w-8 fill-textSecondary" />
                }
                name="CSS"
              />

              <SkillItem
                iconComponent={
                  <BabelIcon className="h-8 w-8 fill-textSecondary" />
                }
                name="Babel"
              />

              <SkillItem
                iconComponent={
                  <WebpackIcon className="h-8 w-8 fill-textSecondary" />
                }
                name="Webpack"
              />

              <SkillItem
                iconComponent={
                  <JavascriptIcon className="h-8 w-8 fill-textSecondary" />
                }
                name="Javascript"
              />
              <SkillItem
                iconComponent={
                  <PlaywrightLogo className="h-8 w-8 fill-textSecondary" />
                }
                name="Playwright"
              />

              <SkillItem
                iconComponent={
                  <ReactTestingLibrary className="h-8 w-8 fill-textSecondary" />
                }
                name="React Testing Library"
              />

              <SkillItem
                iconComponent={
                  <TypeScriptIcon className="h-8 w-8 fill-textSecondary" />
                }
                name="Typescript"
              />

              <SkillItem
                iconComponent={
                  <ReduxIcon className="h-8 w-8 fill-textSecondary" />
                }
                name="Redux"
              />

              <SkillItem
                iconComponent={
                  <JestIcon className="h-8 w-8 fill-textSecondary" />
                }
                name="Jest"
              />
            </div>
          </div>

          <div className="flex flex-col font-sans mb-10">
            <div className="text-secondaryDark font-semibold text-2xl mb-10 underline underline-offset-4 under">
              INTERESTS
            </div>
            <div className="flex flex-wrap gap-4">
              <InterestItem name="Marathon" />

              <InterestItem name="Cricket" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
