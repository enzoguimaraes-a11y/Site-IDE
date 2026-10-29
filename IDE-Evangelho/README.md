# IDE — Compartilhe o Evangelho

> *“Uma mensagem de esperança pode transformar uma vida.”*

O **IDE — Compartilhe o Evangelho** é uma aplicação web completa, moderna e responsiva, desenvolvida em **HTML5**, **CSS3** e **JavaScript puro (Vanilla JS)**, sem dependência de servidores ou bibliotecas externas. 

O aplicativo foi projetado para capacitar e apoiar cristãos a proclamarem a mensagem de Jesus Cristo fundamentada no amor, respeito ao próximo, verdade bíblica e responsabilidade espiritual, conforme o mandato da Grande Comissão (Mateus 28:19-20).

---

## 1. Problema que o Aplicativo Resolve

Muitos cristãos sentem no coração o desejo sincero de falar sobre sua fé e levar esperança às pessoas, mas deparam-se com barreiras práticas:
- Insegurança sobre **como iniciar uma conversa** sem parecer invasivo ou desagradável.
- Dificuldade em lembrar **passagens bíblicas adequadas** para momentos específicos (luto, ansiedade, culpa, recomeço).
- Falta de ferramentas para **estruturar mensagens digitais** com clareza para amigos, familiares e redes sociais.
- Ausência de organização para **planejar e acompanhar ações evangelísticas** comunitárias ou individuais.
- Necessidade de um espaço privado e seguro para **orar pelas pessoas e ações**.

O **IDE** resolve esse cenário integrando em um só lugar um roteiro educativo de diálogo cristão, gerador de mensagens personalizadas por público, biblioteca bíblica temática com dicas práticas de abordagem e ferramentas organizacionais de ação e oração.

---

## 2. Objetivo

Oferecer aos cristãos uma plataforma prática, ética e acolhedora para:
1. Aprender a explicar o Evangelho de modo simples, claro e bíblico.
2. Formatar e compartilhar mensagens edificantes para diferentes contextos (amigos, jovens, redes sociais, convites).
3. Consultar e memorizar versículos bíblicos de domínio público com diretrizes práticas de conversa.
4. Planejar ações evangelísticas com datas, objetivos e locais bem definidos.
5. Manter um diário de oração reservado e seguro no próprio navegador.
6. Acompanhar o progresso pessoal de forma humilde e encorajadora, sem transformar a fé em competição.

---

## 3. Tecnologias Utilizadas

- **HTML5 Semântico:** Estruturação acessível com tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), acessibilidade ARIA e formulários validados.
- **CSS3 Moderno:**
  - Paleta de cores inspiradora: Azul-marinho profundo (`#0a192f`, `#102a43`), Branco puro (`#ffffff`), Bege suave (`#f7f5ef`, `#efe9dc`) e Dourado nobre (`#c99738`, `#f4e8cb`).
  - Tipografia harmonizada: Fontes clássicas e legíveis (*Outfit*, *Cinzel* e *Lora*).
  - Layouts fluidos baseados em **CSS Grid** e **Flexbox**.
  - Sombras suaves, micro-interações, efeitos hover e cantos arredondados modernos.
  - Design 100% responsivo para computadores, tablets e smartphones (media queries e gaveta mobile).
- **JavaScript Puro (ES6+):**
  - Manipulação de DOM nativa, rápida e reativa.
  - Sistema de abas dinâmico com suporte a histórico e URLs diretas (`#hash`).
  - Banco de dados interno com mais de 35 mensagens e 36 versículos bíblicos reais.
  - Persistência de dados via API `localStorage`.
  - Sistema flutuante de alertas (*toasts*) e cópia automática para a área de transferência com fallback.
  - Exportação e importação de backups em formato JSON.

---

## 4. Funcionalidades Detalhadas

### A. Página Inicial (Dashboard)
- **Mensagem de boas-vindas** e apresentação do propósito do aplicativo.
- **Versículo Bíblico do Dia** dinâmico (com opção de sortear outros versículos, copiar e favoritar).
- **Botões de atalho rápido** para as principais ferramentas.
- **Resumo de atividades do usuário** em tempo real (mensagens salvas, versículos favoritos, ações planejadas e concluídas).
- **Painel de princípios dourados** com diretrizes de amor e sabedoria (1 Pedro 3:15).

### B. Como Compartilhar o Evangelho (Guia Educativo)
Roteiro pedagógico estruturado em **5 etapas fundamentadas na Bíblia**:
1. **O Amor de Deus:** Explicação do propósito da criação e amor incondicional (João 3:16), com sugestões de abertura de conversa e perguntas reflexivas.
2. **O Problema do Pecado:** Abordagem empática da fragilidade humana e da separação de Deus (Romanos 3:23), sem linguagem agressiva ou acusatória.
3. **Jesus Cristo:** A redenção na cruz e a vitória da ressurreição (Romanos 5:8 e 1 Coríntios 15:3-4).
4. **A Resposta ao Evangelho:** O papel do arrependimento e da fé como decisões livres e pessoais (Romanos 10:9 e Marcos 1:15).
5. **A Vida Cristã:** O discipulado prático por meio do amor fraternal, oração, comunhão na igreja e estudo da Bíblia (João 13:34-35).
- **Manual do Evangelizador Respeitoso:** 4 mandamentos éticos para nunca coagir, respeitar quando alguém não quiser conversar e tratar crenças diferentes com tolerância e amor.

### C. Gerador de Mensagens Evangelísticas
Permite criar mensagens adequadas para **7 categorias**:
- 🤝 Evangelização de amigos
- 🎒 Mensagens para jovens
- 🌱 Mensagens de esperança
- ❤️ Mensagens sobre o amor de Deus
- ✝️ Mensagens sobre Jesus e a salvação
- 📱 Mensagens para redes sociais (formatadas com hashtags e emojis)
- ⛪ Mensagens para convidar alguém à igreja
- Cada mensagem contém: **Título**, **Texto explicativo**, **Versículo e referência**, **Sugestão de como compartilhar**, botão de **Copiar Texto**, botão de **Compartilhar no WhatsApp** e botão de **Favoritar**.
- Modal de mensagens favoritas para consulta rápida e gerenciamento.

### D. Biblioteca de Versículos Bíblicos
- **36 passagens bíblicas reais** (Almeida Revista e Corrigida - domínio público).
- Organização em **9 temas centrais**: Amor de Deus, Salvação em Jesus, Fé, Esperança, Perdão, Arrependimento, Vida eterna, Grande Comissão e Amor ao próximo.
- **Barra de pesquisa em tempo real** por palavra-chave, texto ou referência (ex: "graça", "João 3:16", "paz").
- **Filtros por chips temáticos** e filtro rápido **"Apenas Favoritos"**.
- Em cada card: texto bíblico, referência, tema, guia de **"Como usar na conversa"**, botão de favoritar e botão de cópia.

### E. Planejador de Evangelização
- Cadastro completo de ações cristãs: Nome da ação, Objetivo, Data prevista, Local ou Contexto, Observações e Status inicial (*Planejada* ou *Concluída*).
- **Botões de modelos rápidos (templates)** para preenchimento em 1 clique (conversa com amigo, grupo de jovens, ação comunitária, postagem digital).
- Listagem com filtros por status (*Todas*, *Planejadas*, *Concluídas*).
- Operações completas de **Edição**, **Exclusão** e **Alternância de Status** com confirmação.

### F. Diário de Oração
- Cadastro de motivos de oração com data de início, descrição, observações e status (*Em Oração* ou *Respondida*).
- **Aviso de sigilo e privacidade:** nenhum pedido é enviado para a internet.
- Filtros para visualizar orações em andamento e orações respondidas.
- Edição e exclusão de registros.

### G. Meu Progresso e Gerenciamento de Dados
- Painel de indicadores com contagem de mensagens geradas, versículos salvos, ações planejadas/concluídas e orações respondidas.
- **Mensagem dinâmica de encorajamento cristão** de acordo com as atividades concluídas.
- **Linha do tempo de atividades recentes** com data e hora.
- **Exportação de Backup:** baixa arquivo `.json` com todos os dados locais.
- **Restauração de Backup:** importa e recarrega dados de um arquivo `.json`.
- **Carregador de dados de demonstração:** preenche o app com exemplos realistas para testes.
- **Redefinição completa de dados:** limpa o `localStorage` com dupla confirmação de segurança.

---

## 5. Instruções para Execução

O aplicativo não exige servidor web, compiladores ou instalação de dependências.

### Como Abrir:
1. Extraia os arquivos para qualquer pasta do seu computador (caso tenha recebido o arquivo compactado).
2. Dê um duplo clique no arquivo `index.html` localizado na pasta `IDE-Evangelho/`.
3. O aplicativo abrirá imediatamente no seu navegador web padrão (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari, Brave ou Opera).

### Dica de Uso no Celular:
Você pode abrir o arquivo `index.html` no navegador do celular ou hospedar os arquivos estáticos (por exemplo, no GitHub Pages ou Netlify) para utilizá-lo como um Web App em qualquer dispositivo móvel.

---

## 6. Explicação sobre o Armazenamento Local (localStorage)

O **localStorage** é uma funcionalidade nativa dos navegadores modernos que permite armazenar dados diretamente no dispositivo do usuário, sob o modelo chave-valor, sem expirar ao fechar a aba ou reiniciar o computador.

### Chaves Utilizadas no IDE:
- `ide_favorites_messages`: Guarda o array de objetos das mensagens evangelísticas salvas.
- `ide_favorites_verses`: Guarda a lista de IDs numéricos dos versículos favoritados.
- `ide_actions`: Armazena a lista de ações evangelísticas cadastradas, seus dados e status.
- `ide_prayers`: Armazena os pedidos de oração, observações e status de resposta.
- `ide_stats`: Mantém o histórico numérico de interações (ex: total de mensagens geradas).
- `ide_history`: Mantém os últimos registros de atividade com data e hora para a linha do tempo.

### Benefícios:
- **100% Privado e Seguro:** Nenhum dado pessoal ou pedido de oração sai do seu computador.
- **Funciona Offline:** Não necessita de conexão com a internet para criar, editar, listar ou filtrar ações.
- **Independente de Servidor:** Não há custos de infraestrutura ou riscos de vazamento em bancos de dados remotos.

---

## 7. Estrutura de Arquivos

```
IDE-Evangelho/
├── index.html            # Estrutura HTML5 semântica e acessível
├── style.css             # Folha de estilos CSS3 com design system e responsividade
├── script.js             # Lógica JavaScript pura, dados bíblicos e persistência
├── README.md             # Manual de utilização e visão geral do projeto
├── relatorio.md          # Relatório acadêmico detalhado do desenvolvimento
└── screenshots/          # Capturas de tela reais do aplicativo em execução
    ├── 01_inicio_desktop.png
    ├── 02_guia_desktop.png
    ├── 03_gerador_desktop.png
    ├── 04_versiculos_desktop.png
    ├── 05_planejador_desktop.png
    ├── 06_oracao_desktop.png
    ├── 07_progresso_desktop.png
    └── 08_mobile_view.png
```

---

*“Portanto, ide, ensinai todas as nações, batizando-as em nome do Pai, e do Filho, e do Espírito Santo; ensinando-as a guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até à consumação dos séculos. Amém!”* — **Mateus 28:19-20**
