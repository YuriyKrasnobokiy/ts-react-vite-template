import{d as r,j as t,u as s}from"./index-FskGvAtk.js";const i=r.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-height: 100vh;
  height: 80vh;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`,l=r.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 1px solid green;
  min-height: 400px;
`,c=({count:e,id:n})=>t.jsx(l,{id:n,children:t.jsxs("h2",{children:["Section ",e]})}),d=()=>{const{t:e}=s();return t.jsxs(i,{children:[t.jsx("h2",{children:e("about")}),[...Array(10)].map((n,o)=>t.jsx(c,{id:`target-section-${o}`,count:o},o))]})};export{d as default};
