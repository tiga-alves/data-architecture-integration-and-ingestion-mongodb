db.produtos.insertMany([
  {
    codigo: "TNS001",
    nome: "Tênis Runner Pro",
    modelo: "Corrida",
    fabricante: "SportFlex",
    estoque: {
      'preto': {'S': 20, 'M': 30, 'L': 25},
      'branco': {'S': 15, 'M': 25, 'L': 20},
      'azul': {'S': 10, 'M': 20, 'L': 15}
    }
  },
  {
    codigo: "SCL002",
    nome: "Sapato Clássico Elegance",
    modelo: "Social",
    fabricante: "EleganceShoes",
    estoque: {
      'preto': {'S': 15, 'M': 25, 'L': 20},
      'marrom': {'S': 10, 'M': 20, 'L': 15}
    }
  },
  {
    codigo: "SNK003",
    nome: "Sneaker Urban Style",
    modelo: "Casual",
    fabricante: "StreetStyle",
    estoque: {
      'cinza': {'S': 20, 'M': 30, 'L': 25},
      'verde': {'S': 15, 'M': 25, 'L': 20},
      'vermelho': {'S': 10, 'M': 20, 'L': 15}
    }
  },
  {
    codigo: "BTN004",
    nome: "Bota Western Deluxe",
    modelo: "Country",
    fabricante: "WesternBoots",
    estoque: {
      'marrom': {'S': 15, 'M': 25, 'L': 20},
      'preto': {'S': 10, 'M': 20, 'L': 15}
    }
  },
  {
    codigo: "SND005",
    nome: "Sandália Confort Plus",
    modelo: "Anatômica",
    fabricante: "ComfortWalk",
    estoque: {
      'bege': {'S': 20, 'M': 30, 'L': 25},
      'marrom claro': {'S': 15, 'M': 25, 'L': 20}
    }
  },
  {
    codigo: "SLT006",
    nome: "Sapatilha Bailarina",
    modelo: "Casual Feminino",
    fabricante: "GlamourFeet",
    estoque: {
      'rosa': {'S': 25, 'M': 35, 'L': 20},
      'preto': {'S': 20, 'M': 30, 'L': 15},
      'dourado': {'S': 15, 'M': 25, 'L': 10}
    }
  },
  {
    codigo: "MCN007",
    nome: "Mocassim Sunset",
    modelo: "Casual Masculino",
    fabricante: "ComfortStyle",
    estoque: {
      'marrom': {'S': 20, 'M': 30, 'L': 25},
      'azul marinho': {'S': 15, 'M': 25, 'L': 20}
    }
  },
  {
    codigo: "CHN008",
    nome: "Chinelo FlipFlop",
    modelo: "Praia",
    fabricante: "SummerVibe",
    estoque: {
      'azul': {'S': 30, 'M': 40, 'L': 30},
      'verde': {'S': 25, 'M': 35, 'L': 25},
      'amarelo': {'S': 20, 'M': 30, 'L': 20}
    }
  },
  {
    codigo: "ANK009",
    nome: "Ankle Boot Rockstar",
    modelo: "Casual Feminino",
    fabricante: "RockChic",
    estoque: {
      'preto': {'S': 20, 'M': 30, 'L': 25},
      'vermelho': {'S': 15, 'M': 25, 'L': 20}
    }
  },
  {
    codigo: "ESR010",
    nome: "Espadrille Riviera",
    modelo: "Casual Unissex",
    fabricante: "BeachStyle",
    estoque: {
      'listrado azul e branco': {'S': 25, 'M': 35, 'L': 25},
      'bege': {'S': 20, 'M': 30, 'L': 20},
      'verde oliva': {'S': 15, 'M': 25, 'L': 15}
    }
  }
]);