

// export default function App() {
//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-white to-[#D50265] px-6 lg:px-20">

//       {/* LEFT SECTION */}
//       <div
//         className="relative max-w-xl"
//         style={{
//           "--cx": "2rem",   // circle X position
//           "--cy": "2.5rem", // circle Y position
//           "--r": "5.8rem",  // circle radius
//         }}
//       >
//         {/* Pink Circle */}
//         <div
//           className="absolute rounded-full bg-[#D50265]"
//           style={{
//             width: "calc(var(--r) * 2)",
//             height: "calc(var(--r) * 2)",
//             left: "calc(var(--cx) - var(--r))",
//             top: "calc(var(--cy) - var(--r))",
//           }}
//         />

//         {/* BLACK TEXT (outside circle) */}
//         <div
//           className="absolute inset-0"
//           style={{
//             WebkitMask:
//               "radial-gradient(circle at var(--cx) var(--cy), transparent var(--r), black calc(var(--r) + 1px))",
//             mask:
//               "radial-gradient(circle at var(--cx) var(--cy), transparent var(--r), black calc(var(--r) + 1px))",
//           }}
//         >
//           <HeroText color="black" />
//         </div>

//         {/* WHITE TEXT (inside circle) */}
//         <div
//           className="relative"
//           style={{
//             WebkitMask:
//               "radial-gradient(circle at var(--cx) var(--cy), black var(--r), transparent calc(var(--r) + 1px))",
//             mask:
//               "radial-gradient(circle at var(--cx) var(--cy), black var(--r), transparent calc(var(--r) + 1px))",
//           }}
//         >
//           <HeroText color="white" />
//         </div>

//         {/* Buttons */}
//         <div className="mt-8 flex gap-4">
//           <button className="bg-[#D50265] text-white px-8 py-3 rounded-full font-medium">
//             Join
//           </button>
//           <button className="border-2 border-[#D50265] text-[#D50265] px-8 py-3 rounded-full font-medium">
//             Sign In
//           </button>
//         </div>
//       </div>

//       {/* RIGHT IMAGE */}
//       <div className="mt-10 lg:mt-0">
//         <img
//           src="https://techxlabs-dev.chitchat24.com/assets/couple-DLPS0aAl.png"
//           alt="Couple"
//           className="w-full max-w-md lg:max-w-xl object-contain"
//         />
//       </div>
//     </div>
//   );
// }

// /* TEXT COMPONENT */
// function HeroText({ color }) {
//   return (
//     <h1
//       className="text-4xl lg:text-6xl font-bold leading-tight"
//       style={{ color }}
//     >
//       Beyond Profile,
//       <br />
//       Finding <span className="text-[#D50265]">Soulful</span>
//       <br />
//       Connections.
//     </h1>
//   );
// }

// export default function App() {
//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-white to-[#D50265] px-6 lg:px-20 pt-10 lg:pt-0">

//       {/* LEFT SECTION */}
//       <div
//         className="relative w-full max-w-xl text-center lg:text-left"
//         style={{
//           // MOBILE DEFAULT
//           "--cx": "50%",
//           "--cy": "3.2rem",
//           "--r": "5.2rem",

//           // DESKTOP OVERRIDE
//           "--cx-lg": "6rem",
//           "--cy-lg": "3.5rem",
//         }}
//       >
//         {/* Pink Circle */}
//         <div
//           className="absolute rounded-full bg-[#D50265]"
//           style={{
//             width: "calc(var(--r) * 2)",
//             height: "calc(var(--r) * 2)",
//             left: "calc(var(--cx) - var(--r))",
//             top: "calc(var(--cy) - var(--r))",
//           }}
//         />

//         {/* BLACK TEXT (outside circle) */}
//         <div
//           className="absolute inset-0"
//           style={{
//             WebkitMask:
//               "radial-gradient(circle at var(--cx) var(--cy), transparent var(--r), black calc(var(--r) + 1px))",
//             mask:
//               "radial-gradient(circle at var(--cx) var(--cy), transparent var(--r), black calc(var(--r) + 1px))",
//           }}
//         >
//           <HeroText color="black" />
//         </div>

//         {/* WHITE TEXT (inside circle) */}
//         <div
//           className="relative"
//           style={{
//             WebkitMask:
//               "radial-gradient(circle at var(--cx) var(--cy), black var(--r), transparent calc(var(--r) + 1px))",
//             mask:
//               "radial-gradient(circle at var(--cx) var(--cy), black var(--r), transparent calc(var(--r) + 1px))",
//           }}
//         >
//           <HeroText color="white" />
//         </div>

//         {/* Buttons */}
//         <div className="mt-8 flex justify-center lg:justify-start gap-4">
//           <button className="bg-[#D50265] text-white px-7 py-3 rounded-full font-medium">
//             Join
//           </button>
//           <button className="border-2 border-[#D50265] text-[#D50265] px-7 py-3 rounded-full font-medium">
//             Sign In
//           </button>
//         </div>
//       </div>

//       {/* RIGHT IMAGE */}
//       <div className="mt-12 lg:mt-0 flex justify-center w-full">
//         <img
//           src="https://techxlabs-dev.chitchat24.com/assets/couple-DLPS0aAl.png"
//           alt="Couple"
//           className="w-full max-w-sm sm:max-w-md lg:max-w-xl object-contain"
//         />
//       </div>
//     </div>
//   );
// }

// /* TEXT COMPONENT */
// function HeroText({ color }) {
//   return (
//     <h1
//       className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight"
//       style={{ color }}
//     >
//       Beyond Profile,
//       <br />
//       Finding <span className="text-[#D50265]">Soulful</span>
//       <br />
//       Connections.
//     </h1>
//   );
// }


export default function App() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-white to-[#d50265] px-6 lg:px-20 pt-28 lg:pt-10 lg:pl-[10rem] lg:pr-[10rem] bg-[linear-gradient(to_top,#D50265_-4.27%,#FFFFFF_67.41%)]
 lg:bg-[linear-gradient(270deg,#D50265_-4.27%,#FFFFFF_55.05%)]"
    >

      <>
        <>
          {/* LEFT SECTION */}
          <div
            className=" block lg:hidden relative max-w-xl text-left lg:w-full mt-[13vh] lg:mt-0"
            style={{
              /* MOBILE (like first image) */
              // "--cx": "2.3rem",
              // "--cy": "2.5rem",
              // "--r": "5.4rem",
              "--cx": "0.5rem",
              "--cy": "1.7rem",
              "--r": "3.5rem",

              /* DESKTOP */
              "--cx-lg": "2rem",
              "--cy-lg": "3.5rem",
            }}
          >
            {/* Pink Circle */}
            <div
              className="absolute rounded-full bg-[#D50265]"
              style={{
                width: "calc(var(--r) * 2)",
                height: "calc(var(--r) * 2)",
                left: "calc(var(--cx) - var(--r))",
                top: "calc(var(--cy) - var(--r))",
              }}
            />

            {/* BLACK TEXT (outside circle) */}
            <div
              className="absolute inset-0"
              style={{
                WebkitMask:
                  "radial-gradient(circle at var(--cx) var(--cy), transparent var(--r), black calc(var(--r) + 1px))",
                mask:
                  "radial-gradient(circle at var(--cx) var(--cy), transparent var(--r), black calc(var(--r) + 1px))",
              }}
            >
              <HeroText color="black" />
            </div>

            {/* WHITE TEXT (inside circle) */}
            <div
              className="relative"
              style={{
                WebkitMask:
                  "radial-gradient(circle at var(--cx) var(--cy), black var(--r), transparent calc(var(--r) + 1px))",
                mask:
                  "radial-gradient(circle at var(--cx) var(--cy), black var(--r), transparent calc(var(--r) + 1px))",
              }}
            >
              <HeroText color="white" />
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="bg-[#D50265] text-white px-7 py-3 rounded-full font-medium">
                Join
              </button>
              <button className="border-2 border-[#D50265] text-[#D50265] px-7 py-3 rounded-full font-medium">
                Sign In
              </button>
            </div>
          </div>
        </>

        <>
          {/* LEFT SECTION */}
          <div
            className=" hidden lg:block relative max-w-xl text-left lg:w-full mt-[13vh] lg:mt-0"
            style={{
              /* MOBILE (like first image) */
              "--cx": "2.3rem",
              "--cy": "2rem",
              "--r": "7.4rem",
              // "--cx": "0.3rem",
              // "--cy": "1.7rem",
              // "--r": "3.5rem",

              /* DESKTOP */
              "--cx-lg": "2rem",
              "--cy-lg": "3.5rem",
            }}
          >
            {/* Pink Circle */}
            <div
              className="absolute rounded-full bg-[#D50265]"
              style={{
                width: "calc(var(--r) * 2)",
                height: "calc(var(--r) * 2)",
                left: "calc(var(--cx) - var(--r))",
                top: "calc(var(--cy) - var(--r))",
              }}
            />

            {/* BLACK TEXT (outside circle) */}
            <div
              className="absolute inset-0"
              style={{
                WebkitMask:
                  "radial-gradient(circle at var(--cx) var(--cy), transparent var(--r), black calc(var(--r) + 1px))",
                mask:
                  "radial-gradient(circle at var(--cx) var(--cy), transparent var(--r), black calc(var(--r) + 1px))",
              }}
            >
              <HeroText color="black" />
            </div>

            {/* WHITE TEXT (inside circle) */}
            <div
              className="relative"
              style={{
                WebkitMask:
                  "radial-gradient(circle at var(--cx) var(--cy), black var(--r), transparent calc(var(--r) + 1px))",
                mask:
                  "radial-gradient(circle at var(--cx) var(--cy), black var(--r), transparent calc(var(--r) + 1px))",
              }}
            >
              <HeroText color="white" />
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="bg-[#D50265] text-white px-7 py-3 rounded-full font-medium">
                Join
              </button>
              <button className="border-2 border-[#D50265] text-[#D50265] px-7 py-3 rounded-full font-medium">
                Sign In
              </button>
            </div>
          </div>
        </>
      </>

      {/* IMAGE */}
      <div
        // className=" lg:mt-0 flex justify-center w-full" 
        className="flex justify-center pt-3">
        <img
          src="https://techxlabs-dev.chitchat24.com/assets/couple-DLPS0aAl.png"
          alt="Couple"
          // className="min-w-[79%] max-w-[81%] object-contain "
          className="relative w-full object-contain object-center px-8 lg:h-[80vh] lg:w-auto"
        />
      </div>
    </div>
  );
}

/* TEXT */
function HeroText({ color }) {
  return (
    <h1
      className="font-stapel text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight lg:text-[72px]"
      style={{ color }}
    >
      Beyond Profile,
      <br />
      Finding <span className="text-[#D50265]">Soulful</span>
      <br />
      <span className="text-[#D50265]">Connections.</span>
    </h1>
  );
}

