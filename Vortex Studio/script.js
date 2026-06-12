document.addEventListener("DOMContentLoaded", () => {
    
    // BANCO DE DADOS DINÂMICO PARA TELA DE DETALHES DE COMPRA DO JOGO
    const gamesDatabase = {
        "cyber-horizon": {
            title: "Cyber Horizon",
            synopsis: "Mergulhe em uma megalópole futurista controlada por mega-corporações imperdoáveis. Customizados com melhorias cibernéticas avançadas, lute por sobrevivência e controle o fluxo de informações da rede global neste RPG de mundo aberto massivo.",
            creators: "Vortex Alpha Team",
            year: "2025",
            img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&q=80"
        },
        "shadow-pulse": {
            title: "Shadow Pulse",
            synopsis: "O ápice do combate tático furtivo em arenas de ritmo acelerado 5v5. Utilize a escuridão e manipule frequências sônicas para surpreender seus inimigos antes que eles detectem seus movimentos.",
            creators: "Vortex Crimson Team",
            year: "2024",
            img: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=500&q=80"
        },
        "neon-race": {
            title: "Neon Race 2088",
            synopsis: "Corridas extremas de anti-gravidade através de pistas flutuantes banhadas em neon. Sintetize energia e acelere além da barreira do som impulsionado por uma trilha Synthwave interativa.",
            creators: "Vortex Speed division",
            year: "2025",
            img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=80"
        },
        "pixel-overlord": {
            title: "Pixel Overlord",
            synopsis: "Comande hordas de monstros e proteja sua masmorra de heróis gananciosos neste charmoso e estratégico simulador em pixel art retrô com alta profundidade tática.",
            creators: "Vortex Retro Lab",
            year: "2023",
            img: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=500&q=80"
        },
        "vortex-arena": {
            title: "Vortex Arena",
            synopsis: "O MOBA definitivo projetado para competições profissionais de eSports. Escolha entre heróis lendários com habilidades combinatórias espetaculares em batalhas de rotas dinâmicas.",
            creators: "Vortex Global Competitive",
            year: "2026",
            img: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=500&q=80"
        },
        "chrono-trigger": {
            title: "Chrono Trigger X",
            synopsis: "Uma homenagem cinematográfica aos maiores épicos de viagem no tempo. Altere o passado para reescrever o destino de civilizações em um RPG focado em escolhas morais.",
            creators: "Vortex Eastern Studios",
            year: "2024",
            img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=500&q=80"
        },
        "apex-hunter": {
            title: "Apex Hunter",
            synopsis: "A caçada mais realista do mercado de games. Gerencie fatores biológicos vitais, estude rastros complexos e domine biomas selvagens perigosos jogando sozinho ou em cooperativo.",
            creators: "Vortex Wildlands Dept.",
            year: "2024",
            img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=500&q=80"
        },
        "mecha-assault": {
            title: "Mecha Assault",
            synopsis: "Entre no cockpit de robôs mecânicos colossais totalmente customizáveis. Participe de guerras destrutivas urbanas com física realista de colisão e armamento bélico pesado.",
            creators: "Vortex Steel Core",
            year: "2025",
            img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=500&q=80"
        },
        "mythic-legends": {
            title: "Mythic Legends",
            synopsis: "Colecione divindades mitológicas e construa o baralho definitivo. Use feitiços antigos e cartas de poder dinâmicas em confrontos mentais um contra um ranqueados.",
            creators: "Vortex Card Labs",
            year: "2025",
            img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80"
        },
        "cosmic-voyager": {
            title: "Cosmic Voyager",
            synopsis: "Exploração espacial definitiva em escala galáctica procedural. Pilote naves personalizadas, faça comércio interestelar legítimo ou ataque piratas em combates espaciais intensos.",
            creators: "Vortex Horizon Line",
            year: "2025",
            img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80"
        },
        "speed-velocity": {
            title: "Speed Velocity",
            synopsis: "Sinta cada curva e o desgaste dos pneus neste simulador de automobilismo ultra-realista. Desenvolvido com feedback de pilotos profissionais e telemetria de ponta.",
            creators: "Vortex Racing Division",
            year: "2026",
            img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=500&q=80"
        },
        "dead-zone": {
            title: "Dead Zone",
            synopsis: "Um apocalipse severo onde cada recurso conta. Construa fortificações impenetráveis, faça alianças instáveis e defenda seu território de hordas mutantes infectadas.",
            creators: "Vortex Outbreak Studio",
            year: "2024",
            img: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=500&q=80"
        }
    };

    // ELEMENTOS DO MODAL DE DETALHES DO JOGO
    const gameDetailModal = document.getElementById("gameDetailModal");
    const closeDetailBtn = document.getElementById("closeDetailBtn");
    const gameCards = document.querySelectorAll(".game-card");

    const modalGameImg = document.getElementById("modalGameImg");
    const modalGameTitle = document.getElementById("modalGameTitle");
    const modalGameSynopsis = document.getElementById("modalGameSynopsis");
    const modalGameCreators = document.getElementById("modalGameCreators");
    const modalGameYear = document.getElementById("modalGameYear");

    // Abrir detalhes do jogo ao clicar no card
    gameCards.forEach(card => {
        card.addEventListener("click", () => {
            const gameId = card.getAttribute("data-id");
            const gameData = gamesDatabase[gameId];

            if(gameData) {
                modalGameImg.style.backgroundImage = `url('${gameData.img}')`;
                modalGameTitle.textContent = gameData.title;
                modalGameSynopsis.textContent = gameData.synopsis;
                modalGameCreators.textContent = gameData.creators;
                modalGameYear.textContent = gameData.year;

                gameDetailModal.classList.add("active");
                document.body.style.overflow = "hidden";
            }
        });
    });

    // Fechar Modal de Detalhes
    closeDetailBtn.addEventListener("click", () => {
        gameDetailModal.classList.remove("active");
        document.body.style.overflow = "auto";
    });

    // Evento do botão de compra interna do modal
    const purchaseHighlightBtn = document.querySelector(".purchase-highlight-btn");
    purchaseHighlightBtn.addEventListener("click", (e) => {
        e.stopPropagation(); 
        alert(`Redirecionando para o gateway seguro para adquirir ${modalGameTitle.textContent}!`);
    });

    // ELEMENTOS DO MODAL DE LOGIN ORIGINAL
    const loginModal = document.getElementById("loginModal");
    const openLoginBtn = document.getElementById("openLoginBtn");
    const closeLoginBtn = document.getElementById("closeLoginBtn");
    const loginForm = document.getElementById("loginForm");

    openLoginBtn.addEventListener("click", () => {
        loginModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    closeLoginBtn.addEventListener("click", () => {
        loginModal.classList.remove("active");
        document.body.style.overflow = "auto";
    });

    // Fechar se o usuário clicar fora de qualquer caixa de modal aberta
    window.addEventListener("click", (e) => {
        if(e.target === loginModal) {
            loginModal.classList.remove("active");
            document.body.style.overflow = "auto";
        }
        if(e.target === gameDetailModal) {
            gameDetailModal.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });

    // Login Form Submit
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); 
        const emailInput = document.getElementById("email").value;
        const passwordInput = document.getElementById("password").value;

        if(emailInput && passwordInput.length >= 6) {
            alert(`Acesso bem-sucedido! Bem-vindo de volta à Vortex Studio, ${emailInput}.`);
            loginForm.reset();
            loginModal.classList.remove("active");
            document.body.style.overflow = "auto";
        } else {
            alert("Por favor, insira credenciais válidas.");
        }
    });

    // Menu Mobile
    const mobileMenuBtn = document.getElementById("mobileMenu");
    mobileMenuBtn.addEventListener("click", () => {
        alert("Menu lateral expandido!");
    });
});