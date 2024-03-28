"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import fetchStats from "@/lib/fetchStats";
import { Loader2 } from "lucide-react";

const Hero = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [easys, setEasys] = useState("N/A");
  const [totalEasy, setTotalEasy] = useState(783);
  const [mediums, setMediums] = useState("N/A");
  const [totalMedium, setTotalMedium] = useState(1624);
  const [hards, setHards] = useState("N/A");
  const [totalHard, setTotalHard] = useState(687);

  const previewStats = async () => {
    setLoading(true);
    try {
      let data = await fetchStats(username);
      setEasys(data.easySolved);
      setTotalEasy(data.totalEasy);
      setMediums(data.mediumSolved);
      setTotalMedium(data.totalMedium);
      setHards(data.hardSolved);
      setTotalHard(data.totalHard);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    // Hero section
    <section className='h-screen'>
      <div className='container flex flex-col items-center gap-12'>
        <h1 className=' text-5xl font-semibold text-center text-white'>
          Grinding Leetcode?
        </h1>
        <h2 className='text-2xl max-w-[30ch] text-center text-white'>
          Use LC Tracker to <strong>view, track</strong>, and{" "}
          <strong>manage</strong> your Leetcode progress and improve{" "}
          <strong>faster</strong>.
        </h2>
        <div className='flex flex-col items-center gap-3'>
          <Label className='text-base text-slate-300'>Preview your stats</Label>
          <Input
            className='w-64 bg-black border-slate-800 text-center text-white'
            type='text'
            placeholder='Enter your username'
            onChange={(e) => setUsername(e.target.value)}
          />
          {loading ? (
            <Button className='h-8' disabled>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              Please wait
            </Button>
          ) : (
            <Button
              variant='outline'
              className='h-8'
              asChild
              onClick={previewStats}
            >
              <a href='#preview'>Preview</a>
            </Button>
          )}
        </div>
      </div>
      <div className='container mx-auto justify-center flex gap-4 text-white my-16'>
        <div>
          <h1>Easys Solved: {easys}</h1>
          <Progress
            className='bg-black'
            indicatorColor='bg-white'
            value={(Number(easys) / totalEasy) * 100}
          />
        </div>
        <div>
          <h1>Mediums Solved: {mediums}</h1>
          <Progress
            indicatorColor='bg-white'
            value={(Number(mediums) / totalMedium) * 100}
          />
        </div>
        <div>
          <h1>Hards Solved: {hards}</h1>
          <Progress
            indicatorColor='bg-white'
            value={(Number(hards) / totalHard) * 100}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
