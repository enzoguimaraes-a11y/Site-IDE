/**
 * ============================================================================
 * IDE — COMPARTILHE O EVANGELHO | Código JavaScript Principal
 * Desenvolvido em JavaScript puro (Vanilla JS), sem frameworks externos.
 * Armazenamento de dados: 100% no navegador via localStorage.
 * ============================================================================
 */

/* ============================================================================
   1. BANCO DE DADOS DE VERSÍCULOS BÍBLICOS (Texto de Domínio Público - ARC)
   36 Passagens bíblicas reais, organizadas por 9 temas relevantes.
   ============================================================================ */
const BIBLE_VERSES = [
  // --- TEMA 1: AMOR DE DEUS ---
  {
    id: 1,
    theme: "Amor de Deus",
    reference: "João 3:16",
    text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    howToUse: "Ideal para iniciar qualquer conversa evangelística, mostrando que o sacrifício de Jesus nasce do amor pessoal de Deus por cada ser humano."
  },
  {
    id: 2,
    theme: "Amor de Deus",
    reference: "Romanos 8:38-39",
    text: "Porque estou certo de que nem a morte, nem a vida, nem os anjos, nem os principados, nem as potestades, nem o presente, nem o porvir, nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus, nosso Senhor!",
    howToUse: "Use para confortar alguém que se sente abandonado, indigno ou com medo do futuro, lembrando que o amor divino é inabalável."
  },
  {
    id: 3,
    theme: "Amor de Deus",
    reference: "1 João 4:9-10",
    text: "Nisto se manifestou o amor de Deus para conosco: que Deus enviou seu Filho unigênito ao mundo, para que por ele vivamos. Nisto está o amor: não em que nós tenhamos amado a Deus, mas em que ele nos amou e enviou seu Filho para propiciação pelos nossos pecados.",
    howToUse: "Explique que a iniciativa do amor sempre foi de Deus. Não precisamos 'merecer' para sermos amados por Ele."
  },
  {
    id: 4,
    theme: "Amor de Deus",
    reference: "Jeremias 31:3",
    text: "De longe se me deixou ver o Senhor, dizendo: Com amor eterno te amei; também com amável benignidade te atraí.",
    howToUse: "Perfeito para conversas reflexivas com quem procura sentido e afeto duradouro na vida."
  },

  // --- TEMA 2: SALVAÇÃO EM JESUS ---
  {
    id: 5,
    theme: "Salvação em Jesus",
    reference: "Romanos 5:8",
    text: "Mas Deus prova o seu amor para conosco em que Cristo morreu por nós, sendo nós ainda pecadores.",
    howToUse: "Mostre que Cristo não esperou que nos tornássemos perfeitos para nos salvar; Ele nos amou em meio à nossa imperfeição."
  },
  {
    id: 6,
    theme: "Salvação em Jesus",
    reference: "João 14:6",
    text: "Disse-lhe Jesus: Eu sou o caminho, e a verdade, e a vida. Ninguém vem ao Pai senão por mim.",
    howToUse: "Compartilhe com humildade quando falarem sobre busca espiritual, apresentando Jesus como o mediador direto e acolhedor."
  },
  {
    id: 7,
    theme: "Salvação em Jesus",
    reference: "Atos 4:12",
    text: "E em nenhum outro há salvação, porque também debaixo do céu nenhum outro nome há, dado entre os homens, pelo qual devamos ser salvos.",
    howToUse: "Ressalte a centralidade de Jesus na história da redenção humana com reverência e serenidade."
  },
  {
    id: 8,
    theme: "Salvação em Jesus",
    reference: "Efésios 2:8-9",
    text: "Porque pela graça sois salvos, por meio da fé; e isso não vem de vós; é dom de Deus. Não vem das obras, para que ninguém se glorie.",
    howToUse: "Alivie o fardo de quem acredita que precisa 'comprar' ou conquistar a aceitação de Deus com esforço próprio."
  },

  // --- TEMA 3: FÉ ---
  {
    id: 9,
    theme: "Fé",
    reference: "Hebreus 11:1",
    text: "Ora, a fé é o firme fundamento das coisas que se esperam e a prova das coisas que se não veem.",
    howToUse: "Ajude quem tem dúvidas a entender que a fé bíblica não é irracional, mas sim uma confiança viva nas promessas de Deus."
  },
  {
    id: 10,
    theme: "Fé",
    reference: "Romanos 10:17",
    text: "De sorte que a fé é pelo ouvir, e o ouvir pela palavra de Deus.",
    howToUse: "Incentive um amigo a ler a Bíblia com você, explicando que a fé cresce à medida que conhecemos o que Deus diz."
  },
  {
    id: 11,
    theme: "Fé",
    reference: "2 Coríntios 5:7",
    text: "Porque andamos por fé e não por vista.",
    howToUse: "Estimule alguém que passa por momentos turbulentos a não se guiar apenas pelas aparências e circunstâncias difíceis."
  },
  {
    id: 12,
    theme: "Fé",
    reference: "Marcos 9:23",
    text: "E Jesus disse-lhe: Se tu podes crer; tudo é possível ao que crê.",
    howToUse: "Traga ânimo para quem enfrenta situações aparentemente impossíveis, convidando a pessoa a orar com fé."
  },

  // --- TEMA 4: ESPERANÇA ---
  {
    id: 13,
    theme: "Esperança",
    reference: "Romanos 15:13",
    text: "Ora, o Deus de esperança vos encha de todo o gozo e paz em crença, para que abundeis em esperança pela virtude do Espírito Santo.",
    howToUse: "Uma bênção linda para enviar em momentos de aflição, transmitindo oração sincera de paz interior."
  },
  {
    id: 14,
    theme: "Esperança",
    reference: "Jeremias 29:11",
    text: "Porque eu bem sei os pensamentos que penso de vós, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais.",
    howToUse: "Compartilhe com quem está ansioso sobre decisões profissionais, estudos ou família, lembrando que Deus tem planos de bem."
  },
  {
    id: 15,
    theme: "Esperança",
    reference: "Isaías 40:31",
    text: "Mas os que esperam no Senhor renovarão as suas forças e subirão com asas como águias; correrão e não se cansarão; caminharão e não se fatigarão.",
    howToUse: "Para pessoas exaustas física ou emocionalmente, reforçando que a verdadeira renovação vem da comunhão com o Senhor."
  },
  {
    id: 16,
    theme: "Esperança",
    reference: "Salmos 42:11",
    text: "Por que estás abatida, ó minha alma? E por que te perturbas dentro de mim? Espera em Deus, pois ainda o louvarei, a ele, meu auxílio e Deus meu.",
    howToUse: "Demonstre empatia com a tristeza humana: até os salmistas sentiam angústia, mas encontravam abrigo em Deus."
  },

  // --- TEMA 5: PERDÃO ---
  {
    id: 17,
    theme: "Perdão",
    reference: "1 João 1:9",
    text: "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça.",
    howToUse: "Fundamental para quem carrega culpa do passado: Deus não rejeita um coração sincero que pede perdão."
  },
  {
    id: 18,
    theme: "Perdão",
    reference: "Colossenses 3:13",
    text: "Suportando-vos uns aos outros e perdoando-vos uns aos outros, se algum tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também.",
    howToUse: "Excelente para conversas sobre relacionamentos rompidos e reconciliação familiar à luz do perdão que recebemos de Jesus."
  },
  {
    id: 19,
    theme: "Perdão",
    reference: "Salmos 103:12",
    text: "Quanto está longe o Oriente do Ocidente, assim afasta de nós as nossas transgressões.",
    howToUse: "Use a metáfora poética para ilustrar que quando Deus perdoa, Ele não fica remoendo nossos erros."
  },
  {
    id: 20,
    theme: "Perdão",
    reference: "Isaías 1:18",
    text: "Vinde, pois, e arrazoemos, diz o Senhor; ainda que os vossos pecados sejam como a escarlata, eles se tornarão brancos como a neve; ainda que sejam vermelhos como o carmesim, se tornarão como a branca lã.",
    howToUse: "Mostre o convite acolhedor de Deus para dialogar e purificar qualquer passado, por mais difícil que tenha sido."
  },

  // --- TEMA 6: ARREPENDIMENTO ---
  {
    id: 21,
    theme: "Arrependimento",
    reference: "Atos 3:19",
    text: "Arrependei-vos, pois, e convertei-vos, para que sejam apagados os vossos pecados, e venham, assim, os tempos do refrigério pela presença do Senhor.",
    howToUse: "Apresente o arrependimento não como autopunição, mas como uma virada para a luz que traz verdadeiro alívio e refrigério."
  },
  {
    id: 22,
    theme: "Arrependimento",
    reference: "2 Pedro 3:9",
    text: "O Senhor não retarda a sua promessa, ainda que alguns a têm por tardia; mas é longânimo para convosco, não querendo que alguns se percam, senão que todos venham a arrepender-se.",
    howToUse: "Ressalte a paciência e a misericórdia de Deus, que dá tempo e oportunidade para que todos se voltem a Ele."
  },
  {
    id: 23,
    theme: "Arrependimento",
    reference: "Lucas 15:7",
    text: "Digo-vos que assim haverá alegria no céu por um pecador que se arrepende, mais do que por noventa e nove justos que não necessitam de arrependimento.",
    howToUse: "Compartilhe a parábola da ovelha perdida e mostre como cada vida é preciosa e celebrada nos céus."
  },
  {
    id: 24,
    theme: "Arrependimento",
    reference: "2 Crônicas 7:14",
    text: "E se o meu povo, que se chama pelo meu nome, se humilhar, e orar, e buscar a minha face, e se desviar dos seus maus caminhos, então, eu ouvirei dos céus, e perdoarei os seus pecados, e sararei a sua terra.",
    howToUse: "Use em contextos de oração por uma nação, cidade ou comunidade que anseia por cura e renovação moral e espiritual."
  },

  // --- TEMA 7: VIDA ETERNA ---
  {
    id: 25,
    theme: "Vida eterna",
    reference: "João 10:27-28",
    text: "As minhas ovelhas ouvem a minha voz, e eu conheço-as, e elas me seguem; e dou-lhes a vida eterna, e nunca hão de perecer, e da minha mão ninguém as arrebatará.",
    howToUse: "Fale sobre a segurança e a proteção de estar sob os cuidados amorosos do Bom Pastor."
  },
  {
    id: 26,
    theme: "Vida eterna",
    reference: "João 6:47",
    text: "Na verdade, na verdade vos digo que aquele que crê em mim tem a vida eterna.",
    howToUse: "Destaque a certeza da vida eterna no presente contínuo: a comunhão com Deus começa agora e nunca terá fim."
  },
  {
    id: 27,
    theme: "Vida eterna",
    reference: "1 João 5:11-12",
    text: "E o testemunho é este: que Deus nos deu a vida eterna; e esta vida está em seu Filho. Quem tem o Filho tem a vida; quem não tem o Filho de Deus não tem a vida.",
    howToUse: "Explique que a vida eterna não é uma filosofia abstrata, mas um relacionamento pessoal e real com o Filho de Deus."
  },
  {
    id: 28,
    theme: "Vida eterna",
    reference: "Romanos 6:23",
    text: "Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna, por Cristo Jesus, nosso Senhor.",
    howToUse: "Mostre o contraste claro entre a consequência do afastamento de Deus e o presente gratuito (graça) que Ele nos concede."
  },

  // --- TEMA 8: GRANDE COMISSÃO ---
  {
    id: 29,
    theme: "Grande Comissão",
    reference: "Mateus 28:19-20",
    text: "Portanto, ide, ensinai todas as nações, batizando-as em nome do Pai, e do Filho, e do Espírito Santo; ensinando-as a guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até à consumação dos séculos. Amém!",
    howToUse: "O versículo fundamental do aplicativo. Lembra cada cristão do privilégio de compartilhar o Evangelho sob a companhia diária de Jesus."
  },
  {
    id: 30,
    theme: "Grande Comissão",
    reference: "Marcos 16:15",
    text: "E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda criatura.",
    howToUse: "Incentiva a proclamar as Boas Novas sem preconceito, alcançando a todos com a mensagem de salvação."
  },
  {
    id: 31,
    theme: "Grande Comissão",
    reference: "Atos 1:8",
    text: "Mas recebereis a virtude do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas tanto em Jerusalém como em toda a Judeia e Samaria e até aos confins da terra.",
    howToUse: "Lembre-se de que não evangelizamos na nossa própria capacidade, mas com o poder e a sabedoria do Espírito Santo."
  },
  {
    id: 32,
    theme: "Grande Comissão",
    reference: "2 Timóteo 4:2",
    text: "Que pregues a palavra, instes a tempo e fora de tempo, redarguas, repreendas, exortes, com toda a longanimidade e doutrina.",
    howToUse: "Incentiva a perseverança, lembrando que devemos compartilhar a verdade sempre com paciência (longanimidade) e amor."
  },

  // --- TEMA 9: AMOR AO PRÓXIMO ---
  {
    id: 33,
    theme: "Amor ao próximo",
    reference: "1 João 4:21",
    text: "E dele temos este mandamento: que quem ama a Deus, ame também a seu irmão.",
    howToUse: "Use para enfatizar que a fé genuína se manifesta em cuidar, ouvir e ajudar as pessoas ao nosso redor."
  },
  {
    id: 34,
    theme: "Amor ao próximo",
    reference: "João 13:34-35",
    text: "Um novo mandamento vos dou: Que vos ameis uns aos outros; como eu vos amei a vós, que também vós uns aos outros vos ameis. Nisto todos conhecerão que sois meus discípulos, se vos amardes uns aos outros.",
    howToUse: "O maior testemunho do cristão não são palavras difíceis, mas o amor visível e prático na convivência diária."
  },
  {
    id: 35,
    theme: "Amor ao próximo",
    reference: "Gálatas 5:14",
    text: "Porque toda a lei se cumpre numa só palavra, nesta: Amarás o teu próximo como a ti mesmo.",
    howToUse: "Mostre que a essência da mensagem de Deus resume-se no amor ao Criador e no amor prático e acolhedor a cada ser humano."
  },
  {
    id: 36,
    theme: "Amor ao próximo",
    reference: "1 Coríntios 13:4-7",
    text: "O amor é sofredor, é benigno; o amor não é invejoso; o amor não trata com leviandade, não se ensoberbece, não se porta com indecência, não busca os seus interesses, não se irrita, não suspeita mal; não folga com a injustiça, mas folga com a verdade; tudo sofre, tudo crê, tudo espera, tudo suporta.",
    howToUse: "O modelo supremo de caráter cristão. Utilize como autoavaliação e guia para dialogar com paciência e gentileza."
  }
];

/* ============================================================================
   2. BANCO DE MENSAGENS EVANGELÍSTICAS (Organizadas pelas 7 categorias)
   Mais de 35 mensagens respeitosas, acolhedoras e prontas para uso.
   ============================================================================ */
const EVANGELICAL_MESSAGES = {
  amigos: [
    {
      id: "msg_ami_1",
      categoryName: "🤝 Evangelização de amigos",
      title: "Uma amizade construída na paz e na esperança",
      body: "Oi, meu amigo! Estava aqui refletindo sobre como sou grato pela nossa amizade. Quero te dizer que tenho orado por você e pela sua família. Em momentos de correria e incertezas, o que mais tem me sustentado é saber que Deus tem um plano de cuidado e amor para a nossa vida. Se algum dia você quiser conversar, desabafar ou saber um pouco mais sobre essa paz que encontrei em Jesus, estou sempre por aqui!",
      verseText: "“O amigo ama em todos os momentos; é um irmão na adversidade.”",
      verseRef: "Provérbios 17:17",
      suggestion: "Envie no WhatsApp em um dia comum ou compartilhe enquanto tomam um café juntos."
    },
    {
      id: "msg_ami_2",
      categoryName: "🤝 Evangelização de amigos",
      title: "Você nunca está sozinho nas lutas",
      body: "Passando para te desejar um dia abençoado! Sei que a vida adulta às vezes pesa e traz preocupações que guardamos só para nós. Quero apenas te lembrar que Deus conhece cada detalhe do seu coração e nunca te deixa sozinho. Que o Senhor renove suas forças e te dê sabedoria em cada escolha.",
      verseText: "“Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.”",
      verseRef: "Isaías 41:10",
      suggestion: "Excelente para mandar quando souber que seu amigo está passando por uma semana estressante."
    },
    {
      id: "msg_ami_3",
      categoryName: "🤝 Evangelização de amigos",
      title: "O maior presente que recebi na vida",
      body: "Você já parou para pensar em como todos nós buscamos felicidade e paz interior? Durante muito tempo tentei preencher vazios com coisas passageiras, até entender o sacrifício e o amor de Jesus por mim. Essa fé transformou meu jeito de viver e me trouxe uma alegria verdadeira. Queria compartilhar isso com você porque torço muito pelo seu bem!",
      verseText: "“Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.”",
      verseRef: "João 14:27",
      suggestion: "Ideal para conversas profundas e sinceras após um momento de desabafo mútuo."
    },
    {
      id: "msg_ami_4",
      categoryName: "🤝 Evangelização de amigos",
      title: "Um recomeço sempre possível",
      body: "Amigo, às vezes a gente se cobra demais pelos erros do passado. Mas o Evangelho de Cristo nos ensina algo libertador: Deus não nos julga como os homens julgam. Em Jesus, há sempre misericórdia, perdão sincero e a oportunidade de um recomeço com paz na consciência. Lembre-se disso hoje!",
      verseText: "“As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim; novas são cada manhã; grande é a tua fidelidade.”",
      verseRef: "Lamentações 3:22-23",
      suggestion: "Compartilhe pessoalmente ou por áudio quando o amigo estiver lidando com culpa ou frustração."
    },
    {
      id: "msg_ami_5",
      categoryName: "🤝 Evangelização de amigos",
      title: "Orando por seus sonhos e projetos",
      body: "Oi! Só queria dizer que admiro seu esforço e dedicação. Coloquei seus projetos diante de Deus em minhas orações hoje. Acredito que quando entregamos nossos planos nas mãos do Criador e buscamos Sua vontade em primeiro lugar, Ele nos guia pelo melhor caminho.",
      verseText: "“Confia ao Senhor as tuas obras, e teus pensamentos serão estabelecidos.”",
      verseRef: "Provérbios 16:3",
      suggestion: "Mande no início de um novo projeto, vestibular, entrevista de emprego ou novo ciclo."
    }
  ],

  jovens: [
    {
      id: "msg_jov_1",
      categoryName: "🎒 Mensagens para jovens",
      title: "Sua identidade foi definida por Quem te criou",
      body: "Fala, pessoal! A gente vive num mundo cheio de pressão por aprovação, likes e padrões inalcançáveis. Mas a verdade é que o seu valor real não vem do que os outros pensam ou do algoritmo: vem de Deus! Você foi planejado com carinho e propósito eterno por Jesus Cristo. Não tenha medo de ser autêntico e viver uma vida que faz a diferença!",
      verseText: "“Ninguém despreze a tua mocidade; mas sê o exemplo dos fiéis, na palavra, no trato, no amor, no espírito, na fé, na pureza.”",
      verseRef: "1 Timóteo 4:12",
      suggestion: "Ótimo para compartilhar no Instagram Stories, status do WhatsApp ou em grupos de jovens."
    },
    {
      id: "msg_jov_2",
      categoryName: "🎒 Mensagens para jovens",
      title: "Cansado da ansiedade com o futuro?",
      body: "Vestibular, faculdade, carreira, relacionamentos... É muita coisa acontecendo ao mesmo tempo na juventude, né? Jesus fez um convite muito especial para quem se sente sobrecarregado: 'Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei'. Você não precisa carregar o mundo nas costas. Descanse seu coração em Deus hoje!",
      verseText: "“Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.”",
      verseRef: "Mateus 11:28",
      suggestion: "Poste com uma foto tranquila de fim de tarde ou envie em um grupo de estudos."
    },
    {
      id: "msg_jov_3",
      categoryName: "🎒 Mensagens para jovens",
      title: "Uma juventude com propósito e força",
      body: "Viver a fé cristã não é sobre uma lista de proibições chatas; é sobre encontrar a verdadeira liberdade em Jesus e viver uma vida que realmente vale a pena! Quando colocamos nossa energia e nossos dons a serviço do amor e da verdade, encontramos um significado que festa nenhuma consegue dar.",
      verseText: "“Jovens, eu vos escrevi, porque sois fortes, e a palavra de Deus está em vós, e já vencestes o maligno.”",
      verseRef: "1 João 2:14b",
      suggestion: "Compartilhe em encontros de célula, reuniões de jovens ou após um evento esportivo."
    },
    {
      id: "msg_jov_4",
      categoryName: "🎒 Mensagens para jovens",
      title: "Amizades que te aproximam do bem",
      body: "Com quem você tem caminhado? Amigos de verdade não são aqueles que só estão por perto na curtição, mas os que te incentivam a ser melhor, te apoiam nos momentos difíceis e te lembram dos valores que realmente importam. Busque conexões verdadeiras e coloque Jesus no centro de tudo!",
      verseText: "“O que anda com os sábios ficará sábio, mas o companheiro dos tolos será afligido.”",
      verseRef: "Provérbios 13:20",
      suggestion: "Envie para aquele amigo parceiro de estudos ou compartilhe num bate-papo informal."
    },
    {
      id: "msg_jov_5",
      categoryName: "🎒 Mensagens para jovens",
      title: "A coragem de nadar contra a correnteza",
      body: "É fácil seguir a multidão, mas os que marcam a história são os que têm coragem de defender a verdade, a justiça e o amor de Deus mesmo quando ninguém mais faz isso. Cristo te convida a ser luz no meio da escuridão!",
      verseText: "“E não vos conformeis com este mundo, mas transformai-vos pela renovação do vosso entendimento.”",
      verseRef: "Romanos 12:2a",
      suggestion: "Excelente para reflexão antes do início das aulas ou no início da semana."
    }
  ],

  esperanca: [
    {
      id: "msg_esp_1",
      categoryName: "🌱 Mensagens de esperança",
      title: "A tempestade não é o fim da sua história",
      body: "Mesmo nos dias mais nublados e difíceis, lembre-se: Deus continua no controle do barco. A dor que você está sentindo agora não vai durar para sempre. Há uma esperança viva reservada para você em Cristo Jesus, e Ele tem o poder de acalmar as ondas e trazer refrigério ao seu coração.",
      verseText: "“O choro pode durar uma noite, mas a alegria vem pela manhã.”",
      verseRef: "Salmos 30:5b",
      suggestion: "Mande em mensagem privada para alguém que esteja enfrentando luto, perda ou desânimo."
    },
    {
      id: "msg_esp_2",
      categoryName: "🌱 Mensagens de esperança",
      title: "Deus cuida de você nos mínimos detalhes",
      body: "Se o Senhor alimenta os pássaros do céu e veste os lírios do campo com tanta perfeição, quanto mais Ele cuidará de você, que é Sua criação tão amada! Entregue suas angústias em oração. Respire fundo: você está guardado debaixo das asas do Todo-Poderoso.",
      verseText: "“Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.”",
      verseRef: "1 Pedro 5:7",
      suggestion: "Envie no comecinho da manhã para trazer paz e confiança ao dia de alguém."
    },
    {
      id: "msg_esp_3",
      categoryName: "🌱 Mensagens de esperança",
      title: "Uma âncora firme para a alma",
      body: "Em um mundo onde as coisas mudam tão rápido e nada parece seguro, temos uma esperança que funciona como âncora: o amor fiel e as promessas eternas de Jesus. Segure-se firme nessa promessa; Ele nunca desaponta quem Nele confia.",
      verseText: "“A qual temos como âncora da alma, segura e firme.”",
      verseRef: "Hebreus 6:19a",
      suggestion: "Compartilhe como texto de encorajamento ou legenda inspiradora."
    },
    {
      id: "msg_esp_4",
      categoryName: "🌱 Mensagens de esperança",
      title: "Renovo para quem está sem forças",
      body: "Quando você achar que não aguenta mais dar nenhum passo, peça socorro a Deus. A força d'Ele se aperfeiçoa na nossa fraqueza. Não tente resolver tudo sozinho. Deixe a graça de Cristo sustentar seu coração hoje.",
      verseText: "“E disse-me: A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza.”",
      verseRef: "2 Coríntios 12:9a",
      suggestion: "Mande acompanhado de uma palavra de carinho e uma oferta sincera de ajuda prática."
    },
    {
      id: "msg_esp_5",
      categoryName: "🌱 Mensagens de esperança",
      title: "A paz que excede todo o entendimento",
      body: "Existe uma paz que não depende de a conta bancária estar cheia ou de tudo estar perfeito ao redor. É a paz de Cristo, que guarda nosso coração e mente em qualquer situação. Que essa paz inunde sua casa e sua mente hoje!",
      verseText: "“E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus.”",
      verseRef: "Filipenses 4:7",
      suggestion: "Compartilhe no final da noite como uma mensagem de descanso e tranquilidade."
    }
  ],

  amor_deus: [
    {
      id: "msg_amo_1",
      categoryName: "❤️ Mensagens sobre o amor de Deus",
      title: "Você é amado de forma incondicional",
      body: "Você já percebeu como o mundo vive cobrando que a gente atinja metas para ter valor? Com Deus é completamente diferente: Ele te ama não pelo que você faz, mas por quem Ele é. O amor divino é paciente, perdoador e constante. Nada neste mundo pode diminuir o carinho que Deus sente por você!",
      verseText: "“Com amor eterno te amei; também com amável benignidade te atraí.”",
      verseRef: "Jeremias 31:3",
      suggestion: "Envie para quem se sente rejeitado, desvalorizado ou com baixa autoestima."
    },
    {
      id: "msg_amo_2",
      categoryName: "❤️ Mensagens sobre o amor de Deus",
      title: "A prova suprema do amor de Jesus",
      body: "Amor verdadeiro não é apenas uma palavra bonita; é atitude e entrega. Na cruz do Calvário, Jesus provou a extensão infinita do amor de Deus por cada um de nós: Ele deu a própria vida para que tivéssemos paz e vida plena. Que esse amor encha seu coração de alegria!",
      verseText: "“Ninguém tem maior amor do que este: de dar alguém a sua vida pelos seus amigos.”",
      verseRef: "João 15:13",
      suggestion: "Ideal para refletir antes da Páscoa ou em conversas sobre o sentido da cruz."
    },
    {
      id: "msg_amo_3",
      categoryName: "❤️ Mensagens sobre o amor de Deus",
      title: "Um Pai que acolhe de braços abertos",
      body: "Não importa o quanto tenhamos nos distanciado ou quantas escolhas erradas tenhamos feito: quando nos voltamos para Deus com sinceridade, Ele não nos recebe com sermões duros, mas corre ao nosso encontro com abraço de Pai, como na parábola do filho pródigo. Você sempre tem um lar nos braços de Deus.",
      verseText: "“E, levantando-se, foi para seu pai; e, quando ainda estava longe, viu-o seu pai, e se moveu de íntima compaixão, e, correndo, lançou-se-lhe ao pescoço e o beijou.”",
      verseRef: "Lucas 15:20",
      suggestion: "Excelente para pessoas afastadas da fé que desejam reconciliação espiritual."
    },
    {
      id: "msg_amo_4",
      categoryName: "❤️ Mensagens sobre o amor de Deus",
      title: "O amor que expulsa todo o medo",
      body: "O medo paralisa, mas o amor de Deus liberta. Quando entendemos o quanto somos amados pelo Senhor, o medo do futuro, da solidão e do fracasso perde a força. Viva este dia com a segurança de quem é filho amado do Criador!",
      verseText: "“No amor não há temor; antes, o perfeito amor lança fora o temor.”",
      verseRef: "1 João 4:18a",
      suggestion: "Envie para acalmar um coração angustiado por incertezas ou ansiedades."
    },
    {
      id: "msg_amo_5",
      categoryName: "❤️ Mensagens sobre o amor de Deus",
      title: "Transbordando amor ao próximo",
      body: "Fomos tão abundantemente amados por Deus que agora nossa missão é transbordar esse amor para quem cruza nosso caminho: com uma palavra gentil, um gesto de generosidade e ouvidos atentos. O amor é a maior marca do discípulo de Jesus!",
      verseText: "“Amados, se Deus assim nos amou, também nós devemos amar uns aos outros.”",
      verseRef: "1 João 4:11",
      suggestion: "Compartilhe para incentivar ações de solidariedade e gentileza na comunidade."
    }
  ],

  salvacao: [
    {
      id: "msg_sal_1",
      categoryName: "✝️ Mensagens sobre Jesus e a salvação",
      title: "O presente gratuito da graça",
      body: "Você sabia que a salvação em Jesus Cristo é um presente totalmente gratuito? Muitas religiões ensinam que precisamos nos esforçar para alcançar o céu, mas o Evangelho traz a maravilhosa notícia de que Jesus já pagou todo o preço por nós na cruz. Tudo o que Deus pede é que creiamos de coração e recebamos esse presente pela fé!",
      verseText: "“Porque pela graça sois salvos, por meio da fé; e isso não vem de vós; é dom de Deus. Não vem das obras, para que ninguém se glorie.”",
      verseRef: "Efésios 2:8-9",
      suggestion: "Compartilhe com quem tem dúvidas teológicas sobre como ser aceito por Deus."
    },
    {
      id: "msg_sal_2",
      categoryName: "✝️ Mensagens sobre Jesus e a salvação",
      title: "Uma nova vida e um novo coração",
      body: "Quando entregamos nossa vida a Jesus Cristo, o passado perde o poder de nos definir. A Bíblia diz que quem está em Cristo é uma nova criatura: as coisas velhas ficaram para trás e tudo se fez novo! É a oportunidade mais linda de renascimento interior.",
      verseText: "“Assim que, se alguém está em Cristo, nova criatura é: as coisas velhas já passaram; eis que tudo se fez novo.”",
      verseRef: "2 Coríntios 5:17",
      suggestion: "Perfeito para conversas sobre recomeço, batismo ou confissão de fé."
    },
    {
      id: "msg_sal_3",
      categoryName: "✝️ Mensagens sobre Jesus e a salvação",
      title: "Jesus bate à porta do coração",
      body: "Jesus nunca arromba a porta de ninguém. Ele bate com carinho, através da consciência, de uma palavra bíblica ou do carinho de um amigo. Ele convida: 'Se alguém ouvir a minha voz e abrir a porta, entrarei em sua casa e cearei com ele'. Você gostaria de abrir essa porta hoje?",
      verseText: "“Eis que estou à porta e bato; se alguém ouvir a minha voz e abrir a porta, entrarei em sua casa e com ele cearei, e ele, comigo.”",
      verseRef: "Apocalipse 3:20",
      suggestion: "Ideal como convite respeitoso ao término de uma conversa evangelística."
    },
    {
      id: "msg_sal_4",
      categoryName: "✝️ Mensagens sobre Jesus e a salvação",
      title: "A certeza que acalma a eternidade",
      body: "A salvação não é uma dúvida ou um palpite incerto; é a segurança firmada na palavra do próprio Filho de Deus. Quem nele crê tem a vida eterna garantida. Que essa bênção traga descanso profundo para a sua alma!",
      verseText: "“Na verdade, na verdade vos digo que aquele que crê em mim tem a vida eterna.”",
      verseRef: "João 6:47",
      suggestion: "Compartilhe com quem busca respostas sobre o que acontece após a morte."
    },
    {
      id: "msg_sal_5",
      categoryName: "✝️ Mensagens sobre Jesus e a salvação",
      title: "O Caminho, a Verdade e a Vida",
      body: "Em um mar de opiniões e filosofias confusas, Jesus se apresentou com clareza amorosa: 'Eu sou o caminho, a verdade e a vida'. Ele não nos deu apenas um mapa; Ele mesmo veio para segurar nossa mão e nos conduzir ao Pai.",
      verseText: "“Disse-lhe Jesus: Eu sou o caminho, e a verdade, e a vida. Ninguém vem ao Pai senão por mim.”",
      verseRef: "João 14:6",
      suggestion: "Excelente para estudos bíblicos introdutórios ou conversas sobre espiritualidade."
    }
  ],

  redes_sociais: [
    {
      id: "msg_red_1",
      categoryName: "📱 Mensagens para redes sociais",
      title: "Lembrete de paz no seu feed ✨",
      body: "Se o seu dia começou pesado, pare um minuto, respire fundo e lembre-se: Deus está no controle de todas as coisas. Nenhuma oração sua cai no esquecimento. Confie e continue firme! 🙏📖\n\n#Fé #Esperança #JesusCristo #VersículoDoDia",
      verseText: "“Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.”",
      verseRef: "Salmos 37:5",
      suggestion: "Copie e poste no Stories com uma foto de paisagem bonita ou compartilhe no status do WhatsApp."
    },
    {
      id: "msg_red_2",
      categoryName: "📱 Mensagens para redes sociais",
      title: "Você já agradeceu a Deus hoje? 🌅",
      body: "A gratidão transforma o que temos em suficiente. Antes de focar no que ainda falta, agradeça pelo fôlego de vida, pelo pão de cada dia e pelo amor incondicional do Pai! Tenha um dia muito abençoado! 🙌✨\n\n#Gratidão #DeusÉBom #FéCristã",
      verseText: "“Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.”",
      verseRef: "1 Tessalonicenses 5:18",
      suggestion: "Excelente para postagens matinais em redes como Instagram, Threads, Facebook ou Twitter."
    },
    {
      id: "msg_red_3",
      categoryName: "📱 Mensagens para redes sociais",
      title: "Mais amor, mais empatia ❤️",
      body: "A internet precisa de mais luz e menos julgamento. Que hoje possamos usar nossas palavras para edificar, consolar e demonstrar o amor genuíno de Cristo a quem precisa. Um gesto de carinho pode salvar o dia de alguém! ✨\n\n#AmorAoPróximo #LuzDoMundo #Evangelho",
      verseText: "“Não saia da vossa boca nenhuma palavra torpe, mas só a que for boa para promover a edificação.”",
      verseRef: "Efésios 4:29a",
      suggestion: "Compartilhe como reflexão em feeds e grupos de amigos ou família."
    },
    {
      id: "msg_red_4",
      categoryName: "📱 Mensagens para redes sociais",
      title: "A graça de Deus se renovou hoje ☀️",
      body: "Um novo dia significa uma nova oportunidade dada por Deus para recomeçar, perdoar e fazer o bem. Não carregue o peso de ontem para o hoje. Receba a paz de Jesus!\n\n#NovoDia #Misericórdia #PazDeDeus",
      verseText: "“Novas são cada manhã; grande é a tua fidelidade.”",
      verseRef: "Lamentações 3:23",
      suggestion: "Perfeito para status com vídeo curto ou foto do nascer do sol."
    },
    {
      id: "msg_red_5",
      categoryName: "📱 Mensagens para redes sociais",
      title: "Deus não te esqueceu! 🕊️",
      body: "Se alguém precisa ouvir isso hoje: Deus vê as suas lágrimas silenciosas e honra a sua perseverança. Continue orando e confiando, o tempo de Deus é perfeito. Marque alguém que precisa dessa palavra hoje! 👇❤️",
      verseText: "“Ele fez tudo formoso em seu tempo.”",
      verseRef: "Eclesiastes 3:11a",
      suggestion: "Post interativo para gerar conexões e orar pelas pessoas nos comentários."
    }
  ],

  convite_igreja: [
    {
      id: "msg_con_1",
      categoryName: "⛪ Convite para a igreja",
      title: "Convite especial para um momento de paz",
      body: "Oi! Tudo bem? Lembrei de você hoje e queria te fazer um convite super especial, sem pressão alguma: neste fim de semana teremos um momento muito edificante na igreja, com louvor, oração e uma mensagem bíblica cheia de esperança. Se você estiver livre e quiser ir comigo, adoraria te receber e tomar um café depois! O que acha?",
      verseText: "“Alegrei-me quando me disseram: Vamos à Casa do Senhor!”",
      verseRef: "Salmos 122:1",
      suggestion: "Envie nas quintas ou sextas-feiras com antecedência e delicadeza pelo WhatsApp."
    },
    {
      id: "msg_con_2",
      categoryName: "⛪ Convite para a igreja",
      title: "Uma comunidade acolhedora para você",
      body: "Olá! Sei que a rotina anda corrida, mas às vezes tudo o que precisamos é parar um pouco para recarregar as energias espirituais em comunidade. Nossa igreja é um lugar simples, acolhedor e focado no amor de Jesus. Seria uma alegria imensa ter você conosco neste domingo!",
      verseText: "“Não deixando a nossa congregação, como é costume de alguns; antes, admoestando-nos uns aos outros.”",
      verseRef: "Hebreus 10:25a",
      suggestion: "Mande para amigos, vizinhos ou familiares que manifestaram desejo de conhecer uma igreja."
    },
    {
      id: "msg_con_3",
      categoryName: "⛪ Convite para a igreja",
      title: "Encontro de jovens / pequenos grupos",
      body: "Fala! Neste fim de semana vai rolar nosso encontro de jovens! É um espaço bem descontraído para bater papo, ouvir música boa, fazer amizades saudáveis e conversar sobre propósito de vida à luz da Bíblia. Vai ter lanche e todo mundo é super bem-vindo. Quer ir de carona comigo?",
      verseText: "“Oh! Quão bom e quão suave é que os irmãos vivam em união!”",
      verseRef: "Salmos 133:1",
      suggestion: "Ideal para chamar colegas de escola, faculdade ou trabalho para eventos jovens."
    },
    {
      id: "msg_con_4",
      categoryName: "⛪ Convite para a igreja",
      title: "Convite com total respeito ao seu tempo",
      body: "Oi querido(a)! Queria te convidar para o culto da nossa comunidade de fé. Gostaria muito de te apresentar meus amigos de lá. Mas fique com total liberdade para decidir, no seu tempo e se fizer sentido para você. Saiba que você é sempre bem-vindo!",
      verseText: "“Portanto, recebei-vos uns aos outros, como também Cristo nos recebeu para glória de Deus.”",
      verseRef: "Romanos 15:7",
      suggestion: "Perfeito para pessoas tímidas ou que já tiveram experiências negativas com religião no passado."
    },
    {
      id: "msg_con_5",
      categoryName: "⛪ Convite para a igreja",
      title: "Culto especial para a família",
      body: "Olá! Neste fim de semana teremos uma celebração muito especial dedicada às famílias na nossa igreja, com programação para crianças e uma mensagem de renovação e esperança. Traga sua família para estar conosco, será um privilégio acolher vocês!",
      verseText: "“Eu e a minha casa serviremos ao Senhor.”",
      verseRef: "Josué 24:15c",
      suggestion: "Convite excelente para vizinhos, tios, primos e casais amigos."
    }
  ]
};

/* ============================================================================
   3. ESTADO DA APLICAÇÃO E GERENCIAMENTO DE LOCALSTORAGE
   ============================================================================ */
const STORAGE_KEYS = {
  FAV_MESSAGES: "ide_favorites_messages",
  FAV_VERSES: "ide_favorites_verses",
  ACTIONS: "ide_actions",
  PRAYERS: "ide_prayers",
  STATS: "ide_stats",
  HISTORY: "ide_history"
};

// Objeto de estado em memória
let appState = {
  favMessages: [],
  favVerses: [],
  actions: [],
  prayers: [],
  stats: {
    messagesGenerated: 0
  },
  history: [],
  currentTab: "inicio",
  activeVerseTheme: "todos",
  verseSearchTerm: "",
  onlyFavVersesFilter: false,
  actionsFilter: "todas",
  prayersFilter: "todos",
  currentGeneratedMsg: null,
  currentDailyVerse: null
};

/* ============================================================================
   4. INICIALIZAÇÃO DA APLICAÇÃO
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  loadStateFromLocalStorage();
  initDailyVerse();
  initVersesThemeChips();
  renderVersesGrid();
  renderActionsList();
  renderPrayersList();
  renderProgressDashboard();
  updateSummaryCards();
  generateInitialMessage();
  setupEventListeners();

  // Suporte a links diretos para abas via hash (ex: #guia, #gerador, etc.)
  const hash = window.location.hash.replace("#tab-", "").replace("#", "");
  if (hash && ["inicio", "guia", "gerador", "versiculos", "planejador", "oracao", "progresso"].includes(hash)) {
    switchTab(hash);
  }
});

/**
 * Carrega todos os dados persistidos no navegador do usuário (localStorage).
 * Garante valores padrão seguros caso seja a primeira utilização.
 */
function loadStateFromLocalStorage() {
  try {
    const rawFavMsgs = localStorage.getItem(STORAGE_KEYS.FAV_MESSAGES);
    const rawFavVerses = localStorage.getItem(STORAGE_KEYS.FAV_VERSES);
    const rawActions = localStorage.getItem(STORAGE_KEYS.ACTIONS);
    const rawPrayers = localStorage.getItem(STORAGE_KEYS.PRAYERS);
    const rawStats = localStorage.getItem(STORAGE_KEYS.STATS);
    const rawHistory = localStorage.getItem(STORAGE_KEYS.HISTORY);

    if (rawFavMsgs) appState.favMessages = JSON.parse(rawFavMsgs);
    if (rawFavVerses) appState.favVerses = JSON.parse(rawFavVerses);
    if (rawActions) appState.actions = JSON.parse(rawActions);
    if (rawPrayers) appState.prayers = JSON.parse(rawPrayers);
    if (rawStats) appState.stats = JSON.parse(rawStats);
    if (rawHistory) appState.history = JSON.parse(rawHistory);

  } catch (err) {
    console.error("Erro ao carregar dados do localStorage:", err);
    showToast("Erro ao carregar dados salvos. Usando configurações padrão.", "error");
  }
}

/**
 * Salva um item específico no localStorage
 */
function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("Erro ao gravar no localStorage:", err);
    showToast("Aviso: Espaço de armazenamento local cheio ou indisponível.", "error");
  }
}

/**
 * Registra um evento na linha do tempo de histórico recente
 */
function recordActivity(text) {
  const newActivity = {
    id: "act_" + Date.now(),
    text: text,
    timestamp: new Date().toISOString()
  };
  appState.history.unshift(newActivity);
  if (appState.history.length > 25) {
    appState.history.pop();
  }
  saveToLocalStorage(STORAGE_KEYS.HISTORY, appState.history);
  renderRecentActivities();
}

/* ============================================================================
   5. NAVEGAÇÃO ENTRE ABAS E RESPONSIVIDADE
   ============================================================================ */
function switchTab(tabId) {
  appState.currentTab = tabId;

  // Atualiza hash da URL sem causar recarregamento
  if (window.location.hash !== "#" + tabId) {
    try {
      history.replaceState(null, "", "#" + tabId);
    } catch (e) {}
  }

  // Atualiza botões da navegação desktop
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
  });

  // Atualiza botões da navegação mobile
  document.querySelectorAll(".mobile-nav-item").forEach(item => {
    const isCurrent = item.getAttribute("onclick")?.includes(tabId);
    item.classList.toggle("active", !!isCurrent);
  });

  // Esconde todas as seções e exibe a selecionada
  document.querySelectorAll(".app-tab").forEach(tab => {
    tab.classList.remove("active");
  });

  const targetTab = document.getElementById(`tab-${tabId}`);
  if (targetTab) {
    targetTab.classList.add("active");
  }

  // Fecha gaveta mobile se estiver aberta
  const drawer = document.getElementById("mobileDrawer");
  if (drawer) drawer.classList.remove("open");

  // Rola suavemente para o topo do conteúdo
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Atualiza painéis específicos ao entrar na aba
  if (tabId === "progresso") {
    renderProgressDashboard();
  } else if (tabId === "inicio") {
    updateSummaryCards();
  }
}

function toggleMobileMenu() {
  const drawer = document.getElementById("mobileDrawer");
  if (drawer) {
    drawer.classList.toggle("open");
  }
}

function jumpToStep(stepId) {
  const target = document.getElementById(stepId);
  if (target) {
    // Atualiza pills de etapa
    document.querySelectorAll(".step-pill-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("onclick")?.includes(stepId));
    });
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ============================================================================
   6. FUNCIONALIDADE: PÁGINA INICIAL & VERSÍCULO DO DIA
   ============================================================================ */
function initDailyVerse() {
  // Escolhe versículo com base no dia do ano ou sorteio
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const verseIndex = dayOfYear % BIBLE_VERSES.length;
  appState.currentDailyVerse = BIBLE_VERSES[verseIndex];
  renderDailyVerse();

  // Data legível em Português
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const todayStr = new Date().toLocaleDateString('pt-BR', options);
  const dateEl = document.getElementById("dailyDateText");
  if (dateEl) dateEl.textContent = todayStr.charAt(0).toUpperCase() + todayStr.slice(1);
}

function refreshDailyVerse() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * BIBLE_VERSES.length);
  } while (BIBLE_VERSES[newIndex].id === appState.currentDailyVerse?.id && BIBLE_VERSES.length > 1);

  appState.currentDailyVerse = BIBLE_VERSES[newIndex];
  renderDailyVerse();
  showToast("Novo versículo do dia sorteado!", "success");
}

function renderDailyVerse() {
  if (!appState.currentDailyVerse) return;

  const quoteEl = document.getElementById("dailyVerseQuote");
  const refEl = document.getElementById("dailyVerseRef");
  const favBtn = document.getElementById("dailyVerseFavBtn");

  if (quoteEl) quoteEl.textContent = `“${appState.currentDailyVerse.text}”`;
  if (refEl) refEl.textContent = `${appState.currentDailyVerse.reference} • [${appState.currentDailyVerse.theme}]`;

  // Atualiza estado do botão de favorito
  const isFav = appState.favVerses.includes(appState.currentDailyVerse.id);
  if (favBtn) {
    favBtn.innerHTML = isFav 
      ? `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" width="16" height="16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> Salvo`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> Salvar`;
  }
}

function copyDailyVerse() {
  if (!appState.currentDailyVerse) return;
  const content = `“${appState.currentDailyVerse.text}” — ${appState.currentDailyVerse.reference}`;
  copyToClipboard(content, "Versículo do dia copiado com sucesso!");
}

function toggleFavoriteDailyVerse() {
  if (!appState.currentDailyVerse) return;
  toggleFavoriteVerse(appState.currentDailyVerse.id);
  renderDailyVerse();
}

function updateSummaryCards() {
  const favMsgCountEl = document.getElementById("dashFavMessagesCount");
  const favVersesCountEl = document.getElementById("dashFavVersesCount");
  const plannedCountEl = document.getElementById("dashPlannedActionsCount");
  const completedCountEl = document.getElementById("dashCompletedActionsCount");

  const planned = appState.actions.filter(a => a.status === "planejada").length;
  const completed = appState.actions.filter(a => a.status === "concluida").length;

  if (favMsgCountEl) favMsgCountEl.textContent = appState.favMessages.length;
  if (favVersesCountEl) favVersesCountEl.textContent = appState.favVerses.length;
  if (plannedCountEl) plannedCountEl.textContent = planned;
  if (completedCountEl) completedCountEl.textContent = completed;

  // Atualiza badge no gerador
  const badge = document.getElementById("savedMsgBadge");
  if (badge) badge.textContent = appState.favMessages.length;
}

/* ============================================================================
   7. FUNCIONALIDADE: GERADOR DE MENSAGENS EVANGELÍSTICAS
   ============================================================================ */
function generateInitialMessage() {
  onCategoryChange(false);
}

function onCategoryChange(shouldRecord = false) {
  generateMessage(shouldRecord);
}

function generateMessage(shouldRecord = true) {
  const select = document.getElementById("messageCategorySelect");
  const categoryKey = select ? select.value : "amigos";
  const messagesList = EVANGELICAL_MESSAGES[categoryKey] || EVANGELICAL_MESSAGES.amigos;

  // Sorteia mensagem da categoria
  let chosen;
  if (appState.currentGeneratedMsg && messagesList.length > 1) {
    const pool = messagesList.filter(m => m.id !== appState.currentGeneratedMsg.id);
    chosen = pool[Math.floor(Math.random() * pool.length)];
  } else {
    chosen = messagesList[Math.floor(Math.random() * messagesList.length)];
  }

  appState.currentGeneratedMsg = chosen;

  // Incrementa contagem de mensagens geradas
  appState.stats.messagesGenerated = (appState.stats.messagesGenerated || 0) + 1;
  saveToLocalStorage(STORAGE_KEYS.STATS, appState.stats);

  if (shouldRecord) {
    recordActivity(`Gerou uma mensagem na categoria "${chosen.categoryName}"`);
  }

  renderCurrentGeneratedMessage();
}

function renderCurrentGeneratedMessage() {
  const msg = appState.currentGeneratedMsg;
  if (!msg) return;

  const badgeEl = document.getElementById("genMsgCategoryBadge");
  const titleEl = document.getElementById("genMsgTitle");
  const bodyEl = document.getElementById("genMsgBody");
  const verseEl = document.getElementById("genMsgVerse");
  const refEl = document.getElementById("genMsgRef");
  const suggEl = document.getElementById("genMsgSuggestion");
  const favBtn = document.getElementById("genMsgFavBtn");

  if (badgeEl) badgeEl.textContent = msg.categoryName;
  if (titleEl) titleEl.textContent = msg.title;
  if (bodyEl) bodyEl.textContent = msg.body;
  if (verseEl) verseEl.textContent = msg.verseText;
  if (refEl) refEl.textContent = `— ${msg.verseRef}`;
  if (suggEl) suggEl.textContent = msg.suggestion;

  // Estado do botão favorito
  const isFav = appState.favMessages.some(m => m.id === msg.id);
  if (favBtn) {
    favBtn.classList.toggle("active", isFav);
    favBtn.title = isFav ? "Remover dos favoritos" : "Salvar nos favoritos";
    favBtn.innerHTML = isFav
      ? `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" width="20" height="20"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  }
}

function copyGeneratedMessage() {
  const msg = appState.currentGeneratedMsg;
  if (!msg) return;

  const fullText = `${msg.title}\n\n${msg.body}\n\n${msg.verseText} (${msg.verseRef})\n\n— Compartilhado pelo IDE`;
  copyToClipboard(fullText, "Mensagem completa copiada para a área de transferência!");
}

function shareOnWhatsApp() {
  const msg = appState.currentGeneratedMsg;
  if (!msg) return;

  const textToShare = `*${msg.title}*\n\n${msg.body}\n\n_${msg.verseText}_ *(${msg.verseRef})*`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(textToShare)}`;
  window.open(whatsappUrl, "_blank");
  recordActivity(`Compartilhou a mensagem "${msg.title}" via WhatsApp`);
}

function toggleFavoriteGeneratedMessage() {
  const msg = appState.currentGeneratedMsg;
  if (!msg) return;

  const existingIndex = appState.favMessages.findIndex(m => m.id === msg.id);

  if (existingIndex >= 0) {
    appState.favMessages.splice(existingIndex, 1);
    showToast("Mensagem removida dos favoritos.", "info");
    recordActivity(`Removeu a mensagem "${msg.title}" dos favoritos`);
  } else {
    appState.favMessages.unshift({
      ...msg,
      savedAt: new Date().toISOString()
    });
    showToast("Mensagem salva nos favoritos!", "success");
    recordActivity(`Salvou a mensagem "${msg.title}" nos favoritos`);
  }

  saveToLocalStorage(STORAGE_KEYS.FAV_MESSAGES, appState.favMessages);
  renderCurrentGeneratedMessage();
  updateSummaryCards();
}

function showSavedMessagesModal() {
  const modal = document.getElementById("favMessagesModal");
  const modalBody = document.getElementById("favMessagesModalBody");
  if (!modal || !modalBody) return;

  if (appState.favMessages.length === 0) {
    modalBody.innerHTML = `
      <div class="empty-state-box">
        <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <h4>Nenhuma mensagem salva ainda</h4>
        <p>Gere mensagens evangelísticas e clique na estrelinha de favorito para guardá-las aqui e acessar sempre que desejar.</p>
      </div>
    `;
  } else {
    modalBody.innerHTML = appState.favMessages.map(msg => `
      <div class="saved-msg-item">
        <div class="card-header-flex">
          <span class="badge-gold">${escapeHtml(msg.categoryName)}</span>
          <button class="btn-text-action" style="color: var(--color-danger);" onclick="deleteSavedMessage('${msg.id}')">Excluir</button>
        </div>
        <h4 class="saved-msg-title">${escapeHtml(msg.title)}</h4>
        <p class="saved-msg-text">${escapeHtml(msg.body)}</p>
        <p class="saved-msg-verse">${escapeHtml(msg.verseText)} <strong>(${escapeHtml(msg.verseRef)})</strong></p>
        <div style="display:flex; gap:0.5rem; justify-content: flex-end;">
          <button class="btn btn-sm btn-outline" onclick="copySpecificMessage('${msg.id}')">Copiar Texto</button>
        </div>
      </div>
    `).join("");
  }

  modal.classList.add("open");
}

function closeSavedMessagesModal() {
  const modal = document.getElementById("favMessagesModal");
  if (modal) modal.classList.remove("open");
}

function deleteSavedMessage(id) {
  appState.favMessages = appState.favMessages.filter(m => m.id !== id);
  saveToLocalStorage(STORAGE_KEYS.FAV_MESSAGES, appState.favMessages);
  showSavedMessagesModal();
  renderCurrentGeneratedMessage();
  updateSummaryCards();
  showToast("Mensagem favorita removida.", "info");
}

function copySpecificMessage(id) {
  const msg = appState.favMessages.find(m => m.id === id);
  if (!msg) return;
  const fullText = `${msg.title}\n\n${msg.body}\n\n${msg.verseText} (${msg.verseRef})`;
  copyToClipboard(fullText, "Mensagem copiada com sucesso!");
}

/* ============================================================================
   8. FUNCIONALIDADE: BIBLIOTECA DE VERSÍCULOS BÍBLICOS
   ============================================================================ */
function initVersesThemeChips() {
  const themesContainer = document.getElementById("themeChipsContainer");
  if (!themesContainer) return;

  const themes = [
    "todos",
    "Amor de Deus",
    "Salvação em Jesus",
    "Fé",
    "Esperança",
    "Perdão",
    "Arrependimento",
    "Vida eterna",
    "Grande Comissão",
    "Amor ao próximo"
  ];

  themesContainer.innerHTML = themes.map(theme => {
    const label = theme === "todos" ? "Todos os Temas" : theme;
    const isActive = theme === appState.activeVerseTheme ? "active" : "";
    return `<button class="theme-chip ${isActive}" onclick="selectVerseTheme('${theme}')">${label}</button>`;
  }).join("");
}

function selectVerseTheme(theme) {
  appState.activeVerseTheme = theme;
  initVersesThemeChips();
  renderVersesGrid();
}

function filterVerses() {
  const searchInput = document.getElementById("verseSearchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

  appState.verseSearchTerm = query;

  if (clearBtn) {
    clearBtn.classList.toggle("visible", query.length > 0);
  }

  renderVersesGrid();
}

function clearVerseSearch() {
  const searchInput = document.getElementById("verseSearchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  if (searchInput) searchInput.value = "";
  if (clearBtn) clearBtn.classList.remove("visible");

  appState.verseSearchTerm = "";
  renderVersesGrid();
}

function toggleOnlyFavoritesFilter() {
  appState.onlyFavVersesFilter = !appState.onlyFavVersesFilter;
  const btn = document.getElementById("favFilterBtn");
  if (btn) btn.classList.toggle("active", appState.onlyFavVersesFilter);
  renderVersesGrid();
}

function filterOnlyFavoritesVerses() {
  appState.onlyFavVersesFilter = true;
  const btn = document.getElementById("favFilterBtn");
  if (btn) btn.classList.add("active");
  renderVersesGrid();
}

function renderVersesGrid() {
  const grid = document.getElementById("versesGrid");
  const countDisplay = document.getElementById("versesCountDisplay");
  if (!grid) return;

  let filtered = BIBLE_VERSES.filter(verse => {
    // Filtro por tema
    const matchesTheme = appState.activeVerseTheme === "todos" || verse.theme.toLowerCase() === appState.activeVerseTheme.toLowerCase();
    
    // Filtro por favoritos
    const matchesFav = !appState.onlyFavVersesFilter || appState.favVerses.includes(verse.id);

    // Filtro por busca de texto ou referência
    const query = appState.verseSearchTerm;
    const matchesSearch = !query || 
      verse.text.toLowerCase().includes(query) ||
      verse.reference.toLowerCase().includes(query) ||
      verse.theme.toLowerCase().includes(query) ||
      verse.howToUse.toLowerCase().includes(query);

    return matchesTheme && matchesFav && matchesSearch;
  });

  if (countDisplay) countDisplay.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state-box" style="grid-column: 1 / -1;">
        <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <h4>Nenhum versículo encontrado</h4>
        <p>Tente ajustar os termos da sua pesquisa ou remover o filtro de favoritos para ver mais passagens bíblicas.</p>
        <button class="btn btn-outline btn-sm" style="margin-top: 1rem;" onclick="resetVersesFilters()">Restaurar Filtros</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(verse => {
    const isFav = appState.favVerses.includes(verse.id);
    return `
      <div class="verse-item-card">
        <div>
          <div class="verse-card-top">
            <span class="verse-theme-tag">${escapeHtml(verse.theme)}</span>
            <button class="icon-action-btn ${isFav ? 'active' : ''}" onclick="toggleFavoriteVerse(${verse.id})" title="${isFav ? 'Remover dos favoritos' : 'Favoritar versículo'}">
              <svg viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </button>
          </div>
          <p class="verse-quote-text-card">“${escapeHtml(verse.text)}”</p>
          <div class="verse-card-ref">${escapeHtml(verse.reference)}</div>
          <div class="verse-practical-usage">
            <strong>Como usar na conversa:</strong>
            <p>${escapeHtml(verse.howToUse)}</p>
          </div>
        </div>
        <div class="verse-card-actions">
          <button class="btn btn-sm btn-outline" style="flex:1;" onclick="copyVerseText(${verse.id})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            Copiar Texto
          </button>
          <button class="btn btn-sm btn-outline" onclick="copyVerseWithReflection(${verse.id})" title="Copiar com dica prática">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/></svg>
            + Dica
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function resetVersesFilters() {
  appState.activeVerseTheme = "todos";
  appState.verseSearchTerm = "";
  appState.onlyFavVersesFilter = false;

  const searchInput = document.getElementById("verseSearchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  const favBtn = document.getElementById("favFilterBtn");

  if (searchInput) searchInput.value = "";
  if (clearBtn) clearBtn.classList.remove("visible");
  if (favBtn) favBtn.classList.remove("active");

  initVersesThemeChips();
  renderVersesGrid();
}

function toggleFavoriteVerse(verseId) {
  const index = appState.favVerses.indexOf(verseId);
  const verse = BIBLE_VERSES.find(v => v.id === verseId);

  if (index >= 0) {
    appState.favVerses.splice(index, 1);
    showToast(`Versículo ${verse?.reference} removido dos favoritos.`, "info");
    recordActivity(`Removeu ${verse?.reference} dos versículos favoritos`);
  } else {
    appState.favVerses.push(verseId);
    showToast(`Versículo ${verse?.reference} salvo nos favoritos!`, "success");
    recordActivity(`Favoritou o versículo ${verse?.reference}`);
  }

  saveToLocalStorage(STORAGE_KEYS.FAV_VERSES, appState.favVerses);
  renderVersesGrid();
  renderDailyVerse();
  updateSummaryCards();
}

function copyVerseText(verseId) {
  const verse = BIBLE_VERSES.find(v => v.id === verseId);
  if (!verse) return;
  const content = `“${verse.text}” — ${verse.reference}`;
  copyToClipboard(content, `Versículo ${verse.reference} copiado!`);
}

function copyVerseWithReflection(verseId) {
  const verse = BIBLE_VERSES.find(v => v.id === verseId);
  if (!verse) return;
  const content = `“${verse.text}” (${verse.reference})\n\n💡 Sugestão para conversa: ${verse.howToUse}`;
  copyToClipboard(content, `Versículo com reflexão copiado!`);
}

/* ============================================================================
   9. FUNCIONALIDADE: PLANEJADOR DE EVANGELIZAÇÃO
   ============================================================================ */
function handleSaveAction(event) {
  event.preventDefault();

  const idInput = document.getElementById("actionId");
  const nameInput = document.getElementById("actionName");
  const goalInput = document.getElementById("actionGoal");
  const dateInput = document.getElementById("actionDate");
  const locationInput = document.getElementById("actionLocation");
  const notesInput = document.getElementById("actionNotes");
  const statusInput = document.getElementById("actionStatus");

  // Validação dos campos obrigatórios
  const name = nameInput.value.trim();
  const goal = goalInput.value.trim();
  const date = dateInput.value;
  const location = locationInput.value.trim();
  const notes = notesInput.value.trim();
  const status = statusInput.value;

  if (!name || !goal || !date || !location) {
    showToast("Por favor, preencha todos os campos obrigatórios (*).", "error");
    return;
  }

  const existingId = idInput.value;

  if (existingId) {
    // Modo Edição
    const actionIndex = appState.actions.findIndex(a => a.id === existingId);
    if (actionIndex >= 0) {
      appState.actions[actionIndex] = {
        ...appState.actions[actionIndex],
        name,
        goal,
        date,
        location,
        notes,
        status,
        updatedAt: new Date().toISOString()
      };
      showToast("Ação evangelística atualizada com sucesso!", "success");
      recordActivity(`Atualizou a ação "${name}"`);
    }
  } else {
    // Nova Ação
    const newAction = {
      id: "act_" + Date.now(),
      name,
      goal,
      date,
      location,
      notes,
      status,
      createdAt: new Date().toISOString()
    };
    appState.actions.unshift(newAction);
    showToast("Ação evangelística cadastrada com sucesso!", "success");
    recordActivity(`Cadastrou a nova ação "${name}"`);
  }

  saveToLocalStorage(STORAGE_KEYS.ACTIONS, appState.actions);
  resetActionForm();
  renderActionsList();
  updateSummaryCards();
}

function resetActionForm() {
  document.getElementById("actionId").value = "";
  document.getElementById("actionForm").reset();

  const headerTitle = document.getElementById("plannerFormHeaderTitle");
  const submitBtn = document.getElementById("saveActionSubmitBtn");
  const cancelBtn = document.getElementById("cancelActionEditBtn");

  if (headerTitle) headerTitle.textContent = "Nova Ação Evangelística";
  if (submitBtn) {
    submitBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/></svg>
      Salvar Ação
    `;
  }
  if (cancelBtn) cancelBtn.style.display = "none";
}

function editAction(id) {
  const action = appState.actions.find(a => a.id === id);
  if (!action) return;

  document.getElementById("actionId").value = action.id;
  document.getElementById("actionName").value = action.name;
  document.getElementById("actionGoal").value = action.goal;
  document.getElementById("actionDate").value = action.date;
  document.getElementById("actionLocation").value = action.location;
  document.getElementById("actionNotes").value = action.notes || "";
  document.getElementById("actionStatus").value = action.status;

  const headerTitle = document.getElementById("plannerFormHeaderTitle");
  const submitBtn = document.getElementById("saveActionSubmitBtn");
  const cancelBtn = document.getElementById("cancelActionEditBtn");

  if (headerTitle) headerTitle.textContent = "Editar Ação Evangelística";
  if (submitBtn) {
    submitBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/></svg>
      Salvar Alterações
    `;
  }
  if (cancelBtn) cancelBtn.style.display = "inline-flex";

  // Rola até o formulário
  document.getElementById("tab-planejador").scrollIntoView({ behavior: "smooth" });
}

function toggleActionStatus(id) {
  const action = appState.actions.find(a => a.id === id);
  if (!action) return;

  const newStatus = action.status === "concluida" ? "planejada" : "concluida";
  action.status = newStatus;

  saveToLocalStorage(STORAGE_KEYS.ACTIONS, appState.actions);
  renderActionsList();
  updateSummaryCards();

  const msg = newStatus === "concluida" ? `Ação "${action.name}" marcada como Concluída!` : `Ação "${action.name}" reaberta como Planejada.`;
  showToast(msg, "success");
  recordActivity(msg);
}

function deleteAction(id) {
  const action = appState.actions.find(a => a.id === id);
  if (!action) return;

  const confirmed = window.confirm(`Deseja realmente excluir a ação "${action.name}"?`);
  if (!confirmed) return;

  appState.actions = appState.actions.filter(a => a.id !== id);
  saveToLocalStorage(STORAGE_KEYS.ACTIONS, appState.actions);

  // Se estava editando esta mesma ação, limpa o formulário
  if (document.getElementById("actionId").value === id) {
    resetActionForm();
  }

  renderActionsList();
  updateSummaryCards();
  showToast("Ação excluída com sucesso.", "info");
  recordActivity(`Excluiu a ação "${action.name}"`);
}

function filterActionsList(filterType) {
  appState.actionsFilter = filterType;

  // Atualiza botões de filtro
  document.querySelectorAll(".planner-list-container .pill-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  if (filterType === "todas") document.getElementById("actFilterAll")?.classList.add("active");
  if (filterType === "planejada") document.getElementById("actFilterPlanned")?.classList.add("active");
  if (filterType === "concluida") document.getElementById("actFilterCompleted")?.classList.add("active");

  renderActionsList();
}

function renderActionsList() {
  const container = document.getElementById("actionsListContainer");
  const countAll = document.getElementById("countAllActions");
  const countPlanned = document.getElementById("countPlannedActions");
  const countCompleted = document.getElementById("countCompletedActions");

  const total = appState.actions.length;
  const planned = appState.actions.filter(a => a.status === "planejada").length;
  const completed = appState.actions.filter(a => a.status === "concluida").length;

  if (countAll) countAll.textContent = total;
  if (countPlanned) countPlanned.textContent = planned;
  if (countCompleted) countCompleted.textContent = completed;

  if (!container) return;

  let filtered = appState.actions;
  if (appState.actionsFilter === "planejada") {
    filtered = appState.actions.filter(a => a.status === "planejada");
  } else if (appState.actionsFilter === "concluida") {
    filtered = appState.actions.filter(a => a.status === "concluida");
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box">
        <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        <h4>Nenhuma ação encontrada</h4>
        <p>Cadastre sua primeira ação evangelística preenchendo o formulário ao lado com carinho e planejamento.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(action => {
    const isCompleted = action.status === "concluida";
    const statusLabel = isCompleted ? "✅ Concluída" : "📌 Planejada";
    const statusClass = isCompleted ? "status-completed" : "status-planned";
    const cardClass = isCompleted ? "action-item-card completed" : "action-item-card planned";

    // Formata data brasileira
    const dateParts = action.date.split("-");
    const formattedDate = dateParts.length === 3 ? `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}` : action.date;

    return `
      <div class="${cardClass}">
        <div class="item-top-row">
          <h4 class="item-title">${escapeHtml(action.name)}</h4>
          <span class="status-badge ${statusClass}">${statusLabel}</span>
        </div>

        <div class="item-meta-details">
          <span class="meta-col">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${formattedDate}
          </span>
          <span class="meta-col">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${escapeHtml(action.location)}
          </span>
        </div>

        <p class="item-description"><strong>Objetivo:</strong> ${escapeHtml(action.goal)}</p>

        ${action.notes ? `
          <div class="item-notes-callout">
            <strong>Observações:</strong> ${escapeHtml(action.notes)}
          </div>
        ` : ""}

        <div class="item-actions-row">
          <button class="btn btn-sm ${isCompleted ? 'btn-outline' : 'btn-primary'}" onclick="toggleActionStatus('${action.id}')">
            ${isCompleted ? 'Reabrir Ação' : 'Concluir Ação'}
          </button>
          <div class="item-btn-group">
            <button class="btn btn-sm btn-outline" onclick="editAction('${action.id}')">Editar</button>
            <button class="btn btn-sm btn-danger-outline" onclick="deleteAction('${action.id}')">Excluir</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function fillActionTemplate(type) {
  const nameInput = document.getElementById("actionName");
  const goalInput = document.getElementById("actionGoal");
  const dateInput = document.getElementById("actionDate");
  const locationInput = document.getElementById("actionLocation");
  const notesInput = document.getElementById("actionNotes");

  const todayStr = new Date().toISOString().split("T")[0];
  dateInput.value = todayStr;

  switch (type) {
    case "amigo":
      nameInput.value = "Conversar com amigo sobre a fé em Jesus";
      goalInput.value = "Ouvir suas lutas recentes, demonstrar amizade sincera e compartilhar o amor e o perdão de Cristo.";
      locationInput.value = "Cafeteria ou intervalo do trabalho/estudos";
      notesInput.value = "Ouvir com paciência antes de falar; orar antes do encontro.";
      break;
    case "jovens":
      nameInput.value = "Encontro com o grupo de jovens da igreja";
      goalInput.value = "Promover integração, louvor e uma dinâmica bíblica sobre identidade cristã.";
      locationInput.value = "Salão da igreja / praça da comunidade";
      notesInput.value = "Preparar lanche comunitário e dinâmicas interativas.";
      break;
    case "comunidade":
      nameInput.value = "Ação comunitária de apoio e oração";
      goalInput.value = "Distribuir alimentos/agasalhos a famílias necessitadas e oferecer uma palavra de conforto.";
      locationInput.value = "Bairro vizinho à igreja local";
      notesInput.value = "Levar Novos Testamentos e folhetos explicativos sobre a graça.";
      break;
    case "redes":
      nameInput.value = "Publicação de mensagem bíblica nas redes";
      goalInput.value = "Alcançar seguidores com uma mensagem de esperança e paz no feed/stories.";
      locationInput.value = "Instagram, WhatsApp e redes sociais";
      notesInput.value = "Responder respeitosamente a qualquer pessoa que mandar mensagem privada.";
      break;
  }
}

/* ============================================================================
   10. FUNCIONALIDADE: DIÁRIO DE ORAÇÃO
   ============================================================================ */
function handleSavePrayer(event) {
  event.preventDefault();

  const idInput = document.getElementById("prayerId");
  const titleInput = document.getElementById("prayerTitle");
  const dateInput = document.getElementById("prayerDate");
  const statusInput = document.getElementById("prayerStatus");
  const notesInput = document.getElementById("prayerNotes");

  const title = titleInput.value.trim();
  const date = dateInput.value;
  const status = statusInput.value;
  const notes = notesInput.value.trim();

  if (!title || !date) {
    showToast("Por favor, preencha a descrição e a data do pedido.", "error");
    return;
  }

  const existingId = idInput.value;

  if (existingId) {
    // Editar
    const prayerIndex = appState.prayers.findIndex(p => p.id === existingId);
    if (prayerIndex >= 0) {
      appState.prayers[prayerIndex] = {
        ...appState.prayers[prayerIndex],
        title,
        date,
        status,
        notes,
        updatedAt: new Date().toISOString()
      };
      showToast("Pedido de oração atualizado!", "success");
      recordActivity(`Atualizou o pedido de oração "${title}"`);
    }
  } else {
    // Novo
    const newPrayer = {
      id: "pray_" + Date.now(),
      title,
      date,
      status,
      notes,
      createdAt: new Date().toISOString()
    };
    appState.prayers.unshift(newPrayer);
    showToast("Pedido de oração registrado com carinho!", "success");
    recordActivity(`Registrou o pedido de oração "${title}"`);
  }

  saveToLocalStorage(STORAGE_KEYS.PRAYERS, appState.prayers);
  resetPrayerForm();
  renderPrayersList();
  renderProgressDashboard();
}

function resetPrayerForm() {
  document.getElementById("prayerId").value = "";
  document.getElementById("prayerForm").reset();

  const headerTitle = document.getElementById("prayerFormHeaderTitle");
  const submitBtn = document.getElementById("savePrayerSubmitBtn");
  const cancelBtn = document.getElementById("cancelPrayerEditBtn");

  if (headerTitle) headerTitle.textContent = "Novo Pedido de Oração";
  if (submitBtn) {
    submitBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/></svg>
      Salvar Pedido
    `;
  }
  if (cancelBtn) cancelBtn.style.display = "none";
}

function editPrayer(id) {
  const prayer = appState.prayers.find(p => p.id === id);
  if (!prayer) return;

  document.getElementById("prayerId").value = prayer.id;
  document.getElementById("prayerTitle").value = prayer.title;
  document.getElementById("prayerDate").value = prayer.date;
  document.getElementById("prayerStatus").value = prayer.status;
  document.getElementById("prayerNotes").value = prayer.notes || "";

  const headerTitle = document.getElementById("prayerFormHeaderTitle");
  const submitBtn = document.getElementById("savePrayerSubmitBtn");
  const cancelBtn = document.getElementById("cancelPrayerEditBtn");

  if (headerTitle) headerTitle.textContent = "Editar Pedido de Oração";
  if (submitBtn) {
    submitBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/></svg>
      Salvar Alterações
    `;
  }
  if (cancelBtn) cancelBtn.style.display = "inline-flex";

  document.getElementById("tab-oracao").scrollIntoView({ behavior: "smooth" });
}

function togglePrayerStatus(id) {
  const prayer = appState.prayers.find(p => p.id === id);
  if (!prayer) return;

  const newStatus = prayer.status === "respondida" ? "em_oracao" : "respondida";
  prayer.status = newStatus;

  saveToLocalStorage(STORAGE_KEYS.PRAYERS, appState.prayers);
  renderPrayersList();
  renderProgressDashboard();

  const msg = newStatus === "respondida" 
    ? `Que benção! Oração por "${prayer.title}" marcada como Respondida!` 
    : `Pedido de oração "${prayer.title}" reaberto.`;
  showToast(msg, "success");
  recordActivity(msg);
}

function deletePrayer(id) {
  const prayer = appState.prayers.find(p => p.id === id);
  if (!prayer) return;

  const confirmed = window.confirm(`Deseja realmente excluir o pedido de oração "${prayer.title}"?`);
  if (!confirmed) return;

  appState.prayers = appState.prayers.filter(p => p.id !== id);
  saveToLocalStorage(STORAGE_KEYS.PRAYERS, appState.prayers);

  if (document.getElementById("prayerId").value === id) {
    resetPrayerForm();
  }

  renderPrayersList();
  renderProgressDashboard();
  showToast("Pedido de oração removido.", "info");
  recordActivity(`Excluiu o pedido de oração "${prayer.title}"`);
}

function filterPrayersList(filterType) {
  appState.prayersFilter = filterType;

  document.querySelectorAll(".prayer-list-container .pill-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  if (filterType === "todos") document.getElementById("prayerFilterAll")?.classList.add("active");
  if (filterType === "em_oracao") document.getElementById("prayerFilterActive")?.classList.add("active");
  if (filterType === "respondida") document.getElementById("prayerFilterAnswered")?.classList.add("active");

  renderPrayersList();
}

function renderPrayersList() {
  const container = document.getElementById("prayerListContainer");
  const countAll = document.getElementById("countAllPrayers");
  const countActive = document.getElementById("countActivePrayers");
  const countAnswered = document.getElementById("countAnsweredPrayers");

  const total = appState.prayers.length;
  const active = appState.prayers.filter(p => p.status === "em_oracao").length;
  const answered = appState.prayers.filter(p => p.status === "respondida").length;

  if (countAll) countAll.textContent = total;
  if (countActive) countActive.textContent = active;
  if (countAnswered) countAnswered.textContent = answered;

  if (!container) return;

  let filtered = appState.prayers;
  if (appState.prayersFilter === "em_oracao") {
    filtered = appState.prayers.filter(p => p.status === "em_oracao");
  } else if (appState.prayersFilter === "respondida") {
    filtered = appState.prayers.filter(p => p.status === "respondida");
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box">
        <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <h4>Nenhum pedido de oração neste filtro</h4>
        <p>Cadastre amigos, familiares ou situações específicas no formulário ao lado e mantenha uma vida de oração constante.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(prayer => {
    const isAnswered = prayer.status === "respondida";
    const statusLabel = isAnswered ? "✨ Oração Respondida" : "🙏 Em Oração";
    const statusClass = isAnswered ? "status-completed" : "status-planned";
    const cardClass = isAnswered ? "prayer-item-card answered" : "prayer-item-card active-prayer";

    const dateParts = prayer.date.split("-");
    const formattedDate = dateParts.length === 3 ? `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}` : prayer.date;

    return `
      <div class="${cardClass}">
        <div class="item-top-row">
          <h4 class="item-title">${escapeHtml(prayer.title)}</h4>
          <span class="status-badge ${statusClass}">${statusLabel}</span>
        </div>

        <div class="item-meta-details">
          <span class="meta-col">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Iniciado em: ${formattedDate}
          </span>
        </div>

        ${prayer.notes ? `
          <div class="item-notes-callout">
            ${escapeHtml(prayer.notes)}
          </div>
        ` : ""}

        <div class="item-actions-row">
          <button class="btn btn-sm ${isAnswered ? 'btn-outline' : 'btn-gold'}" onclick="togglePrayerStatus('${prayer.id}')">
            ${isAnswered ? 'Reativar Oração' : 'Marcar como Respondida'}
          </button>
          <div class="item-btn-group">
            <button class="btn btn-sm btn-outline" onclick="editPrayer('${prayer.id}')">Editar</button>
            <button class="btn btn-sm btn-danger-outline" onclick="deletePrayer('${prayer.id}')">Excluir</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* ============================================================================
   11. FUNCIONALIDADE: MEU PROGRESSO & ESTATÍSTICAS
   ============================================================================ */
function renderProgressDashboard() {
  const statGen = document.getElementById("statGenMessagesCount");
  const statVerses = document.getElementById("statFavVersesCount");
  const statPlanned = document.getElementById("statPlannedActionsCount");
  const statCompleted = document.getElementById("statCompletedActionsCount");
  const statPrayers = document.getElementById("statPrayersCount");
  const statAnsweredPrayers = document.getElementById("statAnsweredPrayersCount");
  const statSavedMsg = document.getElementById("statSavedMessagesCount");

  const planned = appState.actions.filter(a => a.status === "planejada").length;
  const completed = appState.actions.filter(a => a.status === "concluida").length;
  const answeredPrayers = appState.prayers.filter(p => p.status === "respondida").length;

  if (statGen) statGen.textContent = appState.stats.messagesGenerated || 0;
  if (statVerses) statVerses.textContent = appState.favVerses.length;
  if (statPlanned) statPlanned.textContent = planned;
  if (statCompleted) statCompleted.textContent = completed;
  if (statPrayers) statPrayers.textContent = appState.prayers.length;
  if (statAnsweredPrayers) statAnsweredPrayers.textContent = answeredPrayers;
  if (statSavedMsg) statSavedMsg.textContent = appState.favMessages.length;

  renderDynamicEncouragement(completed, answeredPrayers, appState.favVerses.length);
  renderRecentActivities();
}

function renderDynamicEncouragement(completedActions, answeredPrayers, favVersesCount) {
  const titleEl = document.getElementById("progressEncouragementTitle");
  const textEl = document.getElementById("progressEncouragementText");
  if (!titleEl || !textEl) return;

  if (completedActions > 0 && answeredPrayers > 0) {
    titleEl.textContent = "“E não nos cansemos de fazer o bem...” (Gálatas 6:9)";
    textEl.textContent = `Que testemunho lindo! Você já completou ${completedActions} ações evangelísticas e testemunhou ${answeredPrayers} orações respondidas. O Senhor continua agindo por meio do seu amor.`;
  } else if (favVersesCount > 3) {
    titleEl.textContent = "“Escondi a tua palavra no meu coração...” (Salmos 119:11)";
    textEl.textContent = `Você já guardou ${favVersesCount} versículos bíblicos fundamentais. A Palavra de Deus em sua mente é luz para suas conversas e decisões diárias!`;
  } else {
    titleEl.textContent = "“Uma mensagem de esperança pode transformar uma vida.”";
    textEl.textContent = "Cada semente de afeto, cada oração sincera e cada versículo lido é uma etapa valiosa na jornada com Cristo. Siga em frente com alegria e fé!";
  }
}

function renderRecentActivities() {
  const container = document.getElementById("activityTimelineContainer");
  if (!container) return;

  if (appState.history.length === 0) {
    container.innerHTML = `
      <p style="color: var(--color-text-muted); font-size: 0.9rem; font-style: italic;">
        Nenhuma atividade recente registrada ainda. Comece explorando versículos, gerando mensagens ou planejando sua primeira ação!
      </p>
    `;
    return;
  }

  container.innerHTML = appState.history.slice(0, 10).map(item => {
    const dateObj = new Date(item.timestamp);
    const timeFormatted = dateObj.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });

    return `
      <div class="activity-item">
        <div class="activity-dot"></div>
        <div class="activity-content">
          <div class="activity-text">${escapeHtml(item.text)}</div>
          <div class="activity-time">${timeFormatted}</div>
        </div>
      </div>
    `;
  }).join("");
}

function clearActivityHistory() {
  if (confirm("Deseja limpar o histórico recente de atividades? Seus dados (ações, orações e versículos) continuarão salvos.")) {
    appState.history = [];
    saveToLocalStorage(STORAGE_KEYS.HISTORY, []);
    renderRecentActivities();
    showToast("Histórico de atividades limpo.", "info");
  }
}

/* ============================================================================
   12. GERENCIAMENTO DE DADOS: EXPORTAR, IMPORTAR E DADOS DE EXEMPLO
   ============================================================================ */
function exportUserData() {
  const dataToExport = {
    app: "IDE — Compartilhe o Evangelho",
    exportedAt: new Date().toISOString(),
    version: "1.0.0",
    data: {
      favMessages: appState.favMessages,
      favVerses: appState.favVerses,
      actions: appState.actions,
      prayers: appState.prayers,
      stats: appState.stats,
      history: appState.history
    }
  };

  const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataToExport, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", jsonString);
  downloadAnchor.setAttribute("download", `backup_ide_evangelho_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  showToast("Arquivo de backup baixado com sucesso!", "success");
}

function importUserData(event) {
  const fileReader = new FileReader();
  const file = event.target.files[0];

  if (!file) return;

  fileReader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (!parsed.data) {
        throw new Error("Formato de backup inválido.");
      }

      const imported = parsed.data;
      if (Array.isArray(imported.favMessages)) appState.favMessages = imported.favMessages;
      if (Array.isArray(imported.favVerses)) appState.favVerses = imported.favVerses;
      if (Array.isArray(imported.actions)) appState.actions = imported.actions;
      if (Array.isArray(imported.prayers)) appState.prayers = imported.prayers;
      if (imported.stats) appState.stats = imported.stats;
      if (Array.isArray(imported.history)) appState.history = imported.history;

      // Grava no localStorage
      saveToLocalStorage(STORAGE_KEYS.FAV_MESSAGES, appState.favMessages);
      saveToLocalStorage(STORAGE_KEYS.FAV_VERSES, appState.favVerses);
      saveToLocalStorage(STORAGE_KEYS.ACTIONS, appState.actions);
      saveToLocalStorage(STORAGE_KEYS.PRAYERS, appState.prayers);
      saveToLocalStorage(STORAGE_KEYS.STATS, appState.stats);
      saveToLocalStorage(STORAGE_KEYS.HISTORY, appState.history);

      renderVersesGrid();
      renderActionsList();
      renderPrayersList();
      renderProgressDashboard();
      updateSummaryCards();
      renderDailyVerse();

      showToast("Dados restaurados com sucesso!", "success");
    } catch (err) {
      console.error(err);
      showToast("Erro ao importar arquivo de backup. Verifique se o arquivo JSON é válido.", "error");
    }
  };

  fileReader.readAsText(file);
  event.target.value = ""; // Reseta o input file
}

function loadSampleDataPrompt() {
  if (confirm("Deseja carregar dados de demonstração com exemplos reais de ações evangelísticas e pedidos de oração?")) {
    appState.actions = [
      {
        id: "act_sample_1",
        name: "Conversar com o Lucas sobre a fé",
        goal: "Ouvir suas dificuldades recentes e compartilhar como a fé em Jesus trouxe paz ao meu coração.",
        date: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0],
        location: "Cafeteria da Faculdade",
        notes: "Presentear com um Novo Testamento de bolso; manter postura de escuta atenta.",
        status: "planejada",
        createdAt: new Date().toISOString()
      },
      {
        id: "act_sample_2",
        name: "Apoio Comunitário e Distribuição de Cestas",
        goal: "Levar mantimentos para 10 famílias do bairro e orar com quem desejar receber apoio.",
        date: new Date(Date.now() - 86400000 * 4).toISOString().split("T")[0],
        location: "Comunidade Esperança",
        notes: "Ação realizada em parceria com a equipe de voluntários da igreja local.",
        status: "concluida",
        createdAt: new Date().toISOString()
      },
      {
        id: "act_sample_3",
        name: "Postar reflexão sobre paz interior no Instagram",
        goal: "Alcançar amigos que estão ansiosos com mensagens de consolo bíblico.",
        date: new Date(Date.now() - 86400000 * 1).toISOString().split("T")[0],
        location: "Instagram / WhatsApp",
        notes: "Três amigos responderam no privado pedindo oração.",
        status: "concluida",
        createdAt: new Date().toISOString()
      }
    ];

    appState.prayers = [
      {
        id: "pray_sample_1",
        title: "Pela saúde e paz na família da Mariana",
        date: new Date().toISOString().split("T")[0],
        status: "em_oracao",
        notes: "Que Deus dê forças à mãe dela durante o tratamento médico e abra portas para falarmos do amor de Jesus.",
        createdAt: new Date().toISOString()
      },
      {
        id: "pray_sample_2",
        title: "Por sabedoria na conversa com meu irmão",
        date: new Date(Date.now() - 86400000 * 7).toISOString().split("T")[0],
        status: "respondida",
        notes: "Tivemos um diálogo maravilhoso e ele pediu para ler o Evangelho de João comigo!",
        createdAt: new Date().toISOString()
      }
    ];

    appState.favVerses = [1, 5, 13, 29, 34]; // João 3:16, Romanos 5:8, Romanos 15:13, Mateus 28:19-20, João 13:34
    appState.favMessages = [
      EVANGELICAL_MESSAGES.amigos[0],
      EVANGELICAL_MESSAGES.esperanca[0]
    ];
    appState.stats.messagesGenerated = 8;

    recordActivity("Carregou os dados de demonstração no aplicativo");

    saveToLocalStorage(STORAGE_KEYS.ACTIONS, appState.actions);
    saveToLocalStorage(STORAGE_KEYS.PRAYERS, appState.prayers);
    saveToLocalStorage(STORAGE_KEYS.FAV_VERSES, appState.favVerses);
    saveToLocalStorage(STORAGE_KEYS.FAV_MESSAGES, appState.favMessages);
    saveToLocalStorage(STORAGE_KEYS.STATS, appState.stats);

    renderVersesGrid();
    renderActionsList();
    renderPrayersList();
    renderProgressDashboard();
    updateSummaryCards();
    renderDailyVerse();

    showToast("Dados de demonstração carregados com sucesso!", "success");
  }
}

function confirmResetAllData() {
  const confirmed = window.confirm("ATENÇÃO: Deseja apagar todos os seus dados salvos localmente? Esta ação não pode ser desfeita.");
  if (!confirmed) return;

  const doubleConfirmed = window.confirm("Tem certeza absoluta? Todos os versículos favoritos, ações e orações serão limpos.");
  if (!doubleConfirmed) return;

  localStorage.removeItem(STORAGE_KEYS.FAV_MESSAGES);
  localStorage.removeItem(STORAGE_KEYS.FAV_VERSES);
  localStorage.removeItem(STORAGE_KEYS.ACTIONS);
  localStorage.removeItem(STORAGE_KEYS.PRAYERS);
  localStorage.removeItem(STORAGE_KEYS.STATS);
  localStorage.removeItem(STORAGE_KEYS.HISTORY);

  appState.favMessages = [];
  appState.favVerses = [];
  appState.actions = [];
  appState.prayers = [];
  appState.stats = { messagesGenerated: 0 };
  appState.history = [];

  renderVersesGrid();
  renderActionsList();
  renderPrayersList();
  renderProgressDashboard();
  updateSummaryCards();
  renderDailyVerse();

  showToast("Todos os dados foram redefinidos com sucesso.", "info");
}

/* ============================================================================
   13. UTILITÁRIOS: COPIAR PARA ÁREA DE TRANSFERÊNCIA & TOASTS
   ============================================================================ */
function copyToClipboard(text, successMessage = "Copiado para a área de transferência!") {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage, "success");
    }).catch(err => {
      fallbackCopyText(text, successMessage);
    });
  } else {
    fallbackCopyText(text, successMessage);
  }
}

function fallbackCopyText(text, successMessage) {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    if (successful) {
      showToast(successMessage, "success");
    } else {
      showToast("Não foi possível copiar automaticamente. Por favor, selecione e copie manualmente.", "error");
    }
  } catch (err) {
    showToast("Erro ao copiar texto.", "error");
  }
}

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type === "error" ? "toast-error" : ""}`;

  let iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
  if (type === "error") {
    iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
  } else if (type === "info") {
    iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
  }

  toast.innerHTML = `${iconSvg}<span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3500);
}

function escapeHtml(string) {
  if (!string) return "";
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function setupEventListeners() {
  // Fecha modal ao clicar fora
  window.addEventListener("click", (e) => {
    const modal = document.getElementById("favMessagesModal");
    if (e.target === modal) {
      closeSavedMessagesModal();
    }
  });

  // Fecha modal com a tecla Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSavedMessagesModal();
    }
  });

  // Atualiza aba caso o usuário use botões Voltar/Avançar do navegador
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#tab-", "").replace("#", "");
    if (hash && ["inicio", "guia", "gerador", "versiculos", "planejador", "oracao", "progresso"].includes(hash)) {
      if (appState.currentTab !== hash) {
        switchTab(hash);
      }
    }
  });
}
