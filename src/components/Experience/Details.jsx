// import { useSpring, animated } from 'react-spring';
// import { useDrag } from 'react-use-gesture';
// import React from 'react';
// import './Experience.css';

// function PullRelease() {
//   const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));

//   // Set the drag hook and define component movement based on gesture data
//   const bind = useDrag(({ down, movement: [mx, my] }) => {
//     set({ x: down ? mx : 0, y: down ? my : 0 });
//   });

//   // Bind it to a component

//   return (
//     <div >
//       <animated.div id="test"{...bind()} style={{ x, y }} />
//     </div>
//   );
// }
// export default PullRelease;
