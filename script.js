'use strict';
// Motion timing and parallax strength; video IDs are configured per member below.
const CONFIG={transition:1.65,parallax:14};
// User-supplied lyrics aligned to Korean caption boundaries from https://youtu.be/2Bo-ULStqLo
// Seconds are relative to the supplied music-video MP3. Combined caption phrases stay together; instrumental gaps stay empty.
const LYRICS=[
  {
    "start": 22.185,
    "end": 26.808,
    "jp": "ゆこう 明日へと",
    "ko": "가자 내일을 향해"
  },
  {
    "start": 26.832,
    "end": 31.752,
    "jp": "美しい時代(とき)よ",
    "ko": "아름다운 시대여"
  },
  {
    "start": 31.753,
    "end": 36.9,
    "jp": "人は忘れてく",
    "ko": "사람은 잊어 가"
  },
  {
    "start": 36.901,
    "end": 41.993,
    "jp": "心が闘ってた そう 受け入れるため",
    "ko": "마음이 싸웠어 그렇게 받아들이기 위해"
  },
  {
    "start": 43.769,
    "end": 47.064,
    "jp": "向こう側はあるのか",
    "ko": "반대편은 있는가"
  },
  {
    "start": 47.065,
    "end": 50.126,
    "jp": "嘘にも真実にもなれるだろう",
    "ko": "거짓도 진실도 될 수 있을 테지"
  },
  {
    "start": 50.146,
    "end": 56.697,
    "jp": "歪みとは 'らしさ' なのかもしれない",
    "ko": "왜곡이란 '나다움'일지도 몰라"
  },
  {
    "start": 57.211,
    "end": 67.571,
    "jp": "目前にして押し寄せてくる 最後の痛みを 嗚呼",
    "ko": "눈 앞에 두고 밀려 들어오는 마지막 아픔을 아아"
  },
  {
    "start": 68.375,
    "end": 70.155,
    "jp": "越えたら",
    "ko": "극복한다면"
  },
  {
    "start": 70.553,
    "end": 75.624,
    "jp": "ぼくら いま 流れてく",
    "ko": "우리는 지금 흘러가"
  },
  {
    "start": 75.625,
    "end": 80.296,
    "jp": "let's sing alongㅤlet's sing along",
    "ko": ""
  },
  {
    "start": 80.297,
    "end": 90.84,
    "jp": "鮮やかな夜明けとともに\nさあ",
    "ko": "선명한 새벽과 함께\n자"
  },
  {
    "start": 90.841,
    "end": 95.39,
    "jp": "ゆこう 明日へと",
    "ko": "가자 내일을 향해"
  },
  {
    "start": 95.414,
    "end": 100.44,
    "jp": "美しい時代(とき)よ",
    "ko": "아름다운 시대여"
  },
  {
    "start": 100.441,
    "end": 110.425,
    "jp": "人は忘れてく\nいつかは消えてく",
    "ko": "사람은 잊어 가\n언젠가는 사라져 가"
  },
  {
    "start": 125.353,
    "end": 129.705,
    "jp": "想いを綴るようになったのは なぜ",
    "ko": "마음을 써내려가게 된 건 어째서"
  },
  {
    "start": 130.313,
    "end": 135.192,
    "jp": "光と闇を司るその命",
    "ko": "빛과 어둠을 관장하는 그 생명"
  },
  {
    "start": 135.193,
    "end": 139.576,
    "jp": "きっと すべてに物語がある",
    "ko": "분명 모든 것에 이야기가 있어"
  },
  {
    "start": 139.577,
    "end": 145.256,
    "jp": "tell me a story tell me a story 叶うなら",
    "ko": "tell me a story tell me a story 그럴 수 있다면"
  },
  {
    "start": 145.257,
    "end": 150.04,
    "jp": "こんなに誰かを想うのは 嗚呼 なぜ",
    "ko": "이렇게나 누군가를 생각하는 건 아아 어째서"
  },
  {
    "start": 150.041,
    "end": 155.289,
    "jp": "光と闇を抱いたまま 胸焦がし",
    "ko": "빛과 어둠을 품은 채 애태우며"
  },
  {
    "start": 155.291,
    "end": 159.832,
    "jp": "そうさ すべてに物語がある",
    "ko": "그래 모든 것에 이야기가 있어"
  },
  {
    "start": 159.833,
    "end": 168.777,
    "jp": "tell me moreㅤ tell me moreㅤdon't stop",
    "ko": ""
  },
  {
    "start": 180.985,
    "end": 185.881,
    "jp": "巡り逢うノイズの中 魂の overdrive",
    "ko": "마주치는 노이즈 속 영혼의 overdrive"
  },
  {
    "start": 187.625,
    "end": 190.776,
    "jp": "輝くよ 何度も",
    "ko": "빛날 거야 몇 번이든"
  },
  {
    "start": 190.777,
    "end": 193.401,
    "jp": "崩れてく 失ってく",
    "ko": "무너져 가는 잃어가는"
  },
  {
    "start": 193.407,
    "end": 201.313,
    "jp": "嗚呼 ずっと探してた刹那の遠い色",
    "ko": "아아 줄곧 찾고 있었던 찰나의 먼 빛깔"
  },
  {
    "start": 201.327,
    "end": 212.395,
    "jp": "もしもこの詩が 天球(そら)に 夢のつづきを描くのなら",
    "ko": "만약 이 노래가 하늘에 꿈의 다음을 그린다면"
  },
  {
    "start": 212.406,
    "end": 214.185,
    "jp": "見つめて",
    "ko": "바라봐"
  },
  {
    "start": 214.601,
    "end": 219.688,
    "jp": "ぼくらいま 解き放つ",
    "ko": "우리는 지금 벗어나"
  },
  {
    "start": 219.689,
    "end": 224.297,
    "jp": "let's sing alongㅤlet's sing along",
    "ko": ""
  },
  {
    "start": 224.304,
    "end": 234.73,
    "jp": "張り裂ける 心 奏でて\nさあ",
    "ko": "터질 듯한 마음을 연주하며\n자"
  },
  {
    "start": 234.73,
    "end": 239.527,
    "jp": "ゆこう 明日へと",
    "ko": "가자 내일을 향해"
  },
  {
    "start": 239.55,
    "end": 244.631,
    "jp": "美しい時代(とき)よ",
    "ko": "아름다운 시대여"
  },
  {
    "start": 244.633,
    "end": 254.557,
    "jp": "人は忘れてく\nいつかは消えてく",
    "ko": "사람은 잊어가\n언젠가는 사라져 가"
  },
  {
    "start": 254.585,
    "end": 258.95,
    "jp": "ゆこう Ave Mujica(世界) へと",
    "ko": "가자 Ave Mujica(세계)를 향해"
  },
  {
    "start": 258.951,
    "end": 263.99,
    "jp": "美しい時代(とき)よ",
    "ko": "아름다운 시대여"
  },
  {
    "start": 263.99,
    "end": 275.416,
    "jp": "人は忘れてく\nいつかは消えてく",
    "ko": "사람은 잊어가\n언젠가는 사라져 가"
  }
];
const $=s=>document.querySelector(s),poster=$('#poster');
// Member art, exact identity colors, and optional YouTube video IDs. Lyrics for later members are pending.
const MEMBERS=[
  {role:'Keyboard',alias:'Oblivionis',name:'Sakiko Togawa',jp:'オブリビオニス',masked:'assets/masked.png',revealed:'assets/sakiko.png',video:'GMn4qO7zT0E'},
  {role:'Bass',alias:'Timoris',name:'Umiri Yahata',jp:'ティモリス',masked:'assets/timoris-masked.png',revealed:'assets/umiri.png',video:'6umH5XQpXws',accent:'#236276',accentRgb:'35,98,118'},
  {role:'Guitar & Vocal',alias:'Doloris',name:'Uika Misumi',jp:'ドロリス',masked:'assets/doloris-masked.png',revealed:'assets/uika.png',video:'v-dKrhA6_i0',accent:'#f2992e',accentRgb:'242,153,46'},
  {role:'Drum',alias:'Amoris',name:'Nyamu Yuutenji',jp:'アモーリス',masked:'assets/amoris-masked.png',revealed:'assets/nyamu.png',video:'W0DCsoJPCa8',accent:'#aa4477',accentRgb:'170,68,119'},
  {role:'Guitar',alias:'Mortis',name:'Mutsumi Wakaba',jp:'モーティス',masked:'assets/mortis-masked.png',revealed:'assets/mutsumi.png',video:'QDsd0nyzwz0',accent:'#84a647',accentRgb:'132,166,71'}
];
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
let state='arrival',busy=false,activeMember=0,lyricIndex=-2,ytPlayer=null,ytApiReady=false,ytApiRequested=false;
function fit(){poster.style.transform=`scale(${Math.min(innerWidth/1600,innerHeight/900)})`}addEventListener('resize',fit);fit();
function applyMember(index){
  activeMember=index;const member=MEMBERS[index];
  $('#experience').className=`member-${index}`;
  $('#experience').style.setProperty('--accent',member.accent||'#0c2c44');
  $('#experience').style.setProperty('--accent-rgb',member.accentRgb||'12,44,68');
  $('#masked').setAttribute('aria-label',`Masked ${member.alias}`);
  $('#revealed').setAttribute('aria-label',member.name);
  $('#unveil').setAttribute('aria-label',`UnvEiL — ${member.name}의 가면 벗기기`);
  $('#masked .role').textContent=member.role;
  $('#masked .identity strong').textContent=member.alias;
  $('#masked .identity span').textContent=member.jp;
  $('#masked .masked-character').src=member.masked;
  $('#masked .masked-character').alt=`가면을 쓴 ${member.alias}`;
  $('#revealed .role').textContent=member.role;
  $('#revealed .alias').textContent=member.alias;
  $('#revealed h1').textContent=member.name;
  $('#revealed .sakiko-character').src=member.revealed;
  $('#revealed .sakiko-character').alt=`가면을 벗은 ${member.name}`;
  $('#member-video').title=`${member.name} 음악 영상`;
  $('#member-video').hidden=!member.video;
  $('#video-pending').hidden=!!member.video;
  $('.video-label').textContent=member.video?'VIDEO / MUSIC':'VIDEO / COMING SOON';
  $('#lyric-jp').textContent='';$('#lyric-ko').textContent='';
  $('.sample-label').textContent=index===0?'LYRICS / 日本語・한국어':'LYRICS / COMING SOON';
  lyricIndex=-2;
}
const intro=gsap.timeline({paused:true,defaults:{ease:'power3.out',duration:reduced?.01:.8}});intro.from('.background',{opacity:0,scale:1.08}).from('.masked-motion',{y:180,scale:.9,opacity:0},.15).from('#unveil',{x:-1000,duration:reduced?.01:.7},.48).from('#masked .role',{x:-350,opacity:0},.65).from('.identity',{x:520,opacity:0},.8);
$('#unveil').addEventListener('pointerenter',()=>{if(busy)return;$('#masked').classList.add('hover');gsap.to('#unveil',{scale:1.055,rotation:-24,duration:.22})});$('#unveil').addEventListener('pointerleave',()=>{$('#masked').classList.remove('hover');if(!busy)gsap.to('#unveil',{scale:1,rotation:-27,duration:.25})});
poster.addEventListener('pointermove',e=>{if(reduced||busy||!['masked','revealed'].includes(state))return;const r=poster.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;gsap.to('.masked-motion,.sakiko-motion',{x:x*CONFIG.parallax,y:y*CONFIG.parallax,duration:.7});gsap.to('.background',{x:-x*8,y:-y*8,duration:1})});poster.addEventListener('pointerleave',()=>{if(!busy)gsap.to('.background,.masked-motion,.sakiko-motion',{x:0,y:0,duration:.7})});
function attachYouTubePlayer(){
  if(!ytApiReady||ytPlayer||!$('#member-video').hasAttribute('src'))return;
  try{ytPlayer=new YT.Player('member-video',{events:{onError:e=>console.error('YouTube video error:',e.data)}})}
  catch(e){console.error('YouTube player API:',e)}
}
window.onYouTubeIframeAPIReady=()=>{ytApiReady=true;attachYouTubePlayer()};
function loadVideo(){
  const id=MEMBERS[activeMember].video;
  if(!id)return;
  $('#member-video').src=`https://www.youtube-nocookie.com/embed/${id}?enablejsapi=1&playsinline=1&rel=0&origin=${encodeURIComponent(location.origin)}`;
  if(!ytApiRequested){ytApiRequested=true;const script=document.createElement('script');script.src='https://www.youtube.com/iframe_api';script.onerror=e=>console.error('YouTube player API failed:',e);document.head.append(script)}
  else if(ytApiReady)attachYouTubePlayer();
}
function stopVideo(){
  try{ytPlayer?.stopVideo()}catch(e){console.error('YouTube player stop:',e)}
  // Rebuild the embed so playback also stops if the player API could not load.
  const old=$('#member-video'),fresh=old.cloneNode(false);fresh.removeAttribute('src');old.replaceWith(fresh);ytPlayer=null;
}
function updateLyrics(){
  if(state!=='revealed'||activeMember!==0||!ytPlayer?.getCurrentTime)return;
  let time=0;try{time=ytPlayer.getCurrentTime()}catch{return}
  const index=LYRICS.findIndex(l=>time>=l.start&&time<l.end);
  if(index===lyricIndex)return;
  lyricIndex=index;const line=LYRICS[index];
  $('#lyric-jp').textContent=line?.jp||'';$('#lyric-ko').textContent=line?.ko||'';
  gsap.fromTo('#lyric-jp,#lyric-ko',{y:16,opacity:0},{y:0,opacity:1,duration:reduced?.01:.3,stagger:.05});
}
setInterval(updateLyrics,250);
// Ordered exit → title sweep → reveal. All five members use this motion sequence.
$('#unveil').addEventListener('click',()=>{
  if(busy||state!=='masked')return;
  busy=true;intro.progress(1);$('#unveil').disabled=true;
  $('#masked').classList.remove('hover');
  gsap.killTweensOf('.background,.masked-motion,.sakiko-motion,#unveil');
  gsap.set('#unveil',{scale:1,rotation:-27});
  const d=reduced?.08:CONFIG.transition;
  const clearTitle=()=>gsap.set('#transition-word',{autoAlpha:0,display:'none'});
  const t=gsap.timeline({onComplete:()=>{
    clearTitle();gsap.set('#unveil',{autoAlpha:0});
    state='revealed';busy=false;$('#remask').focus({preventScroll:true});
  }});
  t.to('.masked-motion',{x:100,y:70,scale:.96,opacity:0,duration:d*.18,ease:'power2.in'},0)
   .to('#masked .role,.identity',{x:180,opacity:0,duration:d*.16,ease:'power2.in'},0)
   .to('.background',{opacity:0,duration:d*.2},0)
   .set('#unveil',{autoAlpha:0},d*.23)
   .set('#transition-word',{display:'block',autoAlpha:1,x:0,scale:1},d*.23)
   .to('#transition-word',{x:1800,scale:3,duration:d*.32,ease:'power3.in'},d*.23)
   .to('.wipe-white',{xPercent:150,duration:d*.3,ease:'power3.inOut'},d*.29)
   .to('.wipe-red',{xPercent:150,duration:d*.3,ease:'power3.inOut'},d*.33)
   .call(clearTitle,null,d*.55)
   .call(()=>{
     $('#masked').inert=true;$('#revealed').inert=false;
     gsap.set('#masked',{autoAlpha:0});
     gsap.set('.background',{opacity:1,x:0,y:0});
     gsap.set('#revealed',{autoAlpha:1});
   },null,d*.63)
   .to('.wipe-white',{xPercent:300,duration:d*.3,ease:'power3.inOut'},d*.63)
   .to('.wipe-red',{xPercent:300,duration:d*.3,ease:'power3.inOut'},d*.67)
   .fromTo('.sakiko-motion',{x:400,y:80,scale:1.13,opacity:0},{x:0,y:0,scale:1,opacity:1,duration:d*.3,ease:'power3.out'},d*.65)
   .fromTo('#revealed h1,#revealed .role,#revealed .alias',{x:-200,opacity:0},{x:0,opacity:1,stagger:reduced?0:.04,duration:d*.2},d*.72)
   .fromTo('.video-panel,.lyrics,#remask',{y:30,opacity:0},{y:0,opacity:1,duration:d*.2},d*.8)
   .call(loadVideo,null,d*.86);
});
$('#remask').addEventListener('click',()=>{
  if(busy)return;stopVideo();state='masked';$('#revealed').inert=true;$('#masked').inert=false;
  gsap.set('#revealed',{autoAlpha:0});gsap.set('#masked',{autoAlpha:1});gsap.set('.masked-motion',{scale:1,x:0,y:0,opacity:1});
  gsap.set('.wipe',{xPercent:0});gsap.set('#transition-word',{autoAlpha:0,display:'none'});gsap.set('#unveil',{autoAlpha:1,scale:1,rotation:-27});
  gsap.set('#masked .role,.identity',{x:0,opacity:1});gsap.set('.background',{opacity:1,x:0,y:0});
  $('#unveil').disabled=false;$('#unveil').focus({preventScroll:true});intro.restart();
});

// Entry flow: original supplied scenery; seconds are deliberately paced for a cinematic approach.
const sceneDuration=n=>reduced?.01:n;
const mansion=$('#mansion-scene'),door=$('#door-scene'),theater=$('#theater-scene'),experience=$('#experience');
$('#approach').addEventListener('click',()=>{
  if(busy||state!=='mansion')return;
  busy=true;mansion.inert=true;
  gsap.set(door,{autoAlpha:1});
  gsap.timeline({onComplete:()=>{state='door';busy=false;door.inert=false;$('#welcome').focus({preventScroll:true})}})
    .to('.mansion-image',{scale:1.35,transformOrigin:'50% 78%',duration:sceneDuration(.8),ease:'power2.in'},0)
    .to(mansion,{autoAlpha:0,duration:sceneDuration(.5)},sceneDuration(.35))
    .fromTo('#welcome',{y:25,opacity:0},{y:0,opacity:1,duration:sceneDuration(.4)},sceneDuration(.65));
});
$('#welcome').addEventListener('click',()=>{
  if(busy||state!=='door')return;busy=true;door.inert=true;
  gsap.set('.closed-facade',{autoAlpha:0});gsap.set(theater,{autoAlpha:1});
  gsap.timeline({onComplete:()=>{state='theater';busy=false;theater.inert=false;$('.member').focus({preventScroll:true})}})
    .to('#welcome',{autoAlpha:0,duration:sceneDuration(.2)},0)
    .to('.left-leaf',{rotationY:-85,duration:sceneDuration(1.05),ease:'power2.inOut'},0)
    .to('.right-leaf',{rotationY:85,duration:sceneDuration(1.05),ease:'power2.inOut'},0)
    .to(door,{scale:1.8,transformOrigin:'50% 65%',autoAlpha:0,duration:sceneDuration(.85),ease:'power2.in'},sceneDuration(.85))
    .fromTo('.theater-logo',{opacity:0,y:20},{opacity:1,y:0,duration:sceneDuration(.6)},sceneDuration(1.3))
    .fromTo('.member',{y:20,opacity:0},{y:0,opacity:1,stagger:reduced?0:.07,duration:sceneDuration(.4)},sceneDuration(1.4));
});
// Hold for 2.8 seconds. Releasing or losing focus resets the selected doll.
let charging=false,chargeTween=null,chargeInput=null,chargingDoll=null;
const activeDolls=document.querySelectorAll('.member');
function resetCharge(){
  if(!charging)return;charging=false;chargeInput=null;chargeTween?.kill();busy=false;
  $('#cast-status').textContent='인형을 선택해주세요.';chargingDoll?.classList.remove('selected');chargingDoll=null;
  gsap.to('#soul-aura,#soul-white,#soul-loader',{autoAlpha:0,duration:.2});
  $('#soul-meter').setAttribute('aria-valuenow','0');$('#soul-percent').textContent='0%';
}
function beginCharge(doll,input){
  if(busy||state!=='theater')return;
  const index=Number(doll.dataset.member),x=Number.parseInt(doll.style.getPropertyValue('--member-x'),10);
  busy=true;charging=true;chargeInput=input;chargingDoll=doll;doll.classList.add('selected');
  $('#cast-status').textContent='누르고 있으면 영혼이 깨어납니다.';
  $('#soul-aura').style.left=`${x-200}px`;
  $('#soul-loader').style.left=`${x-190}px`;
  gsap.killTweensOf('#soul-aura,#soul-white,#soul-loader');
  gsap.set('#soul-loader',{autoAlpha:1});const charge={value:0};
  function drawCharge(){
    const n=charge.value/100,value=Math.floor(charge.value);
    $('#soul-fill').style.width=value+'%';$('#soul-percent').textContent=value+'%';
    $('#soul-meter').setAttribute('aria-valuenow',value);
    gsap.set('#soul-aura',{autoAlpha:.3+n*.7,scale:.15+n*5});
    gsap.set('#soul-white',{autoAlpha:n*n});
  }
  drawCharge();
  chargeTween=gsap.to(charge,{value:100,duration:2.8,ease:'none',onUpdate:drawCharge,onComplete:()=>{
    charging=false;chargeInput=null;chargingDoll=null;theater.inert=true;
    setBgmMode(false);applyMember(index);
    gsap.set(experience,{autoAlpha:1,transformOrigin:`${x}px 700px`,scale:.025,x:0,y:0});
    intro.progress(1).pause();
    gsap.timeline({onComplete:()=>{
      gsap.set(theater,{autoAlpha:0,opacity:1});gsap.set('#soul-loader,#soul-aura,#soul-white',{autoAlpha:0});
      experience.inert=false;state='masked';busy=false;$('#unveil').focus({preventScroll:true});
    }}).to(experience,{scale:1,duration:sceneDuration(.85),ease:'power3.inOut'},sceneDuration(.2))
      .to(theater,{opacity:0,duration:sceneDuration(.7)},sceneDuration(.2));
  }});
}
activeDolls.forEach(doll=>{
  doll.addEventListener('pointerdown',e=>{
    if(e.button!==0||busy||state!=='theater')return;
    e.preventDefault();doll.focus({preventScroll:true});doll.setPointerCapture(e.pointerId);beginCharge(doll,'pointer');
  });
  ['pointerup','pointercancel','lostpointercapture'].forEach(type=>doll.addEventListener(type,()=>{if(chargeInput==='pointer'&&chargingDoll===doll)resetCharge()}));
  doll.addEventListener('keydown',e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();if(!e.repeat)beginCharge(doll,'keyboard')}});
  doll.addEventListener('keyup',e=>{if((e.key===' '||e.key==='Enter')&&chargeInput==='keyboard'&&chargingDoll===doll){e.preventDefault();resetCharge()}});
  doll.addEventListener('blur',()=>{if(chargingDoll===doll)resetCharge()});
  doll.addEventListener('contextmenu',e=>e.preventDefault());
  doll.addEventListener('click',e=>e.preventDefault());
});
window.addEventListener('blur',resetCharge);
document.addEventListener('visibilitychange',()=>{if(document.hidden)resetCharge()});
$('#back-stage').addEventListener('click',()=>{
  if(busy)return;stopVideo();
  experience.inert=true;gsap.set(experience,{autoAlpha:0});gsap.set(theater,{autoAlpha:1});theater.inert=false;
  $('#revealed').inert=true;$('#masked').inert=false;
  gsap.set('#revealed',{autoAlpha:0});gsap.set('#masked',{autoAlpha:1});
  gsap.set('.masked-motion',{scale:1,x:0,y:0,opacity:1});gsap.set('.background',{x:0,y:0,opacity:1});
  gsap.set('#masked .role,.identity',{x:0,opacity:1});gsap.set('.wipe',{xPercent:0});
  gsap.set('#transition-word',{autoAlpha:0,display:'none'});gsap.set('#unveil',{autoAlpha:1,scale:1,rotation:-27});$('#unveil').disabled=false;
  state='theater';setBgmMode(true);$('#cast-status').textContent='인형을 선택해주세요.';$('.member').focus({preventScroll:true});
});

// Background recording is separate from the song analyser and never overlaps the main song.
const bgm=$('#bgm'),bgmToggle=$('#bgm-toggle');
let bgmEnabled=true,bgmMode=true,entranceStarted=false;bgm.volume=.38;
function updateBgmButton(){
  bgmToggle.hidden=!bgmMode||!entranceStarted;
  bgmToggle.textContent=bgmEnabled?'♫ BGM ON':'♫ BGM OFF';
  bgmToggle.setAttribute('aria-pressed',String(bgmEnabled));
  bgmToggle.setAttribute('aria-label',bgmEnabled?'배경음악 끄기':'배경음악 켜기');
}
async function playBgm(){
  if(!entranceStarted||!bgmEnabled||!bgmMode||!bgm.paused)return;
  try{await bgm.play();if(!bgmEnabled||!bgmMode)bgm.pause()}
  catch(e){if(e.name!=='NotAllowedError')console.error('Background music:',e)}
}
function setBgmMode(enabled){bgmMode=enabled;if(enabled)playBgm();else bgm.pause();updateBgmButton()}
bgmToggle.addEventListener('click',()=>{bgmEnabled=!bgmEnabled;if(bgmEnabled)playBgm();else bgm.pause();updateBgmButton()});
// Explicit initial gesture starts music while the mansion is still on screen.
updateBgmButton();
$('#arrival-gate').addEventListener('click',()=>{
  if(busy||state!=='arrival')return;
  busy=true;entranceStarted=true;
  playBgm(); // Called synchronously from the click for browser audio permission.
  const gate=$('#arrival-gate');gate.disabled=true;
  gsap.timeline({onComplete:()=>{
    gate.hidden=true;mansion.inert=false;state='mansion';busy=false;
    updateBgmButton();$('#approach').focus({preventScroll:true});
  }})
    .to(gate,{autoAlpha:0,duration:sceneDuration(.85),ease:'power2.out'},0)
    .fromTo('#approach',{autoAlpha:0},{autoAlpha:1,duration:sceneDuration(.45)},sceneDuration(.5));
});
