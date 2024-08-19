import { test, expect } from 'vitest';

/**
 * Crie uma função que recebe um vetor de livros e um título de livro como argumentos e retorna o objeto do livro correspondente do vetor.
 * Se o vetor de livros não tiver um livro com o título especificado, a função deve retornar undefined.
 * @param {Livro[]} livros
 * @param {string} titulo
 * @returns {Livro|undefined}
 */
function encontrarLivro(livros: Livro[], titulo: string): Livro | undefined {
  return livros.find((livro) => livro.titulo === titulo);
}

interface Livro {
  titulo: string;
  autor: string;
  ano: number;
}

test("Deve retornar o livro com o título especificado", () => {
  const livros: Livro[] = [
    { titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997 },
    { titulo: "Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 },
    { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis", ano: 1950 },
    { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943 }
  ];
  const livro = encontrarLivro(livros, "Dom Quixote");
  expect(livro).toEqual({ titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 });
});

test("Deve retornar undefined quando não há livro com o título especificado", () => {
  const livros: Livro[] = [
    { titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997 },
    { titulo: "Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 },
    { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis", ano: 1950 }
  ];
  const livro = encontrarLivro(livros, "O Hobbit");
  expect(livro).toBeUndefined();
});

/**
 * Cria uma função que calcula a média de idades das pessoas de cada sexo.
 * @param {Pessoa[]} pessoas
 * @returns {Retorno}
 */
function calcularMediaIdadePorSexo(pessoas: Pessoa[]): Retorno {
  const somaIdades = { M: 0, F: 0 };
  const contagem = { M: 0, F: 0 };

  pessoas.forEach(pessoa => {
    somaIdades[pessoa.sexo] += pessoa.idade;
    contagem[pessoa.sexo] += 1;
  });

  return {
    M: contagem.M ? somaIdades.M / contagem.M : 0,
    F: contagem.F ? somaIdades.F / contagem.F : 0
  };
}

interface Pessoa {
  nome: string;
  idade: number;
  sexo: "M" | "F";
}

interface Retorno {
  M: number;
  F: number;
}

test("Deve retornar a média de idades das pessoas de cada sexo", () => {
  const pessoas: Pessoa[] = [
    { nome: "João", idade: 25, sexo: "M" },
    { nome: "Maria", idade: 18, sexo: "F" },
    { nome: "Pedro", idade: 32, sexo: "M" },
    { nome: "Ana", idade: 21, sexo: "F" }
  ];
  const mediaIdades = calcularMediaIdadePorSexo(pessoas);
  expect(mediaIdades).toEqual({ M: 28.5, F: 19.5 });
});

/**
 * Cria uma função que calcula a média das notas dos estudantes.
 * @param {Estudante[]} estudantes - Vetor de objetos do tipo Estudante
 * @returns {number[]} - Vetor com média do semestre de cada estudante
 */
function calcularMedia(estudantes: Estudante[]): number[] {
  return estudantes.map(estudante => 
    (estudante.notaProva * 6 + estudante.notaTrabalho * 4) / 10
  );
}

interface Estudante {
  id: number;
  nome: string;
  notaProva: number;
  notaTrabalho: number;
}

test('Deve calcular a média dos estudantes passados', () => {
  const estudantes = [
    { id: 1, nome: 'João', notaProva: 10, notaTrabalho: 10 },
    { id: 2, nome: 'Maria', notaProva: 5, notaTrabalho: 5 },
    { id: 3, nome: 'José', notaProva: 7, notaTrabalho: 7 }
  ];
  const resultado = calcularMedia(estudantes);
  expect(resultado).toEqual([10, 5, 7]);
});

/**
 * Cria uma função que retorna os números divisíveis por 8 dentro de um intervalo definido pelos parâmetros max e min, em ordem decrescente.
 * @param {number} max O valor máximo do intervalo.
 * @param {number} min O valor mínimo do intervalo.
 * @returns {number[]} - Um array com todos os números divisíveis por 8 dentro do intervalo, em ordem decrescente, ou um array vazio se não houver nenhum número divisível por 8.
 */
function divisiveisPorOitoDecrescente(max: number, min: number): number[] {
  const divisiveis = [];
  for (let i = Math.min(max, 40); i >= min; i--) {
    if (i % 8 === 0 && i < 40) {
      divisiveis.push(i);
    }
  }
  return divisiveis;
}

test('Deve retornar os números divisíveis por 8 entre 20 e 0 em ordem decrescente que forem menores que 40', () => {
  expect(divisiveisPorOitoDecrescente(20, 0)).toEqual([16, 8, 0]);
});

/**
 * Cria uma função que retorna os pontos em Y a partir de um vetor dos pontos em X da equação y = (x^3 + 2x^2 + 6x + 5) / (x^2 + 2x + 1).
 * @param {number[]} vetor Vetor de pontos em X
 * @returns {number[]} Retorna um array com os pontos em Y
 */
function resolveEquacaoProvaA(v: number[]): number[] {
  return v.map(x => (x**3 + 2*x**2 + 6*x + 5) / (x**2 + 2*x + 1));
}

test('Deve calcular corretamente os pontos em Y para os valores de X fornecidos', () => {
  expect(resolveEquacaoProvaA([0, 1, 3])).toEqual([5, 3.5, 4.25]);
});

/**
 * Cria uma função que retorna os pontos em Y a partir de um vetor dos pontos em X da equação y = (x^3 + 2x^2 + 6x + 5) / (x^3 + 2x^2 + 1).
 * @param {number[]} vetor Vetor de pontos em X
 * @returns {number[]} Retorna um array com os pontos em Y
 */
function resolveEquacaoProvaB(v: number[]): number[] {
  return v.map(x => (x**3 + 2*x**2 + 6*x + 5) / (x**3 + 2*x**2 + 1));
}

test('Deve calcular corretamente os pontos em Y para os valores de X fornecidos', () => {
  expect(resolveEquacaoProvaB([0, 1, -2])).toEqual([5, 3.5, -7]);
});

/**
 * Cria uma função que retorna os livros de uma determinada categoria.
 * Se o vetor de livros não tiver um livro da categoria especificada, a função deve retornar um vetor vazio.
 * @param {LivroCategoria[]} livros
 * @param {string} categoria
 * @returns {LivroCategoria[]}
 */
function encontrarLivrosPorCategoria(livros: LivroCategoria[], categoria: string): LivroCategoria[] {
  return livros.filter((livro) => livro.categoria === categoria);
}

interface LivroCategoria {
  titulo: string;
  autor: string;
  ano: number;
  categoria: string;
}

test("Deve retornar os livros de uma determinada categoria", () => {
  const livros: LivroCategoria[] = [
    { titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997, categoria: "fantasia" },
    { titulo: "Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, categoria: "fantasia" },
    { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis", ano: 1950, categoria: "fantasia" },
    { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605, categoria: "aventura" },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, categoria: "aventura"} 
  ]);
  ({const resultado = encontrarLivrosPorCategoria(livros, "fantasia");
  expect(resultado).toEqual([
    { titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997, categoria: "fantasia" },
    { titulo: "Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, categoria: "fantasia" },
    { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis", ano: 1950, categoria: "fantasia" }
  ]);
});

test("Deve retornar um vetor vazio se não houver livros da categoria especificada", () => {
  const livros: LivroCategoria[] = [
    { titulo: "Harry Potter", autor: "J.K. Rowling", ano: 1997, categoria: "fantasia" },
    { titulo: "Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, categoria: "fantasia" },
    { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis", ano: 1950, categoria: "fantasia" }
  ];
  const resultado = encontrarLivrosPorCategoria(livros, "aventura");
  expect(resultado).toEqual([]);
});

/**
 * Aumenta o preço de cada item em um vetor de compras de supermercado pelo fator fornecido.
 * @param {Array} items - O vetor de itens a serem aumentados.
 * @param {number} factor - O fator de aumento a ser aplicado a cada item.
 * @returns {Array} - O vetor de itens com os novos preços.
 */
function aumentarPreco(items, factor) {
  return items.map(item => item.preco * factor);
}

test('Deve retornar um vetor com os novos preços corretos', () => {
  const compras = [
    { nome: "arroz", preco: 10.0 },
    { nome: "feijão", preco: 8.0 },
    { nome: "macarrão", preco: 5.0 }
  ];
  const fator = 1.2;
  const novosPrecos = aumentarPreco(compras, fator);
  expect(novosPrecos).toEqual([12.0, 9.6, 6.0]);
});

test('Deve retornar um vetor vazio se o vetor de itens for vazio', () => {
  const compras = [];
  const fator = 1.2;
  const novosPrecos = aumentarPreco(compras, fator);
  expect(novosPrecos).toEqual([]);
});

test('Deve garantir que aumentarPreco não altera o vetor de itens original', () => {
  const compras = [
    { nome: "arroz", preco: 10.0 },
    { nome: "feijão", preco: 8.0 },
    { nome: "macarrão", preco: 5.0 }
  ];
  const fator = 1.2;
  aumentarPreco(compras, fator);
  expect(compras).toEqual([
    { nome: "arroz", preco: 10.0 },
    { nome: "feijão", preco: 8.0 },
    { nome: "macarrão", preco: 5.0 }
  ]);
});

/**
 * Retorna todos os números divisíveis por 3 dentro de um intervalo definido pelos parâmetros max e min, em ordem decrescente, que são maiores que 10.
 * @param {number} max - O valor máximo do intervalo.
 * @param {number} min - O valor mínimo do intervalo.
 * @returns {Array} - Um array com todos os números divisíveis por 3 dentro do intervalo, em ordem decrescente.
 */
function divisiveisPorTresDecrescente(max, min) {
  const divisiveis = [];
  for (let i = max; i >= min; i--) {
    if (i > 10 && i % 3 === 0) {
      divisiveis.push(i);
    }
  }
  return divisiveis;
}

test('Deve retornar os números divisíveis por 3 entre 20 e 1 em ordem decrescente que forem maiores que 10', () => {
  expect(divisiveisPorTresDecrescente(20, 1)).toEqual([18, 15, 12]);
});

test('Deve retornar os números divisíveis por 3 entre 36 e 1 em ordem decrescente que forem maiores que 10', () => {
  expect(divisiveisPorTresDecrescente(36, 1)).toEqual([36, 33, 30, 27, 24, 21, 18, 15, 12]);
});

test('Deve retornar um array vazio quando não há números divisíveis por 3 maiores que 10', () => {
  expect(divisiveisPorTresDecrescente(10, 1)).toEqual([]);
});