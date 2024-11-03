const pokemons=[
  {
    id: 1,
    name: {
      english: "Bulbasaur",
      japanese: "フシギダネ",
      chinese: "妙蛙种子",
      french: "Bulbizarre"
    },
    type: [
      "Grass",
      "Poison"
    ],
    base: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      SpAttack: 65,
      SpDefense: 65,
      Speed: 45
    }
  },
  {
    id: 2,
    name: {
      english: "Ivysaur",
      japanese: "フシギソウ",
      chinese: "妙蛙草",
      french: "Herbizarre"
    },
    type: [
      "Grass",
      "Poison"
    ],
    base: {
      HP: 60,
      Attack: 62,
      Defense: 63,
      SpAttack: 80,
      SpDefense: 80,
      Speed: 60
    }
  },
  {
    id: 3,
    name: {
      english: "Venusaur",
      japanese: "フシギバナ",
      chinese: "妙蛙花",
      french: "Florizarre"
    },
    type: [
      "Grass",
      "Poison"
    ],
    base: {
      HP: 80,
      Attack: 82,
      Defense: 83,
      SpAttack: 100,
      SpDefense: 100,
      Speed: 80
    }
  },
  {
    id: 4,
    name: {
      english: "Charmander",
      japanese: "ヒトカゲ",
      chinese: "小火龙",
      french: "Salamèche"
    },
    type: [
      "Fire"
    ],
    base: {
      HP: 39,
      Attack: 52,
      Defense: 43,
      SpAttack: 60,
      SpDefense: 50,
      Speed: 65
    }
  },
  {
    id: 5,
    name: {
      english: "Charmeleon",
      japanese: "リザード",
      chinese: "火恐龙",
      french: "Reptincel"
    },
    type: [
      "Fire"
    ],
    base: {
      HP: 58,
      Attack: 64,
      Defense: 58,
      SpAttack: 80,
      SpDefense: 65,
      Speed: 80
    }
  },
  {
    id: 6,
    name: {
      english: "Charizard",
      japanese: "リザードン",
      chinese: "喷火龙",
      french: "Dracaufeu"
    },
    type: [
      "Fire",
      "Flying"
    ],
    base: {
      HP: 78,
      Attack: 84,
      Defense: 78,
      SpAttack: 109,
      SpDefense: 85,
      Speed: 100
    }
  },
  {
    id: 7,
    name: {
      english: "Squirtle",
      japanese: "ゼニガメ",
      chinese: "杰尼龟",
      french: "Carapuce"
    },
    type: [
      "Water"
    ],
    base: {
      HP: 44,
      Attack: 48,
      Defense: 65,
      SpAttack: 50,
      SpDefense: 64,
      Speed: 43
    }
  },
  {
    id: 8,
    name: {
      english: "Wartortle",
      japanese: "カメール",
      chinese: "卡咪龟",
      french: "Carabaffe"
    },
    type: [
      "Water"
    ],
    base: {
      HP: 59,
      Attack: 63,
      Defense: 80,
      SpAttack: 65,
      SpDefense: 80,
      Speed: 58
    }
  },
  {
    id: 9,
    name: {
      english: "Blastoise",
      japanese: "カメックス",
      chinese: "水箭龟",
      french: "Tortank"
    },
    type: [
      "Water"
    ],
    base: {
      HP: 79,
      Attack: 83,
      Defense: 100,
      SpAttack: 85,
      SpDefense: 105,
      Speed: 78
    }
  },
  {
    id: 10,
    name: {
      english: "Caterpie",
      japanese: "キャタピー",
      chinese: "绿毛虫",
      french: "Chenipan"
    },
    type: [
      "Bug"
    ],
    base: {
      HP: 45,
      Attack: 30,
      Defense: 35,
      SpAttack: 20,
      SpDefense: 20,
      Speed: 45
    }
}
];
function batalla(obj,p1,p2){
  if(Math.floor(Math.random()*2)==1){
    let aux=p2;
    p2=p1;
    p1=aux;
  }
  let p1_stat = {};
  obj.forEach(({name:{english:nombre},base:{HP,Attack}}) => {
      (p1 == nombre ? p1_stat = [HP,Attack] : "");
  });
  let p2_stat = {};
  obj.forEach(({name:{english:nombre},base:{HP,Attack}}) => {
      (p2 == nombre ? p2_stat = [HP,Attack] : "");
  });
  let todoBien = true;
  let x = 0;
  //let extra = `\n\n[ ${p1}: HP ${p1_stat[0]} ]\n[ ${p2}: HP ${p2_stat[0]} ]\n`;
  while(todoBien){
      (x == 0 ? p1_stat[0] -= p2_stat[1] : p2_stat[0] -= p1_stat[1]);
      //extra += `\n[ ${p1}: HP ${p1_stat[0]} ]\n[ ${p2}: HP ${p2_stat[0]} ]\n`;
      todoBien = (p1_stat[0]<=0 | p2_stat[0]<=0 ? false : true );
      (x < 1 ? x++ : x=0);
  }
  let winner=(p1_stat[0] > p2_stat[0] ? p1 : p2);
  let loser=(p1_stat[0] > p2_stat[0] ? p2 : p1);
  //console.log(`[ MEGA BATALLA POKEMON ]${extra}\n[ Ganador: ${winner}]`);
  return [winner,loser];
}
function contarPorTipos(obj){
  let aux = [];
  let num = [];
  obj.forEach(({type}) => {
      aux[type] = [];
      num[type] = 0;
  });
  obj.forEach(({type,name:{english:nombre}}) => {
      aux[type]+=nombre+" ";
      num[type]++;
  });
  console.log(`[ pokemons ordenados por tipo: ]\n
[ Insecto (${num["Bug"]}): ${aux["Bug"]}] 
[ Fuego (${num["Fire"]}): ${aux["Fire"]}] 
[ Fuego, Volador (${num["Fire,Flying"]}): ${aux["Fire,Flying"]}] 
[ Planta, Veneno (${num["Grass,Poison"]}): ${aux["Grass,Poison"]}] 
[ Agua (${num["Water"]}): ${aux["Water"]}]`);
  //console.log(aux);
  //return aux;
}
function carrera(obj,competitors){
  let list = [];
  competitors.forEach(player => {
    obj.forEach((objElem) => 
      (player == objElem.name.english ? list.push(objElem) : "")
    );
  });
  let place = list.sort((a,b) => (b.base.Speed - a.base.Speed));
  return place;
}
export{
  pokemons,
  batalla,
  contarPorTipos,
  carrera
}