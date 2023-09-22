<script>
  import Big from 'big.js';

  let display = '0';
  let memory = null;
  let operator = null;

  function clear() {
    display = '0';
    memory = null;
    operator = null;
  }

  function appendDigit(digit) {
    if (display === '0') {
      display = digit;
    } else {
      display += digit;
    }
  }

  function appendDecimal() {
    if (!display.includes('.')) {
      display += '.';
    }
  }

  function setOperator(op) {
    if (memory === null) {
      memory = Big(display);
      operator = op;
      display = '0';
    } else {
      memory = calculate();
      operator = op;
      display = '0';
    }
  }

  function calculate() {
    if (memory === null || operator === null) return;

    const result = operate(memory, operator, Big(display));
    memory = null;
    operator = null;
    display = result.toString();
  }

  function operate(a, op, b) {
    switch (op) {
      case '+':
        return a.plus(b);
      case '-':
        return a.minus(b);
      case '*':
        return a.times(b);
      case '/':
        return a.div(b);
      default:
        return b;
    }
  }
</script>

<style>

  body{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
  }  

  main{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 450px;
    height: 600px;
    background-color: rgb(63, 63, 63);
  }

  h1{
    color: white;
    margin: 40px;
  }

  .calculator {
    --size: min(400px, 90vw);
    width: var(--size);
    height: var(--size);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }

  .calculator * {
    font-size: calc(var(--size) / 20);
  }

  .display {
    grid-column: span 4;
    text-align: right;
    padding: calc(var(--size) / 20);
    background-color: gray;
    color: white;
  }

  .button {
    background-color: #f5f5f5;
    padding: calc(var(--size) / 20);
  }

  .buttonFunction {
    background-color: orange;
    color: white;
    padding: calc(var(--size) / 20);
  }

  .buttonFunction:hover {
    background-color: orangered;
  }

  .button:hover {
    background-color: lightskyblue;
  }

</style>

<body>
  <main>
    <h1>
      CALCULADORA
    </h1>
    <div class="calculator">
      <div class="display">{display}</div>
      
      <button class="buttonFunction" on:click={clear}>C</button>
      <button class="buttonFunction" on:click={() => setOperator('/')}>/</button>
      <button class="buttonFunction" on:click={() => setOperator('-')}>-</button>
      <button class="buttonFunction" on:click={appendDecimal}>.</button>
      <button class="button" on:click={() => appendDigit('7')}>7</button>
      <button class="button" on:click={() => appendDigit('8')}>8</button>
      <button class="button" on:click={() => appendDigit('9')}>9</button>
      <button class="buttonFunction" on:click={() => setOperator('*')}>*</button>
      <button class="button" on:click={() => appendDigit('4')}>4</button>
      <button class="button" on:click={() => appendDigit('5')}>5</button>
      <button class="button" on:click={() => appendDigit('6')}>6</button>
      <button class="buttonFunction" on:click={() => setOperator('+')}>+</button>
      <button class="button" on:click={() => appendDigit('1')}>1</button>
      <button class="button" on:click={() => appendDigit('2')}>2</button>
      <button class="button" on:click={() => appendDigit('3')}>3</button>
      <button class="buttonFunction" on:click={calculate}>=</button>
      <button class="button" on:click={() => appendDigit('0')}>0</button>
    </div>
  </main>
</body>