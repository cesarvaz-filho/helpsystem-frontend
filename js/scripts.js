// Simulação de banco de dados
let users = JSON.parse(localStorage.getItem('users')) || [];
let helpRequests = JSON.parse(localStorage.getItem('helpRequests')) || [];

function loginUser() {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  const user = users.find(user => user.login === login && user.password === password);

  if (user) {
    window.location.href = 'request-help.html';
  } else {
    document.getElementById('loginMessage').textContent = 'Dados incorretos ou não cadastrados';
  }
}

function register() {
  const name = document.getElementById('name').value;
  const login = document.getElementById('registerLogin').value;
  const password = document.getElementById('registerPassword').value;

  const user = { name, login, password };
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  document.getElementById('registerMessage').textContent = 'Usuário cadastrado com sucesso!';
  document.getElementById('registerForm').reset();
}

function requestHelp() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  const request = { title, description, response: null };
  helpRequests.push(request);
  localStorage.setItem('helpRequests', JSON.stringify(helpRequests));

  document.getElementById('requestMessage').textContent = 'Pedido de ajuda cadastrado com sucesso!';
  document.getElementById('helpRequestForm').reset();
}
/*
function loadRequests() {
  const container = document.getElementById('requestsContainer');
  container.innerHTML = '';

  helpRequests.forEach((request, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${request.title}</h3>
      <p>${request.description}</p>
      ${request.response ? `<p><strong>Resposta:</strong> ${request.response}</p>` : `<button onclick="showResponseForm(${index})">Responder</button>`}
      <div id="responseForm${index}" class="response-form" style="display: none;">
        <textarea id="response${index}" placeholder="Digite sua resposta"></textarea>
        <button onclick="saveResponse(${index})">Salvar Resposta</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function showResponseForm(index) {
  document.getElementById(`responseForm${index}`).style.display = 'block';
}

function saveResponse(index) {
  const response = document.getElementById(`response${index}`).value;
  helpRequests[index].response = response;
  localStorage.setItem('helpRequests', JSON.stringify(helpRequests));
  loadRequests();
}
*/

function loadRequests() {
  const container = document.getElementById('requestsContainer');
  container.innerHTML = '';

  helpRequests.forEach(request => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${request.title}</h3>
      <p>${request.description}</p>
      ${request.response ? `<p><strong>Resposta:</strong> ${request.response}</p>` : `<button onclick="showResponseForm('${request.title}', '${request.description}')">Responder</button>`}
      <div id="responseForm${request.title}" class="response-form" style="display: none;">
        <textarea id="response${request.title}" placeholder="Digite sua resposta"></textarea>
        <button onclick="saveResponse('${request.title}')">Salvar Resposta</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function showResponseForm(title, description) {
  const responseForm = document.getElementById(`responseForm${title}`);
  responseForm.style.display = 'block';
}

function saveResponse(title) {
  const response = document.getElementById(`response${title}`).value;
  const index = helpRequests.findIndex(request => request.title === title);

  if (index !== -1) {
    helpRequests[index].response = response;
    localStorage.setItem('helpRequests', JSON.stringify(helpRequests));
    loadRequests();
  }
}

// Outras funções do seu código...


function redirectToRegister() {
  window.location.href = 'register.html';
}

function redirectToLogin() {
  window.location.href = 'index.html';
}

function redirectToRequestHelp() {
  window.location.href = 'request-help.html';
}

function redirectToListRequests() {
  window.location.href = 'list-requests.html';
}

if (document.getElementById('requestsContainer')) {
  loadRequests();
}
