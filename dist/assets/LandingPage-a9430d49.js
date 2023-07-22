import{r as t,u,j as e,L as d}from"./index-7a3b1e87.js";import{m}from"./logo-3792b528.js";import{B as x}from"./index.esm-0a1cf4dd.js";import{R as g}from"./index.esm-1ee15c06.js";import{R as f,C as n}from"./Configuration-bce4d97c.js";import"./iconBase-d52851b8.js";const p="/assets/welcome-scene-85c6fceb.webm",h="/assets/lamp-insight-28b3c4db.png",b="/assets/lighning-880f8fa3.png",j="/assets/up-d768683b.png",w="/assets/menu-04593c60.png",k="/assets/target-e8ddc8c3.png",N="/assets/independent-5c88839c.png",v="/assets/internet-on-hand-462dfa7d.png",z=()=>{const[o,r]=t.useState(!1),i=u();document.querySelector("title").innerHTML="Meja Belajar Digital";const a={mainRef:t.useRef(null),produkRef:t.useRef(null),keunggulanRef:t.useRef(null),tujuanRef:t.useRef(null),footerRef:t.useRef(null)},c=l=>{window.scrollTo({top:l.offsetTop-100,left:0,behavior:"smooth"})};return e.jsxs("div",{className:"w-full flex justify-center flex-col items-center bg-gradient-to-bl pattern-tornado font-roboto",children:[e.jsx(d,{to:"/#produk",onClick:()=>{c(a.mainRef.current)},className:"fixed bottom-7 right-7 z-20",children:e.jsx(x,{className:" rounded-full animate-bounce text-4xl text-blue-800 hover:text-blue-900  lg:text-blue-50 lg:hover:text-blue-200 cursor-pointer hover:shadow-md"})}),e.jsx("div",{className:"w-full h-12 flex justify-center top-0 sticky bg-slate-50 text-slate-500 shadow-xl z-30",children:e.jsxs("div",{className:"w-11/12 lg:w-[1080px] flex justify-between items-center relative",children:[e.jsx("p",{className:"text-2xl font-bold cursor-pointer hover:underline flex items-center hover:text-slate-700 transition-all ease-in-out",children:e.jsx("img",{src:m,alt:"Logo MBD",className:"w-16 h-min mr-2"})}),e.jsxs("div",{className:"absolute right-0",children:[!o&&e.jsx(g,{className:"text-3xl block lg:hidden",onClick:()=>{r(!0)}}),e.jsx("div",{className:"flex font-poppins justify-between gap-3 lg:gap-10 font-medium flex-col lg:flex-row absolute right-0 -top-3 lg:static text-center bg-blue-50 py-3 lg:py-0 rounded-lg shadow-lg lg:shadow-none border lg:border-0 "+(o?"":"hidden lg:flex"),children:["Produk","Keunggulan","Tujuan","Login"].map((l,s)=>e.jsxs("p",{className:"cursor-pointer hover:underline hover:text-slate-700 transition-all ease-in-out mx-6 lg:mx-0",children:[l!=="Login"&&e.jsx(d,{to:`/#${l.toLowerCase()}`,onClick:()=>{r(!1),c(a[`${l.toLowerCase()}Ref`].current)},children:l}),l==="Login"&&e.jsx("p",{onClick:()=>{r(!1),i("/signin")},children:l})]},"navbar-bar-"+s))})]})]})}),e.jsx("div",{ref:a.mainRef,className:"w-full flex justify-center bg-gradient-to-tr -mt-20 lg:-mt-16 lg:h-[800px] text-blue-50 z-20 pattern-tornado",children:e.jsxs("div",{className:"w-11/12 lg:w-[1080px] mx-5 flex flex-col lg:flex-row justify-between items-center",children:[e.jsxs("div",{className:"w-full lg:w-1/2 h-screen lg:h-auto flex flex-col gap-12 lg:gap-8 mt-20 lg:mt-7 text-center lg:text-start items-center lg:items-start justify-center",children:[e.jsx("h1",{className:"font-bold font-poppins text-5xl lg:text-6xl",children:"Meja Belajar Digital"}),e.jsx("p",{className:"text-xl font-medium",children:"Meja Belajar Digital adalah aplikasi yang dapat memudahkan siswa dalam belajar mandiri secara efektif dengan memanfaatkan teknologi yang ada, dengan menggunakan beberapa metode belajar."}),e.jsx("div",{className:"bg-blue-50 font-medium text-xl text-blue-600 w-fit p-3 rounded-3xl cursor-pointer hover:bg-blue-100 hover:drop-shadow-xl transition-all ease-in-out",onClick:()=>i("/signup"),children:"Get started!"})]}),e.jsx("div",{className:"w-11/12 lg:w-1/2 lg:mt-auto h-96 pb-10 lg:pb-0 lg:h-full justify-start items-center flex pl-0 lg:pl-16 ",children:e.jsx("video",{src:p,type:"video/webm",autoPlay:!0,loop:!0,muted:!0})})]})}),e.jsx("div",{ref:a.produkRef,className:"w-full flex justify-center mt-16 lg:-mt-5",children:e.jsxs("div",{className:"w-11/12 lg:w-[1080px] mx-5 shadow-md h-auto flex flex-col justify-between bg-blue-50 rounded-2xl py-14 lg:px-14 px-5 z-10 lg:z-20",children:[e.jsx("p",{className:"font-poppins text-3xl lg:text-4xl font-bold text-center mb-10 text-slate-600",children:"Produk dan solusi untuk perjalanan belajarmu!"}),e.jsx("div",{className:"h-full w-full flex justify-center items-center",children:e.jsx(f,{url:n.linkTutorialMBD,height:"546px",width:"100%",controls:!0})})]})}),e.jsx("div",{ref:a.keunggulanRef,className:"w-full flex justify-center mt-32",children:e.jsxs("div",{className:"w-11/12 lg:w-[1080px] mx-5 shadow-md flex flex-col justify-between bg-blue-50 rounded-2xl px-8 pt-20 pb-8 z-10",children:[e.jsx("p",{className:"font-poppins text-3xl lg:text-4xl font-bold text-center mb-10 text-slate-600",children:"Keunggulan"}),e.jsx("div",{className:"w-full h-full grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-10",children:[[h,"Memperkuat pemahaman pelajar."],[b,"Membuat belajar menjadi lebih efisien."],[j,"Memperkuat pemahaman pelajar."],[w,"Memperkuat pemahaman pelajar."]].map((l,s)=>e.jsxs("div",{className:"border-2 sm:h-52 lg:h-72 bg-slate-200/50 py-5 px-10 shadow-lg rounded-3xl flex gap-4 items-center justify-between",children:[e.jsx("img",{src:l[0],alt:"icon",className:"w-1/3"}),e.jsx("p",{className:"sm:text-2xl text-slate-600 ",children:l[1]})]},s))})]})}),e.jsx("div",{ref:a.tujuanRef,className:"w-full flex justify-center mt-32",children:e.jsxs("div",{className:"w-11/12 lg:w-[1080px] mx-5 shadow-md flex flex-col justify-between bg-blue-50 rounded-2xl px-8 pt-20 pb-8 z-10",children:[e.jsx("p",{className:"font-poppins text-3xl lg:text-4xl font-bold text-center mb-10 text-slate-500",children:"Tujuan Hadirnya Meja Belajar Digital"}),e.jsx("div",{className:"w-full h-full grid sm:grid-cols-3 gap-10",children:[[N,"Hadirnya meja belajar digital dalam dunia pendidikan, mempermudah para pelajar dalam melakukan belajar mandiri tanpa adanya guru pendamping."],[k,"Meja belajar digital membantu belajar mandiri menjadi lebih efektif dengan menggabungkan beberapa metode belajar dalam satu aplikasi."],[v,"Memberikan kesempatan kepada masyarakat untuk memanfaatkan teknologi yang ada."]].map((l,s)=>e.jsxs("div",{className:"border-2 bg-slate-200/50 py-5 px-10 shadow-lg rounded-3xl flex flex-col gap-4 items-center",children:[e.jsx("img",{src:l[0],alt:"icon",className:"w-8/12 my-10"}),e.jsx("p",{className:"text-center text-slate-500 tracking-tight leading-snug hyphens-auto text-lg lg:text-xl",children:l[1]})]},s))})]})}),e.jsx("div",{ref:a.footerRef,className:"w-full sm:h-[80px] bg-slate-50 mt-32 p-7 flex items-center",children:e.jsxs("div",{className:"flex items-start sm:items-center justify-between flex-col sm:flex-row text-slate-500 gap-5 lg:w-4/12 h-full",children:[e.jsx("img",{src:m,alt:"logo",className:"h-10"}),e.jsx("a",{className:"cursor-pointer hover:text-blue-500 transition-all ease-in-out",target:"_blank",rel:"noreferrer",href:n.linkGithub,children:"Github"}),e.jsx("a",{className:"cursor-pointer hover:text-blue-500 transition-all ease-in-out",target:"_blank",rel:"noreferrer",href:n.linkYoutube,children:"Youtube"}),e.jsx("a",{className:"cursor-pointer hover:text-blue-500 transition-all ease-in-out",target:"_blank",rel:"noreferrer",href:n.linkEmail,children:"mbd@gmail.com"}),e.jsx("a",{className:"cursor-pointer hover:text-blue-500 transition-all ease-in-out",onClick:()=>i("/help"),children:"Help"})]})})]})};export{z as default};
