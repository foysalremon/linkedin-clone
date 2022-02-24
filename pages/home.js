import Head from 'next/head';
import Image from 'next/image';
import { getProviders, signIn } from 'next-auth/react';
import ExploreIcon from '@mui/icons-material/Explore';
import GroupIcon from '@mui/icons-material/Group';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import HeaderLink from '../components/HeaderLink';

const home = ({ providers }) => {
  return (
    <div>
      <Head>
        <title>LinkedIn</title>
      </Head>
      <header className="py-4 fixed left-0 right-0 top-0">
        <div className="container flex justify-between items-center mx-auto">
          <div className="relative w-36 h-10">
            <Image
              src="https://rb.gy/vtbzlp"
              layout="fill"
              objectFit="contain"
              alt="Linkedin"
            />
          </div>
          <div className="flex items-center sm:divide-x divide-gray-300">
            <div className="hidden sm:flex space-x-8 pr-4">
              <HeaderLink Icon={ExploreIcon} text="Discover" />
              <HeaderLink Icon={GroupIcon} text="People" />
              <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
              <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
            </div>
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <div className="pl-4">
                  <button
                    className="text-blue-700 font-semibold rounded-full border-2 border-blue-700 px-5 py-1.5 transition-all hover:border-2"
                    onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        <div className="container flex flex-col xl:flex-row items-center justify-between mx-auto min-h-screen">
          <div className="space-y-6 xl:space-y-10">
            <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0">
              Welcome to your professional community
            </h1>
            <div className="space-y-4">
              <div className="intent">
                <h2 className="text-xl">Search for a job</h2>
                <ArrowForwardIosRoundedIcon className="text-gray-700" />
              </div>
              <div className="intent">
                <h2 className="text-xl">Find a person you know</h2>
                <ArrowForwardIosRoundedIcon className="text-gray-700" />
              </div>
              <div className="intent">
                <h2 className="text-xl">Learn a new skill</h2>
                <ArrowForwardIosRoundedIcon className="text-gray-700" />
              </div>
            </div>
          </div>
          <div className="relative w-1/2 h-96 text-right">
            <Image
              src="https://rb.gy/vkzpzt"
              layout="fill"
              objectFit="contain"
              priority
              alt="Featured Image"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default home;
