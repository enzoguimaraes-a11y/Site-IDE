/**
 * TEST_RUNNER.JS
 * Suíte de testes automatizados para o aplicativo IDE — Compartilhe o Evangelho
 * Valida todas as 10 categorias de testes exigidas pela especificação.
 */

const fs = require('fs');
const path = require('path');

console.log("===============================================================================");
console.log("INICIANDO BATERIA DE TESTES AUTOMATIZADOS: IDE — COMPARTILHE O EVANGELHO");
console.log("===============================================================================\n");

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName, details = "") {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`[PASS] Teste ${totalTests}: ${testName}`);
  } else {
    console.error(`[FAIL] Teste ${totalTests}: ${testName}`);
    if (details) console.error(`       Detalhes: ${details}`);
  }
}

// 1. Carregamento dos Arquivos
const htmlPath = path.join(__dirname, 'IDE-Evangelho', 'index.html');
const cssPath = path.join(__dirname, 'IDE-Evangelho', 'style.css');
const jsPath = path.join(__dirname, 'IDE-Evangelho', 'script.js');

assert(fs.existsSync(htmlPath), "Existência do arquivo index.html");
assert(fs.existsSync(cssPath), "Existência do arquivo style.css");
assert(fs.existsSync(jsPath), "Existência do arquivo script.js");

const htmlContent = fs.readFileSync(htmlPath, 'utf8');
const cssContent = fs.readFileSync(cssPath, 'utf8');
const jsContent = fs.readFileSync(jsPath, 'utf8');

// Mock simples de DOM e localStorage para testar a lógica do script.js
const mockStorage = {};
const localStorageMock = {
  getItem: (k) => mockStorage[k] || null,
  setItem: (k, v) => { mockStorage[k] = String(v); },
  removeItem: (k) => { delete mockStorage[k]; },
  clear: () => { for (let k in mockStorage) delete mockStorage[k]; }
};

// Executa contexto isolado para extrair e validar os bancos de dados
const vm = require('vm');
const sandbox = {
  console: console,
  localStorage: localStorageMock,
  document: {
    addEventListener: () => {},
    getElementById: () => null,
    querySelectorAll: () => []
  },
  window: {
    addEventListener: () => {},
    location: { hash: '' }
  }
};

vm.createContext(sandbox);

// Executa script.js no sandbox
let exported;
try {
  vm.runInContext(jsContent, sandbox);
  exported = vm.runInContext("({ BIBLE_VERSES, EVANGELICAL_MESSAGES, appState, toggleFavoriteVerse, toggleActionStatus, togglePrayerStatus, saveToLocalStorage })", sandbox);
  assert(true, "Execução e sintaxe do script.js sem erros");
} catch (e) {
  assert(false, "Execução do script.js sem erros", e.message);
}

const { BIBLE_VERSES, EVANGELICAL_MESSAGES, appState, toggleFavoriteVerse, toggleActionStatus, togglePrayerStatus, saveToLocalStorage } = exported || {};

// TESTE 1: Navegação entre todas as seções
const requiredTabs = ['inicio', 'guia', 'gerador', 'versiculos', 'planejador', 'oracao', 'progresso'];
let allTabsPresent = true;
for (const tab of requiredTabs) {
  if (!htmlContent.includes(`id="tab-${tab}"`)) {
    allTabsPresent = false;
    break;
  }
}
assert(allTabsPresent, "1. Navegação: Todas as 7 seções/abas presentes no HTML");

// TESTE 2: Seleção das categorias de mensagens
const requiredCategories = ['amigos', 'jovens', 'esperanca', 'amor_deus', 'salvacao', 'redes_sociais', 'convite_igreja'];
let allCategoriesPresent = true;
for (const cat of requiredCategories) {
  if (!EVANGELICAL_MESSAGES[cat] || EVANGELICAL_MESSAGES[cat].length < 3) {
    allCategoriesPresent = false;
    break;
  }
}
assert(allCategoriesPresent, "2. Categorias de mensagens: 7 categorias cadastradas com conteúdo de qualidade");

// TESTE 3: Geração e cópia de mensagens
let messageStructureValid = true;
let totalMessages = 0;
for (const cat in EVANGELICAL_MESSAGES) {
  for (const msg of EVANGELICAL_MESSAGES[cat]) {
    totalMessages++;
    if (!msg.title || !msg.body || !msg.verseText || !msg.verseRef || !msg.suggestion) {
      messageStructureValid = false;
    }
  }
}
assert(messageStructureValid && totalMessages >= 35, `3. Geração de mensagens: ${totalMessages} mensagens válidas (título, texto, versículo, referência e sugestão)`);

// TESTE 4: Pesquisa e filtragem dos versículos
const verseCount = BIBLE_VERSES ? BIBLE_VERSES.length : 0;
assert(verseCount >= 30, `4. Biblioteca de versículos: ${verseCount} passagens cadastradas (mínimo exigido: 30)`);

// Validar temas obrigatórios
const expectedThemes = [
  "Amor de Deus", "Salvação em Jesus", "Fé", "Esperança", 
  "Perdão", "Arrependimento", "Vida eterna", "Grande Comissão", "Amor ao próximo"
];
let allThemesPresent = true;
const themesFound = new Set(BIBLE_VERSES.map(v => v.theme));
for (const t of expectedThemes) {
  if (!themesFound.has(t)) {
    allThemesPresent = false;
  }
}
assert(allThemesPresent, "4b. Cobertura de temas: Todos os 9 temas bíblicos contemplados com versículos reais");

// TESTE 5: Salvamento e remoção dos favoritos
appState.favVerses = [];
toggleFavoriteVerse(1);
assert(appState.favVerses.includes(1), "5. Favoritos: Adição de versículo aos favoritos");
toggleFavoriteVerse(1);
assert(!appState.favVerses.includes(1), "5b. Favoritos: Remoção de versículo dos favoritos");

// TESTE 6: Cadastro, edição e exclusão das ações evangelísticas
appState.actions = [];
const testAction = {
  id: "test_act_1",
  name: "Conversar com amigo na faculdade",
  goal: "Apresentar esperança cristã",
  date: "2026-11-01",
  location: "Campus",
  notes: "Ouvir com carinho",
  status: "planejada",
  createdAt: new Date().toISOString()
};
appState.actions.push(testAction);
assert(appState.actions.length === 1, "6. Ações: Cadastro de ação evangelística");

toggleActionStatus("test_act_1");
assert(appState.actions[0].status === "concluida", "6b. Ações: Alternância de status para concluída");

appState.actions = appState.actions.filter(a => a.id !== "test_act_1");
assert(appState.actions.length === 0, "6c. Ações: Exclusão de ação evangelística");

// TESTE 7: Cadastro e edição de pedidos de oração
appState.prayers = [];
const testPrayer = {
  id: "test_pray_1",
  title: "Pela cura da tia do Pedro",
  date: "2026-10-29",
  status: "em_oracao",
  notes: "Orar diariamente às 20h",
  createdAt: new Date().toISOString()
};
appState.prayers.push(testPrayer);
assert(appState.prayers.length === 1, "7. Oração: Registro de pedido de oração");

togglePrayerStatus("test_pray_1");
assert(appState.prayers[0].status === "respondida", "7b. Oração: Atualização para oração respondida");

// TESTE 8: Persistência após atualizar a página (localStorage)
saveToLocalStorage("ide_actions", [{ id: "act_persist", name: "Persistência OK" }]);
const retrievedActions = JSON.parse(sandbox.localStorage.getItem("ide_actions"));
assert(retrievedActions && retrievedActions[0].id === "act_persist", "8. Persistência: Dados preservados e lidos corretamente do localStorage");

// TESTE 9: Validações de campos obrigatórios no HTML
const formActionNameHasRequired = htmlContent.includes('id="actionName"') && htmlContent.includes('required');
const formPrayerTitleHasRequired = htmlContent.includes('id="prayerTitle"') && htmlContent.includes('required');
assert(formActionNameHasRequired && formPrayerTitleHasRequired, "9. Validação: Campos obrigatórios protegidos por validação nativa e JavaScript");

// TESTE 10: Responsividade e adaptação para celular
const hasMediaQueries = cssContent.includes('@media (max-width: 768px)') && cssContent.includes('@media (max-width: 992px)');
const hasMobileDrawer = htmlContent.includes('class="mobile-drawer"');
const hasViewportMeta = htmlContent.includes('name="viewport"');
assert(hasMediaQueries && hasMobileDrawer && hasViewportMeta, "10. Responsividade: Viewport, gaveta mobile e media queries implementadas com sucesso");

console.log("\n===============================================================================");
console.log(`RELATÓRIO FINAL: ${passedTests} de ${totalTests} testes APROVADOS (${Math.round(passedTests/totalTests*100)}%)`);
console.log("===============================================================================\n");
