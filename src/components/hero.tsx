import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="mt-8 mb-8 w-full md:w-[700px] flex flex-col gap-y-4">
      <h2 className="text-2xl md:text-3xl">
        Create an account and start&nbsp;
        <span className="font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
          Snip
        </span>
        ping
      </h2>

      <p className="text-justify">
        Are you ready to take your link-sharing to the next level? With Snip,
        you can transform ordinary URLs into powerful branding tools. By
        creating a free account, you'll gain access to a suite of features
        designed to enhance your online presence.
      </p>

      <Button className="w-56">Sign up</Button>
    </section>
  );
};

export default Hero;
