# Boas-vindas ao repositório do projeto ES6 e Testes Unitários!

Para realizar o projeto, preste atenção em cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />
  
  Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

  Lembre-se de que você pode consultar o nosso conteúdo sobre
[Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Você implementará várias funções na resolução dos requisitos propostos e/ou testes unitários para garantir que as implementações das funções estão corretas, de acordo com o que está sendo solicitado em cada enunciado.

  Nesse projeto, você será capaz de:

  - Escrever testes unitários utilizando o módulo Jest do NodeJS para verificar o correto funcionamento das funções;
  - Escrever funções de forma que elas atendam a testes já implementados;
  - Escrever testes e funções utilizando uma abordagem de desenvolvimento orientado a testes.

  ## Desenvolvimento

  - Nos testes unitários que não estão implementados, você verá o comando `fail('Teste vazio!')`, que existe propositalmente para fazer o teste falhar.

  **Esse trecho de código deve ser removido a partir do momento que você começar a escrever o teste unitário**

  Sem o `fail('Teste vazio!')` nos blocos que ainda não contém código de teste, o resultado seria um falso positivo, ou seja, a função testada passaria com sucesso mesmo sem de fato ter implementado o teste.

</details>

<details>
  <summary><strong>🗓 Data de Entrega</strong></summary><br />
  - Este projeto é individual;

  - Serão `2` dias de projeto;

  - Data de entrega para avaliação final do projeto: `25/08/2022 14:00`

</details>

# Orientações

<details>
  <summary><strong>📝 Instruções para entregar seu projeto: ES6 e Testes Unitários</strong></summary><br />

  Este repositório contém um template de uma aplicação NodeJS (observe a existência do arquivo package.json). Após clonar o projeto e instalar as dependências através do `npm install`, você não precisará realizar nenhuma configuração adicional. Todos os arquivos estritamente necessários para finalizar o projeto já estão criados, não sendo necessária a criação de outros arquivos. Você deverá completar as funções e testes unitários de forma a satisfazer os requisitos listados na seção **Requisitos do projeto**.

  As funções a serem implementadas estão dentro da pasta `src` e seus respectivos testes estão na pasta `tests`. O nome dos arquivos também segue uma ordem definida. Basicamente, os arquivos de teste possuem o nome do arquivo alvo (arquivo da funcionalidade) acrescido do nome `.spec.js`.

  Há um arquivo como `src/exemplo.js` que contém a implementação de uma função e um arquivo como `tests/exemplo.spec.js` com os testes unitários referentes à função presente no arquivo `src/exemplo.js`.

  Cada função possui um bloco de comentários em suas primeiras linhas explicando qual é o trabalho que a função deve realizar.

  **Você só deve alterar os arquivos indicados nos requisitos**, caso contrário a sua avaliação poderá ser comprometida.

  Para entregar o seu projeto você deve criar um _Pull Request_ neste repositório. Este _Pull Request_ deve conter a implementação dos arquivos solicitados na seção **Requisitos do projeto**.

  ⚠️ É importante que os seus arquivos permaneçam com os nomes fornecidos pelo projeto! Você pode adicionar outros arquivos somente se julgar necessário, mas lembre-se que novos arquivos não serão avaliados no projeto. Qualquer dúvida, procure a Pessoa Instrutora que acompanha a sua Tribo.

</details>

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - `git clone git@github.com:tryber/sd-025-b-project-js-unit-tests.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-025-b-project-js-unit-tests`

  2. Instale as dependências

  -  `npm install`

  3. Crie uma branch a partir da branch `master`
  - Verifique que você está na branch `master`
    - Exemplo: `git branch`
  - Se você não estiver na branch `master`, mude para a branch `master`
    - Exemplo: `git checkout master`
  - Agora crie uma branch para qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-js-unit-tests`

  4. Faça as alterações em qualquer uma das funções que pedem implementação. Por exemplo, a `average.js` em `src/`:

    ```javascript
    const average = () => {
      // adicione seu código aqui
    }

    module.exports = average
    ```

  5. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (deve aparecer listado o arquivo _src/nomeDoArquivo.js_ em vermelho)
  - Adicione o arquivo alterado ao _stage_ do Git
      - Exemplo:
        - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        - `git status` (deve aparecer listado o arquivo _src/nomeDoArquivo.js_ em verde)
  - Faça o `commit` inicial
      - Exemplo:
        - `git commit -m 'Inicia o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        - `git status` (deve aparecer uma mensagem tipo: _nothing to commit_ )

  6. Adicione a sua branch com o novo `commit` ao repositório remoto
  - Usando o exemplo anterior: `git push -u origin joaozinho-js-unit-tests`

7. Crie um novo `Pull Request` _(PR)_
  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-025-b-project-js-unit-tests/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-025-b-project-js-unit-tests/pulls) e confira que o seu _Pull Request_ está criado.

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />
  * ⚠️ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

  - Faça `commits` das alterações que você fizer no código regularmente

  - Lembre-se de sempre atualizar o repositório remoto após um (ou alguns) `commits` 

  - Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - em stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit -m "Ação do commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que o seu projeto está pronto para o _"Code Review"_ de colegas, faça o seguinte:

  - Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque colegas para revisão:

    - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

    - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu nome de pessoa usuária**;

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-025-b`.

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

  ⚠️ **Lembre-se de garantir que todas as _issues_ comentadas pelo Linter estão resolvidas!** ⚠️

</details>

<details>
  <summary><strong>🕵🏿 Revisando um Pull Request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

  Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

  Para poder rodar o `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

  Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Todos os requisitos do projeto serão testados **automaticamente** por meio do `Jest`.

  - Os comandos que você utilizará com mais frequência são:

    - `npm test` (executa todos os testes presentes na aplicação)
    - `npm test caminho/para/arquivo` (executa apenas os testes presentes no arquivo especificado)
     - Exemplo: `npm test tests/average.spec.js`

</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

  Ao finalizar e submeter o projeto, não se esqueça de avaliar a sua experiência preenchendo o formulário. Leva menos de 3 minutos!

  VERIFIQUE COM CUIDADO SE O LINK SE REFERE AO PROJETO CORRETO!!!

  Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

  ⚠️ **O avaliador automático não necessariamente avalia o seu projeto na ordem em que os requisitos aparecem no README, pois o objetivo dele é tornar ágil a avaliação. Portanto, ao perceber esse processo não se preocupe, ok?.**

</details>

<details>
  <summary><strong>🗂 Compartilhe seu Portfólio!</strong></summary><br />

  Você sabia que o LinkedIn é a principal rede social profissional? E que compartilhar o seu aprendizado por lá é muito importante para quem deseja construir uma carreira de sucesso?
  Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

# Requisitos Obrigatórios

⚠️ Lembre-se de que o seu projeto só será avaliado se estiver passando por **todos os _checks_** do **Linter**. Utilize o comando `npm run lint` no seu terminal para verificar os _checks_ do **Linter** 😉 ⚠️

---

### 1. Implemente a função `average`

<details>
  <summary>A função `average` recebe um array de tamanho variável e retorna a média dos valores recebidos. Caso a função receba algum valor não numérico ou um array vazio, o valor `undefined` deve ser retornado.</summary><br/> 
  
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1. O arquivo `average.spec.js` contém os testes para `average` já implementados. Implemente a função no arquivo `src/average.js` de forma que ela atenda aos testes propostos.

  **O que será testado:**

  - A função `average` deve retornar a média de seus valores ao receber um array de números;
  - A função `average` deve retornar `undefined` ao receber um array que contém valores não numéricos;
  - A função `average` deve retornar `undefined` ao receber um array vazio.

</details>

---

### 2. Implemente os casos de teste para a função `numbers`

<details>
  <summary>A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.</summary><br/> 
  
  Essa função já está implementada no arquivo `src/numbers.js`. Escreva pelo menos quatro testes para essa função para garantir que a implementação de `numbers` está correta.

  **O que será testado:**

  - A função `numbers` deve retornar `true` quando o array passado por parâmetro contém somente números.

</details>

---

### 3. Implemente a função `vqv`

<details>
  <summary>Use template literals para escrever a função `vqv` que recebe o seu nome e a sua idade e retorna o parágrafo descrito abaixo:</summary><br/>

  ```javascript
  `Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!`
  ```

  Caso a função `vqv` seja chamada sem nenhum parâmetro, o valor `undefined` deve ser retornado. O arquivo `vqv.spec.js` contém os testes para `vqv` já implementados. Implemente a função no arquivo `src/vqv.js` de forma que ela atenda aos testes propostos.

  **O que será testado**

  - `vqv` deve ser uma função;
  - A função `vqv` deve retornar dados do tipo string;
  - A função `vqv` deve retornar a frase esperada quando passados parâmetros de nome e idade;
  - A função `vqv` deve retornar `undefined` quando chamada sem parâmetro.

</details>

---

### 4. Implemente os casos de teste para a função `circle`

<details>

  <summary>A função `circle` recebe o raio de um círculo e retorna um objeto contendo as suas informações: Raio, Área e Circunferência. Se não for especificado um raio, a função retorna `undefined`.</summary></br>
  
  Essa função já está implementada no arquivo `src/circle.js`. Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  **O que será testado**

  - O teste da função `circle`, ao receber um raio, deve retornar um objeto com as informações corretas (Raio, Área e Circunferência).

</details>

---

### 5. Implemente a função `createStudent`

<details>
<summary>A função `createStudent` recebe como parâmetro um **nome**, e retorna um objeto contendo duas chaves:</summary></br>

  1. **name**, contendo o nome passado como parâmetro;
  2. **feedback**, contendo uma função que retorna a frase `"Eita pessoa boa!"` ao ser chamada.

  O arquivo `createStudent.spec.js` contém os testes para `createStudent` já implementados. Implemente a função no arquivo `src/createStudent.js` de forma que ela atenda aos testes propostos.

  **O que será testado**

  - A função `createStudent` deve retornar um objeto que contenha duas chaves: `name`, contendo o nome passado como parâmetro; e `feedback`, contendo uma função que retorna a frase `"Eita pessoa boa!"` ao ser chamada.

</details>

---

### 6. Implemente os casos de teste para a função `productDetails`

<details>
  <summary>A função `productDetails` recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos:</summary></br>

  ```javascript
  productDetails('Alcool gel', 'Máscara');
  ```

  **Retorna:**

  ```js
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
  ```

  Essa função já está implementada no arquivo `src/productDetails.js`. Escreva pelo menos cinco testes para essa função no arquivo `tests/productDetails.js` para garantir que a implementação de `productDetails` está correta.

  **O que será testado**

  - O teste da função `productDetails`, ao receber duas strings, deve retornar um array de objetos e se cada objeto contém os dados necessários.

</details>

---

### 7. Implemente as funções `calculator` e `arrayGenerator`

<details>
  <summary>A função `calculator` recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:</summary></br>
  - sum;
  - mult;
  - div;
  - sub.

  Para cada chave atribua como valor a operação correspondente à sua chave:
  - `sum:` retorna o resultado da soma dos dois números;
  - `mult:` retorna o resultado da multiplicação dos dois números;
  - `div:` retorna o resultado da divisão dos dois números;
  - `sub:` retorna o resultado da subtração dos dois números.

  Os resultados das divisões devem sempre ser arredondados para baixo.

  Parâmetros:
  - Dois números inteiros.

  Comportamento:
  ```javascript
  calculator(1, 2); // { sum: 3, mult: 2, div: 0, sub: -1 }
  ```

  Já a função `arrayGenerator` converte objetos em arrays, de chaves, valores ou ambos. Ela deve receber dois parâmetros:

  - o primeiro parâmetro deve ser uma string que indica o tipo de conversão;
  - o segundo parâmetro deve ser um objeto semelhante ao que é retornado pela função calculator que você acabou de desenvolver.

  Parâmetros:
  - Uma string que indica o tipo de conversão;
  - Um objeto no formato { sum: 3, mult: 2, div: 0, sub: -1 };

  Comportamento:
  ```javascript
  arrayGenerator('keys', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 'sum', 'mult', 'div', 'sub' ]
  arrayGenerator('values', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 3, 2, 1, 0 ]
  arrayGenerator('entries', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 1 ], [ 'sub', 0 ] ]
  ```
  O arquivo `objPlayground.spec.js` contém os testes para `calculator` e `arrayGenerator` já implementados. Implemente as funções no arquivo `src/objPlayground.js` de forma que ela atenda aos testes propostos.

  **O que será testado**

  - A função `calculator` deve retornar os valores esperados;
  - A função `arrayGenerator` deve retornar os valores esperados.

</details>

---

### 8. Implemente a função `myCounter`

<details>
  <summary>A função `myCounter` possui dois loops aninhados que inserem valores dentro de um array. Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.</summary></br>

   Corrija a função `myCounter`, sem eliminar nenhum dos loops de repetição, para que a função retorne o array correto. O arquivo `myCounter.spec.js` contém os testes para `myCounter` já implementados. Implemente a função no arquivo `src/myCounter.js` de forma que ela atenda aos testes propostos.

  **O que será testado**

  - A função `myCounter` deve retornar os dados esperados de acordo com o que está implementado no teste.

</details>

---

### 9. Implemente os casos de teste para a função `getCharacter`

<details>

  <summary>A função `getCharacter` recebe uma string que representa o nome de uma personagem e retorna um objeto contendo o seu nome, a sua classe e as suas frases.</summary></br>

  ```javascript
  getCharacter('Arya');
  ```

  **Retorna:**

  ```javascript
  {
    name: 'Arya Stark',
    class: 'Rogue',
    phrases: ['Not today', 'A girl has no name.']
  }
  ```

  Essa função já está implementada no arquivo `src/getCharacter.js`. Escreva pelo menos seis testes para essa função no arquivo `tests/getCharacter.spec.js` para garantir que a implementação de `getCharacter` está correta.

  **O que será testado**

  - O teste da função `getCharacter` ao receber uma string, deve retornar os dados esperados de acordo com a tabela apresentada no arquivo de testes.
  - O teste da função `getCharacter` ao não receber nenhum parâmetro, deve retornar `undefined`.
  - O teste da função `getCharacter` deve verificar se o parâmetro é case sensitive.

</details>

---

### 10. Implemente a função `createMenu`, bem como seus casos de teste

<details>
  <summary>Esse último requisito vai guiar você por um rico processo de Desenvolvimento Orientado a Testes ou TDD - Test Driven Development</summary></br>

  Imagine a seguinte situação: você é responsável por escrever o código do sistema de pedidos de um restaurante através do qual será possível cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto que permite:

  - Ler o menu cadastrado;
  - Fazer pedidos;
  - Verificar o que foi pedido;
  - Somar o valor da conta.

  A estrutura deste código e deste objeto já está definida e você precisa implementá-la. Você encontrará mais detalhes sobre a estrutura a ser seguida e exemplos do retorno da função no arquivo `src/restaurant.js`. 
  Você deverá se orientar através dos tópicos abaixo para garantir o bom desenvolvimento do sistema.

  **IMPORTANTE - BOAS PRÁTICAS TDD: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js`** 

  Se surgirem dúvidas, não deixe de consultar o nosso conteúdo sobre [TDD](https://app.betrybe.com/course/fundamentals/introducao-a-javascript-es6-e-testes-unitarios/primeiros-passos-em-jest/eb321d06-e126-4c84-8d7e-6134973bf081/conteudos/b02b5214-5797-436a-9c3f-aa9344361bd9/testando-em-pequenos-passos/d33319dc-ee06-4e09-97d6-4db1ac440e25?use_case=side_bar).

  1. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se a função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função.

  2. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se `'objetoRetornado.fetchMenu()'` retorna um objeto cujas chaves são somente `food` e `drink`, considerando que a função `createMenu()` foi chamada com o objeto: `{ food: {}, drink: {} }`.

  3. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se o menu passado pra função `createMenu()` é idêntico ao menu recuperado pela função `'objetoRetornado.fetchMenu()'`.

  4. No arquivo `src/restaurant.js`, crie uma função `createMenu()` que, recebendo um objeto como parâmetro, retorna esse objeto com o seguinte formato: { fetchMenu: () => objetoPassadoPorParametro }.

  5. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se `'objetoRetornado.consumption'`, após a criação do menu, retorna um array vazio.

  6. No arquivo `src/restaurant.js`, adicione ao objeto retornado por `createMenu()` uma chave `consumption` que, como valor inicial, tem um array vazio.

  7. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro (como `objetoRetornado.order('coxinha')`), tal string é adicionada ao array retornado em `objetoRetornado.consumption`.

  8. No arquivo `src/restaurant.js`, crie uma função, separada da função `createMenu()`, que, ao receber uma string como parâmetro, adiciona essa string ao array de `objetoRetornado.consumption`. Essa nova função será adicionada à chave `order`.

  9. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.

  10. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`.

  11. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`.

  12. No arquivo `src/restaurant.js`, adicione ao objeto retornado por `createMenu()` uma chave `pay` com uma função que percorre por todos os itens de `objetoRetornado.consumption`, soma o preço deles e retorna o valor somado acrescido de 10%. DICA: para isso, você precisará percorrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.

  **O que será testado**

  * A função `createMenu()` deve retornar os dados esperados.
  * O teste da função `createMenu()` deve verificar cada um dos retornos da função e se estes retornos têm o comportamento esperado.

</details>
