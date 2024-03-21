import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const PokemonCard = (props: Props) => {
  return (
    <Link
      href="/"
      className="w-ful h-full block relative aspect-[329/503] bg-slate-400 w-1/4"
    >
      <Image src={"/assets/bg-card.png"} fill alt="Img" />

      <div>
        <Image src={"/assets/charizard.png"} fill alt="Img" />
      </div>

      {/* <img
      src="/assets/charizard.png"
      alt=""
      className="w-[60%] block absolute left-[20%]"
    />
    <div>
      <p className="text-[21px] text-[#b4ebff]">001</p>
      <h3 className="text-[31px]">Name</h3>
      <div className="flex gap-5">
        <div className="h-[27px] bg-red-400 rounded-xl w-full text-center">
          fire
        </div>
        <div className="h-[27px] bg-red-400 rounded-xl w-full text-center">
          fire
        </div>
      </div>
    </div> */}
    </Link>

    // <div className="relative bg-slate-400 w-1/4 aspect-[329/503]">
    //   <Link href="/" className="w-ful h-full block relative aspect-[329/503] bg-slate-400 w-1/4">
    //     <Image src={"/assets/bg-card.png"} fill alt="" />
    //     {/* <img
    //       src="/assets/charizard.png"
    //       alt=""
    //       className="w-[60%] block absolute left-[20%]"
    //     />
    //     <div>
    //       <p className="text-[21px] text-[#b4ebff]">001</p>
    //       <h3 className="text-[31px]">Name</h3>
    //       <div className="flex gap-5">
    //         <div className="h-[27px] bg-red-400 rounded-xl w-full text-center">
    //           fire
    //         </div>
    //         <div className="h-[27px] bg-red-400 rounded-xl w-full text-center">
    //           fire
    //         </div>
    //       </div>
    //     </div> */}
    //   </Link>

    //   {/* <Link href={"/"} className="w-full">
    //     <Image src={"/assets/bg-card.png"} fill alt="test" />
    //   </Link> */}

    //   {/* <div className=""></div> */}
    //   {/* <div>
    //       <p className="text-[21px] text-[#b4ebff]">001</p>
    //       <h3 className="text-[31px]">Name</h3>
    //       <div className="flex gap-5">
    //         <div className="h-[27px] bg-red-400 rounded-xl w-full text-center">
    //           fire
    //         </div>
    //         <div className="h-[27px] bg-red-400 rounded-xl w-full text-center">
    //           fire
    //         </div>
    //       </div>
    //     </div> */}
    //   {/* <Image
    //     alt="img"
    //     fill
    //     src="/assets/bg-card.png"
    //     className="absolute top-0 right-0 left-0 bottom-0"
    //   />
    //   <Image
    //     src={"/assets/charizard.png"}
    //     width={197}
    //     height={197}
    //     alt="test"
    //   />
    //   <div>
    //     <p className="text-[21px] text-[#b4ebff]">001</p>
    //     <h3 className="text-[31px]">Name</h3>
    //     <div className="flex gap-5">
    //       <div className="h-[27px] bg-red-400 rounded-xl w-full text-center">
    //         fire
    //       </div>
    //       <div className="h-[27px] bg-red-400 rounded-xl w-full text-center">
    //         fire
    //       </div>
    //     </div>
    //   </div>
    //   <div className="px-10 pb-7 flex flex-1 flex-col justify-between">
    //     <div>
    //       <p className="text-xl text-blue ">00</p>
    //       <h3 className="lg:text-3xl font-semibold capitalize">Name</h3>
    //     </div>
    //     <div className="flex justify-between h-5 items-center">
    //       <div className="px-5 text-lg bg-red rounded-3xl shadow-main drop-shadow-sm">
    //         Dragon
    //       </div>
    //     </div>
    //   </div> */}
    // </div>
  );
};

export default PokemonCard;
