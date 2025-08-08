/* Função para enviar a mensagem via whatsapp */
function enviarMensagem(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value
    const mensagem = document.getElementById('mensagem').value
    const email = document.getElementById('email').value
    const telefone = '5535998527737'

    const texto = `Olá, Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    window.open(url, '_blank')
}

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

const btnTopo = document.getElementById('btnTopo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    btnTopo.style.display = 'flex'; // flex pra alinhar o conteúdo
  } else {
    btnTopo.style.display = 'none';
  }
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Ajusta scroll para links internos compensando altura do header fixo
const headerOffset = 48;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault();

      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Fecha o menu mobile, caso esteja aberto
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    }
  });
});

