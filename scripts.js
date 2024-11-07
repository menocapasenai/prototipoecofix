document.addEventListener('DOMContentLoaded', function () {
  const formAgendar = document.querySelector('.agendar-form');
  const formContato = document.querySelector('.contato-form');

  formAgendar.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Seu reparo foi agendado com sucesso!');
  });

  formContato.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Sua mensagem foi enviada com sucesso!');
  });
});
