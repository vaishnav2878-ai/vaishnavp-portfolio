
// "use client";
// // Blur text animation component.
// import BlurText from "./BlurText";
// import TrueFocus from "./TrueFocus";




// // Import the Lanyard 3D component.
// import Lanyard from "./Lanyard";

// // Hero section for the portfolio homepage.
// export default function Hero() {
//   return (
//     <section className="min-h-screen bg-black text-white flex items-center">

//       {/* Main hero content container */}
//       <div className="max-w-7xl mx-auto w-full px-6 md:px-12">

//         {/* Two-column hero layout */}
//         <div className="grid md:grid-cols-2 items-center gap-8">

//           {/* LEFT SIDE - INTRODUCTION */}
//           <div className="text-center md:text-left">

//             {/* Small greeting */}
//             <BlurText
//   text="Hello, I'm Vaishnav P"
//   delay={120}
//   animateBy="words"
//   direction="top"
//   className="text-4xl md:text-6xl font-bold tracking-tight text-left"
// />
// <TrueFocus
//   sentence="Full Stack Developer"
//   separator=" "
//   manualMode={false}
//   blurAmount={5}
//   borderColor="#FFFFFF"
//   glowColor="rgba(255, 255, 255, 0.6)"
//   animationDuration={0.5}
//   pauseBetweenAnimations={1}
// />
            

//             {/* Short introduction */}
//             <p className="mt-6 max-w-xl text-gray-400 text-base md:text-lg leading-relaxed">
//               I build modern, responsive and scalable web applications
//               using React, Next.js, Node.js, Express and MongoDB.
//             </p>

//             {/* Action buttons */}
//             <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">

//               {/* Projects button */}
//               <a
//                 href="#projects"
//                 className="px-6 py-3 bg-white text-black rounded-full font-medium transition hover:bg-gray-200"
//               >
//                 View My Work
//               </a>

//               {/* Contact button */}
//               <a
//                 href="#contact"
//                 className="px-6 py-3 border border-white/30 rounded-full font-medium transition hover:bg-white hover:text-black"
//               >
//                 Contact Me
//               </a>

//             </div>

//           </div>

//           {/* RIGHT SIDE - 3D LANYARD */}
//           <div className="relative h-[700px] w-full">

//             {/* 
//               React Bits Lanyard component.
//               The card will use these images as its front and back faces.
//             */}
            
// <Lanyard
//   position={[0, 0, 24]}
//   gravity={[0, -40, 0]}
//   frontImage="/profile.png"
//   backImage="/profile.png"
//   imageFit="cover"
// />
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }
"use client";
import SpecularButton from "./SpecularButton";

// Blur text animation component.
import BlurText from "./BlurText";

// Focus animation for the job title.
import TrueFocus from "./TrueFocus";

// 3D Lanyard component.
import Lanyard from "./Lanyard";

// Hero section for the portfolio homepage.
export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">

      {/* Main hero content container */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">

        {/* Two-column hero layout */}
        <div className="grid md:grid-cols-2 items-center gap-8">

<div className="text-left">

  {/* Animated greeting */}
  <BlurText
    text="Hello, I'm"
    delay={120}
    animateBy="words"
    direction="top"
    className="text-sm md:text-base uppercase tracking-[0.3em] text-gray-400"
  />

  {/* Main name */}
  <BlurText
  text="Vaishnav p"
  delay={200}
   animateBy="words"
   direction="top"
   className="mt-3 text-5xl md:text-7xl font-bold tracking-tight"/>
  

  {/* Animated job title */}
  <div className="mt-4 flex justify-start">
    <TrueFocus
      sentence="Full Stack Developer"
      separator=" "
      manualMode={false}
      blurAmount={5}
      borderColor="#FFFFFF"
      glowColor="rgba(255, 255, 255, 0.6)"
      animationDuration={0.5}
      pauseBetweenAnimations={1}
    />
  </div>

  {/* Short introduction */}
  <p className="mt-6 max-w-xl text-gray-400 text-base md:text-lg leading-relaxed">
    I build modern, responsive and scalable web applications
    using React, Next.js, Node.js, Express and MongoDB.
  </p>


  
{/* Animated action buttons */}
<div className="mt-8 flex flex-wrap justify-start items-center gap-4">

  {/* Projects button */}
  <SpecularButton
    size="md"
    radius={999}
    tint="#ffffff"
    tintOpacity={0.08}
    blur={4}
    textColor="#ffffff"
    lineColor="#ffffff"
    baseColor="#525252"
    intensity={1.5}
    shineSize={10}
    shineFade={40}
    thickness={1}
    speed={0.35}
    followMouse={true}
    proximity={250}
    autoAnimate={false}
    onClick={() => {
      window.location.href = "#projects";
    }}
  >
    View My Work
  </SpecularButton>

{/* Contact button - navigates to the Contact page */}
<SpecularButton
  size="md"
  radius={999}
  tint="#ffffff"
  tintOpacity={0}
  blur={0}
  textColor="#ffffff"
  lineColor="#ffffff"
  baseColor="#525252"
  intensity={1.5}
  shineSize={10}
  shineFade={40}
  thickness={1}
  speed={0.35}
  followMouse={true}
  proximity={250}
  autoAnimate={false}
  onClick={() => {
    window.location.href = "/contact";
  }}
>
  Contact Me
</SpecularButton>

</div>

          </div>

          {/* RIGHT SIDE - 3D LANYARD */}
          <div className="relative h-[700px] w-full scale-125">

            {/* 3D Lanyard with the profile image on both sides */}
            <Lanyard
              position={[1,5,25]}
              gravity={[0, -40, 0]}
              frontImage="/profile.png"
              backImage="/profile.png"
              imageFit="cover"
            />

          </div>

        </div>
      </div>

    </section>
  );
}