// import * as React from 'react';
// // import style from "../style/popup.module.css";

// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'white',
//   border: '2px solid white',
//   boxShadow: 24,
//   color:'black',

//   p: 4,
// };

// export default function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           {/* <Typography id="modal-modal-title" variant="h6" component="h2">
//             How to play 
//           </Typography> */}
//           <h2 className="font-bold text-4xl">How to play</h2>
//           {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Guess the wordle in 5 tries.
//           </Typography> */}
//           <h2 className=' text-2xl'>Guess the wordle in 5 fires</h2>
//           <div className='flex' >
//           <li >
//             <ul>
//                 Each guess me must be 5 letter word
//             </ul>
//             </li>
//             <li>
//             <ul>
//             The color of the tiles will change to show how close your guess was to the word.
//            </ul>
//           </li>
//           </div>
//           <br/>
//           <p>Examples</p>
//           <div>
//       <div className="mt-1 gap-2 ">
//         <div className="flex ">
//           <div className="h-16 w-14">
//             <button className=" bg-green-900 h-14 w-12 rounded-md font-bold" >
//               Q
//             </button>
//           </div>
//           <div className="h-16 w-14">
//             <button className=" border border-white h-14 w-12 rounded-md font-bold" >
//               W
//             </button>
//           </div>
//           <div className="h-16 w-14">
//             <button className=" border border-white h-14 w-12 rounded-md font-bold" >
//               E
//             </button>
//           </div>
//           <div className="h-16 w-14">
//             <button className=" border border-white h-14 w-12 rounded-md font-bold">
//               R
//             </button>
//           </div>
//           <div className="h-16 w-14">
//             <button className=" border border-white h-14 w-12 rounded-md font-bold">
//               S
//             </button>
//           </div>
          
//           </div>
//           </div>
//           </div>
// <h4 className='text-white'>W is in the word and in the correct spot.</h4>
// <div>
//       <div className="mt-1 gap-2 ">
//         <div className="flex ">
//           <div className="h-16 w-14">
//             <button className=" border border-white h-14 w-12 rounded-md font-bold" >
//               Q
//             </button>
//           </div>
//           <div className="h-16 w-14">
//             <button className=" bg-yellow-600 h-14 w-12 rounded-md font-bold" >
//               W
//             </button>
//           </div>
//           <div className="h-16 w-14">
//             <button className="border border-white h-14 w-12 rounded-md font-bold" >
//               E
//             </button>
//           </div>
//           <div className="h-16 w-14">
//             <button className="  h-14 w-12 rounded-md font-bold border border-white">
//               R
//             </button>
//           </div>
//           <div className="h-16 w-14">
//             <button className="  h-14 w-12 rounded-md font-bold border border-white">
//               S
//             </button>
//           </div>
          
//           </div>
//           </div>
//           </div>
//           <h4 className='text-white'>I is in the word but in the wrong spot.</h4>
//           <div>
//       <div className="mt-1 gap-2 ">
//         <div className="flex ">
//           <div className="h-16 w-14">
//             <button className=" h-14 w-12 rounded-md font-bold border border-white" >
//               Q
//             </button>
//           </div>
//           <div className="h-16 w-14">
//             <button className="  h-14 w-12 rounded-md font-bold border border-white" >
//               W
//             </button>
//           </div>
//           <div className="h-16 w-14">
//             <button className=" bg-gray-500 h-14 w-12 rounded-md font-bold border border-white" >
//               E
//             </button>
//           </div>
//           <div className="h-16 w-14">
//             <button className=" h-14 w-12 rounded-md font-bold border border-white">
//               R
//             </button>
//           </div>
//           <div className="h-16 w-14">
//             <button className=" h-14 w-12 rounded-md font-bold border border-white">
//               S
//             </button>
//           </div>
          
//           </div>
//           </div>
//           </div>
//           <h4 className='text-white'>E is not in the word in any spot.</h4>
//           <br/>
//           <h6 className='text-white text-sm'>A new puzzle is released daily at midnight. If you haven’t already, you can sign up for our daily reminder email</h6>

//         </Box>
//       </Modal>
//     </div>
//   );
// }