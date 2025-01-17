"use client";

import BountyTable from "./_components/BountyTable";
import SubmittedBounties from "./_components/SubmittedBounties/SubmittedBounties";
import { useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <>
      <div className="w-[100vw] h-[100vh] overflow-x-hidden">
        {isLoggedIn && <SubmittedBounties bounties={[1, 2, 3]} />}
        <div className="h-[200px] bg-[#FAFAFA] pt-[75px] pl-6">
          <h1 className="">All bounties</h1>
          <p className="mb-0">Select a bounty to contribute to and earn from. </p>
          <p className="mt-0">Once you submit the data it will be processed and you’ll get a reward!</p>
        </div>
        <div className="z-2 flex items-center flex-col flex-grow ">
          <BountyTable />
        </div>
      </div>
    </>
  );
};

export default Home;
