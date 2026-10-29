# Relatório de Desenvolvimento e Validação

## Projeto: IDE — Compartilhe o Evangelho
**Aplicação Web para Capacitação e Apoio à Evangelização Cristã**

---

### Dados de Identificação do Acadêmico
- **Nome do Aluno(a):** `[ PREENCHA COM SEU NOME COMPLETO ]`
- **Matrícula / RA:** `[ PREENCHA COM SUA MATRÍCULA ]`
- **Curso / Disciplina:** `[ PREENCHA COM O NOME DO CURSO E DISCIPLINA ]`
- **Professor(a) Orientador(a):** `[ PREENCHA COM O NOME DO PROFESSOR ]`
- **Instituição de Ensino:** `[ PREENCHA COM O NOME DA INSTITUIÇÃO ]`
- **Data de Entrega:** `[ PREENCHA COM A DATA DE APRESENTAÇÃO ]`

---

## 1. Objetivo do Projeto

O objetivo deste projeto foi conceber, arquitetar e implementar uma aplicação web completa denominada **IDE — Compartilhe o Evangelho**. A ferramenta foi desenvolvida com tecnologias puras da web (**HTML5**, **CSS3** e **JavaScript nativo**), sem frameworks ou bibliotecas de terceiros, visando capacitar indivíduos e comunidades cristãs a compartilharem a mensagem de Jesus Cristo com fundamentação bíblica, empatia, respeito às liberdades individuais e organização prática.

O aplicativo alinha-se ao princípio cristão da **Grande Comissão** (Mateus 28:19-20), fornecendo instrumentos para o aprendizado do diálogo respeitoso, geração de mensagens de esperança, memorização de versículos e gestão de ações solidárias e evangelísticas.

---

## 2. Problema Identificado

Durante a fase de levantamento de requisitos, identificou-se que muitas pessoas desejam falar sobre sua fé e oferecer conforto espiritual, porém encontram dificuldades concretas:
1. **Falta de método e segurança comunicativa:** Insegurança sobre como iniciar uma conversa sem gerar constrangimento ou debates religiosos hostis.
2. **Dificuldade de localização de textos bíblicos adequados:** Dificuldade em encontrar rapidamente passagens das Escrituras pertinentes a situações reais de dor, ansiedade, luto ou busca por sentido.
3. **Falta de planejamento e acompanhamento:** Ausência de registro organizado de ações solidárias, visitas ou conversas planejadas, dificultando a continuidade do acolhimento.
4. **Preocupação com privacidade:** Necessidade de registrar pedidos de oração de forma estritamente pessoal, sem exposição de pessoas em redes ou servidores externos.

---

## 3. Como o Google Antigravity Foi Utilizado

O **Google Antigravity** desempenhou um papel central como ambiente assistente de engenharia de software e programação em par (*pair programming*):

- **Arquitetura e Modelagem do Sistema:** Definição da divisão modular das 7 áreas funcionais do sistema, fluxo de navegação baseado em abas reativas e estrutura dos dados salvos no `localStorage`.
- **Curadoria e Redação do Conteúdo:** Seleção rigorosa de 36 versículos bíblicos autênticos em texto de domínio público (Almeida Revista e Corrigida) e criação de mais de 35 mensagens respeitosas, acolhedoras e adequadas para diferentes perfis de público (amigos, jovens, redes sociais e comunidades).
- **Design de Interface (UI/UX):** Construção da identidade visual baseada nas quatro cores solicitadas (azul-marinho, branco, bege e dourado suave), aplicando tipografia clássica, sombras sutis, cantos arredondados e suporte pleno a computadores e celulares.
- **Implementação Técnica:** Escrita de código semântico em HTML5, CSS3 moderno com Flexbox/Grid e JavaScript puro com tratamento de exceções, validação de entradas e mecanismos de cópia segura.
- **Automação de Testes e Evidências:** Criação de scripts automatizados de validação de regras de negócio e captura real de telas do aplicativo através do Google Chrome em modo *headless*.

---

## 4. Funcionalidades Implementadas

O aplicativo foi integralmente construído e dividido em 7 módulos funcionais:

### 4.1. Página Inicial (Dashboard)
- Apresentação do nome do aplicativo e lema institucional: *“Uma mensagem de esperança pode transformar uma vida.”*
- **Versículo Bíblico do Dia** gerado com referência e tema, incluindo botão para sortear novo versículo, copiar e favoritar.
- Três botões de ação rápida para direcionamento imediato aos módulos centrais.
- Cards de resumo estatístico exibindo em tempo real as quantidades de mensagens salvas, versículos favoritos, ações planejadas e ações concluídas.
- Painel dos Princípios da Evangelização Cristã baseado em 1 Pedro 3:15 (mansidão, reverência e amor).

### 4.2. Como Compartilhar o Evangelho (Guia Educativo em 5 Etapas)
1. **O Amor de Deus:** Deus como Criador amoroso (João 3:16), com exemplos de diálogo e perguntas reflexivas.
2. **O Problema do Pecado:** Explicação sensível da limitação humana (Romanos 3:23) sem julgamento acusatório.
3. **Jesus Cristo:** A reconciliação através da morte e ressurreição de Cristo (Romanos 5:8 e 1 Coríntios 15:3-4).
4. **A Resposta ao Evangelho:** A fé e o arrependimento voluntários como decisões pessoais (Romanos 10:9).
5. **A Nova Vida Cristã:** Prática do amor ao próximo, comunhão, estudo da Bíblia e oração (João 13:34-35).
- **Manual do Evangelizador Respeitoso:** 4 diretrizes claras orientando o usuário a ouvir antes de falar, respeitar integralmente quando alguém não quiser conversar sobre religião e jamais utilizar ameaças ou imposições.

### 4.3. Gerador de Mensagens Evangelísticas
- Seletor com **7 categorias de mensagens**: Evangelização de amigos, Mensagens para jovens, Mensagens de esperança, Amor de Deus, Jesus e a salvação, Redes sociais e Convite para a igreja.
- Sorteador dinâmico com mais de 35 mensagens pré-cadastradas.
- Exibição estruturada: título, texto curto e edificante, versículo relacionado com citação bíblica, sugestão prática de envio (WhatsApp, áudio, café ou stories).
- Botões para cópia imediata do texto, compartilhamento direto no WhatsApp e salvamento nos favoritos.
- Modal para visualização, cópia e exclusão de mensagens salvas nos favoritos.

### 4.4. Biblioteca de Versículos Bíblicos
- **36 passagens bíblicas reais** distribuídas em 9 temas fundamentais (Amor de Deus, Salvação em Jesus, Fé, Esperança, Perdão, Arrependimento, Vida eterna, Grande Comissão e Amor ao próximo).
- Campo de busca instantânea por palavras do texto, livro, capítulo ou tema.
- Filtros por botões (*chips*) de temas e filtro rápido "Apenas Favoritos".
- Exibição de texto, referência exata e orientação prática de aplicação na conversa.
- Ações para favoritar e copiar o versículo ou o texto com a sugestão de reflexão.

### 4.5. Planejador de Evangelização
- Formulário de cadastro com: Nome da ação, Objetivo, Data prevista, Local ou Contexto, Observações e Status (*Planejada* ou *Concluída*).
- Sugestões rápidas de preenchimento em um clique (*templates* para conversa com amigo, grupo jovem, ação social e redes sociais).
- Listagem dinâmica com filtros por status (*Todas*, *Planejadas*, *Concluídas*).
- Suporte a edição completa dos dados e exclusão com janela de confirmação.

### 4.6. Diário de Oração
- Formulário para registrar pedidos de oração com data, motivo, observações e status (*Em Oração* ou *Oração Respondida*).
- Aviso ostensivo de privacidade garantindo que os registros ficam guardados exclusivamente no navegador.
- Filtros por pedidos em andamento e orações respondidas.
- Funcionalidades de alteração de status, edição e exclusão.

### 4.7. Meu Progresso e Gestão de Dados
- Painel de métricas consolidando total de mensagens geradas, versículos favoritados, ações planejadas, ações concluídas e orações registradas/respondidas.
- Mensagem de encorajamento dinâmica com base nas atividades do usuário, sem conotação competitiva.
- Linha do tempo cronológica com o histórico das últimas atividades realizadas.
- Ferramenta de **Exportação de Backup** em arquivo JSON.
- Ferramenta de **Importação / Restauração de Backup** a partir de arquivo JSON.
- Botão para **Carregar Dados de Exemplo** (facilita demonstrações e avaliações acadêmicas).
- Botão para redefinição completa de dados locais com confirmação dupla de segurança.

---

## 5. Alterações Realizadas Durante o Desenvolvimento

Durante o processo de implementação e testes contínuos, foram realizadas as seguintes melhorias técnicas:

1. **Implementação de Deep Linking via Hash na URL:** Adicionou-se suporte a identificadores de fragmento (`#guia`, `#gerador`, `#versiculos`, `#planejador`, etc.) permitindo que links diretos abram a seção desejada, além de sincronização com os botões "Avançar" e "Voltar" do navegador.
2. **Sistema de Cópia Resiliente (Clipboard API com Fallback):** Como nem todos os navegadores ou contextos locais suportam `navigator.clipboard` de maneira irrestrita, desenvolveu-se uma função de contingência baseada em `document.execCommand('copy')`, garantindo que o usuário consiga copiar mensagens em qualquer ambiente.
3. **Ajuste de Acessibilidade e Fechamento de Modais:** Implementou-se o fechamento do modal de mensagens favoritas ao pressionar a tecla `Esc` ou ao clicar na área externa translúcida (*backdrop*).
4. **Refinamento do Design System:** Calibração dos tons de dourado suave (`#c99738` e `#f4e8cb`) e bege (`#f7f5ef`) para garantir contraste tipográfico conforme as diretrizes WCAG AA.
5. **Correção de Permissões na Geração de Telas Headless:** Na execução de testes em ambiente Windows, configurou-se diretório temporário para dados de usuário (`--user-data-dir`) e o parâmetro `--no-sandbox` do Chromium, viabilizando a gravação automática das 8 capturas de tela reais.

---

## 6. Testes Executados e Resultados

Todos os 10 testes obrigatórios estipulados no projeto foram executados por meio de script automatizado (`test_runner.js`) e validações visuais no navegador. Abaixo estão os resultados:

| # | Item de Teste | Critério de Aceitação | Resultado Obtido | Situação |
|---|---|---|---|---|
| **01** | Navegação entre todas as seções | Transição suave entre as 7 abas sem recarregar a página | Todas as abas alternam perfeitamente com atualização visual de estado | **APROVADO** |
| **02** | Seleção de categorias de mensagens | Disponibilidade das 7 categorias exigidas no seletor | Todas as 7 categorias presentes com mensagens diversificadas | **APROVADO** |
| **03** | Geração e cópia de mensagens | Seleção de mensagem completa e transferência para a área de transferência | Textos gerados contêm título, versículo, referência e sugestão; cópia confirmada via toast | **APROVADO** |
| **04** | Pesquisa e filtragem de versículos | Biblioteca com no mínimo 30 passagens, busca textual e filtros temáticos | 36 versículos reais cadastrados nos 9 temas com busca instantânea funcional | **APROVADO** |
| **05** | Salvamento e remoção de favoritos | Favoritar e desfavoritar versículos e mensagens com persistência | Alternância de favoritos imediata com feedback visual e atualização dos contadores | **APROVADO** |
| **06** | Gestão de ações evangelísticas | Cadastrar, listar, filtrar por status, editar e excluir ações | Formulário valida campos; status comuta entre planejada e concluída; exclusão com confirmação | **APROVADO** |
| **07** | Gestão de pedidos de oração | Cadastrar, alterar status para respondida, editar e excluir pedidos | Pedidos salvos privadamente; alternância de status e filtros funcionando perfeitamente | **APROVADO** |
| **08** | Persistência após atualizar a página | Manutenção integral dos dados gravados em `localStorage` | Ao atualizar a página (F5), todos os dados, favoritos e ações permanecem disponíveis | **APROVADO** |
| **09** | Validações de campos obrigatórios | Bloqueio de envio de formulários com campos essenciais vazios | Validação nativa HTML5 (`required`) e checagem em JavaScript com alertas via toast | **APROVADO** |
| **10** | Adaptação para computadores e celulares | Layout responsivo em desktop (1280px) e celular (390px) | Menus adaptativos, gaveta móvel funcional e grid flexível aprovados | **APROVADO** |

---

## 7. Conclusão

O projeto **IDE — Compartilhe o Evangelho** atingiu 100% dos objetivos propostos. Foi construída uma aplicação web autônoma, leve, esteticamente agradável e eticamente responsável, que une a tecnologia web moderna à missão cristã de acolhimento e propagação do Evangelho.

O uso exclusivo de HTML5, CSS3 e JavaScript puro garantiu portabilidade total, facilidade de manutenção e independência de infraestruturas pagas de banco de dados, mantendo a privacidade integral do usuário por meio do `localStorage`. O sistema encontra-se pronto para utilização diária por cristãos e comunidades de fé.

---

### Espaço para Anotações Pessoais do Aluno
`[ Utilize este espaço para incluir comentários sobre sua apresentação, considerações sobre a avaliação do professor ou ideias de expansão futura do projeto, tais como inclusão de novos temas ou áudios narrados dos versículos. ]`
