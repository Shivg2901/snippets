import { SignedIn, SignedOut } from "@clerk/nextjs";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import Link from "next/link";

export default function Home() {
  return (
    <div className="poppins">
      <Navbar />
      <HeroText />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-main p-[6px] rounded-md">
        <DeveloperModeIcon sx={{ fontSize: 27, color: "white" }} />
      </div>
      <div className="font-bold text-main">Snippets</div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="max-sm:w-full">
      <SignedIn>
        <Link href="/my-notes">
          <button className="max-sm:w-full bg-main p-[8px] px-6 text-sm text-white rounded-md">
            Access to the App
          </button>
        </Link>
      </SignedIn>

      <SignedOut>
        <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
          <button className="max-sm:w-full bg-main p-[8px] px-6 text-sm text-white rounded-md">
            <Link href="/sign-in">Sign In</Link>
          </button>
          <button className="max-sm:w-full text-sm border border-main text-main hover:bg-main hover:text-white p-[8px] px-6 rounded-md">
            <Link href="/sign-up">Sign Up</Link>
          </button>
        </div>
      </SignedOut>
    </div>
  );
}

function HeroText() {
  return (
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold text-2xl text-center">
        Organize your Code Snippets
        <span className="text-main"> Efficiently</span>
      </h2>
      <p className="text-center text-sm w-[450px] max-sm:w-full text-slate-500">
        With our advanced tagging and search features, you can quickly find the snippet you need, right when you need it. Spend less time searching for code and more time writing it.
      </p>
      <button className="px-9 py-3 max-sm:w-full bg-main text-sm text-white rounded-md" type="button">
        Lets Get Started
      </button>
    </div>
  );
}
