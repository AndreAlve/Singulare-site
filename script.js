// ── CONFIG: SUBSTITUA AQUI ──
const WPP_NUMBER = '5581992905611'; // ex: 5581999999999
// ────────────────────────────

// Navbar: fica sólida ao rolar
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Menu mobile
document.getElementById('ham').addEventListener('click', () => {
    document.getElementById('mob').classList.add('open');
});

function closeMob() {
    document.getElementById('mob').classList.remove('open');
}

// Link direto do WhatsApp no botão
document.getElementById('wa-link').href = `https://wa.me/${WPP_NUMBER}`;

// Animações de entrada com IntersectionObserver
const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('vis');
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.ai').forEach(el => obs.observe(el));

// Envio do formulário de orçamento via WhatsApp
function enviar() {
    const nome = document.getElementById('f-nome').value.trim();
    const wpp = document.getElementById('f-wpp').value.trim();
    const prod = document.getElementById('f-prod').value;
    const det = document.getElementById('f-det').value.trim();

    if (!nome || !wpp || !prod) {
        alert('Preencha nome, WhatsApp e produto para continuar.');
        return;
    }

    const msg = `Olá! Tenho interesse em um orçamento 📃\n\n*Nome:* ${nome}\n*Produto:* ${prod}\n*Detalhes:* ${det || '—'}\n*Telefone:* ${wpp}`;
    const url = `https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(msg)}`;

    // Mostra mensagem de sucesso
    document.getElementById('ofrm').style.display = 'none';
    document.getElementById('suc').style.display = 'block';

    // Abre o WhatsApp após meio segundo
    setTimeout(() => window.open(url, '_blank'), 900);
}