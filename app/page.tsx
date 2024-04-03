"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { userData } from "@/const";
import fetchStats from "@/lib/fetchStats";
import { useEffect, useState } from "react";

const Home = () => {
  const [username, setUsername] = useState("alex");
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({ userName: "." } as userData);

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
    <main className='w-full min-h-screen grid place-content-center py-4 px-8 md:px-12 lg:px-16'>
      <section className='hero m-32 grid grid-cols-2 place-items-center'>
        <div className='flex flex-col gap-4 w-full max-w-[65%]'>
          <h1 className='text-6xl font-bold'>Welcome to NAME</h1>
          <p className='text-3xl text-primary-dim leading-relaxed'>
            Improve your Leetcode skills
            <em>
              <strong className='text-primary'> faster </strong>
            </em>
            with intuitive
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
        <div className='w-4/5 h-full flex flex-col justify-center gap-4 p-4'>
          <h1 className='font-semibold text-lg'>preview your LC progress</h1>
          <div className='flex gap-2 justify-self-start'>
            <Input
              placeholder='username'
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button onClick={previewStats}>Preview</Button>
          </div>
          {loading ? (
            <div className='flex flex-col gap-4 w-full px-2'>
              <Skeleton className='w-36 h-8' />
              <Skeleton className='w-24 h-4' />
              <Skeleton className='w-full h-4' />
              <Skeleton className='w-28 h-4' />
              <Skeleton className='w-full h-4' />
              <Skeleton className='w-20 h-4' />
              <Skeleton className='w-full h-4' />
            </div>
          ) : (
            <>
              <div className='flex flex-col gap-4 w-full px-2'>
                <h1 className='text-4xl'>{userData.userName}</h1>
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
    </main>
  );
};

export default Home;
