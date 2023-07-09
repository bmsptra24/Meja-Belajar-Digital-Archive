import{j as e,r as a,u as v}from"./index-e24d6674.js";import{a as b}from"./index.esm-d59dbbeb.js";import{d as N,e as w,c}from"./Firebase-9af91a01.js";import{v as m,u as y}from"./index-3d576ff7.js";import{m as C}from"./mbd-f99486a1.js";import"./iconBase-95dc96d9.js";const S=({category:t,message:o})=>e.jsx("div",{className:"toasts",children:e.jsx("div",{className:"max-w-xs bg-white border rounded-md shadow-lg",role:"alert",children:e.jsxs("div",{className:"flex p-4 items-center",children:[t==="success"&&e.jsx("div",{className:"flex-shrink-0 text-xl text-green-400",children:e.jsx(b,{})}),e.jsx("div",{className:"ml-3",children:e.jsx("p",{className:"text-sm text-gray-700",children:o})})]})})}),A=()=>{const[t,o]=a.useState(""),[l,x]=a.useState(""),[r,h]=a.useState(""),[u,p]=a.useState(""),[g,d]=a.useState(-1),n=v(),f=()=>{N(c,l,r).then(s=>{const i=s.user;y("users/"+i.uid,{email:l,feynman:null,moduls:null,notes:null,search:null,tasks:null,music:{log:"rainSound"},username:t,pomodoro:{pomodoroDuration:25,shortBreak:5,longBreak:15}}),w(c.currentUser).then(()=>{d(0),setTimeout(()=>{d(-1)},7e3)}),c.signOut(),n("/help")}).catch(s=>{const i=s.code,j=s.message;alert(i,j)})};return e.jsxs("div",{className:"App",children:[e.jsx("div",{className:"absolute w-full h-full pattern-box"}),g===0&&e.jsx(S,{category:"success",message:"An email verification has been sent to your account!"}),e.jsxs("div",{className:"flex lg:h-3/4 lg:w-4/5 xl:w-3/5 lg:shadow-2xl rounded-3xl z-10",children:[e.jsx("div",{className:"lg:flex hidden w-1/2 bg-gradient-to-bl from-cyan-500 to-blue-500 justify-center items-center rounded-s-3xl",children:e.jsxs("div",{className:"px-7 flex flex-col text-center text-blue-50",children:[e.jsxs("p",{className:"font-bold text-4xl mb-5 relative flex flex-col items-center mt-5",children:[e.jsx("img",{src:C,alt:"Logo MBD",className:"w-10/12 absolute -top-40 cursor-pointer",onClick:()=>n("/")}),e.jsx("p",{className:"mt-3",children:"Meja Belajar Digital"})]}),e.jsx("p",{className:"px-7",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ut consequatur vero excepturi officia repellendus."})]})}),e.jsxs("div",{className:"h-screen lg:h-auto w-screen lg:w-1/2 p-4 px-7 pb-7 flex flex-col justify-evenly lg:justify-between bg-blue-50 lg:rounded-e-3xl",children:[e.jsx("div",{className:"flex justify-center my-7",children:e.jsx("p",{className:"font-bold text-4xl text-slate-600",children:"Signup"})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("input",{type:"text",className:"placeholder:text-slate-500 h-12 rounded px-3 bg-slate-200 focus:outline-none focus:ring-slate-300 focus:ring-2",placeholder:"Your Name",value:t,onChange:s=>o(s.target.value)}),e.jsx("input",{type:"email",className:"placeholder:text-slate-500 mt-4 h-12 rounded px-3 bg-slate-200 focus:outline-none focus:ring-slate-300 focus:ring-2",placeholder:"Enter Email",value:l,onChange:s=>x(s.target.value)}),e.jsx("input",{type:"password",className:"placeholder:text-slate-500 mt-4 h-12 rounded px-3 bg-slate-200 focus:outline-none focus:ring-slate-300 focus:ring-2",placeholder:"Password",value:r,onChange:s=>h(s.target.value)}),e.jsx("input",{type:"password",className:"placeholder:text-slate-500 mt-4 h-12 rounded px-3 bg-slate-200 focus:outline-none focus:ring-slate-300 focus:ring-2",placeholder:"Confirm Your Password",value:u,onChange:s=>p(s.target.value)})]}),e.jsx("button",{className:"hover:to-blue-600 hover:from-blue-400 bg-gradient-to-l from-cyan-400 to-blue-500 h-12 rounded mt-4",onClick:()=>{m.isEmpty(t,{ignore_whitespace:!0})?alert("Nama tidak boleh kosong!"):m.isEmail(l)?r===u&&f():alert("Email not valid!")},children:"Sign Up"}),e.jsxs("div",{className:"flex justify-center text-sm",children:[e.jsx("p",{children:"I have an account!"}),e.jsx("button",{className:"ml-2 transition ease-in-out hover:text-blue-600 text-blue-500",onClick:()=>n("/signin"),children:"Login"})]})]})]})]})};export{A as default};
