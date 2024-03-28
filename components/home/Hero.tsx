import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-12'>
      <h1 className=' text-5xl font-semibold text-center text-white'>
        Grinding Leetcode?
      </h1>
      <h2 className='text-2xl max-w-[30ch] text-center text-white'>
        Use LC Tracker to view, track, and manage your Leetcode progress and
        improve faster.
      </h2>
      <div className='flex flex-col items-center gap-3'>
        <Label className='text-base text-slate-300'>
          Preview your progress
        </Label>
        <Input
          className='w-64 bg-black border-slate-800 text-center text-white'
          type='text'
          placeholder='Enter your username'
        />
        <Button variant='outline' className='h-8' asChild>
          <a href='#preview'>Preview</a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
