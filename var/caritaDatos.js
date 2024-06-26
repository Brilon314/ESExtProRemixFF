//minimos de compra
const MINIMOS = {
  "ALIMENTOS"   : 3,
  "AGUA"          : 3,
  "HIERRO"        : 8,
  "HERRAMIENTAS"  : 15,
  "ARMAS"         : 20,
  "PIEDRA"        : 6,
  "MADERA"        : 5,
  "BLOQUES"       : 10,
  "TABLAS"        : 10,
  "MITHRIL"       : 20,
  "PLATA"         : 15,
  "CRISTAL"       : 25,
  "RELIQUIAS"     : 40,
  "GEMAS"         : 20,
  "JOYAS"         : 25,
  "ORO"     : 1,
  "FAMA"      : (5000+LOCAL.getValor())/3,
  "TURNOS"        : 56000*GLOBAL.getClanCantidad()/12*GLOBAL.getClanCantidad()+1,
  "KARMA"         : 70/15*GLOBAL.getClanCantidad(),
  "MANA"          : 15
}

const MAXIMOS = {
  "ALIMENTOS"   : 3,
  "AGUA"          : 3,
  "HIERRO"        : 10,
  "HERRAMIENTAS"  : 21,
  "ARMAS"         : 28,
  "PIEDRA"        : 8,
  "MADERA"        : 6,
  "BLOQUES"       : 12,
  "TABLAS"        : 12,
  "MITHRIL"       : 28,
  "PLATA"         : 21,
  "CRISTAL"       : 37,
  "RELIQUIAS"     : 60,
  "GEMAS"         : 28,
  "JOYAS"         : 37,
  "ORO"     : 1,
  "FAMA"      : (5000+LOCAL.getValor())/3,
  "TURNOS"        : 56000*GLOBAL.getClanCantidad()/(12*GLOBAL.getClanCantidad()+1),
  "KARMA"         : 70/15*GLOBAL.getClanCantidad(),
  "MANA"          : 15
}
const CIERRE = {
  "ALIMENTOS"   : 3,
  "AGUA"          : 3,
  "HIERRO"        : 13,
  "HERRAMIENTAS"  : 20,
  "ARMAS"         : 30,
  "PIEDRA"        : 8,
  "MADERA"        : 7,
  "BLOQUES"       : 14,
  "TABLAS"        : 14,
  "MITHRIL"       : 30,
  "PLATA"         : 20,
  "CRISTAL"       : 37,
  "RELIQUIAS"     : 60,
  "GEMAS"         : 30,
  "JOYAS"         : 37,
  "ORO"     : 1.5,
  "FAMA"      : (5000+LOCAL.getValor())/3*1.5,
  "TURNOS"        : 56000*GLOBAL.getClanCantidad()/(12*GLOBAL.getClanCantidad()+1),
  "KARMA"         : 70/15*GLOBAL.getClanCantidad(),
  "MANA"          : 15
}

const PRODUCCION_BASE = {
  "torremagica"   : [75,"MANA"],
  "templo"        : [75,"KARMA"],
  "mercado"       : [620,"ORO"],
  "mercadonegro"  : [1200,"ORO"],
  "minaoro"       : [700,"ORO"],
  "minaplata"     : [85,"PLATA"],
  "minahierro"    : [130,"HIERRO"],
  "minapiedra"    : [175,"PIEDRA"],
  "minamithril"   : [62.5,"MITHRIL"],
  "aserradero"    : [237.5,"MADERA"],
  "cultivos"      : [200,"ALIMENTOS"],
  "yacimientos"   : [65,"GEMAS"],
  "pozos"         : [175,"AGUA"],
  "taller"        : [85,"HERRAMIENTAS"],
  "forjahierro"   : [80,"ARMAS"],
  "forjamithril"  : [30,"RELIQUIAS"],
  "joyeria"       : [50,"JOYAS"],
  "camaracristal" : [55,"CRISTAL"],
  "cantera"       : [105,"BLOQUES"],
  "carpinteria"   : [115,"TABLAS"],
  "monumentos"    : [1,"FAMA"],
  "acueducto"     : [200,"AGUA"],
  "almacen"       : [175,"ALIMENTOS"],
  "castillo"      : [0,"ORO"],
  "muralla"       : [0,"ORO"],
  "armeria"       : [0,"ORO"],
  "foso"          : [0,"ORO"],
  "cuartel"       : [0,"ORO"],
  "universidad"   : [0,"ORO"],
  "santuario"     : [0,"ORO"],
  "coliseo"       : [0,"ORO"],
  "burdeles"      : [0,"ORO"],
  "escuela"       : [0,"ORO"]
}

const COSTOS_INICIALES = {
  "castillo"      : {oro:4000,cantidadRecurso:200,recurso:"ARMAS"},
  "muralla"       : {oro:2500,cantidadRecurso:600,recurso:"BLOQUES"},
  "armeria"       : {oro:1200,cantidadRecurso:150,recurso:"ARMAS"},
  "foso"          : {oro:2500,cantidadRecurso:300,recurso:"HERRAMIENTAS"},
  "cuartel"       : {oro:3000,cantidadRecurso:200,recurso:"HIERRO"},
  "torremagica"   : {oro:1800,cantidadRecurso:150,recurso:"CRISTAL"},
  "universidad"   : {oro:1300,cantidadRecurso:200,recurso:"PLATA"},
  "santuario"     : {oro:700,cantidadRecurso:100,recurso:"MITHRIL"},
  "templo"        : {oro:2000,cantidadRecurso:250,recurso:"MITHRIL"},
  "mercado"       : {oro:600,cantidadRecurso:1000,recurso:"ALIMENTOS"},
  "mercadonegro"  : {oro:600,cantidadRecurso:150,recurso:"JOYAS"},
  "minaoro"       : {oro:600,cantidadRecurso:400,recurso:"MADERA"},
  "minaplata"     : {oro:700,cantidadRecurso:400,recurso:"MADERA"},
  "minahierro"    : {oro:600,cantidadRecurso:500,recurso:"MADERA"},
  "minapiedra"    : {oro:600,cantidadRecurso:400,recurso:"MADERA"},
  "minamithril"   : {oro:2000,cantidadRecurso:800,recurso:"MADERA"},
  "aserradero"    : {oro:900,cantidadRecurso:500,recurso:"ALIMENTOS"},
  "cultivos"      : {oro:500,cantidadRecurso:1200,recurso:"AGUA"},
  "yacimientos"   : {oro:800,cantidadRecurso:200,recurso:"HERRAMIENTAS"},
  "pozos"         : {oro:600,cantidadRecurso:300,recurso:"PIEDRA"},
  "taller"        : {oro:800,cantidadRecurso:200,recurso:"HIERRO"},
  "forjahierro"   : {oro:1200,cantidadRecurso:200,recurso:"HERRAMIENTAS"},
  "forjamithril"  : {oro:3000,cantidadRecurso:250,recurso:"HERRAMIENTAS"},
  "joyeria"       : {oro:1800,cantidadRecurso:200,recurso:"HERRAMIENTAS"},
  "camaracristal" : {oro:1300,cantidadRecurso:400,recurso:"PIEDRA"},
  "cantera"       : {oro:600,cantidadRecurso:200,recurso:"HERRAMIENTAS"},
  "carpinteria"   : {oro:800,cantidadRecurso:500,recurso:"MADERA"},
  "monumentos"    : {oro:1500,cantidadRecurso:300,recurso:"PIEDRA"},
  "acueducto"     : {oro:1200,cantidadRecurso:300,recurso:"BLOQUES"},
  "almacen"       : {oro:600,cantidadRecurso:250,recurso:"TABLAS"},
  "coliseo"       : {oro:1500,cantidadRecurso:400,recurso:"BLOQUES"},
  "burdeles"      : {oro:900,cantidadRecurso:300,recurso:"TABLAS"},
  "escuela"       : {oro:1500,cantidadRecurso:300,recurso:"TABLAS"}
}
const EDIFICIOS_REQUERIDOS = {
  "20": 13,
  "21": 13,
  "22": 15,
  "23": 12,
  "24": 18,
  "25": 14,
  "26": 16
}
const K_POBLACION = 1/337524.1;
function getKpobla(pobla){
  let k_pobla=1/337524.1
  return 1+pobla*k_pobla
}
const BONO_GOBIERNO = {
  "GAIA" : 
  [
    [["ALIMENTOS",3]],
    [["MANA",2]],
    [[]],
    [["MADERA",2],["TABLAS",2]],
    [["ORO",2]],
    [["FAMA",1.5]]
  ]

}