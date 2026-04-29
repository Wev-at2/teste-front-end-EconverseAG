export default async function handler(req, res) {
  const response = await fetch(
    'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
  );

  const data = await response.json();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}