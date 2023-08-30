<script>
	let peso = 0;
	let altura = 0;
	let imc = 0;

	function calcularIMC(){
		if (peso>0 && altura>0){
			imc = (peso/ Math.pow(altura,2).toFixed(2));
		}else {
			imc = 0;
		}
	}
</script>

<body>
	<main>
		<h1>CALCULADORA IMC</h1>
		<label>
		  Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
		</label>
		<label>
		  Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
		</label>
		{#if imc>0}
			{#if imc<=18.5}
				<p>
					Seu IMC é {imc.toFixed(2)}.<br> Você está abaixo do peso!😒
				</p>
			{:else if imc>18.5 && imc<24.9}
				<p>
					Seu IMC é {imc.toFixed(2)}.<br> Você está no peso ideal, Parabéns!😁🚀
				</p>
			{:else if imc>24.9 && imc<29.9}
				<p>
					Seu IMC é {imc.toFixed(2)}.<br> Você está levemente acima do peso!😑
				</p>
			{:else if imc>29.9 && imc<34.9}
				<p>
					Seu IMC é {imc.toFixed(2)}.<br> Você está com obesidade de grau 1! 😒
				</p>
			{:else if imc>34.9 && imc<39.9}
				<p>
					Seu IMC é {imc.toFixed(2)}.<br> Você está com obesidade de grau 2! 😒
				</p>
			{:else if imc>39.9}
				<p>
					Seu IMC é {imc.toFixed(2)}.<br> Você está com obesidade de grau 3! 😒
				</p>
			{/if}
		{/if}
	</main>
	<table>
		<tr>
		  <th>Índice de IMC</th>
		  <th>Classificação</th>
		</tr>
		<tr>
		  <td>Menos de 18.5</td>
		  <td>Abaixo do peso</td>
		</tr>
		<tr>
		  <td>18.5 - 24.9</td>
		  <td>Peso normal</td>
		</tr>
		<tr>
		  <td>25.0 - 29.9</td>
		  <td>Sobrepeso</td>
		</tr>
		<tr>
		  <td>30.0 - 34.9</td>
		  <td>Obesidade grau 1</td>
		</tr>
		<tr>
		  <td>35.0 - 39.9</td>
		  <td>Obesidade grau 2</td>
		</tr>
		<tr>
		  <td>40.0 ou mais</td>
		  <td>Obesidade grau 3</td>
		</tr>
	  </table>
</body>

<style>
	body{
		display: flex;
		flex-direction: column;
      	justify-content: center;
		align-items: center;
		background-color: rgb(250, 241, 228);
	}

	main {
		padding: 10px;
		margin: 50px;
		width: 50%;
		height: 30%;
		display: grid;
      	justify-content: center;
		border-radius: 20px;

	  	font-family: sans-serif;
		color: rgb(250, 241, 228);
	  	text-align: center;
		background-color: rgb(67, 83, 52);
	}
  
	h1 {
	  font-size: 1.5rem;
	  margin-bottom: 1rem;
	}
  
	label {
	  display: block;
	  margin-bottom: 0.5rem;
	}
  
	input {
	  padding: 0.25rem;
	  border-radius: 10px;
	  text-align: center;
	}

	table {
      width: 50%;
      border-collapse: collapse;
    }
    
    th, td {
		background-color: rgb(206, 222, 189);
	  	color: rgb(67, 83, 52);
      	padding: 5px;
      	text-align: left;
      	border: 1px solid rgb(67, 83, 52);
    }
    
    th {
		color: rgb(206, 222, 189);
     	background-color: rgb(67, 83, 52);
    }
</style>