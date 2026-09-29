
document.body.style.color = '#003399';
document.body.style.backgroundImage = 'url("img/hatter.jpg")';

const hatter = document.createElement('div');
hatter.style.width = '700px';
hatter.style.maxWidth = '100%';
hatter.style.boxSizing = 'border-box';
hatter.style.padding = '20px';
hatter.style.margin = 'auto';
hatter.style.backgroundColor = '#EEEECC';


const fejlec = document.createElement('div');
fejlec.style.display = 'flex';
fejlec.style.alignItems = 'center';
fejlec.style.justifyContent = 'space-between';

const baltyuk = document.createElement('img');
baltyuk.src = 'img/tyuk_kep.gif';
fejlec.appendChild(baltyuk);

const cim = document.createElement('h1');
const cimSzoveg = document.createTextNode('A házityúk');
cim.style.textAlign = 'center';
cim.appendChild(cimSzoveg);
fejlec.appendChild(cim);

const jobbtyuk = document.createElement('img');
jobbtyuk.src = 'img/kakas_kep.gif';
fejlec.appendChild(jobbtyuk);
hatter.appendChild(fejlec);

const alcim = document.createElement('h2');
const alcimSzoveg = document.createTextNode('Háziasítás és eredete');
alcim.appendChild(alcimSzoveg);
hatter.appendChild(alcim);

const leiras = document.createElement('p');
const leirasSzoveg = document.createTextNode('A házityúk mintegy 4000 évre és több ősre vezethető vissza. A következő fajok vehettek részt a házityúk kialakulásában:');
leiras.appendChild(leirasSzoveg);
hatter.appendChild(leiras);

const lista = document.createElement('ul');
const fajok = [
  'bankiva tyúk vagy vörös dzsungeltyúk (Gallus ferrugineus)',
'ceyloni dzsungeltyúk (Gallus lafayetti)',
'szürke dzsungeltyúk (Gallus sonneratti)',
'jávai dzsungeltyúk (Gallus varius)'
];

fajok.forEach(faj => {
  const li = document.createElement('li');
  const fajSzoveg = document.createTextNode(faj);
  li.appendChild(fajSzoveg);
  lista.appendChild(li);
});

hatter.appendChild(lista);

const bekezd1 = document.createElement('p');
const bekezd1Szoveg = document.createTextNode('A kutatók érvei szerint a házityúk populációjában túl nagy a változatosság ahhoz, hogy ez egyetlen ősre legyen visszavezethető. Ezenkívül a házityúknak vannak olyan tulajdonságai, amelyek a bankivánál hiányoznak (pl. öt lábujj). Könnyű szelídíthetőségét valószínűleg a szürke dzsungeltyúknak köszönheti.');
bekezd1.appendChild(bekezd1Szoveg);
hatter.appendChild(bekezd1);

const bekezd2 = document.createElement('p');
const bekezd2Szoveg = document.createTextNode('Kotlási ideje 21 nap. Húsa kiváló, fehérjedús, zsírral átszőtt, mégis kalóriaszegény. Tojása 50-70 gramm súlyú, a többi baromfifajjal együtt mind nagyobb szerepet játszik a korszerű élelmezésben.');
bekezd2.style.marginTop = '0px';
bekezd2.appendChild(bekezd2Szoveg);
hatter.appendChild(bekezd2);

const hivatkozas = document.createElement('a');
hivatkozas.href = 'elnevezes.html';
hivatkozas.style.display = 'block';
hivatkozas.style.textAlign = 'right';
const hivatkozasSzoveg = document.createTextNode('Elnevezés');
hivatkozas.appendChild(hivatkozasSzoveg);
hatter.appendChild(hivatkozas);



document.body.appendChild(hatter);