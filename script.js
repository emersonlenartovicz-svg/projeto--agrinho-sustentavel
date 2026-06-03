function abrirMais(){

const novaJanela = window.open("", "_blank");

novaJanela.document.write(`
<html>
<head>
<title>Conteúdo Avançado - Agro Forte</title>

<style>

body{
font-family:Segoe UI,sans-serif;
padding:40px;
line-height:1.8;
background:#f5f8f3;
color:#333;
}

h1{
color:#2e7d32;
}

img{
width:100%;
max-width:900px;
display:block;
margin:30px auto;
border-radius:15px;
}

</style>

</head>

<body>

<h1>Conteúdo Especializado: Agro Forte</h1>

<p>
A agricultura sustentável representa uma transformação profunda na forma
de produzir alimentos. O objetivo é garantir produtividade elevada,
preservação dos recursos naturais e qualidade de vida para as futuras gerações.
</p>

<img src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1200&q=80">

<p>
Entre as principais práticas destacam-se a agricultura de precisão,
o monitoramento ambiental, a conservação do solo, a proteção das
nascentes e a recuperação de áreas degradadas.
</p>

<img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80">

<p>
A inovação tecnológica permite utilizar menos recursos naturais e obter
melhores resultados produtivos, fortalecendo o equilíbrio entre economia,
sociedade e meio ambiente.
</p>

<img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80">

<h2 style="color:#2e7d32;">
Agro Forte: O Caminho para um Futuro Sustentável
</h2>

<p>
A combinação entre conhecimento científico, responsabilidade ambiental
e inovação tecnológica cria oportunidades para que o agronegócio continue
crescendo de forma sustentável e competitiva.
</p>

</body>
</html>
`);
}