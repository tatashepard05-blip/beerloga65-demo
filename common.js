// Общее ядро Бирлога65: каталог по умолчанию, настройки, хранилище и правила клуба.
// Подключают оба отдельных приложения: клиентское (index.html) и админка (admin.html).
(function(){
"use strict";

/* ---------- каталог по умолчанию (меню beerloga65.ru на 25.10.2026) ---------- */
const CATS=[["pizza","Пицца",12],["rolls","Роллы",250],["sets","Сеты",49],["salads","Салаты",119],["fry","Фри и закуски",97],["sauce","Соусы",178],["dessert","Десерты",232],["drinks","Напитки",160],["bakery","Выпечка",222]];
const RAW=[
[10,"pizza","Пицца «Пеперони»","600 г",750,"Тесто, соус пикантный, колбаски пеперони, сыр моцарелла"],
[12,"pizza","Пицца «Морская»","700 г",1000,"Тесто, сливочный соус, гребешок, тигровая креветка, краб, помидоры черри, сыр моцарелла"],
[13,"pizza","Пицца «Мясная»","650 г",700,"Тесто, соус томатный, курица маринованная, говядина маринованная, бекон, черри, сыр моцарелла"],
[21,"pizza","Пицца «с Гребешком»","600 г",950,"Тесто, гребешок, бекон, соус сливочный, моцарелла, шампиньоны, перец черный, масло оливковое"],
[23,"pizza","Пицца «с Сосисками»","620 г",600,"Тесто, сосиски молочные, сливочный соус, сыр моцарелла, огурчики солёные, помидоры"],
[61,"pizza","Пицца «Папа-Микс»","700 г",700,"Соус, куриное филе, пеперони, грибы, огурчики маринованные, сыр дор блю, пармезан, голландский, моцарелла"],
[122,"pizza","Пицца «Четыре сыра»","620 г",600,"Тесто, соус ранч, сыр дор блю, голландский, пармезан, моцарелла"],
[26,"rolls","Ролл «Запечённый с гребешком»","8 шт.",750,"Рис, нори, гребешок, омлет, сыр творожный, соус сливочный, икра масаго, соус унаги"],
[28,"rolls","Ролл «Запечённый с крабом»","8 шт.",750,"Рис, нори, краб, творожный сыр, огурец, икра масаго, сливочный соус, соус унаги"],
[29,"rolls","Ролл «Запечённый с креветкой»","8 шт.",650,"Рис, нори, креветка, соус сливочный, соус унаги"],
[32,"rolls","Ролл «Калифорния с креветкой»","8 шт.",600,"Рис, нори, креветка, омлет, огурец, икра масаго"],
[33,"rolls","Ролл «Спайси с гребешком»","8 шт.",750,"Рис, нори, гребешок, омлет, огурец, икра масаго, сыр творожный, спайси соус"],
[43,"rolls","Ролл «Фрай с гребешком»","8 шт.",750,"Рис, нори, кляр, сухари, гребешок, творожный сыр, соус унаги"],
[46,"rolls","Ролл «Фрай с креветкой»","8 шт.",650,"Рис, нори, творожный сыр, креветка, огурец, кляр, сухари, соус унаги"],
[246,"rolls","Ролл «Окинава»","8 шт.",700,"Сочная креветка, нежный сливочный сыр, хрустящий огурец и икра летучей рыбы"],
[247,"rolls","Ролл «Слеза Гейши»","8 шт.",739,"Имитация крабового мяса, креветка и свежий огурец с пикантным соусом «Спайси»"],
[248,"rolls","Ролл «Сакура»","8 шт.",750,"Нежная форель и гребешок со свежим огурцом и мягким соусом"],
[249,"rolls","Ролл «Романтик»","8 шт.",760,"Нежная форель, сливочный сыр, хрустящий огурец и яркая тобико"],
[250,"rolls","Ролл «Нью-Йорк»","8 шт.",760,"Много нежной форели, сливочный сыр и сочная икра лосося"],
[251,"rolls","Ролл «Тайский»","8 шт.",760,"Форель и угорь со сливочным сыром, огурцом и сладковатым унаги"],
[252,"rolls","Ролл «Сливочный»","8 шт.",700,"Нежный угорь, сливочный сыр, свежий огурец и икра летучей рыбы"],
[253,"rolls","Ролл «Тамаши»","8 шт.",770,"Нежная форель и сочная креветка со сливочным сыром"],
[254,"rolls","Ролл «Фараон»","8 шт.",750,"Форель, сливочный сыр и огурец с икрой летучей рыбы и пармезаном"],
[255,"rolls","Ролл «Токийская калифорния»","8 шт.",770,"Имитация крабового мяса, гребешок и свежий огурец с майонезом и соусом «Спайси»"],
[256,"rolls","Ролл «Филадельфия»","8 шт.",700,"Нежная форель, сливочный сыр и свежий хрустящий огурец"],
[257,"rolls","Ролл «Филадельфия Люкс»","8 шт.",760,"Форель со сливочным сыром, свежим огурцом и ароматным кунжутом"],
[258,"rolls","Ролл «Фудзияма»","8 шт.",760,"Сочная креветка и огурец с икрой летучей рыбы и пикантным спайси"],
[259,"rolls","Ролл «Хотате маки»","8 шт.",720,"Нежный гребешок с икрой летучей рыбы и мягким майонезным соусом"],
[260,"rolls","Ролл «Запечённая Калифорния»","8 шт.",790,"Имитация крабового мяса и свежий огурец с оранжевой масаго и чесночным соусом"],
[262,"rolls","Ролл «Арадо»","8 шт.",800,"Имитация крабового мяса, угорь и свежий огурец со сливочным сыром и икрой летучей рыбы"],
[263,"rolls","Ролл «Крабовый»","8 шт.",760,"Имитация крабового мяса, свежий огурец и сливочный сыр с икрой летучей рыбы под соусом «Яки»"],
[264,"rolls","Ролл «Гавайский»","8 шт.",750,"Хрустящая креветка фрай и огурец с икрой и сладковатым терияки"],
[265,"rolls","Ролл «Грин Хот»","8 шт.",790,"Яркий ролл с форелью, томаго, огурцом и пикантным «Спайси»"],
[266,"rolls","Сандоч с курицей","4 шт.",880,"Копчёная курица, свежий огурец и зелёный лук с соусом «Спайси» в хрустящей панировке"],
[267,"rolls","Ролл «Сочный»","8 шт.",750,"Сливочный сыр, форель, угорь и свежий огурец с икрой летучей рыбы в кляре"],
[268,"rolls","Ролл «Оушен»","8 шт.",790,"Творожный сыр, копчёная курица, форель и помидор со «Спайси» и зелёным луком"],
[269,"rolls","Ролл «Эбики»","8 шт.",690,"Творожный сыр, креветка и свежий огурец с японским омлетом под оранжевой тобико"],
[270,"rolls","Ролл «Цезарь»","8 шт.",730,"Копчёная курица, сочный помидор и хрустящий салат под нежным сырным соусом"],
[271,"rolls","Ролл «Чиз с угрём»","8 шт.",760,"Сливочный сыр и ароматный угорь в классическом сочетании с рисом и нори"],
[272,"rolls","Ролл «Рассвет»","8 шт.",760,"Сливочный сыр, креветка и свежий огурец с кунжутом и икрой лосося"],
[273,"rolls","Ролл «Атлантический»","8 шт.",760,"Сливочный сыр, форель и угорь с яркой икрой летучей рыбы"],
[274,"rolls","Ролл «Сансей»","8 шт.",800,"Нежный сыр, форель и гребешок со свежим огурцом и соусом «Спайси»"],
[275,"rolls","Ролл «Тёплый»","8 шт.",740,"Имитация крабового мяса, сливочный сыр и свежий огурец с тобико и майонезом"],
[276,"rolls","Ролл «Калифорния»","8 шт.",750,"Имитация крабового мяса и свежий огурец с майонезом под икрой летучей рыбы"],
[277,"rolls","Ролл «Йоко»","8 шт.",760,"Нежный гребешок и креветка с хрустящим салатом, кунжутом и соусом «Спайси»"],
[278,"rolls","Ролл «Марбел»","8 шт.",780,"Куриное филе, свежий огурец и зелёный лук с майонезом, рис и нори"],
[47,"sets","Сет «Запечённый»","24 шт.",1800,"Роллы «Запечённый с гребешком», «Запечённый с креветкой», «Запечённый с угрём»"],
[48,"sets","Сет «Калифорния»","24 шт.",1800,"Калифорния с крабом, калифорния с креветкой, калифорния с лососем"],
[49,"sets","Сет «Филадельфия»","24 шт.",1800,"Филадельфия ×2, Филадельфия Люкс"],
[119,"salads","Цезарь с креветкой","180 г",550,"Айсберг, креветка, сухари, помидоры, соус цезарь, сыр пармезан"],
[5,"fry","Картофель фри","100 г",250,""],
[6,"fry","Кольца кальмара","150 г",400,""],
[96,"fry","Стрипсы с соусом Ранч","150 г",400,""],
[97,"fry","Креветка фрай","150 г",590,""],
[103,"fry","Гренки чесночные","150 г",250,"Чесночные гренки из белого хлеба, соус ранч"],
[104,"fry","Гренки чесночные ржаные","150 г",250,"Чесночные гренки из ржаного хлеба, соус ранч"],
[105,"fry","Луковые кольца","150 г",350,""],
[173,"fry","Картофель по-деревенски","100 г",270,""],
[174,"fry","Куриная стружка Теннесси","240 г",695,"Тонкие кусочки куриного филе в панировке и фирменной глазури Теннесси"],
[7,"fry","Наггетсы куриные","5 шт.",300,""],
[63,"fry","Сырные палочки","5 шт.",300,""],
[177,"sauce","Соус Теннесси","30 г",115,""],
[178,"sauce","Соус Тар-Тар","30 г",115,""],
[179,"sauce","Соус Азиатский","30 г",115,""],
[180,"sauce","Соус Блю-Чиз","30 г",115,""],
[199,"dessert","Птичье молоко Ваниль","70 г",200,"Классическое птичье молоко"],
[200,"dessert","Птичье молоко Малина","70 г",200,"Птичье молоко со вкусом малины"],
[201,"dessert","Птичье молоко Фисташка","70 г",200,"Птичье молоко со вкусом фисташки"],
[188,"dessert","Макарон Бейлис","1 шт.",220,""],
[189,"dessert","Макарон Клубника","1 шт.",220,""],
[190,"dessert","Макарон Лайм","1 шт.",220,""],
[191,"dessert","Макарон Пломбир","1 шт.",220,""],
[192,"dessert","Макарон Баунти","1 шт.",220,""],
[193,"dessert","Макарон Сливочная малина","1 шт.",220,""],
[194,"dessert","Макарон Сникерс","1 шт.",220,""],
[196,"dessert","Макарон Кокос-клюква","1 шт.",220,""],
[237,"dessert","Макарон Арахис","1 шт.",220,""],
[238,"dessert","Макарон Вишнёвый сад","1 шт.",220,""],
[239,"dessert","Макарон Кофе","1 шт.",220,""],
[240,"dessert","Макарон Шоколадная карамель","1 шт.",220,""],
[241,"dessert","Макарон Дор блю и груша","1 шт.",220,""],
[207,"dessert","Тарт Малина-кокос","1 шт.",230,"Миндально-песочное сабле, бисквит на белом шоколаде, малиновое конфи, воздушный мусс на взбитых сливках"],
[208,"dessert","Тарт Сникерс","1 шт.",230,"Шоколадное сабле, обжаренный арахис, сливочная карамель, крем из белого шоколада, шоколадная глазурь"],
[209,"dessert","Тарт чизкейк Нью-Йорк","1 шт.",230,"Миндально-песочное тесто, творожный сыр, ванильный крем, хрустящий крамбл"],
[229,"dessert","Тарт Тоффи","1 шт.",230,"Миндально-песочное сабле, грецкий орех в карамели и кофейно-ванильный крем"],
[230,"dessert","Тарт карамель-фундук","1 шт.",230,"Миндально-шоколадное сабле, солёная карамель, фундук в карамели"],
[210,"dessert","Шу Карамель","1 шт.",250,"Заварное тесто с хрустящей корочкой, заварной крем и солёная карамель"],
[211,"dessert","Шу Малина","1 шт.",250,"Заварное тесто с хрустящей корочкой, крем-чиз и малиновая начинка"],
[212,"dessert","Шу с ореховым пралине","1 шт.",250,"Заварное тесто, сливочно-творожный крем, арахисовое пралине"],
[213,"dessert","Шу Фисташка-малина","1 шт.",250,"Заварное тесто, фисташковый крем, малиновая начинка"],
[214,"dessert","Шу Шоколад","1 шт.",250,"Заварное тесто, заварной крем с тёмным шоколадом"],
[228,"dessert","Брауни с солёной карамелью","1 шт.",310,""],
[244,"dessert","Брауни с вишней","1 шт.",310,""],
[231,"dessert","Эскимо вишня в шоколаде","1 шт.",310,""],
[232,"dessert","Эскимо Орео","1 шт.",310,"Творожно-сливочный крем с «Орео», миндальная печенька, шоколадная глазурь"],
[233,"dessert","Эскимо Малина-фисташка","1 шт.",310,"Фисташковый творожно-сливочный крем, малиновая прослойка, миндальная печенька, шоколадная глазурь"],
[234,"dessert","Эскимо Манго","1 шт.",310,"Творожно-сливочный крем, манго-маракуйя, миндальная печенька, шоколадная глазурь"],
[245,"dessert","Кекс Финансье","1 шт.",290,"Миндальная мука, ореховое масло, грецкий орех, шоколадно-ореховая глазурь"],
[151,"drinks","Милкис оригинал","0,25 л",150,""],
[152,"drinks","Фанта","0,33 л",150,""],
[153,"drinks","Алоэ Вера","0,5 л",200,""],
[154,"drinks","Фанта Апельсин","1 л",250,""],
[155,"drinks","Спрайт","1 л",250,""],
[156,"drinks","Кока-Кола","1 л",250,""],
[157,"drinks","Квас Летний","1,5 л",250,""],
[158,"drinks","Квас Корсаковский хлебный","1,5 л",250,""],
[159,"drinks","Квас Корсаковский окрошечный","1,5 л",250,""],
[160,"drinks","Морс «Брусника»","0,5 л",150,""],
[161,"drinks","Морс «Брусника»","1 л",300,""],
[217,"bakery","Даниш","1 шт.",350,"Датская слойка из слоёного дрожжевого теста с начинкой"],
[220,"bakery","Круассан заварной","1 шт.",320,""],
[221,"bakery","Круассан Карамель","1 шт.",320,""],
[222,"bakery","Круассан Фисташка-малина","1 шт.",380,""],
[223,"bakery","Круассан Шоколад","1 шт.",330,""],
[224,"bakery","Круассан Ягодный","1 шт.",330,""],
[225,"bakery","Круассан Классика","1 шт.",300,""],
[226,"bakery","Шведская булочка","1 шт.",300,"Мягкое дрожжевое тесто, миндальный крем, взбитые сливки"],
[227,"bakery","Слойка ветчина-сыр","1 шт.",330,""],
[235,"bakery","Трубочка Крем-чиз","1 шт.",250,""],
[236,"bakery","Трубочка Сгущёнка","1 шт.",250,""]
];
const HITS=[256,10,49,12,97,250,174,232];
const NEW=[266,267,268,269,270,271,272,273,274,275,276,277,278];

const DEFAULT_CATALOG={
  cats:CATS.map(([key,name,ph])=>({key,name,photo:"img/"+ph+".jpg",hidden:false})),
  items:RAW.map(([id,cat,name,w,price,desc])=>({id:String(id),cat,name,w,price,desc,photo:"img/"+id+".jpg",stop:false,hidden:false,hit:HITS.includes(id),isNew:NEW.includes(id)}))
};

/* ---------- настройки по умолчанию: всё это владелец меняет в админке ---------- */
const DEFAULT_CONFIG={
  brand:{name:"Бирлога65",city:"Тымовск",tagline:"Доставим по Тымовску"},
  delivery:{fee:250,freeFrom:2500,minOrder:800,eta:45},
  hours:[{d:"Пн",open:"11:00",close:"21:00",off:false},{d:"Вт",open:"10:00",close:"21:00",off:false},{d:"Ср",open:"10:00",close:"21:00",off:false},{d:"Чт",open:"10:00",close:"21:00",off:false},{d:"Пт",open:"10:00",close:"22:00",off:false},{d:"Сб",open:"10:00",close:"22:00",off:false},{d:"Вс",open:"11:00",close:"21:00",off:false}],
  contacts:{phone:"+7 (4242) 27-02-37",telegram:"https://t.me/beerloga_65",whatsapp:"https://chat.whatsapp.com/EdXveB4t4AWJxMm6eQ05sx",instagram:"https://www.instagram.com/beerloga65_sakh"},
  loyalty:{
    windowDays:30,                 // уровень считается по заказам за последние N дней
    foodCost:35,                   // себестоимость блюд, % — только для расчётов в админке
    levels:[
      {name:"Медвежонок",from:0,orders:0,cash:2,disc:0,hold:false},
      {name:"Бурый",from:15000,orders:5,cash:3,disc:0,hold:false},
      {name:"Гризли",from:30000,orders:10,cash:4,disc:0,hold:false},
      {name:"Хозяин тайги",from:50000,orders:15,cash:2,disc:5,hold:true}   // hold: условие выполнено два периода подряд
    ],
    pawShare:10,                   // лапками можно оплатить до N% заказа
    pawMinOrder:1500,              // и только в заказе от этой суммы
    pawsWithDiscount:false,        // лапки нельзя тратить, если сработала скидка
    pawLifeDays:30,                // лапки сгорают через N дней после последнего начисления
    welcome:{on:true,paws:100,days:7,minOrder:2000},
    friend:{on:true,paws:100,minOrder:2000},
    birthday:{on:true,mult:2},     // только в сам день рождения
    streak:{on:true,min:2500,need:2,days:7,pct:5},
    gift:{on:true,from:3500,item:"5"},
    nth:{on:true,every:10,item:"188"}
  },
  promos:[
    {id:"p1",on:true,color:"chili",kicker:"Неделя Берлоги",title:"3-й заказ за неделю",text:"Два заказа от 2 500 ₽ за 7 дней, и третий со скидкой",big:"−5%",photo:"",action:"club",value:""},
    {id:"p2",on:true,color:"honey",kicker:"Сет недели",title:"24 ролла за 1 800 ₽",text:"«Филадельфия»: две классики и «Люкс»",big:"",photo:"img/49.jpg",action:"item",value:"49"},
    {id:"p3",on:true,color:"fur",kicker:"Новым гостям",title:"100 лапок за регистрацию",text:"Действуют 7 дней на заказ от 2 000 ₽",big:"",photo:"img/logo.png",action:"club",value:""},
    {id:"p4",on:true,color:"cream",kicker:"Подарок",title:"Фри бесплатно",text:"К каждому заказу от 3 500 ₽",big:"",photo:"img/5.jpg",action:"cart",value:""},
    {id:"p5",on:true,color:"dark",kicker:"Новинки",title:"13 новых роллов",text:"«Оушен», «Сансей», «Йоко» и другие",big:"",photo:"img/274.jpg",action:"cat",value:"rolls"},
    {id:"p6",on:true,color:"fur",kicker:"Доставка 0 ₽",title:"От 2 500 ₽ по Тымовску",text:"Например, «Морская» и сет роллов",big:"",photo:"img/12.jpg",action:"item",value:"12"}
  ],
  demo:{autoAdvance:true,stepSec:10,adminPin:"6565"}
};

/* ---------- утилиты ---------- */
const DAY=864e5;
const clone=o=>JSON.parse(JSON.stringify(o));
function merge(base,over){ // недостающие поля берём из значений по умолчанию
  if(Array.isArray(base))return Array.isArray(over)?over:base;
  if(base&&typeof base==="object"){const out={...base};if(over&&typeof over==="object")for(const k in over)out[k]=k in base?merge(base[k],over[k]):over[k];return out}
  return over===undefined||over===null?base:over;
}
const rub=n=>Math.round(n||0).toLocaleString("ru-RU")+" ₽";
const num=n=>Math.round(n||0).toLocaleString("ru-RU");
const plural=(n,a,b,c)=>{n=Math.abs(n)%100;const d=n%10;return n>10&&n<20?c:d>1&&d<5?b:d===1?a:c};
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const phoneDigits=p=>{let d=String(p||"").replace(/\D/g,"");if(d.length===11&&d[0]==="8")d="7"+d.slice(1);if(d.length===10)d="7"+d;return d};
const fmtPhone=p=>{const d=phoneDigits(p);return d.length===11?`+7 ${d.slice(1,4)} ${d.slice(4,7)}-${d.slice(7,9)}-${d.slice(9)}`:p};
function sakh(t=Date.now()){const p=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Sakhalin",weekday:"short",hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit",hourCycle:"h23"}).formatToParts(new Date(t));const g=k=>p.find(x=>x.type===k).value;return{wd:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].indexOf(g("weekday")),min:+g("hour")*60+ +g("minute"),md:g("month")+"-"+g("day")}}
const toMin=s=>{const[h,m]=String(s).split(":");return h*60+ +m};
const fmtTime=t=>new Date(t).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit",timeZone:"Asia/Sakhalin"});
const fmtDate=t=>new Date(t).toLocaleDateString("ru-RU",{day:"numeric",month:"long",timeZone:"Asia/Sakhalin"});
const fmtDT=t=>new Date(t).toLocaleString("ru-RU",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",timeZone:"Asia/Sakhalin"});

/* ---------- хранилище: облако артефакта (общее для приложения и админки) или браузер ---------- */
const LKEY="bl65db/";
const listeners=new Set();
function localEmit(path){listeners.forEach(l=>{try{l(path)}catch(e){}})}
window.addEventListener("storage",e=>{if(e.key&&e.key.startsWith(LKEY))localEmit(e.key.slice(LKEY.length))});
const local={
  get(p){try{return JSON.parse(localStorage.getItem(LKEY+p))}catch(e){return null}},
  set(p,d){try{localStorage.setItem(LKEY+p,JSON.stringify(d))}catch(e){}localEmit(p)},
  del(p){try{localStorage.removeItem(LKEY+p)}catch(e){}localEmit(p)},
  list(coll){const out=[];try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(!k.startsWith(LKEY+coll+"/"))continue;const rest=k.slice((LKEY+coll+"/").length);if(rest.includes("/"))continue;const v=JSON.parse(localStorage.getItem(k));if(v)out.push({...v,_id:rest})}}catch(e){}return out}
};
function applyQuery(rows,q={}){
  let r=rows;
  if(q.where){const[f,op,v]=q.where;r=r.filter(x=>op==="=="?x[f]===v:op===">="?x[f]>=v:op==="<="?x[f]<=v:true)}
  if(q.orderBy){const[f,dir]=q.orderBy;r=[...r].sort((a,b)=>(a[f]>b[f]?1:a[f]<b[f]?-1:0)*(dir==="desc"?-1:1))}
  if(q.limit)r=r.slice(0,q.limit);
  return r;
}
const Store={
  mode:"local",db:null,user:null,subs:new Set(),modeCbs:new Set(),_p:null,
  init(){return this._p||(this._p=this._init())},
  async _init(){
    try{
      if(window.claude&&typeof window.claude.use==="function"){
        const [db,user]=await Promise.all([window.claude.use("db"),window.claude.use("user")]);
        this.user=user;
        if(db){
          const canWrite=user?await user.can("data.write"):null;
          if(canWrite!==false){this.db=db;this.mode="cloud"}
        }
      }
    }catch(e){}
    this.resubscribe();
    return this.mode;
  },
  toLocal(){if(this.mode==="local")return;this.mode="local";this.resubscribe();this.modeCbs.forEach(cb=>{try{cb("local")}catch(e){}})},
  async get(p){if(this.mode==="cloud"){try{const s=await this.db.doc(p).get();return s.exists?s.data():null}catch(e){this.fail(e)}}return local.get(p)},
  async set(p,d){if(this.mode==="cloud"){try{await this.db.doc(p).set(d);return}catch(e){this.fail(e)}}local.set(p,d)},
  async del(p){if(this.mode==="cloud"){try{await this.db.doc(p).delete();return}catch(e){this.fail(e)}}local.del(p)},
  async list(coll,q){if(this.mode==="cloud"){try{const s=await this.query(coll,q).get();return s.docs.map(d=>({...d.data(),_id:d.id}))}catch(e){this.fail(e)}}return applyQuery(local.list(coll),q)},
  query(coll,q={}){let r=this.db.collection(coll);if(q.where)r=r.where(...q.where);if(q.orderBy)r=r.orderBy(...q.orderBy);if(q.limit)r=r.limit(q.limit);return r},
  fail(e){const c=e&&e.code;if(["invalid_argument","not_granted","revoked","capability_disabled","capability_removed"].includes(c))this.toLocal();else if(c!=="unavailable")console.warn("db",e)},
  // подписки переживают переключение облако → браузер
  watchDoc(p,cb){const s={kind:"doc",p,cb,stop:null};this.subs.add(s);this.start(s);return()=>{s.stop&&s.stop();this.subs.delete(s)}},
  watchColl(coll,q,cb){const s={kind:"coll",coll,q,cb,stop:null};this.subs.add(s);this.start(s);return()=>{s.stop&&s.stop();this.subs.delete(s)}},
  start(s){
    if(this.mode==="cloud"){
      const onErr=e=>{if(e&&e.code==="revoked")this.toLocal()};
      s.stop=s.kind==="doc"?this.db.doc(s.p).onSnapshot(sn=>s.cb(sn.exists?sn.data():null),onErr):this.query(s.coll,s.q).onSnapshot(sn=>s.cb(sn.docs.map(d=>({...d.data(),_id:d.id}))),onErr);
    }else{
      const run=()=>s.cb(s.kind==="doc"?local.get(s.p):applyQuery(local.list(s.coll),s.q));
      const l=path=>{if(s.kind==="doc"?path===s.p:path.startsWith(s.coll+"/"))run()};
      listeners.add(l);run();s.stop=()=>listeners.delete(l);
    }
  },
  resubscribe(){this.subs.forEach(s=>{s.stop&&s.stop();this.start(s)})},
  clearLocal(){try{Object.keys(localStorage).filter(k=>k.startsWith(LKEY)).forEach(k=>localStorage.removeItem(k))}catch(e){}localEmit("")}
};

/* ---------- клуб: уровни, серия, расчёт заказа ---------- */
const live=o=>o&&o.status!=="cancelled";
const paidGoods=o=>Math.max(0,(o.s||0)-(o.disc||0)-(o.paws||0));
function periodStats(orders,from,to){const r=orders.filter(o=>live(o)&&o.createdAt>=from&&o.createdAt<to);return{sum:r.reduce((a,o)=>a+paidGoods(o),0),cnt:r.length}}
function levelOf(orders,L,now=Date.now()){
  const w=L.windowDays*DAY,cur=periodStats(orders,now-w,now),prev=periodStats(orders,now-2*w,now-w);
  let idx=0;
  L.levels.forEach((lv,i)=>{const ok=p=>p.sum>=lv.from&&p.cnt>=lv.orders;if(ok(cur)&&(!lv.hold||ok(prev)))idx=i});
  return{idx,lv:L.levels[idx],next:L.levels[idx+1]||null,sum:cur.sum,cnt:cur.cnt,prevSum:prev.sum,prevCnt:prev.cnt};
}
function streakOf(orders,L,now=Date.now()){
  const S=L.streak;if(!S.on)return{on:false,list:[],ready:false};
  const sorted=orders.filter(live).sort((a,b)=>a.createdAt-b.createdAt);
  const lastUsed=sorted.filter(o=>o.streakUsed).pop();
  const list=sorted.filter(o=>o.s>=S.min&&o.createdAt>now-S.days*DAY&&(!lastUsed||o.createdAt>lastUsed.createdAt)&&!o.streakUsed).slice(-S.need);
  const ready=list.length>=S.need;
  const leftDays=list.length?Math.max(1,Math.ceil((list[0].createdAt+S.days*DAY-now)/DAY)):0;
  return{on:true,list,ready,leftDays};
}
function pawsOf(acc,now=Date.now()){
  if(!acc)return{main:0,welcome:0,burnAt:null,welcomeUntil:null};
  const main=acc.pawsExpire&&now>acc.pawsExpire?0:(acc.paws||0);
  const welcome=acc.welcomeUntil&&now<acc.welcomeUntil?(acc.welcomePaws||0):0;
  return{main,welcome,burnAt:main?acc.pawsExpire:null,welcomeUntil:welcome?acc.welcomeUntil:null};
}
function isBirthday(acc){return !!(acc&&acc.birthday&&acc.birthday.slice(5)===sakh().md)}
function calcOrder({s,orders,acc,cfg,usePaws,type}){
  const L=cfg.loyalty,D=cfg.delivery,lev=levelOf(orders,L),st=streakOf(orders,L);
  const streakPct=st.ready&&s>=L.streak.min?L.streak.pct:0;
  const pct=Math.max(streakPct,lev.lv.disc||0);
  const discName=pct?(streakPct>=(lev.lv.disc||0)?"«Неделя Берлоги»":lev.lv.name):"";
  const disc=Math.round(s*pct/100),after=s-disc;
  const pw=pawsOf(acc);
  const welcomeOk=L.welcome.on&&pw.welcome&&s>=L.welcome.minOrder;
  const pool=pw.main+(welcomeOk?pw.welcome:0);
  let blocked="";
  if(!acc)blocked="Войдите, чтобы копить и тратить лапки";
  else if(s<L.pawMinOrder)blocked=`Лапками можно платить в заказе от ${rub(L.pawMinOrder)}`;
  else if(pct&&!L.pawsWithDiscount)blocked="Лапки не тратятся, когда работает скидка";
  const pawsMax=blocked?0:Math.min(pool,Math.floor(after*L.pawShare/100));
  const paws=usePaws?pawsMax:0;
  const welcomeUsed=Math.min(paws,welcomeOk?pw.welcome:0);
  const fee=type==="pickup"||s>=D.freeFrom?0:D.fee;
  const gift=L.gift.on&&s>=L.gift.from;
  const nth=L.nth.on&&acc&&(orders.filter(live).length+1)%L.nth.every===0;
  const bday=L.birthday.on&&isBirthday(acc);
  const earn=acc?Math.round((after-paws)*(lev.lv.cash||0)/100*(bday?L.birthday.mult:1)):0;
  return{s,pct,discName,disc,after,pool,pawsMax,paws,welcomeUsed,blocked,fee,gift,nth,bday,earn,total:after-paws+fee,lev,st,streakUsed:!!streakPct&&discName==="«Неделя Берлоги»"};
}

/* ---------- аккаунты: строгая привязка по ID Telegram / MAX и по номеру ---------- */
const accKey=phone=>"ph_"+phoneDigits(phone);
async function findAccountByLink(platform,pid){const l=await Store.get(`links/${platform}_${pid}`);return l&&l.acc?await Store.get(`customers/${l.acc}`):null}
async function linkAccount(acc,platform,pid){
  const doc=await Store.get(`customers/${acc}`);if(!doc)return null;
  doc.links=doc.links||{};doc.links[platform]=String(pid);
  await Store.set(`customers/${acc}`,doc);
  await Store.set(`links/${platform}_${pid}`,{acc,at:Date.now()});
  return doc;
}
async function registerAccount({name,phone,birthday,refCode,platform,pid},cfg){
  const acc=accKey(phone);
  let doc=await Store.get(`customers/${acc}`);
  const fresh=!doc;
  if(!doc){
    const L=cfg.loyalty;
    doc={acc,name,phone:phoneDigits(phone),birthday:birthday||"",createdAt:Date.now(),links:{},paws:0,pawsExpire:null,
      welcomePaws:L.welcome.on?L.welcome.paws:0,welcomeUntil:L.welcome.on?Date.now()+L.welcome.days*DAY:null,
      refCode:"BL"+phoneDigits(phone).slice(-5),refBy:"",refPaid:false,ledger:[]};
    if(L.welcome.on)doc.ledger.unshift({at:Date.now(),delta:L.welcome.paws,why:`Приветственные, сгорят через ${L.welcome.days} дн.`});
    if(refCode){const r=await Store.get(`links/ref_${String(refCode).toUpperCase()}`);if(r&&r.acc&&r.acc!==acc)doc.refBy=r.acc}
  }else if(!doc.birthday&&birthday)doc.birthday=birthday;
  await Store.set(`customers/${acc}`,doc);
  if(fresh)await Store.set(`links/ref_${doc.refCode}`,{acc});
  if(platform&&pid)await linkAccount(acc,platform,pid);
  return{doc:await Store.get(`customers/${acc}`),fresh};
}
function ledgerPush(doc,entry){doc.ledger=[entry,...(doc.ledger||[])].slice(0,40)}

/* ---------- статусы заказа: начисление лапок только после доставки ---------- */
const STATUSES=[["new","Принят"],["cooking","Готовим"],["delivering","В пути"],["done","Доставлен"],["cancelled","Отменён"]];
const statusName=k=>(STATUSES.find(s=>s[0]===k)||["",k])[1];
async function setOrderStatus(orderId,status,cfg){
  const o=await Store.get(`orders/${orderId}`);if(!o||o.status===status)return o;
  o.status=status;o.statusAt={...(o.statusAt||{}),[status]:Date.now()};
  if(status==="done"&&!o.credited){
    o.credited=true;
    const doc=await Store.get(`customers/${o.acc}`);
    if(doc){
      if(o.earn>0){doc.paws=pawsOf(doc).main+o.earn;doc.pawsExpire=Date.now()+cfg.loyalty.pawLifeDays*DAY;ledgerPush(doc,{at:Date.now(),delta:o.earn,why:`Кэшбэк за заказ №${o.no}`})}
      await Store.set(`customers/${o.acc}`,doc);
      // бонус другу — только после первого доставленного заказа приглашённого
      const F=cfg.loyalty.friend;
      if(F.on&&doc.refBy&&!doc.refPaid&&o.s>=F.minOrder){
        const friend=await Store.get(`customers/${doc.refBy}`);
        if(friend){friend.paws=pawsOf(friend).main+F.paws;friend.pawsExpire=Date.now()+cfg.loyalty.pawLifeDays*DAY;ledgerPush(friend,{at:Date.now(),delta:F.paws,why:`За друга ${doc.name}`});await Store.set(`customers/${doc.refBy}`,friend)}
        doc.refPaid=true;await Store.set(`customers/${o.acc}`,doc);
      }
    }
  }
  if(status==="cancelled"&&!o.refunded&&o.paws>0){
    o.refunded=true;
    const doc=await Store.get(`customers/${o.acc}`);
    if(doc){doc.paws=pawsOf(doc).main+o.paws;doc.pawsExpire=Date.now()+cfg.loyalty.pawLifeDays*DAY;ledgerPush(doc,{at:Date.now(),delta:o.paws,why:`Возврат за отменённый №${o.no}`});await Store.set(`customers/${o.acc}`,doc)}
  }
  await Store.set(`orders/${orderId}`,o);
  return o;
}

window.BL={CATS,DEFAULT_CATALOG,DEFAULT_CONFIG,DAY,clone,merge,rub,num,plural,esc,phoneDigits,fmtPhone,sakh,toMin,fmtTime,fmtDate,fmtDT,
  Store,live,paidGoods,levelOf,streakOf,pawsOf,isBirthday,calcOrder,accKey,findAccountByLink,linkAccount,registerAccount,ledgerPush,STATUSES,statusName,setOrderStatus};
})();
