"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { userData } from "@/const";
import fetchStats from "@/lib/fetchStats";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const Hero = () => {
  const [username, setUsername] = useState("alicks111");
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({} as userData);

  const previewStats = async () => {
    setLoading(true);
    try {
      let data = await fetchStats(username);
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    previewStats();
  }, []);

  return (
    <section className='container min-h-screen flex flex-col md:flex-row items-center justify-center gap-8'>
      <div className='flex flex-col gap-4 lg:gap-8 w-full text-center md:text-left container'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold'>
          <strong className='bg-gradient-to-r from-blue-400 to-violet-400 dark:from-blue-600 dark:to-violet-600 inline-block text-transparent bg-clip-text'>
            Improve faster than ever.
          </strong>
        </h1>
        <p className='sm:text-xl md:text-2xl lg:text-3xl text-primary-dim leading-relaxed'>
          Advance your Leetcode skills
          <em>
            <strong className='text-primary'> faster </strong>
          </em>
          with efficient
          <em>
            <strong className='text-primary'> tracking</strong>
          </em>
          ,
          <em>
            <strong className='text-primary'> viewing</strong>
          </em>
          , and
          <em>
            <strong className='text-primary'> analysis </strong>
          </em>
          of your progress.
        </p>
      </div>
      <div className='container w-4/5 flex flex-col justify-center gap-4 p-4'>
        <h1 className='font-semibold text-lg text-center lg:text-start'>
          preview your LC progress
        </h1>
        <div className='flex gap-2 justify-self-start'>
          <Input
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
          />
          {loading ? (
            <Button
              disabled
              className='bg-gradient-to-r from-violet-300 to-blue-400 dark:from-violet-500 dark:to-blue-500'
            >
              <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
              Please wait
            </Button>
          ) : (
            <Button
              onClick={previewStats}
              className='bg-gradient-to-r from-violet-300 to-blue-400 dark:from-violet-500 dark:to-blue-500'
            >
              Preview
            </Button>
          )}
        </div>
        {loading ? (
          <div className='flex flex-col gap-4 w-full px-2'>
            <Skeleton className='w-36 h-8' />
            <Skeleton className='w-24 h-5' />
            <Skeleton className='w-full h-5' />
            <Skeleton className='w-28 h-5' />
            <Skeleton className='w-full h-5' />
            <Skeleton className='w-20 h-5' />
            <Skeleton className='w-full h-5' />
          </div>
        ) : (
          <>
            <div className='flex flex-col gap-4 w-full px-2'>
              <h1 className='text-xl md:text-2xl lg:text-4xl'>
                {username === "alicks111" ? "alex :)" : `${userData.userName}`}
              </h1>
              <div className='flex flex-col gap-2'>
                <p>Easys: {userData.easySolved}</p>
                <Progress
                  value={(userData.easySolved / userData.totalEasy) * 100}
                  indicatorColor='bg-gradient-to-r from-green-500 to-green-300'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <p>Mediums: {userData.mediumSolved}</p>
                <Progress
                  value={(userData.mediumSolved / userData.totalMedium) * 100}
                  indicatorColor='bg-gradient-to-r from-amber-500 to-amber-300'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <p>Hards: {userData.hardSolved} </p>
                <Progress
                  value={(userData.hardSolved / userData.totalHard) * 100}
                  indicatorColor='bg-gradient-to-r from-rose-600 to-rose-400'
                />
              </div>
            </div>
            <div></div>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
