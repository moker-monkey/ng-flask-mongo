import{x as u}from"./index-CM1YsKSS.js";const{utils:i,writeFile:d}=u,l="excel-list.xlsx",x="sheet";function m(s,t,n=3){const o={};t["!cols"]=[],s.forEach(e=>{Object.keys(e).forEach(h=>{var c,k;const a=e[h],r=(c=a==null?void 0:a.length)!=null?c:n;o[h]=Math.max(r,(k=o[h])!=null?k:n)})}),Object.keys(o).forEach(e=>{t["!cols"].push({wch:o[e]})})}function w({data:s,header:t,filename:n=l,sheetName:o=x,json2sheetOpts:e={},write2excelOpts:h={bookType:"xlsx"}}){const a=[...s];t&&(a.unshift(t),e.skipHeader=!0);const r=i.json_to_sheet(a,e);m(a,r);const c={SheetNames:[o],Sheets:{[o]:r}};d(c,n,h)}function b({data:s,header:t,filename:n=l,write2excelOpts:o={bookType:"xlsx"}}){const e=[...s];t&&e.unshift(t);const h=i.aoa_to_sheet(e),a={SheetNames:[n],Sheets:{[n]:h}};d(a,n,o)}function T({sheetList:s,filename:t=l,write2excelOpts:n={bookType:"xlsx"}}){const o={SheetNames:[],Sheets:{}};s.forEach((e,h)=>{const a=[...e.data];e.header&&(a.unshift(e.header),e.json2sheetOpts=e.json2sheetOpts||{},e.json2sheetOpts.skipHeader=!0);const r=i.json_to_sheet(a,e.json2sheetOpts);m(a,r),e.sheetName=e.sheetName||`${x}${h}`,o.SheetNames.push(e.sheetName),o.Sheets[e.sheetName]=r}),d(o,t,n)}function j({sheetList:s,filename:t=l,write2excelOpts:n={bookType:"xlsx"}}){const o={SheetNames:[],Sheets:{}};s.forEach((e,h)=>{const a=[...e.data];e.header&&a.unshift(e.header);const r=i.aoa_to_sheet(a);e.sheetName=e.sheetName||`${x}${h}`,o.SheetNames.push(e.sheetName),o.Sheets[e.sheetName]=r}),d(o,t,n)}const f=[{title:"ID",dataIndex:"id",width:80},{title:"姓名",dataIndex:"name",width:120},{title:"年龄",dataIndex:"age",width:80},{title:"编号",dataIndex:"no",width:80},{title:"地址",dataIndex:"address"},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}],N=(()=>{const s=[];for(let t=0;t<40;t++)s.push({id:`${t}`,name:`${t} John Brown`,age:`${t+10}`,no:`${t}98678`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()});return s})(),E=f.map(s=>s.title),_=N.map(s=>Object.keys(s).map(t=>s[t]));export{T as a,b,f as c,N as d,j as e,_ as f,E as g,w as j};
