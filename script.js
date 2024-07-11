document.getElementById('questionForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  //const userId = 1;

  /*
  fetch('https://help-system-five.vercel.app/requests', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, description, userId })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Pergunta registrada:', data);
      alert('Pergunta registrada com sucesso!');
      document.getElementById('questionForm').reset();
    })
    .catch((error) => {
      console.error('Erro ao registrar pergunta:', error);
      alert('Ocorreu um erro ao registrar a pergunta.');
    });
    */
  const requestData = {
    title,
    description,
    userId: 1
  };

  const apiUrl = 'https://help-system-five.vercel.app/requests';

  // Configuração da requisição
  const requestOptions = {
    method: 'POST', // Método HTTP
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json' // Tipo de conteúdo
      // Pode adicionar outros headers necessários aqui, como Authorization se necessário
    },
    body: JSON.stringify(requestData) // Converter objeto JavaScript para JSON
  };

  // Fazer requisição usando fetch
  fetch(apiUrl, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ao enviar requisição: ${response.statusText}`);
      }
      return response.json(); // Parse da resposta JSON
    })
    .then(data => {
      console.log('Resposta da API:', data);
      // Aqui você pode processar a resposta da API conforme necessário
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
      // Tratar erros de requisição aqui
    });

});