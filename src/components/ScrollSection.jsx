// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// import { Observer } from "gsap/Observer";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(Observer, SplitText);

// const sections = [
//   {
//     heading: "Scroll down",
//     backgroundImage:
//       "https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920",
//   },
//   {
//     heading: "Animated with GSAP",
//     backgroundImage:
//       "https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzc3NTM3MA&ixlib=rb-1.2.1&q=75&w=1920",
//   },
//   {
//     heading: "GreenSock",
//     backgroundImage:
//       "https://images.unsplash.com/photo-1617438817509-70e91ad264a5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDk4Mg&ixlib=rb-1.2.1&q=75&w=1920",
//   },
//   {
//     heading: "Animation platform",
//     backgroundImage:
//       "https://images.unsplash.com/photo-1617412327653-c29093585207?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDgzMQ&ixlib=rb-1.2.1&q=75&w=1920",
//   },
//   {
//     heading: "Keep scrolling",
//     backgroundImage:
//       "https://images.unsplash.com/photo-1617141636403-f511e2d5dc17?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxODAzMjc4Mw&ixlib=rb-1.2.1&q=75w=1920",
//   },
// ];

// const ScrollSection = () => {
//   const sectionsRef = useRef([]);
//   const imagesRef = useRef([]);
//   const headingsRef = useRef([]);
//   const outerWrappersRef = useRef([]);
//   const innerWrappersRef = useRef([]);

//   useEffect(() => {
//     const sectionEls = sectionsRef.current;
//     const imageEls = imagesRef.current;
//     const headingEls = headingsRef.current;
//     const outerEls = outerWrappersRef.current;
//     const innerEls = innerWrappersRef.current;

//     let currentIndex = -1;
//     let animating = false;

//     const splitHeadings = headingEls.map(
//       (heading) =>
//         new SplitText(heading, {
//           type: "chars,words,lines",
//           linesClass: "clip-text",
//         })
//     );

//     const wrap = (index) => {
//       const length = sectionEls.length;
//       return ((index % length) + length) % length;
//     };

//     function gotoSection(index, direction) {
//       index = wrap(index);
//       animating = true;

//       const fromTop = direction === -1;
//       const dFactor = fromTop ? -1 : 1;

//       const tl = gsap.timeline({
//         defaults: { duration: 1.25, ease: "power1.inOut" },
//         onComplete: () => {
//           animating = false;
//         },
//       });

//       if (currentIndex >= 0) {
//         gsap.set(sectionEls[currentIndex], { zIndex: 0 });
//         tl.to(imageEls[currentIndex], { yPercent: -15 * dFactor }).set(
//           sectionEls[currentIndex],
//           { autoAlpha: 0 }
//         );
//       }

//       gsap.set(sectionEls[index], { autoAlpha: 1, zIndex: 1 });

//       tl.fromTo(
//         [outerEls[index], innerEls[index]],
//         {
//           yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
//         },
//         {
//           yPercent: 0,
//         },
//         0
//       )
//         .fromTo(imageEls[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
//         .fromTo(
//           splitHeadings[index].chars,
//           {
//             autoAlpha: 0,
//             yPercent: 150 * dFactor,
//           },
//           {
//             autoAlpha: 1,
//             yPercent: 0,
//             duration: 1,
//             ease: "power2",
//             stagger: {
//               each: 0.02,
//               from: "random",
//             },
//           },
//           0.2
//         );

//       currentIndex = index;
//     }

//     Observer.create({
//       type: "wheel,touch,pointer",
//       wheelSpeed: -1,
//       onDown: () => !animating && gotoSection(currentIndex - 1, -1),
//       onUp: () => !animating && gotoSection(currentIndex + 1, 1),
//       tolerance: 10,
//       preventDefault: true,
//     });

//     gsap.set(outerEls, { yPercent: 100 });
//     gsap.set(innerEls, { yPercent: -100 });

//     gotoSection(0, 1);

//     return () => {
//       Observer.get().kill();
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0">
//       <header className="fixed top-0 left-0 w-full z-10 flex items-center justify-between p-4 text-white">
//         <div>Animated Sections</div>
//         <div>
//           <a href="https://codepen.io/BrianCross/pen/PoWapLP">
//             Original By Brian
//           </a>
//         </div>
//       </header>

//       {sections.map((section, index) => (
//         <section
//           key={index}
//           ref={(el) => (sectionsRef.current[index] = el)}
//           className={`absolute inset-0 h-full w-full ${
//             ["first", "second", "third", "fourth", "fifth"][index]
//           }`}
//           style={{ visibility: "hidden" }}
//         >
//           <div
//             className="outer w-full h-full overflow-hidden"
//             ref={(el) => (outerWrappersRef.current[index] = el)}
//           >
//             <div
//               className="inner w-full h-full overflow-hidden"
//               ref={(el) => (innerWrappersRef.current[index] = el)}
//             >
//               <div
//                 className="bg absolute inset-0 flex items-center justify-center bg-cover bg-center"
//                 ref={(el) => (imagesRef.current[index] = el)}
//                 style={{
//                   backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%), url(${section.backgroundImage})`,
//                 }}
//               >
//                 <h2
//                   ref={(el) => (headingsRef.current[index] = el)}
//                   className="section-heading text-white text-center text-5xl tracking-widest uppercase"
//                 >
//                   {section.heading}
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default ScrollSection;
