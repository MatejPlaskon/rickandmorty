import{f as p,j as s,r as g,y as P,a as R,S as b,h as C,o as E,b as w,z as I,C as H}from"./index-Bm17_tNl.js";var S=p(function(e,o){const{htmlWidth:t,htmlHeight:a,alt:r,...c}=e;return s.jsx("img",{width:t,height:a,ref:o,alt:r,...c})});S.displayName="NativeImage";function L(i){const{loading:e,src:o,srcSet:t,onLoad:a,onError:r,crossOrigin:c,sizes:d,ignoreFallback:h}=i,[u,k]=g.useState("pending");g.useEffect(()=>{k(o?"loading":"pending")},[o]);const l=g.useRef(),y=g.useCallback(()=>{if(!o)return;m();const n=new Image;n.src=o,c&&(n.crossOrigin=c),t&&(n.srcset=t),d&&(n.sizes=d),e&&(n.loading=e),n.onload=f=>{m(),k("loaded"),a==null||a(f)},n.onerror=f=>{m(),k("failed"),r==null||r(f)},l.current=n},[o,c,t,d,a,r,e]),m=()=>{l.current&&(l.current.onload=null,l.current.onerror=null,l.current=null)};return P(()=>{if(!h)return u==="loading"&&y(),()=>{m()}},[u,y,h]),h?"loaded":u}var B=(i,e)=>i!=="loaded"&&e==="beforeLoadOrError"||i==="failed"&&e==="onError";function O(i,e=[]){const o=Object.assign({},i);for(const t of e)t in o&&delete o[t];return o}var x=p(function(e,o){const{fallbackSrc:t,fallback:a,src:r,srcSet:c,align:d,fit:h,loading:u,ignoreFallback:k,crossOrigin:l,fallbackStrategy:y="beforeLoadOrError",referrerPolicy:m,...n}=e,f=t!==void 0||a!==void 0,M=u!=null||k||!f,A=L({...e,crossOrigin:l,ignoreFallback:M}),F=B(A,y),v={ref:o,objectFit:h,objectPosition:d,...M?n:O(n,["onError","onLoad"])};return F?a||s.jsx(R.img,{as:S,className:"chakra-image__placeholder",src:t,...v}):s.jsx(R.img,{as:S,src:r,srcSet:c,crossOrigin:l,loading:u,referrerPolicy:m,className:"chakra-image",...v})});x.displayName="Image";var T=p((i,e)=>s.jsx(b,{align:"center",...i,direction:"row",ref:e}));T.displayName="HStack";var N=p(function(e,o){const t=C("Heading",e),{className:a,...r}=E(e);return s.jsx(R.h2,{ref:o,className:w("chakra-heading",e.className),...r,__css:t})});N.displayName="Heading";var j=p(function(i,e){const{ratio:o=4/3,children:t,className:a,...r}=i,c=g.Children.only(t),d=w("chakra-aspect-ratio",a);return s.jsx(R.div,{ref:e,position:"relative",className:d,_before:{height:0,content:'""',display:"block",paddingBottom:I(o,h=>`${1/h*100}%`)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...r,children:c})});j.displayName="AspectRatio";const W=[{season:1,episodes:["Pilot","Lawnmower Dog","Anatomy Park","M. Night Shaym-Aliens!","Meeseeks and Destroy","Rick Potion #9","Raising Gazorpazorp","Rixty Minutes","Something Ricked This Way Comes","Close Rick-counters of the Rick Kind","Ricksy Business"]},{season:2,episodes:["A Rickle in Time","Mortynight Run","Auto Erotic Assimilation","Total Rickall","Get Schwifty","The Ricks Must Be Crazy","Big Trouble in Little Sanchez","Interdimensional Cable 2: Tempting Fate","Look Who's Purging Now","The Wedding Squanchers"]},{season:3,episodes:["The Rickshank Rickdemption","Rickmancing the Stone","Pickle Rick","Vindicators 3: The Return of Worldender","The Whirly Dirly Conspiracy","Rest and Ricklaxation","The Ricklantis Mixup","Morty's Mind Blowers","The ABC's of Beth","The Rickchurian Mortydate"]},{season:4,episodes:["Edge of Tomorty: Rick Die Rickpeat","The Old Man and the Seat","One Crew over the Crewcoo's Morty","Claw and Hoarder: Special Ricktim's Morty","Rattlestar Ricklactica","Never Ricking Morty","Promortyus","The Vat of Acid Episode","Childrick of Mort","Star Mort Rickturn of the Jerri"]},{season:5,episodes:["Mort Dinner Rick Andre","Mortyplicity","A Rickconvenient Mort","Rickdependence Spray","Amortycan Grickfitti","Rick & Morty's Thanksploitation Spectacular","Gotron Jerrysis Rickvangelion","Rickternal Friendshine of the Spotless Mort","Forgetting Sarick Mortshall","Rickmurai Jack"]},{season:6,episodes:["Solaricks","Rick: A Mort Well Lived","Bethic Twinstinct","Night Family","Final DeSmithation","JuRicksic Mort","Full Meta Jackrick","Analyze Piss","A Rick in King Mortur’s Mort","Ricktional Mortpoon’s Rickmas Mortcation"]},{season:7,episodes:["How Poopy Got His Poop Back","The Jerrick Trap","Air Force Wong","That's Amorte","Unmortricken","Rickfending Your Mort","Wet Kuat Amortican Summer","Rise of the Numbericons: The Movie","Mort: Ragnarick","Fear No Mort"]}],$=({season:i,episode:e})=>s.jsx(H,{children:s.jsx(j,{w:"90%",maxH:"calc(100vh - 150px)",ratio:16/9,children:s.jsx("iframe",{src:`https://vidsrc.to/embed/tv/tt2861424/${i}/${e}`,allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",width:"100%"})})}),J=g.memo($),G=({season:i,episode:e})=>{var a;const o=(a=W.find(r=>r.season===i))==null?void 0:a.episodes[e-1],t=`S${i}E${e}: ${o}`;return s.jsx(N,{color:"yellow.500",children:t})},z="/assets/logo-D6Jd59b8.png",_=({children:i,header:e})=>s.jsxs(b,{w:"full",h:"full",p:4,children:[s.jsxs(T,{w:"full",spacing:5,children:[s.jsx(x,{src:z,alt:"logo",w:200,alignSelf:"flex-start"}),e]}),i]}),V=g.memo(_);export{G as E,N as H,V as P,W as S,J as V,T as a};
