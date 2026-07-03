const myTeamNameInput = document.getElementById("myTeamName");
const myTeamForm = document.getElementById("myTeamForm");
const saveMyTeamButton = document.getElementById("saveMyTeamButton");
const cancelMyTeamEditButton = document.getElementById("cancelMyTeamEditButton");
const myTeamSelect = document.getElementById("myTeamSelect");
const opponentTrainerNameInput = document.getElementById("opponentTrainerName");
const selectedMyTeamPreview = document.getElementById("selectedMyTeamPreview");
const opponentInputs = [
  document.getElementById("opponent1"),
  document.getElementById("opponent2"),
  document.getElementById("opponent3"),
  document.getElementById("opponent4"),
  document.getElementById("opponent5"),
  document.getElementById("opponent6")
];
const myTeamListBoard = document.getElementById("myTeamListBoard");
const historyTeamFilter = document.getElementById("historyTeamFilter");
const historyTeamTabs = document.querySelectorAll(".history-team-tabs");
const teamHistorySummary = document.getElementById("teamHistorySummary");

const selectionArea = document.getElementById("selectionArea");
const mySelectionArea = document.getElementById("mySelectionArea");
const battleResultInput = document.getElementById("battleResult");
const battleMemoInput = document.getElementById("battleMemo");
const saveBattleButton = document.getElementById("saveBattleButton");
const battleBoard = document.getElementById("battleBoard");
const battleStats = document.getElementById("battleStats");
const mySelectionPatternStats = document.getElementById("mySelectionPatternStats");
const opponentSelectionRateStats = document.getElementById("opponentSelectionRateStats");

const historySearchInput = document.getElementById("historySearchInput");
const historyResultFilter = document.getElementById("historyResultFilter");
const clearHistorySearchButton = document.getElementById("clearHistorySearchButton");

const selectAllVisibleHistoryButton = document.getElementById("selectAllVisibleHistoryButton");
const clearHistorySelectionButton = document.getElementById("clearHistorySelectionButton");
const bulkDeleteHistoryButton = document.getElementById("bulkDeleteHistoryButton");
const selectedHistoryCountText = document.getElementById("selectedHistoryCountText");
const toggleHistorySelectModeButton = document.getElementById("toggleHistorySelectModeButton");

const attackerPokemonPreview = document.getElementById("attackerPokemonPreview");
const defenderPokemonPreview = document.getElementById("defenderPokemonPreview");
const attackerSideSelect = document.getElementById("attackerSide");
const defenderSideSelect = document.getElementById("defenderSide");

const attackerPokemonInput = document.getElementById("attackerPokemon");
const defenderPokemonInput = document.getElementById("defenderPokemon");
const swapAttackDefenseButton = document.getElementById("swapAttackDefenseButton");

const attackerAbilityInput = document.getElementById("attackerAbility");
const defenderAbilityInput = document.getElementById("defenderAbility");

const damageMyPartyList = document.getElementById("damageMyPartyList");
const damageOpponentPartyList = document.getElementById("damageOpponentPartyList");
const attackerMoveButtons = document.getElementById("attackerMoveButtons");

const addComboMoveButton = document.getElementById("addComboMoveButton");
const clearComboMovesButton = document.getElementById("clearComboMovesButton");
const comboMoveList = document.getElementById("comboMoveList");
const comboDamageResult = document.getElementById("comboDamageResult");

const comboEffectType = document.getElementById("comboEffectType");
const comboEffectPreset = document.getElementById("comboEffectPreset");
const comboCustomNumerator = document.getElementById("comboCustomNumerator");
const comboCustomDenominator = document.getElementById("comboCustomDenominator");
const addComboEffectButton = document.getElementById("addComboEffectButton");

const comboDamagePreset = document.getElementById("comboDamagePreset");
const comboHealPreset = document.getElementById("comboHealPreset");

const comboDamageCustomNumerator = document.getElementById("comboDamageCustomNumerator");
const comboDamageCustomDenominator = document.getElementById("comboDamageCustomDenominator");

const comboHealCustomNumerator = document.getElementById("comboHealCustomNumerator");
const comboHealCustomDenominator = document.getElementById("comboHealCustomDenominator");

const addComboDamageEffectButton = document.getElementById("addComboDamageEffectButton");
const addComboHealEffectButton = document.getElementById("addComboHealEffectButton");

const comboAutoSitrusCheck = document.getElementById("comboAutoSitrusCheck");
const comboAutoLeftoversCheck = document.getElementById("comboAutoLeftoversCheck");

const megaAttackerButton = document.getElementById("megaAttackerButton");
const megaDefenderButton = document.getElementById("megaDefenderButton");
const attackerMegaStatus = document.getElementById("attackerMegaStatus");
const defenderMegaStatus = document.getElementById("defenderMegaStatus");

const damageAttackerItemInput = document.getElementById("damageAttackerItem");
const damageDefenderItemInput = document.getElementById("damageDefenderItem");
const damageMoveInput = document.getElementById("damageMove");
const damageLevelInput = document.getElementById("damageLevel");
const movePowerInput = document.getElementById("movePower");
const moveTypeInput = document.getElementById("moveType");
const moveCategorySelect = document.getElementById("moveCategory");
const attackStatInput = document.getElementById("attackStat");
const defenseStatInput = document.getElementById("defenseStat");
const defenderHpInput = document.getElementById("defenderHp");
const defenderCurrentHpPercentInput = document.getElementById("defenderCurrentHpPercent");

const attackStageSelect = document.getElementById("attackStage");
const spAttackStageSelect = document.getElementById("spAttackStage");
const defenseStageSelect = document.getElementById("defenseStage");
const spDefenseStageSelect = document.getElementById("spDefenseStage");

const defenderHpEvInput = document.getElementById("defenderHpEv");
const defenderDefenseEvInput = document.getElementById("defenderDefenseEv");
const defenderSpDefenseEvInput = document.getElementById("defenderSpDefenseEv");
const attackerAttackEvInput = document.getElementById("attackerAttackEv");
const attackerSpAttackEvInput = document.getElementById("attackerSpAttackEv");

const attackerAttackEvRange = document.getElementById("attackerAttackEvRange");
const attackerSpAttackEvRange = document.getElementById("attackerSpAttackEvRange");

const attackerAttackEvValue = document.getElementById("attackerAttackEvValue");
const attackerSpAttackEvValue = document.getElementById("attackerSpAttackEvValue");

const attackerAttackNatureSelect = document.getElementById("attackerAttackNature");
const attackerSpAttackNatureSelect = document.getElementById("attackerSpAttackNature");

const attackerAttackRealValue = document.getElementById("attackerAttackRealValue");
const attackerSpAttackRealValue = document.getElementById("attackerSpAttackRealValue");
const attackerAbilityPointTotal = document.getElementById("attackerAbilityPointTotal");

const defenderHpEvRange = document.getElementById("defenderHpEvRange");
const defenderDefenseEvRange = document.getElementById("defenderDefenseEvRange");
const defenderSpDefenseEvRange = document.getElementById("defenderSpDefenseEvRange");

const defenderHpEvValue = document.getElementById("defenderHpEvValue");
const defenderDefenseEvValue = document.getElementById("defenderDefenseEvValue");
const defenderSpDefenseEvValue = document.getElementById("defenderSpDefenseEvValue");

const defenderHpRealValue = document.getElementById("defenderHpRealValue");
const defenderDefenseRealValue = document.getElementById("defenderDefenseRealValue");
const defenderSpDefenseRealValue = document.getElementById("defenderSpDefenseRealValue");
const defenderAbilityPointTotal = document.getElementById("defenderAbilityPointTotal");

const defenderDefenseNatureSelect = document.getElementById("defenderDefenseNature");
const defenderSpDefenseNatureSelect = document.getElementById("defenderSpDefenseNature");

const stabCheck = document.getElementById("stabCheck");
const typeEffectivenessSelect = document.getElementById("typeEffectiveness");
const weatherSelect = document.getElementById("weather");
const criticalCheck = document.getElementById("criticalCheck");
const burnCheck = document.getElementById("burnCheck");

const attackerStatusCheck = document.getElementById("attackerStatusCheck");
const defenderStatusCheck = document.getElementById("defenderStatusCheck");
const defenderPoisonCheck = document.getElementById("defenderPoisonCheck");
const defenderHasItemCheck = document.getElementById("defenderHasItemCheck");
const attackerNoItemCheck = document.getElementById("attackerNoItemCheck");
const moveBoostConditionCheck = document.getElementById("moveBoostConditionCheck");
const faintedAllyCountSelect = document.getElementById("faintedAllyCount");
const attackerHpConditionSelect = document.getElementById("attackerHpCondition");
const fieldSelect = document.getElementById("fieldSelect");

const attackerLowHpCheck = document.getElementById("attackerLowHpCheck");
const multiHitCountSelect = document.getElementById("multiHitCount");

const supremeOverlordCountSelect = document.getElementById("supremeOverlordCount");
const spreadMoveCheck = document.getElementById("spreadMoveCheck");
const reflectCheck = document.getElementById("reflectCheck");
const lightScreenCheck = document.getElementById("lightScreenCheck");

const wallCheck = document.getElementById("wallCheck");
const sunCheck = document.getElementById("sunCheck");
const rainCheck = document.getElementById("rainCheck");

const lifeOrbCheck = document.getElementById("lifeOrbCheck");


const typeBoostCheck = document.getElementById("typeBoostCheck");
const expertBeltCheck = document.getElementById("expertBeltCheck");

const choiceItemCheck = document.getElementById("choiceItemCheck");

const attackerItemChecks = document.querySelectorAll(".attacker-item-check");

const assaultVestCheck = document.getElementById("assaultVestCheck");
const evioliteCheck = document.getElementById("evioliteCheck");
const resistBerryCheck = document.getElementById("resistBerryCheck");

const defenderItemChecks = document.querySelectorAll(".defender-item-check");

const calculateDamageButton = document.getElementById("calculateDamageButton");
const damageResult = document.getElementById("damageResult");
const copyDamageMemoButton = document.getElementById("copyDamageMemoButton");

const damageVisualResult = document.getElementById("damageVisualResult");
const currentHpBar = document.getElementById("currentHpBar");
const damageRangeBar = document.getElementById("damageRangeBar");
const guaranteedDamageBar = document.getElementById("guaranteedDamageBar");
const hpBarBeforeLabel = document.getElementById("hpBarBeforeLabel");
const hpBarAfterLabel = document.getElementById("hpBarAfterLabel");

const attackerWeightInput = document.getElementById("attackerWeightInput");
const defenderWeightInput = document.getElementById("defenderWeightInput");
const attackerSpeedInput = document.getElementById("attackerSpeedInput");
const defenderSpeedInput = document.getElementById("defenderSpeedInput");
const fixedDamageInput = document.getElementById("fixedDamageInput");
const receivedDamageInput = document.getElementById("receivedDamageInput");



const attackerStatusSelect = document.getElementById("attackerStatusSelect");
const defenderStatusSelect = document.getElementById("defenderStatusSelect");

const attackerAbilityConditionBox = document.getElementById("attackerAbilityConditionBox");
const defenderAbilityConditionBox = document.getElementById("defenderAbilityConditionBox");
const moveConditionBox = document.getElementById("moveConditionBox");
const damageConditionExtra = document.querySelector(".damage-condition-extra");

let myTeams = JSON.parse(localStorage.getItem("myTeams")) || [];

let selectedBattleRecordIds = new Set();
let isHistorySelectMode = false;

let battleRecords = JSON.parse(localStorage.getItem("battleRecords")) || [];
let latestDamageMemoText = "";
let editingBattleRecordId = null;
let mySelectionOrderState = [];
let opponentSelectionOrderState = [];
let opponentItemInputState = {};
let damageMegaState = {
  attacker: null,
  defender: null
};


let comboSteps = [];
let latestSingleDamageSummary = null;
let isComboInternalCalculation = false;
let damageBoardSelection = {
  myAttackerIndex: null,
  opponentDefenderIndex: null
};
let editingMyTeamId = null;
const megaEvolutionLoops = [
  ["フシギバナ", "メガフシギバナ"],
  ["リザードン", "メガリザードンX", "メガリザードンY"],
  ["カメックス", "メガカメックス"],
  ["スピアー", "メガスピアー"],
  ["ピジョット", "メガピジョット"],
  ["ライチュウ", "メガライチュウX", "メガライチュウY"],
  ["ピクシー", "メガピクシー"],
  ["フーディン", "メガフーディン"],
  ["ウツボット", "メガウツボット"],
  ["ヤドラン", "メガヤドラン"],
  ["ゲンガー", "メガゲンガー"],
  ["ガルーラ", "メガガルーラ"],
  ["スターミー", "メガスターミー"],
  ["カイロス", "メガカイロス"],
  ["ギャラドス", "メガギャラドス"],
  ["プテラ", "メガプテラ"],
  ["カイリュー", "メガカイリュー"],
  ["メガニウム", "メガメガニウム"],
  ["オーダイル", "メガオーダイル"],
  ["デンリュウ", "メガデンリュウ"],
  ["ハガネール", "メガハガネール"],
  ["ハッサム", "メガハッサム"],
  ["ヘラクロス", "メガヘラクロス"],
  ["エアームド", "メガエアームド"],
  ["ヘルガー", "メガヘルガー"],
  ["バンギラス", "メガバンギラス"],
  ["ジュカイン", "メガジュカイン"],
  ["バシャーモ", "メガバシャーモ"],
  ["ラグラージ", "メガラグラージ"],
  ["サーナイト", "メガサーナイト"],
  ["ヤミラミ", "メガヤミラミ"],
  ["クチート", "メガクチート"],
  ["ボスゴドラ", "メガボスゴドラ"],
  ["チャーレム", "メガチャーレム"],
  ["ライボルト", "メガライボルト"],
  ["サメハダー", "メガサメハダー"],
  ["バクーダ", "メガバクーダ"],
  ["チルタリス", "メガチルタリス"],
  ["ジュペッタ", "メガジュペッタ"],
  ["チリーン", "メガチリーン"],
  ["アブソル", "メガアブソル"],
  ["オニゴーリ", "メガオニゴーリ"],
  ["メタグロス", "メガメタグロス"],
  ["ムクホーク", "メガムクホーク"],
  ["ミミロップ", "メガミミロップ"],
  ["ガブリアス", "メガガブリアス"],
  ["ルカリオ", "メガルカリオ"],
  ["ユキノオー", "メガユキノオー"],
  ["エルレイド", "メガエルレイド"],
  ["ユキメノコ", "メガユキメノコ"],
  ["エンブオー", "メガエンブオー"],
  ["ドリュウズ", "メガドリュウズ"],
  ["タブンネ", "メガタブンネ"],
  ["ペンドラー", "メガペンドラー"],
  ["ズルズキン", "メガズルズキン"],
  ["シビルドン", "メガシビルドン"],
  ["シャンデラ", "メガシャンデラ"],
  ["ゴルーグ", "メガゴルーグ"],
  ["ブリガロン", "メガブリガロン"],
  ["マフォクシー", "メガマフォクシー"],
  ["ゲッコウガ", "メガゲッコウガ"],
  ["カエンジシ", "メガカエンジシ"],
  ["フラエッテ(えいえん)", "メガフラエッテ"],
  ["ニャオニクス(オス)", "メガニャオニクス(オス)"],
  ["ニャオニクス(メス)", "メガニャオニクス(メス)"],
  ["カラマネロ", "メガカラマネロ"],
  ["ガメノデス", "メガガメノデス"],
  ["ドラミドロ", "メガドラミドロ"],
  ["ルチャブル", "メガルチャブル"],
  ["ケケンカニ", "メガケケンカニ"],
  ["ジジーロン", "メガジジーロン"],
  ["タイレーツ", "メガタイレーツ"],
  ["スコヴィラン", "メガスコヴィラン"],
  ["キラフロル", "メガキラフロル"]
];

const comboDamagePresetMap = {
  stealthRock_1_8: {
    label: "ステルスロック 1/8",
    numerator: 1,
    denominator: 8
  },
  stealthRock_1_4: {
    label: "ステルスロック 1/4",
    numerator: 1,
    denominator: 4
  },
  stealthRock_1_2: {
    label: "ステルスロック 1/2",
    numerator: 1,
    denominator: 2
  },
  sand_1_16: {
    label: "砂ダメージ 1/16",
    numerator: 1,
    denominator: 16
  },
  leechSeed_1_8: {
    label: "やどりぎのタネ 1/8",
    numerator: 1,
    denominator: 8
  },
  poison_1_8: {
    label: "どく 1/8",
    numerator: 1,
    denominator: 8
  },
  burn_1_16: {
    label: "やけど 1/16",
    numerator: 1,
    denominator: 16
  }
};

const comboHealPresetMap = {
  leftovers_1_16: {
    label: "たべのこし 1/16",
    numerator: 1,
    denominator: 16
  },
  blackSludge_1_16: {
    label: "くろいヘドロ 1/16",
    numerator: 1,
    denominator: 16
  },
  sitrus_1_4: {
    label: "オボンのみ 1/4",
    numerator: 1,
    denominator: 4
  }
};

function getComboPresetMapByType(effectType) {
  return effectType === "heal"
    ? comboHealPresetMap
    : comboDamagePresetMap;
}

function syncComboEffectPresetOptions() {
  if (!comboEffectType || !comboEffectPreset) {
    return;
  }

  const effectType = comboEffectType.value;
  const presetMap = getComboPresetMapByType(effectType);

  comboEffectPreset.innerHTML =
    Object.entries(presetMap).map(([key, preset]) => {
      return `<option value="${key}">${preset.label}</option>`;
    }).join("") +
    `<option value="custom">${
      effectType === "damage" ? "カスタム定数ダメージ" : "カスタム回復"
    }</option>`;
}

const abilityNameList = [
    "もうか",
"げきりゅう",
"しんりょく",
"むしのしらせ",
  "てきおうりょく",
  "いろめがね",
  "すなのちから",
  "テクニシャン",
  "こんじょう",
  "かたいツメ",
  "ちからずく",
  "フェアリースキン",
"スカイスキン",
"かたやぶり",
"そうだいしょう",
"へんげんじざい",
"てつのこぶし",
"がんじょうあご",
"すてみ",
"ぼうおん",
"ぼうだん",
"メガランチャー",
"きれあじ",
"スキルリンク",
"フェアリーオーラ",
"ダークオーラ",

  "あついしぼう",
  "フィルター",
  "ハードロック",
  "マルチスケイル",
  "ファントムガード",
  "ふゆう",
  "もふもふ",
  "たいねつ",
  "すいほう",
  "ちからもち",
"ヨガパワー",
"はりきり",
"ごりむちゅう",
"ファーコート",
"ふしぎなうろこ",
"いわはこび",
"パンクロック",
"サンパワー",
"こおりのりんぷん",
"フェアリーオーラ",
"ダークオーラ",
"オーラブレイク",
"こだいかっせい",
"クォークチャージ",
];

const natureCorrectionMap = {
  "さみしがり": { up: "attack", down: "defense" },
  "いじっぱり": { up: "attack", down: "spAttack" },
  "やんちゃ": { up: "attack", down: "spDefense" },
  "ゆうかん": { up: "attack", down: "speed" },

  "ずぶとい": { up: "defense", down: "attack" },
  "わんぱく": { up: "defense", down: "spAttack" },
  "のうてんき": { up: "defense", down: "spDefense" },
  "のんき": { up: "defense", down: "speed" },

  "ひかえめ": { up: "spAttack", down: "attack" },
  "おっとり": { up: "spAttack", down: "defense" },
  "うっかりや": { up: "spAttack", down: "spDefense" },
  "れいせい": { up: "spAttack", down: "speed" },

  "おだやか": { up: "spDefense", down: "attack" },
  "おとなしい": { up: "spDefense", down: "defense" },
  "しんちょう": { up: "spDefense", down: "spAttack" },
  "なまいき": { up: "spDefense", down: "speed" },

  "おくびょう": { up: "speed", down: "attack" },
  "せっかち": { up: "speed", down: "defense" },
  "ようき": { up: "speed", down: "spAttack" },
  "むじゃき": { up: "speed", down: "spDefense" },

  "てれや": { up: null, down: null },
  "がんばりや": { up: null, down: null },
  "すなお": { up: null, down: null },
  "きまぐれ": { up: null, down: null },
  "まじめ": { up: null, down: null }
};

const natureNameList = Object.keys(natureCorrectionMap);

const pokemonAbilityMap = {
  "マフォクシー": ["もうか", "マジシャン"],
  "メガマフォクシー": ["マジシャン"],

  "ウツボット": ["ようりょくそ", "くいしんぼう"],
  "メガウツボット": ["てきおうりょく"],

  "マスカーニャ": ["しんりょく", "へんげんじざい"],
  "ブリジュラス": ["じきゅうりょく", "がんじょう", "すじがねいり"],
  "カバルドン": ["すなおこし", "すなのちから"],

  "カイリュー": ["せいしんりょく", "マルチスケイル"],
  "ガブリアス": ["すながくれ", "さめはだ"],
  "メガガブリアス": ["すなのちから"],

  "ルカリオ": ["ふくつのこころ", "せいしんりょく", "せいぎのこころ"],
  "メガルカリオ": ["てきおうりょく"],

  "ハッサム": ["むしのしらせ", "テクニシャン", "ライトメタル"],
  "メガハッサム": ["テクニシャン"],

  "ゲンガー": ["のろわれボディ"],
  "メガゲンガー": ["かげふみ"],

  "カイロス": ["かいりきバサミ", "かたやぶり", "じしんかじょう"],
  "メガカイロス": ["スカイスキン"],

  "ギャラドス": ["いかく", "じしんかじょう"],
  "メガギャラドス": ["かたやぶり"],

  "バシャーモ": ["もうか", "かそく"],
  "メガバシャーモ": ["かそく"],

  "ラグラージ": ["げきりゅう", "しめりけ"],
  "メガラグラージ": ["すいすい"],

  "サーナイト": ["シンクロ", "トレース", "テレパシー"],
  "メガサーナイト": ["フェアリースキン"],

  "バンギラス": ["すなおこし", "きんちょうかん"],
  "メガバンギラス": ["すなおこし"],

  "カイリキー": ["こんじょう", "ノーガード", "ふくつのこころ"],

  "ピクシー": ["メロメロボディ", "マジックガード", "てんねん"],
  "フーディン": ["シンクロ", "せいしんりょく", "マジックガード"],
  "メガフーディン": ["トレース"],

  "ボスゴドラ": ["がんじょう", "いしあたま", "ヘヴィメタル"],
  "メガボスゴドラ": ["フィルター"],

  "ヘラクロス": ["むしのしらせ", "こんじょう", "じしんかじょう"],
  "メガヘラクロス": ["スキルリンク"],

  "プテラ": ["いしあたま", "プレッシャー", "きんちょうかん"],
  "メガプテラ": ["かたいツメ"],

"ローブシン": ["こんじょう", "ちからずく", "てつのこぶし"],
"ブリガロン": ["しんりょく", "ぼうだん", "てつのこぶし"],

"ガチゴラス": ["がんじょうあご", "いしあたま"],
"ウオノラゴン": ["ちょすい", "がんじょうあご", "すなかき"],

"ムクホーク": ["いかく", "すてみ"],
"エンブオー": ["もうか", "すてみ"],
"メガエンブオー": ["すてみ"],

"ブリガロン": ["しんりょく", "ぼうだん", "てつのこぶし"],
"ジャラランガ": ["ぼうだん", "ぼうおん", "ぼうじん"],
"バクオング": ["ぼうおん", "きもったま"],
"ブロスター": ["メガランチャー"],
"エルレイド": ["ふくつのこころ", "きれあじ", "せいぎのこころ"],
"メガエルレイド": ["せいしんりょく"],
};

const typeChart = {
  "ノーマル": { "いわ": 0.5, "ゴースト": 0, "はがね": 0.5 },
  "ほのお": { "ほのお": 0.5, "みず": 0.5, "くさ": 2, "こおり": 2, "むし": 2, "いわ": 0.5, "ドラゴン": 0.5, "はがね": 2 },
  "みず": { "ほのお": 2, "みず": 0.5, "くさ": 0.5, "じめん": 2, "いわ": 2, "ドラゴン": 0.5 },
  "でんき": { "みず": 2, "でんき": 0.5, "くさ": 0.5, "じめん": 0, "ひこう": 2, "ドラゴン": 0.5 },
  "くさ": { "ほのお": 0.5, "みず": 2, "くさ": 0.5, "どく": 0.5, "じめん": 2, "ひこう": 0.5, "むし": 0.5, "いわ": 2, "ドラゴン": 0.5, "はがね": 0.5 },
  "こおり": { "ほのお": 0.5, "みず": 0.5, "くさ": 2, "こおり": 0.5, "じめん": 2, "ひこう": 2, "ドラゴン": 2, "はがね": 0.5 },
  "かくとう": { "ノーマル": 2, "こおり": 2, "どく": 0.5, "ひこう": 0.5, "エスパー": 0.5, "むし": 0.5, "いわ": 2, "ゴースト": 0, "あく": 2, "はがね": 2, "フェアリー": 0.5 },
  "どく": { "くさ": 2, "どく": 0.5, "じめん": 0.5, "いわ": 0.5, "ゴースト": 0.5, "はがね": 0, "フェアリー": 2 },
  "じめん": { "ほのお": 2, "でんき": 2, "くさ": 0.5, "どく": 2, "ひこう": 0, "むし": 0.5, "いわ": 2, "はがね": 2 },
  "ひこう": { "でんき": 0.5, "くさ": 2, "かくとう": 2, "むし": 2, "いわ": 0.5, "はがね": 0.5 },
  "エスパー": { "かくとう": 2, "どく": 2, "エスパー": 0.5, "あく": 0, "はがね": 0.5 },
  "むし": { "ほのお": 0.5, "くさ": 2, "かくとう": 0.5, "どく": 0.5, "ひこう": 0.5, "エスパー": 2, "ゴースト": 0.5, "あく": 2, "はがね": 0.5, "フェアリー": 0.5 },
  "いわ": { "ほのお": 2, "こおり": 2, "かくとう": 0.5, "じめん": 0.5, "ひこう": 2, "むし": 2, "はがね": 0.5 },
  "ゴースト": { "ノーマル": 0, "エスパー": 2, "ゴースト": 2, "あく": 0.5 },
  "ドラゴン": { "ドラゴン": 2, "はがね": 0.5, "フェアリー": 0 },
  "あく": { "かくとう": 0.5, "エスパー": 2, "ゴースト": 2, "あく": 0.5, "フェアリー": 0.5 },
  "はがね": { "ほのお": 0.5, "みず": 0.5, "でんき": 0.5, "こおり": 2, "いわ": 2, "はがね": 0.5, "フェアリー": 2 },
  "フェアリー": { "ほのお": 0.5, "かくとう": 2, "どく": 0.5, "ドラゴン": 2, "あく": 2, "はがね": 0.5 }
};

function saveMyTeamsToStorage() {
  localStorage.setItem("myTeams", JSON.stringify(myTeams));
}

function saveBattleRecordsToStorage() {
  localStorage.setItem("battleRecords", JSON.stringify(battleRecords));
}

function cloneObject(value) {
  return JSON.parse(JSON.stringify(value));
}

function findPokemonData(name) {
  return pokemonDataList.find(pokemon => pokemon.name === name) || null;
}

function findMoveData(name) {
  return moveDataList.find(move => move.name === name) || null;
}

function findItemData(name) {
  if (typeof itemDataList === "undefined") {
    return null;
  }

  return itemDataList.find(item => item.name === name) || null;
}

function findMegaLoop(pokemonName) {
  return megaEvolutionLoops.find(loop => loop.includes(pokemonName)) || null;
}

function getNextMegaName(pokemonName) {
  const loop = findMegaLoop(pokemonName);

  if (!loop) {
    return null;
  }

  const currentIndex = loop.indexOf(pokemonName);

  if (currentIndex === -1) {
    return null;
  }

  return loop[(currentIndex + 1) % loop.length];
}

function setupAutocompleteLists() {
  const pokemonNameDataList = document.getElementById("pokemonNameList");
  const moveNameDataList = document.getElementById("moveNameDataList");
  const damageMoveNameDataList = document.getElementById("damageMoveNameDataList");
  const abilityNameDataList = document.getElementById("abilityNameList");
  const itemNameDataList = document.getElementById("itemNameDataList");
  const natureNameDataList = document.getElementById("natureNameList");

  if (pokemonNameDataList) {
    pokemonNameDataList.innerHTML = "";

    const pokemonNames = new Set();

    if (typeof regulationMAPokemonNames !== "undefined") {
      regulationMAPokemonNames.forEach(name => pokemonNames.add(name));
    }

    pokemonDataList.forEach(pokemon => pokemonNames.add(pokemon.name));

    [...pokemonNames].sort((a, b) => a.localeCompare(b, "ja")).forEach(name => {
      const option = document.createElement("option");
      option.value = name;
      pokemonNameDataList.appendChild(option);
    });
  }

  if (moveNameDataList) {
    moveNameDataList.innerHTML = "";

    const moveNames = new Set();

    moveDataList.forEach(move => {
      moveNames.add(move.name);
    });

    [...moveNames].sort((a, b) => a.localeCompare(b, "ja")).forEach(name => {
      const option = document.createElement("option");
      option.value = name;
      moveNameDataList.appendChild(option);
    });
  }

  if (damageMoveNameDataList) {
    damageMoveNameDataList.innerHTML = "";

    const damageMoveNames = new Set();

    moveDataList.forEach(move => {
      if (move.category === "physical" || move.category === "special") {
        damageMoveNames.add(move.name);
      }
    });

    [...damageMoveNames].sort((a, b) => a.localeCompare(b, "ja")).forEach(name => {
      const option = document.createElement("option");
      option.value = name;
      damageMoveNameDataList.appendChild(option);
    });
  }

  if (abilityNameDataList) {
    abilityNameDataList.innerHTML = "";

    abilityNameList.forEach(ability => {
      const option = document.createElement("option");
      option.value = ability;
      abilityNameDataList.appendChild(option);
    });
  }

  if (itemNameDataList && typeof itemDataList !== "undefined") {
    itemNameDataList.innerHTML = "";

    itemDataList
      .map(item => item.name)
      .sort((a, b) => a.localeCompare(b, "ja"))
      .forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        itemNameDataList.appendChild(option);
      });
  }

  if (natureNameDataList) {
    natureNameDataList.innerHTML = "";

    natureNameList.forEach(natureName => {
      const option = document.createElement("option");
      option.value = natureName;
      natureNameDataList.appendChild(option);
    });
  }
}

function setDatalistOptions(datalistId, values) {
  const datalist = document.getElementById(datalistId);

  if (!datalist) {
    return;
  }

  datalist.innerHTML = "";

  values.forEach(value => {
    const option = document.createElement("option");
    option.value = value;
    datalist.appendChild(option);
  });
}

function getAbilityCandidatesForPokemon(pokemonName) {
  const directAbilities = pokemonAbilityMap[pokemonName];

  if (directAbilities && directAbilities.length > 0) {
    return directAbilities;
  }

  return abilityNameList;
}

function updateAbilityOptions() {
  const attackerName = getCurrentDamagePokemonName("attacker") || attackerPokemonInput.value.trim();
  const defenderName = getCurrentDamagePokemonName("defender") || defenderPokemonInput.value.trim();

  const attackerAbilities = getAbilityCandidatesForPokemon(attackerName);
  const defenderAbilities = getAbilityCandidatesForPokemon(defenderName);

  setDatalistOptions("attackerAbilityList", attackerAbilities);
  setDatalistOptions("defenderAbilityList", defenderAbilities);
}

function getPokemonNamesForSide(side) {
  if (side === "my") {
    const team = getSelectedMyTeam();

    if (!team) {
      return [];
    }

    return team.pokemons.map(pokemon => pokemon.name);
  }

  if (side === "opponent") {
    return getOpponentParty();
  }

  if (side === "manual") {
    return pokemonDataList
      .map(pokemon => pokemon.name)
      .sort((a, b) => a.localeCompare(b, "ja"));
  }

  return [];
}

function updateSidePokemonInputs() {
  const attackerNames = getPokemonNamesForSide(attackerSideSelect.value);
  const defenderNames = getPokemonNamesForSide(defenderSideSelect.value);

  setDatalistOptions("attackerPokemonList", attackerNames);
  setDatalistOptions("defenderPokemonList", defenderNames);

  if (!attackerNames.includes(attackerPokemonInput.value)) {
    attackerPokemonInput.value = attackerNames[0] || "";
  }

  if (!defenderNames.includes(defenderPokemonInput.value)) {
    defenderPokemonInput.value = defenderNames[0] || "";
  }

  if (attackerSideSelect.value === "manual") {
    attackerPokemonInput.setAttribute("list", "pokemonNameList");
    attackerPokemonInput.placeholder = "ポケモン名を入力";
  } else {
    attackerPokemonInput.setAttribute("list", "attackerPokemonList");
    attackerPokemonInput.placeholder = attackerSideSelect.value === "my"
      ? "自分のポケモン名"
      : "相手のポケモン名";
  }

  if (defenderSideSelect.value === "manual") {
    defenderPokemonInput.setAttribute("list", "pokemonNameList");
    defenderPokemonInput.placeholder = "ポケモン名を入力";
  } else {
    defenderPokemonInput.setAttribute("list", "defenderPokemonList");
    defenderPokemonInput.placeholder = defenderSideSelect.value === "my"
      ? "自分のポケモン名"
      : "相手のポケモン名";
  }
}

function renderMyTeamForm() {
  myTeamForm.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    card.className = "pokemon-card compact-team-pokemon-card";

    card.innerHTML = `
      <div class="compact-team-card-header">
        <div class="compact-team-slot">
          ${i + 1}匹目
        </div>

        <div class="compact-team-name-area">
          <label>ポケモン名</label>
          <input
            type="text"
            class="my-name-input"
            data-index="${i}"
            list="pokemonNameList"
            placeholder="ポケモン名"
          >
        </div>

        <div class="compact-team-icon-preview" data-index="${i}">
          <span class="small-text">未選択</span>
        </div>
      </div>

      <div class="compact-team-main-grid">
        <div class="compact-team-left">
          <div class="compact-team-two-grid">
            <div class="form-group">
              <label>タイプ1</label>
              <input type="text" class="my-type1-input" data-index="${i}" placeholder="タイプ1">
            </div>

            <div class="form-group">
              <label>タイプ2</label>
              <input type="text" class="my-type2-input" data-index="${i}" placeholder="タイプ2">
            </div>
          </div>

          <div class="compact-team-two-grid">
            <div class="form-group">
              <label>特性</label>
      <input
  type="text"
  class="my-ability-input"
  data-index="${i}"
  list="myAbilityList-${i}"
  placeholder="特性"
>

<datalist id="myAbilityList-${i}"></datalist>
            </div>

            <div class="form-group">
              <label>持ち物</label>
              <input
                type="text"
                class="my-item-input"
                data-index="${i}"
                list="itemNameDataList"
                placeholder="持ち物"
              >
            </div>
          </div>
        </div>

        <div class="compact-team-moves">
          <label>技</label>

          <div class="compact-team-move-grid">
            <input type="text" class="my-move-input" data-index="${i}" data-move-index="0" list="moveNameDataList" placeholder="技1">
            <input type="text" class="my-move-input" data-index="${i}" data-move-index="1" list="moveNameDataList" placeholder="技2">
            <input type="text" class="my-move-input" data-index="${i}" data-move-index="2" list="moveNameDataList" placeholder="技3">
            <input type="text" class="my-move-input" data-index="${i}" data-move-index="3" list="moveNameDataList" placeholder="技4">
          </div>
        </div>
      </div>

      <div class="compact-team-bottom-grid">
        <div class="compact-team-ev-area">
          <div class="compact-team-section-title">努力値 / 能力ポイント</div>

          <div class="compact-team-ev-grid">
            <label>
              H
              <input type="number" class="my-hp-ev-input" data-index="${i}" min="0" max="32" value="0">
            </label>

            <label>
              A
              <input type="number" class="my-attack-ev-input" data-index="${i}" min="0" max="32" value="0">
            </label>

            <label>
              B
              <input type="number" class="my-defense-ev-input" data-index="${i}" min="0" max="32" value="0">
            </label>

            <label>
              C
              <input type="number" class="my-spattack-ev-input" data-index="${i}" min="0" max="32" value="0">
            </label>

            <label>
              D
              <input type="number" class="my-spdefense-ev-input" data-index="${i}" min="0" max="32" value="0">
            </label>

            <label>
              S
              <input type="number" class="my-speed-ev-input" data-index="${i}" min="0" max="32" value="0">
            </label>
          </div>
        </div>

        <div class="compact-team-nature-area">
          <div class="compact-team-section-title">性格</div>

          <input
            type="text"
            class="my-nature-name-input"
            data-index="${i}"
            list="natureNameList"
            placeholder="例：いじっぱり"
          >

          <div class="my-nature-preview compact-nature-preview" data-index="${i}">
            性格補正なし
          </div>
        </div>
      </div>

      <div class="compact-team-stat-preview">
        <div>
          <span class="compact-team-section-title">種族値</span>
          <div class="my-base-stat-box compact-stat-box" data-index="${i}">
            <p class="small-text">ポケモン名を入力</p>
          </div>
        </div>

        <div>
          <span class="compact-team-section-title">実数値</span>
          <div class="my-actual-stat-box compact-stat-box" data-index="${i}">
            <p class="small-text">努力値を入力</p>
          </div>
        </div>
      </div>
    `;

    myTeamForm.appendChild(card);

    const nameInput = card.querySelector(".my-name-input");
    const type1Input = card.querySelector(".my-type1-input");
    const type2Input = card.querySelector(".my-type2-input");
    const iconPreview = card.querySelector(".compact-team-icon-preview");

nameInput.addEventListener("input", () => {
  const pokemonData = findPokemonData(nameInput.value.trim());

  if (!pokemonData) {
    type1Input.value = "";
    type2Input.value = "";
    updateMyAbilityOptions(i, null);
    iconPreview.innerHTML = `<span class="small-text">未選択</span>`;
    updateMyPokemonStatPreview(i);
    return;
  }

  type1Input.value = pokemonData.types[0] || "";
  type2Input.value = pokemonData.types[1] || "";

  updateMyAbilityOptions(i, pokemonData);

  iconPreview.innerHTML = createPokemonIconHtml(pokemonData.name, "pokemon-icon");

  updateMyPokemonStatPreview(i);
});

    card.querySelectorAll(`
      .my-hp-ev-input,
      .my-attack-ev-input,
      .my-defense-ev-input,
      .my-spattack-ev-input,
      .my-spdefense-ev-input,
      .my-speed-ev-input,
      .my-nature-name-input
    `).forEach(input => {
      input.addEventListener("input", () => {
        updateMyPokemonStatPreview(i);
      });

      input.addEventListener("change", () => {
        updateMyPokemonStatPreview(i);
      });
    });
  }
}

function collectMyTeamFromForm() {
  const pokemons = [];

  for (let i = 0; i < 6; i++) {
    const name = document.querySelector(`.my-name-input[data-index="${i}"]`).value.trim();
    const type1 = document.querySelector(`.my-type1-input[data-index="${i}"]`).value.trim();
    const type2 = document.querySelector(`.my-type2-input[data-index="${i}"]`).value.trim();
    const ability = document.querySelector(`.my-ability-input[data-index="${i}"]`).value.trim();
    const item = document.querySelector(`.my-item-input[data-index="${i}"]`).value.trim();

    const moves = [...document.querySelectorAll(`.my-move-input[data-index="${i}"]`)]
      .map(input => input.value.trim())
      .filter(Boolean);

    if (!name) {
      continue;
    }

    const pokemonData = findPokemonData(name);

    const evs = {
      hp: clampAbilityPoint(document.querySelector(`.my-hp-ev-input[data-index="${i}"]`).value),
      attack: clampAbilityPoint(document.querySelector(`.my-attack-ev-input[data-index="${i}"]`).value),
      defense: clampAbilityPoint(document.querySelector(`.my-defense-ev-input[data-index="${i}"]`).value),
      spAttack: clampAbilityPoint(document.querySelector(`.my-spattack-ev-input[data-index="${i}"]`).value),
      spDefense: clampAbilityPoint(document.querySelector(`.my-spdefense-ev-input[data-index="${i}"]`).value),
      speed: clampAbilityPoint(document.querySelector(`.my-speed-ev-input[data-index="${i}"]`).value)
    };

const natureName =
  document.querySelector(`.my-nature-name-input[data-index="${i}"]`).value.trim();

const natures = {
  name: natureName,
  attack: getNatureCorrection(natureName, "attack"),
  defense: getNatureCorrection(natureName, "defense"),
  spAttack: getNatureCorrection(natureName, "spAttack"),
  spDefense: getNatureCorrection(natureName, "spDefense"),
  speed: getNatureCorrection(natureName, "speed")
};

    let stats = {
      hp: "",
      attack: "",
      defense: "",
      spAttack: "",
      spDefense: "",
      speed: ""
    };

    if (pokemonData) {
      const level = Number(damageLevelInput.value) || 50;

      stats = {
        hp: calculateChampionsHpStat(pokemonData.baseStats.hp, evs.hp, level),
        attack: calculateChampionsOtherStat(pokemonData.baseStats.attack, evs.attack, level, natures.attack),
        defense: calculateChampionsOtherStat(pokemonData.baseStats.defense, evs.defense, level, natures.defense),
        spAttack: calculateChampionsOtherStat(pokemonData.baseStats.spAttack, evs.spAttack, level, natures.spAttack),
        spDefense: calculateChampionsOtherStat(pokemonData.baseStats.spDefense, evs.spDefense, level, natures.spDefense),
        speed: calculateChampionsOtherStat(pokemonData.baseStats.speed, evs.speed, level, natures.speed)
      };
    }

    pokemons.push({
      name,
      ability,
      item,
      types: [type1, type2].filter(Boolean),
      moves,
      evs,
      natures,
      stats
    });
  }

  return pokemons;
}

function saveMyTeam() {
  const teamName = myTeamNameInput.value.trim() || `パーティ${myTeams.length + 1}`;
  const pokemons = collectMyTeamFromForm();

  if (pokemons.length === 0) {
    alert("ポケモンを1匹以上入力してください。");
    return;
  }

  if (editingMyTeamId !== null) {
const team = findMyTeamById(editingMyTeamId);

    if (!team) {
      editingMyTeamId = null;
      alert("編集中のパーティが見つかりませんでした。");
      return;
    }

    team.teamName = teamName;
    team.pokemons = pokemons;

    saveMyTeamsToStorage();

    renderMyTeamSelect();
    myTeamSelect.value = String(team.id);
    renderSelectedMyTeamPreview();
    renderMyTeamListBoard();
    updateDamagePokemonOptions();

editingMyTeamId = null;
saveMyTeamButton.textContent = "自分のパーティを保存";

if (cancelMyTeamEditButton) {
  cancelMyTeamEditButton.style.display = "none";
}

switchPage("teamListPage");
window.scrollTo({ top: 0, behavior: "smooth" });

alert("パーティを上書き保存しました。");
return;
  }

  const team = {
    id: Date.now(),
    teamName,
    pokemons
  };

  myTeams.push(team);
  saveMyTeamsToStorage();

renderMyTeamSelect();
myTeamSelect.value = String(team.id);
renderSelectedMyTeamPreview();
renderMyTeamListBoard();
updateDamagePokemonOptions();

switchPage("teamListPage");
window.scrollTo({ top: 0, behavior: "smooth" });

if (cancelMyTeamEditButton) {
  cancelMyTeamEditButton.style.display = "none";
}

alert("自分のパーティを保存しました。");
}

function renderMyTeamSelect() {
  myTeamSelect.innerHTML = "";

  if (myTeams.length === 0) {
    myTeamSelect.innerHTML = `<option value="">登録パーティなし</option>`;
    return;
  }

  myTeams.forEach(team => {
    const option = document.createElement("option");
    option.value = team.id;
    option.textContent = team.teamName;
    myTeamSelect.appendChild(option);
  });
}

function renderHistoryTeamTabs() {
  if (!historyTeamFilter || historyTeamTabs.length === 0) {
    return;
  }

  const currentValue = getSelectedHistoryTeamFilterValue();

  const tabItems = [
    {
      value: "all",
      label: "全パーティ",
      count: battleRecords.length
    },
    ...myTeams.map(team => {
      return {
        value: String(team.id),
        label: team.teamName,
        count: battleRecords.filter(record => record.myTeamId === team.id).length
      };
    })
  ];

  const noTeamRecordCount = battleRecords.filter(record => !record.myTeamId).length;

  if (noTeamRecordCount > 0) {
    tabItems.push({
      value: "no-team",
      label: "未記録",
      count: noTeamRecordCount
    });
  }

  const tabsHtml = tabItems.map(item => `
    <button
      type="button"
      class="history-team-tab ${String(item.value) === String(currentValue) ? "active" : ""}"
      data-value="${item.value}"
    >
      <span>${item.label}</span>
      <small>${item.count}戦</small>
    </button>
  `).join("");

  historyTeamTabs.forEach(tabArea => {
    tabArea.innerHTML = tabsHtml;

    tabArea.querySelectorAll(".history-team-tab").forEach(button => {
      button.addEventListener("click", () => {
        historyTeamFilter.value = button.dataset.value;

        renderHistoryTeamTabs();
        renderTeamHistorySummary();
        renderBattleBoard();
        renderBattleStats();
      });
    });
  });
}

function renderHistoryTeamFilter() {
  if (!historyTeamFilter) {
    return;
  }

  const currentValue = historyTeamFilter.value || "all";

  const teamOptions = myTeams.map(team => {
    const recordCount = battleRecords.filter(record => record.myTeamId === team.id).length;

    return `
      <option value="${team.id}">
        ${team.teamName}（${recordCount}戦）
      </option>
    `;
  }).join("");

  const noTeamRecordCount = battleRecords.filter(record => !record.myTeamId).length;

  historyTeamFilter.innerHTML = `
    <option value="all">全パーティ（${battleRecords.length}戦）</option>
    ${teamOptions}
    ${
      noTeamRecordCount > 0
        ? `<option value="no-team">使用パーティ未記録（${noTeamRecordCount}戦）</option>`
        : ""
    }
  `;

  const optionValues = [...historyTeamFilter.options].map(option => option.value);

  if (optionValues.includes(currentValue)) {
    historyTeamFilter.value = currentValue;
  } else {
    historyTeamFilter.value = "all";
  }

  renderHistoryTeamTabs();
}


function getSelectedHistoryTeamFilterValue() {
  return historyTeamFilter ? historyTeamFilter.value : "all";
}


function renderMyTeamListBoard() {
  if (!myTeamListBoard) {
    return;
  }

  if (myTeams.length === 0) {
    myTeamListBoard.innerHTML = `
      <div class="empty-team-list-box">
        <p>まだ登録済みパーティはありません。</p>
        <button type="button" class="main-button" onclick="switchPage('teamPage')">
          パーティを作成する
        </button>
      </div>
    `;
    return;
  }

  myTeamListBoard.innerHTML = myTeams.map(team => `
    <div class="team-list-card">
      <div class="team-list-summary">
        <div class="team-list-title-area">
          <h3>${team.teamName}</h3>
          <p class="small-text">${team.pokemons.length}匹登録済み</p>
        </div>

        <div class="team-list-icons">
          ${team.pokemons.map(pokemon => `
            <span class="team-list-pokemon-icon" title="${pokemon.name}">
              ${createPokemonIconHtml(pokemon.name, "pokemon-icon")}
              ${
                pokemon.item
                  ? `<span class="team-list-item-icon">${createItemIconHtml(pokemon.item, "item-icon mini")}</span>`
                  : ""
              }
            </span>
          `).join("")}
        </div>

        <div class="team-list-actions">
          <button type="button" class="sub-button use-my-team-button" data-id="${team.id}">
            使用する
          </button>

          <button type="button" class="sub-button edit-my-team-button" data-id="${team.id}">
            編集
          </button>

          <button type="button" class="sub-button duplicate-my-team-button" data-id="${team.id}">
            複製
          </button>

          <button type="button" class="team-delete-button delete-my-team-button" data-id="${team.id}">
            削除
          </button>
        </div>
      </div>

      <details class="team-detail-details">
        <summary>詳細を表示</summary>

        <div class="team-detail-grid">
          ${team.pokemons.map((pokemon, index) => `
            <div class="team-detail-pokemon-card">
              <div class="team-detail-pokemon-header">
                <span class="team-detail-slot">${index + 1}</span>

                <div class="team-detail-icon">
                  ${createPokemonIconHtml(pokemon.name, "pokemon-icon")}
                </div>

                <div>
                  <h4>${pokemon.name}</h4>

                  <div class="team-detail-types">
                    ${(pokemon.types || []).map(type => `
                      <span class="type-badge" data-type="${type}">${type}</span>
                    `).join("")}
                  </div>
                </div>
              </div>

              <div class="team-detail-info-grid">
                <div>
                  <span class="team-detail-label">特性</span>
                  <strong>${pokemon.ability || "未入力"}</strong>
                </div>

                <div>
                  <span class="team-detail-label">持ち物</span>
                  <strong>
                    ${
                      pokemon.item
                        ? `${createItemIconHtml(pokemon.item, "item-icon small")} ${pokemon.item}`
                        : "未入力"
                    }
                  </strong>
                </div>
              </div>

            <div class="team-move-details">
  <span class="team-detail-label">技</span>

  <div class="team-move-list">
    ${
      pokemon.moves && pokemon.moves.length > 0
        ? pokemon.moves.map(move => `<span>${move}</span>`).join("")
        : `<span>技未入力</span>`
    }
  </div>
</div>

<div class="team-stat-details">
  <span class="team-detail-label">努力値・実数値</span>

  <div class="team-stat-detail-grid">
    <div>
      <span class="team-detail-label">努力値</span>
      <div class="team-mini-stat-grid">
        <span>H ${pokemon.evs?.hp ?? 0}</span>
        <span>A ${pokemon.evs?.attack ?? 0}</span>
        <span>B ${pokemon.evs?.defense ?? 0}</span>
        <span>C ${pokemon.evs?.spAttack ?? 0}</span>
        <span>D ${pokemon.evs?.spDefense ?? 0}</span>
        <span>S ${pokemon.evs?.speed ?? 0}</span>
      </div>
    </div>

    <div>
      <span class="team-detail-label">実数値</span>
      <div class="team-mini-stat-grid actual">
        <span>H ${pokemon.stats?.hp || "-"}</span>
        <span>A ${pokemon.stats?.attack || "-"}</span>
        <span>B ${pokemon.stats?.defense || "-"}</span>
        <span>C ${pokemon.stats?.spAttack || "-"}</span>
        <span>D ${pokemon.stats?.spDefense || "-"}</span>
        <span>S ${pokemon.stats?.speed || "-"}</span>
      </div>
    </div>

    <div>
      <span class="team-detail-label">性格</span>
      <strong>${pokemon.natures?.name || "未入力"}</strong>
    </div>
  </div>
</div>
          
            </div>
          `).join("")}
        </div>
      </details>
    </div>
  `).join("");

  document.querySelectorAll(".use-my-team-button").forEach(button => {
    button.addEventListener("click", () => {
      useMyTeam(button.dataset.id);
    });
  });

  document.querySelectorAll(".edit-my-team-button").forEach(button => {
    button.addEventListener("click", () => {
    startEditMyTeam(button.dataset.id);
    });
  });

  document.querySelectorAll(".duplicate-my-team-button").forEach(button => {
    button.addEventListener("click", () => {
     duplicateMyTeam(button.dataset.id);
    });
  });

  document.querySelectorAll(".delete-my-team-button").forEach(button => {
    button.addEventListener("click", () => {
     deleteMyTeam(button.dataset.id);
    });
  });
}

function useMyTeam(teamId) {
  const team = findMyTeamById(teamId);

  if (!team) {
    alert("パーティが見つかりませんでした。");
    return;
  }

  myTeamSelect.value = String(team.id);

  renderSelectedMyTeamPreview();
  renderMySelectionArea();
  updateDamagePokemonOptions();
  renderDamageMyPartyList();
  renderAttackerMoveButtons();

  alert(`${team.teamName} を使用パーティに設定しました。`);
}

function startEditMyTeam(teamId) {
  const team = myTeams.find(team => String(team.id) === String(teamId));

  if (!team) {
    alert("編集するパーティが見つかりませんでした。");
    return;
  }

  // 編集中のパーティIDを保存
  editingMyTeamId = team.id;

  // 先にパーティ登録画面へ移動
  switchPage("teamPage");

  // フォームを確実に作り直す
  renderMyTeamForm();

  // パーティ名を入れる
  myTeamNameInput.value = team.teamName || "";

  // 6枠分、編集したいパーティの内容を入れる
  for (let i = 0; i < 6; i++) {
    const pokemon = team.pokemons[i] || null;

    const nameInput = document.querySelector(`.my-name-input[data-index="${i}"]`);
    const type1Input = document.querySelector(`.my-type1-input[data-index="${i}"]`);
    const type2Input = document.querySelector(`.my-type2-input[data-index="${i}"]`);
    const abilityInput = document.querySelector(`.my-ability-input[data-index="${i}"]`);
    const itemInput = document.querySelector(`.my-item-input[data-index="${i}"]`);
    const iconPreview = document.querySelector(`.compact-team-icon-preview[data-index="${i}"]`);

    const hpEvInput = document.querySelector(`.my-hp-ev-input[data-index="${i}"]`);
    const attackEvInput = document.querySelector(`.my-attack-ev-input[data-index="${i}"]`);
    const defenseEvInput = document.querySelector(`.my-defense-ev-input[data-index="${i}"]`);
    const spAttackEvInput = document.querySelector(`.my-spattack-ev-input[data-index="${i}"]`);
    const spDefenseEvInput = document.querySelector(`.my-spdefense-ev-input[data-index="${i}"]`);
    const speedEvInput = document.querySelector(`.my-speed-ev-input[data-index="${i}"]`);
    const natureInput = document.querySelector(`.my-nature-name-input[data-index="${i}"]`);

    if (!nameInput || !type1Input || !type2Input || !abilityInput || !itemInput) {
      continue;
    }

    // 空き枠の場合は初期化
    if (!pokemon) {
      nameInput.value = "";
      type1Input.value = "";
      type2Input.value = "";
      abilityInput.value = "";
      itemInput.value = "";

      document.querySelectorAll(`.my-move-input[data-index="${i}"]`).forEach(input => {
        input.value = "";
      });

      if (hpEvInput) hpEvInput.value = 0;
      if (attackEvInput) attackEvInput.value = 0;
      if (defenseEvInput) defenseEvInput.value = 0;
      if (spAttackEvInput) spAttackEvInput.value = 0;
      if (spDefenseEvInput) spDefenseEvInput.value = 0;
      if (speedEvInput) speedEvInput.value = 0;
      if (natureInput) natureInput.value = "";

      updateMyAbilityOptions(i, null);

      if (iconPreview) {
        iconPreview.innerHTML = `<span class="small-text">未選択</span>`;
      }

      updateMyPokemonStatPreview(i);
      continue;
    }

    // ポケモン名・タイプ・特性・持ち物
    nameInput.value = pokemon.name || "";
    type1Input.value = pokemon.types?.[0] || "";
    type2Input.value = pokemon.types?.[1] || "";
    itemInput.value = pokemon.item || "";

    // 特性候補を出してから、保存済みの特性を入れる
    const pokemonData = pokemon.name ? findPokemonData(pokemon.name) : null;

    if (pokemonData) {
      updateMyAbilityOptions(i, pokemonData);
    } else {
      updateMyAbilityOptions(i, null);
    }

    abilityInput.value = pokemon.ability || "";

    // 技
    document.querySelectorAll(`.my-move-input[data-index="${i}"]`).forEach((input, moveIndex) => {
      input.value = pokemon.moves ? pokemon.moves[moveIndex] || "" : "";
    });

    // 努力値・能力ポイント
    if (hpEvInput) hpEvInput.value = pokemon.evs?.hp ?? 0;
    if (attackEvInput) attackEvInput.value = pokemon.evs?.attack ?? 0;
    if (defenseEvInput) defenseEvInput.value = pokemon.evs?.defense ?? 0;
    if (spAttackEvInput) spAttackEvInput.value = pokemon.evs?.spAttack ?? 0;
    if (spDefenseEvInput) spDefenseEvInput.value = pokemon.evs?.spDefense ?? 0;
    if (speedEvInput) speedEvInput.value = pokemon.evs?.speed ?? 0;

    // 性格
    if (natureInput) {
      natureInput.value = pokemon.natures?.name || "";
    }

    // アイコン
    if (iconPreview) {
      iconPreview.innerHTML = pokemon.name
        ? createPokemonIconHtml(pokemon.name, "pokemon-icon")
        : `<span class="small-text">未選択</span>`;
    }

    updateMyPokemonStatPreview(i);
  }

  // 保存ボタンを編集モード表示にする
saveMyTeamButton.textContent = "編集中のパーティを上書き保存";

if (cancelMyTeamEditButton) {
  cancelMyTeamEditButton.style.display = "inline-block";
}

window.scrollTo({ top: 0, behavior: "smooth" });
}

function cancelEditMyTeam() {
  editingMyTeamId = null;

  myTeamNameInput.value = "";

  renderMyTeamForm();

  saveMyTeamButton.textContent = "自分のパーティを保存";

  if (cancelMyTeamEditButton) {
    cancelMyTeamEditButton.style.display = "none";
  }

  switchPage("teamListPage");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function duplicateMyTeam(teamId) {
  const team = findMyTeamById(teamId);

  if (!team) {
    return;
  }

  const copiedTeam = {
    ...cloneObject(team),
    id: Date.now(),
    teamName: `${team.teamName} コピー`
  };

  myTeams.push(copiedTeam);
  saveMyTeamsToStorage();

  renderMyTeamSelect();
  renderMyTeamListBoard();

  alert("パーティを複製しました。");
}

function deleteMyTeam(teamId) {
  const team = findMyTeamById(teamId);

  if (!team) {
    return;
  }

  if (!confirm(`${team.teamName} を削除しますか？`)) {
    return;
  }

  myTeams = myTeams.filter(team => team.id !== teamId);

  if (editingMyTeamId === teamId) {
    editingMyTeamId = null;
    saveMyTeamButton.textContent = "自分のパーティを保存";
  }

  saveMyTeamsToStorage();

  renderMyTeamSelect();
  renderSelectedMyTeamPreview();
  renderMyTeamListBoard();
  updateDamagePokemonOptions();

  alert("パーティを削除しました。");
}

function isSameTeamId(idA, idB) {
  return String(idA) === String(idB);
}

function findMyTeamById(teamId) {
  return myTeams.find(team => isSameTeamId(team.id, teamId)) || null;
}

function getSelectedMyTeam() {
  const id = myTeamSelect.value;
  return findMyTeamById(id);
}

function renderSelectedMyTeamPreview() {
  const team = getSelectedMyTeam();

  if (!team) {
    selectedMyTeamPreview.innerHTML = "<p>使用パーティを選択してください。</p>";
    return;
  }

  selectedMyTeamPreview.innerHTML = `
    <h3>${team.teamName}</h3>
    <div class="party-list">
      ${team.pokemons.map(pokemon => `
        <span class="party-chip">
          ${createPokemonIconHtml(pokemon.name, "pokemon-icon small")}
          ${pokemon.name}
        </span>
      `).join("")}
    </div>
  `;
    renderDamageMyPartyList();
    renderMySelectionArea();
}

function renderDamageMyPartyList() {
  if (!damageMyPartyList) {
    return;
  }

  const team = getSelectedMyTeam();

  if (!team || team.pokemons.length === 0) {
    damageMyPartyList.innerHTML = `<p class="small-text">使用パーティを選択してください。</p>`;
    return;
  }

  damageMyPartyList.innerHTML = team.pokemons.map((pokemon, index) => `
    <button
      type="button"
     class="damage-party-icon-button ${damageBoardSelection.myAttackerIndex === index ? "selected-attacker" : ""}"
      data-index="${index}"
      title="${pokemon.name}"
    >
      ${createPokemonIconHtml(pokemon.name, "pokemon-icon")}
    </button>
  `).join("");

  damageMyPartyList.querySelectorAll(".damage-party-icon-button").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      setDamageAttackerFromMyParty(index);
    });
  });
}

function renderDamageOpponentPartyList() {
  if (!damageOpponentPartyList) {
    return;
  }

  const party = getOpponentParty();

  if (party.length === 0) {
    damageOpponentPartyList.innerHTML = `<p class="small-text">相手パーティを入力してください。</p>`;
    return;
  }

damageOpponentPartyList.innerHTML = party.map((name, index) => `
  <button
    type="button"
    class="damage-party-icon-button ${damageBoardSelection.opponentDefenderIndex === index ? "selected-defender" : ""}"
    data-index="${index}"
    title="${name}"
  >
    ${createPokemonIconHtml(name, "pokemon-icon")}
  </button>
`).join("");

  damageOpponentPartyList.querySelectorAll(".damage-party-icon-button").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      setDamageDefenderFromOpponentParty(index);
    });
  });
}

function setDamageAttackerFromMyParty(index) {
  const team = getSelectedMyTeam();

  if (!team || !team.pokemons[index]) {
    return;
  }

  const pokemon = team.pokemons[index];

  attackerSideSelect.value = "my";
  attackerPokemonInput.value = pokemon.name;
  damageMegaState.attacker = null;


  damageBoardSelection.myAttackerIndex = index;
renderDamageMyPartyList();

updateDamagePokemonOptions();
renderAttackerMoveButtons();

syncDamageItemInputsFromCurrentPokemon();
syncDamageItemCheckboxes();

syncAttackerAdjustmentFromRegisteredPokemon(pokemon);
scheduleAutoDamageCalculation();

renderPokemonPreview(attackerPokemonPreview, pokemon.name);
}

function setDamageDefenderFromOpponentParty(index) {
  const party = getOpponentParty();

  if (!party[index]) {
    return;
  }

  const name = party[index];

  defenderSideSelect.value = "opponent";
  defenderPokemonInput.value = name;
  damageMegaState.defender = null;

  damageBoardSelection.opponentDefenderIndex = index;

  updateDamagePokemonOptions();
  renderDamageOpponentPartyList();

  syncDamageItemInputsFromCurrentPokemon();
syncDamageItemCheckboxes();

  renderPokemonPreview(defenderPokemonPreview, name);
}

function renderAttackerMoveButtons() {
  if (!attackerMoveButtons) {
    return;
  }

  const attacker = getDamagePokemon(
    attackerSideSelect.value,
    attackerPokemonInput.value,
    "attacker"
  );

  if (!attacker || !attacker.moves || attacker.moves.length === 0) {
    attackerMoveButtons.innerHTML = `<p class="small-text">登録済みの技がありません。</p>`;
    return;
  }

const damageMoves = attacker.moves;

if (damageMoves.length === 0) {
  attackerMoveButtons.innerHTML = `<p class="small-text">登録済みの技がありません。</p>`;
  return;
}

  attackerMoveButtons.innerHTML = damageMoves.map(moveName => `
    <button type="button" class="move-select-button" data-move="${moveName}">
      ${moveName}
    </button>
  `).join("");

  attackerMoveButtons.querySelectorAll(".move-select-button").forEach(button => {
button.addEventListener("click", () => {
  damageMoveInput.value = button.dataset.move;
  updateMoveData();
  updateDamageCategoryRows();
});

button.addEventListener("dblclick", () => {
  const moveName = button.dataset.move;

  if (!moveName) {
    return;
  }

  comboSteps.push({
    type: "move",
    name: moveName
  });

  renderComboStepList();
  updateComboDamageResultAdvanced();
});
  });
}

function getOpponentParty() {
  return opponentInputs.map(input => input.value.trim()).filter(Boolean);
}

function renderMySelectionArea() {
  if (!mySelectionArea) {
    return;
  }

  const team = getSelectedMyTeam();

  mySelectionArea.innerHTML = "";

  if (!team || !team.pokemons || team.pokemons.length === 0) {
    mySelectionArea.innerHTML = "<p class=\"small-text\">使用パーティを選択してください。</p>";
    mySelectionOrderState = [];
    return;
  }

  // パーティが変わったとき、存在しないポケモンを選出状態から消す
  const teamNames = team.pokemons.map(pokemon => pokemon.name);
  mySelectionOrderState = mySelectionOrderState.filter(name => teamNames.includes(name));

  mySelectionArea.innerHTML = `
    <h3>自分の選出</h3>
    <div class="icon-selection-list">
      ${team.pokemons.map(pokemon => {
        const orderIndex = mySelectionOrderState.indexOf(pokemon.name);
        const orderNumber = orderIndex >= 0 ? orderIndex + 1 : "";

        return `
          <button
            type="button"
            class="icon-selection-button ${orderNumber ? "selected" : ""}"
            data-name="${pokemon.name}"
            data-order="${orderNumber}"
            title="${pokemon.name}"
          >
            <span class="selection-order-badge">${orderNumber || ""}</span>
            ${createPokemonIconHtml(pokemon.name, "pokemon-icon")}
            <span class="icon-selection-name">${pokemon.name}</span>
          </button>
        `;
      }).join("")}
    </div>
  `;

  mySelectionArea.querySelectorAll(".icon-selection-button").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;

      if (mySelectionOrderState.includes(name)) {
        mySelectionOrderState = mySelectionOrderState.filter(selectedName => selectedName !== name);
      } else {
        if (mySelectionOrderState.length >= 3) {
          alert("自分の選出は3匹までです。");
          return;
        }

        mySelectionOrderState.push(name);
      }

      renderMySelectionArea();
    });
  });
}

function saveOpponentItemInputState() {
  document.querySelectorAll(".opponent-item-input").forEach(input => {
    const name = input.dataset.name;

    if (name) {
      opponentItemInputState[name] = input.value.trim();
    }
  });
}

function renderSelectionArea() {
  saveOpponentItemInputState();

  const party = getOpponentParty();

  // 相手パーティが変わったとき、存在しないポケモンを選出状態から消す
  opponentSelectionOrderState = opponentSelectionOrderState.filter(name => party.includes(name));

  selectionArea.innerHTML = `
    <h3>相手の選出・持ち物</h3>
    <div class="icon-selection-list">
      ${party.map(name => {
        const orderIndex = opponentSelectionOrderState.indexOf(name);
        const orderNumber = orderIndex >= 0 ? orderIndex + 1 : "";

        return `
          <div class="opponent-icon-selection-row">
            <button
              type="button"
              class="icon-selection-button ${orderNumber ? "selected" : ""}"
              data-name="${name}"
              data-order="${orderNumber}"
              title="${name}"
            >
              <span class="selection-order-badge">${orderNumber || ""}</span>
              ${createPokemonIconHtml(name, "pokemon-icon")}
              <span class="icon-selection-name">${name}</span>
            </button>

<input
  type="text"
  class="opponent-item-input"
  data-name="${name}"
  list="itemNameDataList"
  placeholder="持ち物"
  value="${opponentItemInputState[name] || ""}"
>
          </div>
        `;
      }).join("")}
    </div>
  `;

  selectionArea.querySelectorAll(".icon-selection-button").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;

      if (opponentSelectionOrderState.includes(name)) {
        opponentSelectionOrderState = opponentSelectionOrderState.filter(selectedName => selectedName !== name);
      } else {
        if (opponentSelectionOrderState.length >= 3) {
          alert("相手の選出は3匹までです。");
          return;
        }

        opponentSelectionOrderState.push(name);
      }

      renderSelectionArea();
    });
  });

  selectionArea.querySelectorAll(".opponent-item-input").forEach(input => {
  input.addEventListener("input", () => {
    const name = input.dataset.name;

    if (name) {
      opponentItemInputState[name] = input.value.trim();
    }
  });
});
  updateDamagePokemonOptions();
  renderDamageOpponentPartyList();
}

function saveBattleRecord() {
  const opponentParty = getOpponentParty();

  if (opponentParty.length === 0) {
    alert("相手パーティを入力してください。");
    return;
  }

const selectedPokemonOrder = opponentSelectionOrderState.slice(0, 3);
const mySelectedPokemonOrder = mySelectionOrderState.slice(0, 3);
const items = {};

const selectedPokemon = selectedPokemonOrder.filter(Boolean);

if (selectedPokemon.length !== 3) {
  alert("相手の選出を1番目・2番目・3番目まで入力してください。");
  return;
}

const mySelectedPokemon = mySelectedPokemonOrder.filter(Boolean);

if (mySelectedPokemon.length !== 3) {
  alert("自分の選出を1番目・2番目・3番目まで入力してください。");
  return;
}

if (new Set(mySelectedPokemon).size !== mySelectedPokemon.length) {
  alert("同じ自分のポケモンを複数の選出順に入れることはできません。");
  return;
}

if (new Set(selectedPokemon).size !== selectedPokemon.length) {
  alert("同じポケモンを複数の選出順に入れることはできません。");
  return;
}

document.querySelectorAll(".opponent-item-input").forEach(input => {
  const name = input.dataset.name;

  if (name) {
    items[name] = input.value.trim();
  }
});

  const selectedTeam = getSelectedMyTeam();

const record = {
  id: Date.now(),
  date: new Date().toLocaleString("ja-JP"),
  result: battleResultInput.value,
  opponentTrainerName: opponentTrainerNameInput
    ? opponentTrainerNameInput.value.trim()
    : "",
  myTeamId: selectedTeam ? selectedTeam.id : null,
  myTeamName: selectedTeam ? selectedTeam.teamName : "",
  mySelectedPokemon,
  mySelectedPokemonOrder,
  opponentParty,
  selectedPokemon,
  selectedPokemonOrder,
  items,
  memo: battleMemoInput.value.trim()
};
battleRecords.unshift(record);
saveBattleRecordsToStorage();

mySelectionOrderState = [];
opponentSelectionOrderState = [];
opponentItemInputState = {};

if (opponentTrainerNameInput) {
  opponentTrainerNameInput.value = "";
}

renderMySelectionArea();
renderSelectionArea();
renderHistoryTeamFilter();
renderHistoryTeamTabs();
renderTeamHistorySummary();
renderBattleStats();
renderBattleBoard();
alert("対戦記録を保存しました。");
}

function getFilteredBattleRecords() {
  const keyword = historySearchInput ? historySearchInput.value.trim() : "";
  const resultFilter = historyResultFilter ? historyResultFilter.value : "all";
  const teamFilter = getSelectedHistoryTeamFilterValue();

  return battleRecords.filter(record => {

    const matchKeyword =
  !keyword ||
  (record.myTeamName || "").includes(keyword) ||
  (record.opponentTrainerName || "").includes(keyword) ||
  (record.result || "").includes(keyword) ||
  (record.memo || "").includes(keyword) ||
  (record.opponentParty || []).some(name => name.includes(keyword)) ||
  (record.selectedPokemon || []).some(name => name.includes(keyword)) ||
  Object.values(record.items || {}).some(item => item.includes(keyword));

    const matchResult =
      resultFilter === "all" ||
      record.result === resultFilter;

    const matchTeam =
      teamFilter === "all" ||
      (teamFilter === "no-team" && !record.myTeamId) ||
      String(record.myTeamId) === teamFilter;

    return matchKeyword && matchResult && matchTeam;
  });
}

function groupBattleRecordsByTeam(records) {
  const groupedMap = {};

  records.forEach(record => {
    const teamKey = record.myTeamId || "no-team";
    const teamName = record.myTeamName || "使用パーティ未記録";

    if (!groupedMap[teamKey]) {
      groupedMap[teamKey] = {
        teamKey,
        teamName,
        records: []
      };
    }

    groupedMap[teamKey].records.push(record);
  });

  return Object.values(groupedMap);
}

function renderTeamHistorySummary() {
  if (!teamHistorySummary) {
    return;
  }

  const filteredRecords = getFilteredBattleRecords();
  const teamFilter = getSelectedHistoryTeamFilterValue();

  if (filteredRecords.length === 0) {
    teamHistorySummary.innerHTML = `<p class="small-text">この条件に合う対戦記録はありません。</p>`;
    return;
  }

  const total = filteredRecords.length;
  const win = filteredRecords.filter(record => record.result === "win").length;
  const lose = filteredRecords.filter(record => record.result === "lose").length;
  const draw = filteredRecords.filter(record => record.result === "draw").length;
  const winRate = total > 0 ? ((win / total) * 100).toFixed(1) : "0.0";

  let title = "全パーティ";

  if (teamFilter === "no-team") {
    title = "使用パーティ未記録";
  } else if (teamFilter !== "all") {
    const team = myTeams.find(team => String(team.id) === teamFilter);
    title = team ? team.teamName : "選択中のパーティ";
  }

  teamHistorySummary.innerHTML = `
    <div class="team-history-summary">
      <div>
        <span class="small-text">表示中</span>
        <strong>${title}</strong>
      </div>

      <div class="team-history-summary-grid">
        <span>総対戦：${total}</span>
        <span>勝ち：${win}</span>
        <span>負け：${lose}</span>
        <span>引き分け：${draw}</span>
        <span>勝率：${winRate}%</span>
      </div>
    </div>
  `;
}

function renderBattleStats() {
  if (!battleStats) {
    return;
  }

  const recordsForStats = getFilteredBattleRecords();

  if (recordsForStats.length === 0) {
    battleStats.innerHTML = "<p>この条件に合う対戦記録はありません。</p>";
    return;
  }

  const teamStatsMap = {};

  recordsForStats.forEach(record => {
    const teamKey = record.myTeamId || "no-team";
    const teamName = record.myTeamName || "使用パーティ未記録";

    if (!teamStatsMap[teamKey]) {
      teamStatsMap[teamKey] = {
        teamName,
        records: [],

        opponentCountMap: {},
        lostOpponentCountMap: {},
        leadOpponentCountMap: {},

        mySelectedCountMap: {},
        myLeadCountMap: {},
        myWinCountMap: {},

        mySelectionPatternMap: {}
      };
    }

    teamStatsMap[teamKey].records.push(record);

    const selectedOrder = record.selectedPokemonOrder || record.selectedPokemon || [];

    selectedOrder.filter(Boolean).forEach((name, index) => {
      teamStatsMap[teamKey].opponentCountMap[name] =
        (teamStatsMap[teamKey].opponentCountMap[name] || 0) + 1;

      if (record.result === "lose") {
        teamStatsMap[teamKey].lostOpponentCountMap[name] =
          (teamStatsMap[teamKey].lostOpponentCountMap[name] || 0) + 1;
      }

      if (index === 0) {
        teamStatsMap[teamKey].leadOpponentCountMap[name] =
          (teamStatsMap[teamKey].leadOpponentCountMap[name] || 0) + 1;
      }
    });

    const mySelectedOrder = record.mySelectedPokemonOrder || record.mySelectedPokemon || [];

    mySelectedOrder.filter(Boolean).forEach((name, index) => {
      teamStatsMap[teamKey].mySelectedCountMap[name] =
        (teamStatsMap[teamKey].mySelectedCountMap[name] || 0) + 1;

      if (record.result === "win") {
        teamStatsMap[teamKey].myWinCountMap[name] =
          (teamStatsMap[teamKey].myWinCountMap[name] || 0) + 1;
      }

      if (index === 0) {
        teamStatsMap[teamKey].myLeadCountMap[name] =
          (teamStatsMap[teamKey].myLeadCountMap[name] || 0) + 1;
      }
    });

    const myPattern = mySelectedOrder.filter(Boolean);

    if (myPattern.length === 3) {
      const patternKey = myPattern.join(" / ");

      if (!teamStatsMap[teamKey].mySelectionPatternMap[patternKey]) {
        teamStatsMap[teamKey].mySelectionPatternMap[patternKey] = {
          pokemons: myPattern,
          total: 0,
          win: 0,
          lose: 0,
          draw: 0
        };
      }

      teamStatsMap[teamKey].mySelectionPatternMap[patternKey].total++;

      if (record.result === "win") {
        teamStatsMap[teamKey].mySelectionPatternMap[patternKey].win++;
      }

      if (record.result === "lose") {
        teamStatsMap[teamKey].mySelectionPatternMap[patternKey].lose++;
      }

      if (record.result === "draw") {
        teamStatsMap[teamKey].mySelectionPatternMap[patternKey].draw++;
      }
    }
  });

  const teamStatsHtml = Object.values(teamStatsMap).map(teamStat => {
    const records = teamStat.records;

    const total = records.length;
    const winCount = records.filter(record => record.result === "win").length;
    const loseCount = records.filter(record => record.result === "lose").length;
    const drawCount = records.filter(record => record.result === "draw").length;

    const winRate = total > 0
      ? ((winCount / total) * 100).toFixed(1)
      : "0.0";

    const topOpponents = Object.entries(teamStat.opponentCountMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    const topLeadOpponents = Object.entries(teamStat.opponentCountMap)
      .map(([name, selectedCount]) => {
        const leadCount = teamStat.leadOpponentCountMap[name] || 0;
        const leadRate = selectedCount > 0 ? leadCount / selectedCount : 0;

        return {
          name,
          selectedCount,
          leadCount,
          leadRate
        };
      })
      .filter(item => item.leadCount > 0)
      .sort((a, b) => {
        if (b.leadRate !== a.leadRate) {
          return b.leadRate - a.leadRate;
        }

        return b.leadCount - a.leadCount;
      })
      .slice(0, 5);

    const mySelectedStats = Object.entries(teamStat.mySelectedCountMap)
      .map(([name, selectedCount]) => {
        const leadCount = teamStat.myLeadCountMap[name] || 0;
        const winCount = teamStat.myWinCountMap[name] || 0;

        return {
          name,
          selectedCount,
          leadCount,
          winCount,
          selectedRate: total > 0 ? selectedCount / total : 0,
          leadRate: selectedCount > 0 ? leadCount / selectedCount : 0,
          winRate: selectedCount > 0 ? winCount / selectedCount : 0
        };
      })
      .sort((a, b) => {
        if (b.selectedCount !== a.selectedCount) {
          return b.selectedCount - a.selectedCount;
        }

        return b.winRate - a.winRate;
      });

    const mySelectionPatternStats = Object.values(teamStat.mySelectionPatternMap)
      .map(pattern => {
        return {
          ...pattern,
          winRate: pattern.total > 0 ? pattern.win / pattern.total : 0
        };
      })
      .sort((a, b) => {
        if (b.total !== a.total) {
          return b.total - a.total;
        }

        return b.winRate - a.winRate;
      })
      .slice(0, 10);

    const topWeakOpponents = Object.entries(teamStat.opponentCountMap)
      .map(([name, totalCount]) => {
        const loseCount = teamStat.lostOpponentCountMap[name] || 0;
        const loseRate = totalCount > 0 ? loseCount / totalCount : 0;

        return {
          name,
          totalCount,
          loseCount,
          loseRate
        };
      })
      .filter(item => item.loseCount > 0)
      .sort((a, b) => {
        if (b.loseRate !== a.loseRate) {
          return b.loseRate - a.loseRate;
        }

        return b.loseCount - a.loseCount;
      })
      .slice(0, 5);

    return `
      <div class="team-stat-block">
        <h3>${teamStat.teamName}</h3>

        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-label">総対戦数</span>
            <strong>${total}</strong>
          </div>

          <div class="stat-card">
            <span class="stat-label">勝ち</span>
            <strong>${winCount}</strong>
          </div>

          <div class="stat-card">
            <span class="stat-label">負け</span>
            <strong>${loseCount}</strong>
          </div>

          <div class="stat-card">
            <span class="stat-label">引き分け</span>
            <strong>${drawCount}</strong>
          </div>

          <div class="stat-card">
            <span class="stat-label">勝率</span>
            <strong>${winRate}%</strong>
          </div>
        </div>

        <div class="top-opponents">
          <h4>よく出てきた相手</h4>
          ${
            topOpponents.length === 0
              ? "<p>まだデータがありません。</p>"
              : topOpponents.map(([name, count], index) => `
                  <div class="top-opponent-row">
                    <span class="rank-label">${index + 1}位</span>
                    <span class="party-chip">
                      ${createPokemonIconHtml(name, "pokemon-icon small")}
                      ${name}
                    </span>
                    <strong>${count}回</strong>
                  </div>
                `).join("")
          }
        </div>

        <div class="top-opponents my-selection-stats">
          <h4>自分の選出率・先発率</h4>
          ${
            mySelectedStats.length === 0
              ? "<p>まだ自分の選出データがありません。</p>"
              : mySelectedStats.map((item, index) => `
                  <div class="top-opponent-row">
                    <span class="rank-label">${index + 1}位</span>

                    <span class="party-chip">
                      ${createPokemonIconHtml(item.name, "pokemon-icon small")}
                      ${item.name}
                    </span>

                    <strong>
                      選出${item.selectedCount}回 / 選出率${(item.selectedRate * 100).toFixed(1)}%
                      / 先発${item.leadCount}回 / 先発率${(item.leadRate * 100).toFixed(1)}%
                      / 勝率${(item.winRate * 100).toFixed(1)}%
                    </strong>
                  </div>
                `).join("")
          }
        </div>

        <div class="top-opponents my-pattern-stats">
          <h4>自分の選出パターン別勝率</h4>
          ${
            mySelectionPatternStats.length === 0
              ? "<p>まだ選出パターンのデータがありません。</p>"
              : mySelectionPatternStats.map((pattern, index) => `
                  <div class="selection-pattern-row">
                    <div class="selection-pattern-title">
                      <span class="rank-label">${index + 1}位</span>

                      <div class="party-list">
                        ${pattern.pokemons.map((name, pokemonIndex) => `
                          <span class="party-chip selected">
                            ${pokemonIndex + 1}. ${createPokemonIconHtml(name, "pokemon-icon small")}
                            ${name}
                          </span>
                        `).join("")}
                      </div>
                    </div>

                    <strong>
                      ${pattern.total}戦${pattern.win}勝${pattern.lose}敗${pattern.draw}分 /
                      勝率${(pattern.winRate * 100).toFixed(1)}%
                    </strong>
                  </div>
                `).join("")
          }
        </div>

        <div class="top-opponents lost-opponents">
          <h4>苦手な相手</h4>
          ${
            topWeakOpponents.length === 0
              ? "<p>まだ負け試合のデータがありません。</p>"
              : topWeakOpponents.map((item, index) => `
                  <div class="top-opponent-row">
                    <span class="rank-label">${index + 1}位</span>
                    <span class="party-chip">
                      ${createPokemonIconHtml(item.name, "pokemon-icon small")}
                      ${item.name}
                    </span>
                    <strong>
                      ${item.totalCount}戦${item.loseCount}敗 / 負け率${(item.loseRate * 100).toFixed(1)}%
                    </strong>
                  </div>
                `).join("")
          }
        </div>

        <div class="top-opponents lead-opponents">
          <h4>先発に出てきやすい相手</h4>
          ${
            topLeadOpponents.length === 0
              ? "<p>まだ先発データがありません。</p>"
              : topLeadOpponents.map((item, index) => `
                  <div class="top-opponent-row">
                    <span class="rank-label">${index + 1}位</span>
                    <span class="party-chip">
                      ${createPokemonIconHtml(item.name, "pokemon-icon small")}
                      ${item.name}
                    </span>
                    <strong>
                      選出${item.selectedCount}回 / 先発${item.leadCount}回 / 先発率${(item.leadRate * 100).toFixed(1)}%
                    </strong>
                  </div>
                `).join("")
          }
        </div>
      </div>
    `;
  }).join("");

  battleStats.innerHTML = teamStatsHtml;
}

function renderMySelectionPatternStats() {
  if (!mySelectionPatternStats) {
    return;
  }

  if (battleRecords.length === 0) {
    mySelectionPatternStats.innerHTML = "<p>まだ対戦記録はありません。</p>";
    return;
  }

  const patternMap = new Map();

  battleRecords.forEach(record => {
    const mySelected = getRecordMySelectedPokemon(record);

    if (mySelected.length === 0) {
      return;
    }

    const patternNames = mySelected
      .map(pokemon => pokemon.name || pokemon)
      .filter(Boolean);

    if (patternNames.length === 0) {
      return;
    }

    const patternKey = patternNames.join(" + ");

    if (!patternMap.has(patternKey)) {
      patternMap.set(patternKey, {
        names: patternNames,
        total: 0,
        win: 0,
        lose: 0,
        draw: 0
      });
    }

    const pattern = patternMap.get(patternKey);

    pattern.total++;

    if (record.result === "win") {
      pattern.win++;
    } else if (record.result === "lose") {
      pattern.lose++;
    } else if (record.result === "draw") {
      pattern.draw++;
    }
  });

  const patterns = Array.from(patternMap.values())
    .sort((a, b) => {
      if (b.total !== a.total) {
        return b.total - a.total;
      }

      const aWinRate = a.total > 0 ? a.win / a.total : 0;
      const bWinRate = b.total > 0 ? b.win / b.total : 0;

      return bWinRate - aWinRate;
    });

  if (patterns.length === 0) {
    mySelectionPatternStats.innerHTML = "<p>自分の選出が記録された対戦がありません。</p>";
    return;
  }

  mySelectionPatternStats.innerHTML = `
    <div class="selection-pattern-list">
      ${patterns.map(pattern => {
        const winRate = Math.round((pattern.win / pattern.total) * 100);

        return `
          <div class="selection-pattern-card">
            <div class="selection-pattern-icons">
              ${pattern.names.map(name => `
                <div class="selection-pattern-pokemon">
                  ${createPokemonIconHtml(name, "pokemon-icon")}
                  <span>${name}</span>
                </div>
              `).join("")}
            </div>

            <div class="selection-pattern-result">
              <span>使用 ${pattern.total}回</span>
              <span>勝ち ${pattern.win}</span>
              <span>負け ${pattern.lose}</span>
              <strong>勝率 ${winRate}%</strong>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderOpponentSelectionRateStats() {
  if (!opponentSelectionRateStats) {
    return;
  }

  if (battleRecords.length === 0) {
    opponentSelectionRateStats.innerHTML = "<p>まだ対戦記録はありません。</p>";
    return;
  }

  const opponentMap = new Map();

  battleRecords.forEach(record => {
    const opponentParty = getRecordOpponentPartyPokemon(record);
    const opponentSelected = getRecordOpponentSelectedPokemon(record);

    const selectedNameSet = new Set(
      opponentSelected
        .map(pokemon => pokemon.name || pokemon)
        .filter(Boolean)
    );

    opponentParty.forEach(pokemon => {
      const name = pokemon.name || pokemon;

      if (!name) {
        return;
      }

      if (!opponentMap.has(name)) {
        opponentMap.set(name, {
          name,
          appeared: 0,
          selected: 0,
          win: 0,
          lose: 0
        });
      }

      const data = opponentMap.get(name);

      data.appeared++;

      if (selectedNameSet.has(name)) {
        data.selected++;

        if (record.result === "win") {
          data.win++;
        } else if (record.result === "lose") {
          data.lose++;
        }
      }
    });
  });

  const opponentStats = Array.from(opponentMap.values())
    .sort((a, b) => {
      const aRate = a.appeared > 0 ? a.selected / a.appeared : 0;
      const bRate = b.appeared > 0 ? b.selected / b.appeared : 0;

      if (bRate !== aRate) {
        return bRate - aRate;
      }

      return b.selected - a.selected;
    });

  if (opponentStats.length === 0) {
    opponentSelectionRateStats.innerHTML = "<p>相手パーティが記録された対戦がありません。</p>";
    return;
  }

  opponentSelectionRateStats.innerHTML = `
    <div class="opponent-selection-rate-list">
      ${opponentStats.map(data => {
        const selectionRate = data.appeared > 0
          ? Math.round((data.selected / data.appeared) * 100)
          : 0;

        return `
          <div class="opponent-selection-rate-card">
            <div class="opponent-rate-pokemon">
              ${createPokemonIconHtml(data.name, "pokemon-icon")}
              <strong>${data.name}</strong>
            </div>

            <div class="opponent-rate-bar-area">
              <div class="opponent-rate-bar-track">
                <div class="opponent-rate-bar-fill" style="width: ${selectionRate}%"></div>
              </div>

              <div class="opponent-rate-text">
                <span>パーティ在籍 ${data.appeared}回</span>
                <span>選出 ${data.selected}回</span>
                <strong>選出率 ${selectionRate}%</strong>
              </div>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function getRecordMySelectedPokemon(record) {
  return (
    record.mySelectedPokemons ||
    record.mySelection ||
    record.mySelected ||
    record.selectedMyPokemons ||
    []
  );
}

function getRecordOpponentSelectedPokemon(record) {
  return (
    record.opponentSelectedPokemons ||
    record.opponentSelection ||
    record.selectedOpponentPokemons ||
    record.selectedPokemons ||
    []
  );
}

function getRecordOpponentPartyPokemon(record) {
  return (
    record.opponentPokemons ||
    record.opponentParty ||
    record.opponentTeam ||
    []
  );
}

function getResultLabel(result) {
  if (result === "win") {
    return "勝ち";
  }

  if (result === "lose") {
    return "負け";
  }

  if (result === "draw") {
    return "引き分け";
  }

  return result || "未記録";
}

function updateHistoryBulkActionState() {
  const selectedCount = selectedBattleRecordIds.size;

  if (selectedHistoryCountText) {
    selectedHistoryCountText.textContent = isHistorySelectMode
      ? `選択中：${selectedCount}件`
      : "";
  }

  if (bulkDeleteHistoryButton) {
    bulkDeleteHistoryButton.disabled = selectedCount === 0;
  }

  if (toggleHistorySelectModeButton) {
    toggleHistorySelectModeButton.textContent = isHistorySelectMode
      ? "選択モード終了"
      : "選択して削除";
  }

  document.body.classList.toggle("history-select-mode", isHistorySelectMode);
}

function toggleHistorySelectMode() {
  isHistorySelectMode = !isHistorySelectMode;

  if (!isHistorySelectMode) {
    selectedBattleRecordIds.clear();
  }

  renderBattleBoard();
  updateHistoryBulkActionState();
}

function getVisibleBattleRecordIds() {
  return getFilteredBattleRecords().map(record => record.id);
}

function selectAllVisibleHistory() {
  getVisibleBattleRecordIds().forEach(id => {
    selectedBattleRecordIds.add(id);
  });

  renderBattleBoard();
  updateHistoryBulkActionState();
}

function clearHistorySelection() {
  selectedBattleRecordIds.clear();

  renderBattleBoard();
  updateHistoryBulkActionState();
}

function deleteSelectedBattleRecords() {
  const selectedCount = selectedBattleRecordIds.size;

  if (selectedCount === 0) {
    return;
  }

  if (!confirm(`選択した${selectedCount}件の対戦履歴を削除しますか？`)) {
    return;
  }

  battleRecords = battleRecords.filter(record => {
    return !selectedBattleRecordIds.has(record.id);
  });

  selectedBattleRecordIds.clear();
  isHistorySelectMode = false;

  saveBattleRecordsToStorage();

  renderHistoryTeamFilter();
  renderHistoryTeamTabs();
  renderTeamHistorySummary();
  renderBattleStats();
  renderBattleBoard();
  updateHistoryBulkActionState();

  alert("選択した対戦履歴を削除しました。");
}

function renderBattleBoard() {
  battleBoard.innerHTML = "";

  if (battleRecords.length === 0) {
    battleBoard.innerHTML = "<p>まだ対戦記録はありません。</p>";
    return;
  }

  const filteredRecords = getFilteredBattleRecords();

  if (filteredRecords.length === 0) {
    battleBoard.innerHTML = "<p>条件に合う対戦記録はありません。</p>";
    return;
  }

   const teamFilter = getSelectedHistoryTeamFilterValue();
  const groupedRecords = groupBattleRecordsByTeam(filteredRecords);

  groupedRecords.forEach(group => {
    const groupSection = document.createElement("div");
    groupSection.className = "history-team-group";

    if (teamFilter === "all") {
      groupSection.innerHTML = `
        <div class="history-team-group-header">
          <h3>${group.teamName}</h3>
          <span>${group.records.length}戦</span>
        </div>
      `;
    }

    group.records.forEach(record => {
const div = document.createElement("div");
div.className = `battle-card battle-${record.result}`;
      const isEditing = editingBattleRecordId === record.id;

      if (isEditing) {
        div.innerHTML = `
          <h3>${record.date} / 編集中</h3>

          <p>使用パーティ：${record.myTeamName || "未記録"}</p>
          <p>相手トレーナー：${record.opponentTrainerName || "未記録"}</p>

          <div class="party-list">
            <strong>自分の選出：</strong>
            ${(record.mySelectedPokemonOrder || record.mySelectedPokemon || []).filter(Boolean).map((name, index) => `
              <span class="party-chip selected">
                ${index + 1}. ${createPokemonIconHtml(name, "pokemon-icon small")}
                ${name}
              </span>
            `).join("")}
          </div>

          <p class="small-text">相手パーティ：</p>

          <div class="party-list">
            ${record.opponentParty.map(name => `
              <span class="party-chip ${record.selectedPokemon.includes(name) ? "selected" : ""}">
                ${createPokemonIconHtml(name, "pokemon-icon small")}
                ${name}${record.items[name] ? ` / ${record.items[name]}` : ""}
              </span>
            `).join("")}
          </div>

          <div class="form-group">
            <label>勝敗</label>
            <select class="edit-result-select" data-id="${record.id}">
              <option value="win" ${record.result === "win" ? "selected" : ""}>勝ち</option>
              <option value="lose" ${record.result === "lose" ? "selected" : ""}>負け</option>
              <option value="draw" ${record.result === "draw" ? "selected" : ""}>引き分け</option>
            </select>
          </div>

          <div class="form-group">
            <label>メモ</label>
            <textarea class="edit-memo-input" data-id="${record.id}" rows="5">${record.memo || ""}</textarea>
          </div>

          <button type="button" class="save-edit-button" data-id="${record.id}">編集を保存</button>
          <button type="button" class="cancel-edit-button" data-id="${record.id}">キャンセル</button>
        `;
      } else {
        const resultLabel = getResultLabel(record.result);
        const selectedOrder = record.selectedPokemonOrder || record.selectedPokemon || [];
        const mySelectedOrder = record.mySelectedPokemonOrder || record.mySelectedPokemon || [];

div.innerHTML = `

<div class="compact-battle-card-header battle-header-${record.result}">
  <label class="history-select-check">
    <input
      type="checkbox"
      class="history-select-checkbox"
      data-id="${record.id}"
      ${selectedBattleRecordIds.has(record.id) ? "checked" : ""}
    >
    <span></span>
  </label>

    <div class="compact-battle-main-info">
      <span class="result-badge result-${record.result}">
        ${resultLabel}
      </span>

      ${
        record.opponentTrainerName
          ? `<span class="opponent-trainer-name">相手：${record.opponentTrainerName}</span>`
          : `<span class="opponent-trainer-name muted">相手：未記録</span>`
      }

      <span class="battle-date">${record.date}</span>

      <span class="compact-team-name">
        使用：${record.myTeamName || "使用パーティ未記録"}
      </span>

      ${
        record.memo
          ? `<span class="memo-exists-badge">メモあり</span>`
          : ""
      }
    </div>

    <div class="compact-battle-actions">
      <button type="button" class="edit-button compact-action-button" data-id="${record.id}">編集</button>
      <button type="button" class="delete-button compact-action-button danger" data-id="${record.id}">削除</button>
    </div>
  </div>

  <div class="compact-battle-body improved-history-body">
    <div class="history-main-party-area">
      <div class="history-section-label">相手パーティ</div>

      <div class="opponent-party-icon-row improved-opponent-row">
        ${record.opponentParty.map(name => {
          const selectedIndex = selectedOrder.indexOf(name);
          const selectedNumber = selectedIndex >= 0 ? selectedIndex + 1 : "";

          return `
            <div
              class="history-opponent-icon ${selectedNumber ? "selected" : ""}"
              title="${name}${record.items && record.items[name] ? ` / ${record.items[name]}` : ""}"
            >
              <span class="history-selection-badge">${selectedNumber || ""}</span>
              ${createPokemonIconHtml(name, "pokemon-icon")}
              <span class="history-opponent-name">${name}</span>
${
  record.items && record.items[name]
    ? `
      <span class="history-item-mini" title="${record.items[name]}">
        ${createItemIconHtml(record.items[name], "item-icon mini")}
      </span>
    `
    : ""
}
            </div>
          `;
        }).join("")}
      </div>
    </div>

    <div class="history-side-summary-area">
      <div class="history-side-info">
        <span class="history-side-title">自分の選出</span>

        <div class="history-my-selection-list">
          ${mySelectedOrder.filter(Boolean).map((name, index) => `
            <span class="history-my-selection-chip" title="${index + 1}. ${name}">
              ${index + 1}
              ${createPokemonIconHtml(name, "pokemon-icon small")}
              ${name}
            </span>
          `).join("")}
        </div>
      </div>

      <div class="history-side-info">
        <span class="history-side-title">相手持ち物</span>

<div class="history-item-list">
  ${
    record.opponentParty
      .filter(name => record.items && record.items[name])
      .map(name => `
        <span
          class="history-item-chip icon-only"
          title="${name} / ${record.items[name]}"
        >
          ${createPokemonIconHtml(name, "pokemon-icon small")}
          ${createItemIconHtml(record.items[name], "item-icon small")}
        </span>
      `).join("") || "<span class=\"history-empty-text\">未入力</span>"
  }
</div>
      </div>

${
  record.memo
    ? `
      <details class="history-memo-preview history-memo-details">
        <summary>
          <span class="history-side-title">メモを見る</span>
        </summary>

        <p>${record.memo}</p>
      </details>
    `
    : ""
}
    </div>
  </div>
`;
      }

      groupSection.appendChild(div);
    });

    battleBoard.appendChild(groupSection);
  });


  document.querySelectorAll(".history-select-checkbox").forEach(checkbox => {
  checkbox.addEventListener("change", () => {
    const id = Number(checkbox.dataset.id);

    if (checkbox.checked) {
      selectedBattleRecordIds.add(id);
    } else {
      selectedBattleRecordIds.delete(id);
    }

    updateHistoryBulkActionState();
  });
});

  document.querySelectorAll(".edit-button").forEach(button => {
    button.addEventListener("click", () => {
      editingBattleRecordId = Number(button.dataset.id);
      renderBattleBoard();
    });
  });

  document.querySelectorAll(".cancel-edit-button").forEach(button => {
    button.addEventListener("click", () => {
      editingBattleRecordId = null;
      renderBattleBoard();
    });
  });

  document.querySelectorAll(".save-edit-button").forEach(button => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);

      const resultSelect = document.querySelector(`.edit-result-select[data-id="${id}"]`);
      const memoInput = document.querySelector(`.edit-memo-input[data-id="${id}"]`);

      const record = battleRecords.find(record => record.id === id);

      if (!record) {
        return;
      }

      record.result = resultSelect.value;
      record.memo = memoInput.value.trim();

      saveBattleRecordsToStorage();

      editingBattleRecordId = null;

renderHistoryTeamFilter();
renderHistoryTeamTabs();
renderTeamHistorySummary();
renderBattleStats();
renderBattleBoard();

      alert("対戦記録を編集しました。");
    });
  });

  document.querySelectorAll(".delete-button").forEach(button => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);

      if (!confirm("この対戦記録を削除しますか？")) {
        return;
      }

battleRecords = battleRecords.filter(record => record.id !== id);
selectedBattleRecordIds.delete(id);

saveBattleRecordsToStorage();

renderHistoryTeamFilter();
renderHistoryTeamTabs();
renderTeamHistorySummary();
renderBattleStats();
renderBattleBoard();
updateHistoryBulkActionState();
    });
  });
}

function getDamagePokemon(side, value, role = null) {
  let pokemon = null;
  const name = value.trim();

  if (!name) {
    return null;
  }

  if (side === "my") {
    const team = getSelectedMyTeam();

    if (!team) {
      return null;
    }

    const teamPokemon = team.pokemons.find(p => p.name === name);

    if (!teamPokemon) {
      return null;
    }

    pokemon = cloneObject(teamPokemon);
  }

  if (side === "opponent") {
    const data = findPokemonData(name);

    pokemon = {
      name,
      types: data ? data.types : [],
      moves: [],
      stats: {
        hp: "",
        attack: "",
        defense: "",
        spAttack: "",
        spDefense: "",
        speed: ""
      }
    };
  }

  if (side === "manual") {
    const data = findPokemonData(name);

    if (!data) {
      return null;
    }

    const level = Number(damageLevelInput.value) || 50;

    pokemon = {
      name,
      types: data.types,
      moves: [],
      stats: {
        hp: calculateBaseHpStat(data.baseStats.hp, level),
        attack: calculateBaseOtherStat(data.baseStats.attack, level),
        defense: calculateBaseOtherStat(data.baseStats.defense, level),
        spAttack: calculateBaseOtherStat(data.baseStats.spAttack, level),
        spDefense: calculateBaseOtherStat(data.baseStats.spDefense, level),
        speed: calculateBaseOtherStat(data.baseStats.speed, level)
      }
    };
  }

  if (!pokemon) {
    return null;
  }

  if (role && damageMegaState[role]) {
    const megaData = findPokemonData(damageMegaState[role]);

    if (megaData) {
      const level = Number(damageLevelInput.value) || 50;

      pokemon.name = megaData.name;
      pokemon.types = megaData.types;

      if (side === "manual" || side === "opponent") {
        pokemon.stats = {
          hp: calculateBaseHpStat(megaData.baseStats.hp, level),
          attack: calculateBaseOtherStat(megaData.baseStats.attack, level),
          defense: calculateBaseOtherStat(megaData.baseStats.defense, level),
          spAttack: calculateBaseOtherStat(megaData.baseStats.spAttack, level),
          spDefense: calculateBaseOtherStat(megaData.baseStats.spDefense, level),
          speed: calculateBaseOtherStat(megaData.baseStats.speed, level)
        };
      }
    }
  }

  return pokemon;
}

function updateDamagePokemonOptions() {
  updateSidePokemonInputs();
  updateMoveOptions();
  updateDamageStats();
  applyAttackerEvAdjustment();
  applyDefenderEvAdjustment();
  updateMegaButtons();
  updateAutoDamageSettings();
  updateAbilityOptions();

  syncDamageItemInputsFromCurrentPokemon();
syncDamageItemCheckboxes();

renderPokemonPreview(attackerPokemonPreview, getCurrentDamagePokemonName("attacker"));
renderPokemonPreview(defenderPokemonPreview, getCurrentDamagePokemonName("defender"));

  scheduleAutoDamageCalculation();
}

function updateMoveOptions() {
  const availableDamageMoveList = document.getElementById("availableDamageMoveList");

  damageMoveInput.value = "";
  damageMoveInput.placeholder = "技名を入力";

  if (availableDamageMoveList) {
    availableDamageMoveList.innerHTML = "";
  }

  if (attackerSideSelect.value === "my") {
    damageMoveInput.setAttribute("list", "availableDamageMoveList");

    const attacker = getDamagePokemon(
      attackerSideSelect.value,
      attackerPokemonInput.value,
      "attacker"
    );

    if (!attacker) {
      return;
    }

    const usableMoves = [];

    attacker.moves.forEach(move => {
      const moveData = findMoveData(move);

      if (!moveData) {
        return;
      }

      if (moveData.category === "physical" || moveData.category === "special") {
        usableMoves.push(move);
      }
    });

    usableMoves.forEach(move => {
      const option = document.createElement("option");
      option.value = move;
      availableDamageMoveList.appendChild(option);
    });

    if (usableMoves.length > 0) {
      damageMoveInput.value = usableMoves[0];
      updateMoveData();
    } else {
      damageMoveInput.placeholder = "ダメージ技なし";
      damageResult.innerHTML = "このポケモンにはダメージ計算できる技が登録されていません。";
    }

    return;
  }

  damageMoveInput.setAttribute("list", "damageMoveNameDataList");
  damageMoveInput.placeholder = "技名を入力";
}

function updateMoveData() {
  const moveName = damageMoveInput.value.trim();
  const moveData = findMoveData(moveName);

if (!moveData) {
  movePowerInput.value = "";
  moveTypeInput.value = "";
  updateMoveConditionVisibility();
  return;
}

if (moveData.category !== "physical" && moveData.category !== "special") {
  movePowerInput.value = "";
  moveTypeInput.value = moveData.type;
  damageResult.innerHTML = "変化技はダメージ計算できません。";
  updateMoveConditionVisibility();
  return;
}

  movePowerInput.value = moveData.power;
  moveTypeInput.value = moveData.type;
  moveCategorySelect.value = moveData.category;

updateAutoDamageSettings();
updateDamageCategoryRows();
applyAttackerEvAdjustment();
applyDefenderEvAdjustment();

scheduleAutoDamageCalculation();
updateMoveConditionVisibility();
}

function updateDamageStats() {
  const attacker = getDamagePokemon(
    attackerSideSelect.value,
    attackerPokemonInput.value,
    "attacker"
  );

  const defender = getDamagePokemon(
    defenderSideSelect.value,
    defenderPokemonInput.value,
    "defender"
  );

  const level = Number(damageLevelInput.value) || 50;

  if (attacker) {
    const attackerData = findPokemonData(attacker.name);

    if (attackerSideSelect.value === "my" && attacker.stats) {
      attackStatInput.value = moveCategorySelect.value === "physical"
        ? attacker.stats.attack || ""
        : attacker.stats.spAttack || "";
    } else if (attackerData) {
      const base = moveCategorySelect.value === "physical"
        ? attackerData.baseStats.attack
        : attackerData.baseStats.spAttack;

      attackStatInput.value = calculateBaseOtherStat(base, level);
    }
  }

  if (defender && defenderSideSelect.value === "my" && defender.stats) {
    defenderHpInput.value = defender.stats.hp || "";

    defenseStatInput.value = moveCategorySelect.value === "physical"
      ? defender.stats.defense || ""
      : defender.stats.spDefense || "";
  }
}

function calculateBaseHpStat(base, level = 50) {
  return Math.floor(((base * 2 + 31) * level) / 100) + level + 10;
}

function calculateBaseOtherStat(base, level = 50) {
  return Math.floor(((base * 2 + 31) * level) / 100) + 5;
}

function calculateChampionsHpStat(base, abilityPoint, level = 50) {
  return calculateBaseHpStat(base, level) + abilityPoint;
}

function calculateChampionsOtherStat(base, abilityPoint, level = 50, nature = 1) {
  const stat = calculateBaseOtherStat(base, level) + abilityPoint;
  return Math.floor(stat * nature);
}

function getNatureValueFromSelectValue(value) {
  return Number(value) || 1;
}

function getNatureCorrection(natureName, statName) {
  const correction = natureCorrectionMap[natureName];

  if (!correction) {
    return 1;
  }

  if (correction.up === statName) {
    return 1.1;
  }

  if (correction.down === statName) {
    return 0.9;
  }

  return 1;
}

function getNatureCorrectionText(natureName) {
  const correction = natureCorrectionMap[natureName];

  if (!correction) {
    return "性格補正なし";
  }

  const statLabelMap = {
    attack: "攻撃",
    defense: "防御",
    spAttack: "特攻",
    spDefense: "特防",
    speed: "素早さ"
  };

  if (!correction.up && !correction.down) {
    return "補正なし";
  }

  return `${statLabelMap[correction.up]}↑ / ${statLabelMap[correction.down]}↓`;
}

function calculatePokemonActualStatsFromForm(pokemonData, index) {
  const level = Number(damageLevelInput.value) || 50;

  const hpEv = Number(document.querySelector(`.my-hp-ev-input[data-index="${index}"]`)?.value) || 0;
  const attackEv = Number(document.querySelector(`.my-attack-ev-input[data-index="${index}"]`)?.value) || 0;
  const defenseEv = Number(document.querySelector(`.my-defense-ev-input[data-index="${index}"]`)?.value) || 0;
  const spAttackEv = Number(document.querySelector(`.my-spattack-ev-input[data-index="${index}"]`)?.value) || 0;
  const spDefenseEv = Number(document.querySelector(`.my-spdefense-ev-input[data-index="${index}"]`)?.value) || 0;
  const speedEv = Number(document.querySelector(`.my-speed-ev-input[data-index="${index}"]`)?.value) || 0;

const natureName =
  document.querySelector(`.my-nature-name-input[data-index="${index}"]`)?.value.trim() || "";

const attackNature = getNatureCorrection(natureName, "attack");
const defenseNature = getNatureCorrection(natureName, "defense");
const spAttackNature = getNatureCorrection(natureName, "spAttack");
const spDefenseNature = getNatureCorrection(natureName, "spDefense");
const speedNature = getNatureCorrection(natureName, "speed");

  return {
    hp: calculateChampionsHpStat(pokemonData.baseStats.hp, hpEv, level),
    attack: calculateChampionsOtherStat(pokemonData.baseStats.attack, attackEv, level, attackNature),
    defense: calculateChampionsOtherStat(pokemonData.baseStats.defense, defenseEv, level, defenseNature),
    spAttack: calculateChampionsOtherStat(pokemonData.baseStats.spAttack, spAttackEv, level, spAttackNature),
    spDefense: calculateChampionsOtherStat(pokemonData.baseStats.spDefense, spDefenseEv, level, spDefenseNature),
    speed: calculateChampionsOtherStat(pokemonData.baseStats.speed, speedEv, level, speedNature)
  };
}

function updateMyAbilityOptions(index, pokemonData) {
  const abilityInput = document.querySelector(`.my-ability-input[data-index="${index}"]`);
  const abilityList = document.getElementById(`myAbilityList-${index}`);

  if (!abilityInput || !abilityList) {
    return;
  }

  abilityList.innerHTML = "";

  if (!pokemonData || !pokemonData.name) {
    abilityInput.value = "";
    return;
  }

  const abilities = getPokemonAbilities(pokemonData.name);

  if (abilities.length === 0) {
    return;
  }

  abilities.forEach(ability => {
    const option = document.createElement("option");
    option.value = ability;
    abilityList.appendChild(option);
  });

  if (!abilityInput.value || !abilities.includes(abilityInput.value)) {
    abilityInput.value = abilities[0];
  }
}


function updateMyPokemonStatPreview(index) {
  const nameInput = document.querySelector(`.my-name-input[data-index="${index}"]`);
  const baseStatBox = document.querySelector(`.my-base-stat-box[data-index="${index}"]`);
  const actualStatBox = document.querySelector(`.my-actual-stat-box[data-index="${index}"]`);

  if (!nameInput || !baseStatBox || !actualStatBox) {
    return;
  }

  const pokemonName = nameInput.value.trim();
  const pokemonData = findPokemonData(pokemonName);

  if (!pokemonName) {
    baseStatBox.innerHTML = `<p class="small-text">ポケモン名を入力</p>`;
    actualStatBox.innerHTML = `<p class="small-text">努力値を入力</p>`;
    return;
  }

  if (!pokemonData) {
    baseStatBox.innerHTML = `<p class="small-text">種族値データなし</p>`;
    actualStatBox.innerHTML = `<p class="small-text">実数値を計算できません</p>`;
    return;
  }

  const stats = calculatePokemonActualStatsFromForm(pokemonData, index);

  const natureInput = document.querySelector(`.my-nature-name-input[data-index="${index}"]`);
  const naturePreview = document.querySelector(`.my-nature-preview[data-index="${index}"]`);

  if (naturePreview) {
    naturePreview.textContent = getNatureCorrectionText(
      natureInput ? natureInput.value.trim() : ""
    );
  }

  baseStatBox.innerHTML = `
    <div class="stat-preview-grid">
      <span>H ${pokemonData.baseStats.hp}</span>
      <span>A ${pokemonData.baseStats.attack}</span>
      <span>B ${pokemonData.baseStats.defense}</span>
      <span>C ${pokemonData.baseStats.spAttack}</span>
      <span>D ${pokemonData.baseStats.spDefense}</span>
      <span>S ${pokemonData.baseStats.speed}</span>
    </div>
  `;

  actualStatBox.innerHTML = `
    <div class="stat-preview-grid actual">
      <span>H ${stats.hp}</span>
      <span>A ${stats.attack}</span>
      <span>B ${stats.defense}</span>
      <span>C ${stats.spAttack}</span>
      <span>D ${stats.spDefense}</span>
      <span>S ${stats.speed}</span>
    </div>
  `;
}

function updateAllMyPokemonStatPreviews() {
  for (let i = 0; i < 6; i++) {
    updateMyPokemonStatPreview(i);
  }
}

function clampAbilityPoint(value) {
  const numberValue = Number(value);

  if (Number.isNaN(numberValue)) {
    return 0;
  }

  if (numberValue < 0) {
    return 0;
  }

  if (numberValue > 32) {
    return 32;
  }

  return Math.floor(numberValue);
}

function getDefenderAbilityPointTotal() {
  return (
    (Number(defenderHpEvInput.value) || 0) +
    (Number(defenderDefenseEvInput.value) || 0) +
    (Number(defenderSpDefenseEvInput.value) || 0)
  );
}

function updateDefenderAbilityPointTotal() {
  const hp = Number(defenderHpEvInput.value) || 0;
  const defense = Number(defenderDefenseEvInput.value) || 0;
  const spDefense = Number(defenderSpDefenseEvInput.value) || 0;

  const total = hp + defense + spDefense;

  if (defenderAbilityPointTotal) {
    defenderAbilityPointTotal.textContent = total;

    if (total >= 96) {
      defenderAbilityPointTotal.classList.add("max");
    } else {
      defenderAbilityPointTotal.classList.remove("max");
    }
  }

  // それぞれ独立して最大32
  defenderHpEvRange.max = 32;
  defenderDefenseEvRange.max = 32;
  defenderSpDefenseEvRange.max = 32;

  defenderHpEvInput.max = 32;
  defenderDefenseEvInput.max = 32;
  defenderSpDefenseEvInput.max = 32;
}

function setDefenderAbilityPoint(target, value) {
  const point = clampAbilityPoint(value);

  if (target === "hp") {
    defenderHpEvInput.value = point;
    defenderHpEvRange.value = point;
    defenderHpEvValue.textContent = point;
  }

  if (target === "defense") {
    defenderDefenseEvInput.value = point;
    defenderDefenseEvRange.value = point;
    defenderDefenseEvValue.textContent = point;
  }

  if (target === "spDefense") {
    defenderSpDefenseEvInput.value = point;
    defenderSpDefenseEvRange.value = point;
    defenderSpDefenseEvValue.textContent = point;
  }

  updateDefenderAbilityPointTotal();
  applyDefenderEvAdjustment();
  updateAutoDamageSettings();
  scheduleAutoDamageCalculation();
}

function updateDefenderRealStatDisplay(hp, defense, spDefense) {
  defenderHpRealValue.textContent = hp || "-";
  defenderDefenseRealValue.textContent = defense || "-";
  defenderSpDefenseRealValue.textContent = spDefense || "-";
}

function applyDefenderEvAdjustment() {
  const defender = getDamagePokemon(
    defenderSideSelect.value,
    defenderPokemonInput.value,
    "defender"
  );

  if (!defender || !defender.name) {
    updateDefenderRealStatDisplay(null, null, null);
    return;
  }

  const pokemonData = findPokemonData(defender.name);



  // 種族値データがない場合だけ、登録済み実数値を使う
  if (!pokemonData) {
    if (defender.stats) {
      defenderHpInput.value = defender.stats.hp || "";

      defenseStatInput.value = moveCategorySelect.value === "physical"
        ? defender.stats.defense || ""
        : defender.stats.spDefense || "";
    }

    updateDefenderRealStatDisplay(null, null, null);
    return;
  }

  const level = Number(damageLevelInput.value) || 50;

  const hpPoint = Number(defenderHpEvInput.value) || 0;
  const defensePoint = Number(defenderDefenseEvInput.value) || 0;
  const spDefensePoint = Number(defenderSpDefenseEvInput.value) || 0;

  const defenseNature = Number(defenderDefenseNatureSelect.value) || 1;
  const spDefenseNature = Number(defenderSpDefenseNatureSelect.value) || 1;

  const hp = calculateChampionsHpStat(
    pokemonData.baseStats.hp,
    hpPoint,
    level
  );

  const defense = calculateChampionsOtherStat(
    pokemonData.baseStats.defense,
    defensePoint,
    level,
    defenseNature
  );

  const spDefense = calculateChampionsOtherStat(
    pokemonData.baseStats.spDefense,
    spDefensePoint,
    level,
    spDefenseNature
  );

  updateDefenderRealStatDisplay(hp, defense, spDefense);

  defenderHpInput.value = hp;

  if (moveCategorySelect.value === "physical") {
    defenseStatInput.value = defense;
  } else {
    defenseStatInput.value = spDefense;
  }
}

function updateAttackerAbilityPointTotal() {
  const attack = Number(attackerAttackEvInput.value) || 0;
  const spAttack = Number(attackerSpAttackEvInput.value) || 0;

  const total = attack + spAttack;

  if (attackerAbilityPointTotal) {
    attackerAbilityPointTotal.textContent = total;

    if (total >= 64) {
      attackerAbilityPointTotal.classList.add("max");
    } else {
      attackerAbilityPointTotal.classList.remove("max");
    }
  }

  // それぞれ独立して最大32
  attackerAttackEvRange.max = 32;
  attackerSpAttackEvRange.max = 32;

  attackerAttackEvInput.max = 32;
  attackerSpAttackEvInput.max = 32;
}

function setAttackerAbilityPoint(target, value) {
  const point = clampAbilityPoint(value);

  if (target === "attack") {
    attackerAttackEvInput.value = point;
    attackerAttackEvRange.value = point;
    attackerAttackEvValue.textContent = point;
  }

  if (target === "spAttack") {
    attackerSpAttackEvInput.value = point;
    attackerSpAttackEvRange.value = point;
    attackerSpAttackEvValue.textContent = point;
  }

  updateAttackerAbilityPointTotal();
  applyAttackerEvAdjustment();
  updateAutoDamageSettings();
  scheduleAutoDamageCalculation();
}

function applyAttackerEvAdjustment() {
  const attacker = getDamagePokemon(
    attackerSideSelect.value,
    attackerPokemonInput.value,
    "attacker"
  );

  if (!attacker || !attacker.name) {
    updateAttackerRealStatDisplay(null, null);
    return;
  }

  const pokemonData = findPokemonData(attacker.name);



  // 種族値データがない場合だけ、登録済み実数値を使う
  if (!pokemonData) {
    if (attacker.stats) {
      attackStatInput.value = moveCategorySelect.value === "physical"
        ? attacker.stats.attack || ""
        : attacker.stats.spAttack || "";
    }

    updateAttackerRealStatDisplay(null, null);
    return;
  }

  const level = Number(damageLevelInput.value) || 50;

  const attackPoint = Number(attackerAttackEvInput.value) || 0;
  const spAttackPoint = Number(attackerSpAttackEvInput.value) || 0;

  const attackNature = Number(attackerAttackNatureSelect.value) || 1;
  const spAttackNature = Number(attackerSpAttackNatureSelect.value) || 1;

  const attack = calculateChampionsOtherStat(
    pokemonData.baseStats.attack,
    attackPoint,
    level,
    attackNature
  );

  const spAttack = calculateChampionsOtherStat(
    pokemonData.baseStats.spAttack,
    spAttackPoint,
    level,
    spAttackNature
  );

  updateAttackerRealStatDisplay(attack, spAttack);

  if (moveCategorySelect.value === "physical") {
    attackStatInput.value = attack;
  } else {
    attackStatInput.value = spAttack;
  }
}

function updateAttackerRealStatDisplay(attack, spAttack) {
  attackerAttackRealValue.textContent = attack || "-";
  attackerSpAttackRealValue.textContent = spAttack || "-";
}

function setNatureSelectValue(selectElement, value) {
  if (!selectElement) {
    return;
  }

  selectElement.value = String(value || 1);

  const targetId = selectElement.id;
  const buttonRow = document.querySelector(`.nature-button-row[data-nature-target="${targetId}"]`);

  if (!buttonRow) {
    return;
  }

  buttonRow.querySelectorAll(".nature-button").forEach(button => {
    button.classList.toggle(
      "active",
      String(button.dataset.value) === String(selectElement.value)
    );
  });
}

function syncAttackerAdjustmentFromRegisteredPokemon(pokemon) {
  if (!pokemon || !pokemon.evs) {
    return;
  }

  const attackPoint = clampAbilityPoint(pokemon.evs.attack || 0);
  const spAttackPoint = clampAbilityPoint(pokemon.evs.spAttack || 0);

  attackerAttackEvInput.value = attackPoint;
  attackerAttackEvRange.value = attackPoint;
  attackerAttackEvValue.textContent = attackPoint;

  attackerSpAttackEvInput.value = spAttackPoint;
  attackerSpAttackEvRange.value = spAttackPoint;
  attackerSpAttackEvValue.textContent = spAttackPoint;

  setNatureSelectValue(
    attackerAttackNatureSelect,
    pokemon.natures ? pokemon.natures.attack || 1 : 1
  );

  setNatureSelectValue(
    attackerSpAttackNatureSelect,
    pokemon.natures ? pokemon.natures.spAttack || 1 : 1
  );

  updateAttackerAbilityPointTotal();
  applyAttackerEvAdjustment();
}

function syncDefenderAdjustmentFromRegisteredPokemon(pokemon) {
  if (!pokemon || !pokemon.evs) {
    return;
  }

  const hpPoint = clampAbilityPoint(pokemon.evs.hp || 0);
  const defensePoint = clampAbilityPoint(pokemon.evs.defense || 0);
  const spDefensePoint = clampAbilityPoint(pokemon.evs.spDefense || 0);

  defenderHpEvInput.value = hpPoint;
  defenderHpEvRange.value = hpPoint;
  defenderHpEvValue.textContent = hpPoint;

  defenderDefenseEvInput.value = defensePoint;
  defenderDefenseEvRange.value = defensePoint;
  defenderDefenseEvValue.textContent = defensePoint;

  defenderSpDefenseEvInput.value = spDefensePoint;
  defenderSpDefenseEvRange.value = spDefensePoint;
  defenderSpDefenseEvValue.textContent = spDefensePoint;

  setNatureSelectValue(
    defenderDefenseNatureSelect,
    pokemon.natures ? pokemon.natures.defense || 1 : 1
  );

  setNatureSelectValue(
    defenderSpDefenseNatureSelect,
    pokemon.natures ? pokemon.natures.spDefense || 1 : 1
  );

  updateDefenderAbilityPointTotal();
  applyDefenderEvAdjustment();
}

function getTypeEffectiveness(moveType, defenderTypes) {
  if (!moveType || !defenderTypes || defenderTypes.length === 0) {
    return 1;
  }

  let multiplier = 1;

  defenderTypes.forEach(type => {
    const chart = typeChart[moveType];

    if (chart && chart[type] !== undefined) {
      multiplier *= chart[type];
    }
  });

  return multiplier;
}

function updateAutoDamageSettings() {
  const attacker = getDamagePokemon(
    attackerSideSelect.value,
    attackerPokemonInput.value,
    "attacker"
  );

  const defender = getDamagePokemon(
    defenderSideSelect.value,
    defenderPokemonInput.value,
    "defender"
  );

  const moveType = moveTypeInput.value.trim();

  if (attacker && attacker.types) {
    stabCheck.checked = attacker.types.includes(moveType);
  }

  if (defender && defender.types) {
    typeEffectivenessSelect.value = String(getTypeEffectiveness(moveType, defender.types));
  }

  updateMegaButtons();
  syncDamageItemCheckboxes();
}


function updateDamageCategoryRows() {
  const category = moveCategorySelect.value;

  const physicalRows = document.querySelectorAll(".physical-stat-row");
  const specialRows = document.querySelectorAll(".special-stat-row");

  physicalRows.forEach(row => {
    row.classList.remove("hidden-by-category", "active-by-category");
  });

  specialRows.forEach(row => {
    row.classList.remove("hidden-by-category", "active-by-category");
  });

  if (category === "physical") {
    physicalRows.forEach(row => {
      row.classList.add("active-by-category");
    });

    specialRows.forEach(row => {
      row.classList.add("hidden-by-category");
    });
  }

  if (category === "special") {
    specialRows.forEach(row => {
      row.classList.add("active-by-category");
    });

    physicalRows.forEach(row => {
      row.classList.add("hidden-by-category");
    });
  }
}

function syncWallCheck() {
  if (!wallCheck || !reflectCheck || !lightScreenCheck || !moveCategorySelect) {
    return;
  }

  const hasWall = wallCheck.checked;
  const category = moveCategorySelect.value;

  if (category === "physical") {
    reflectCheck.checked = hasWall;
    lightScreenCheck.checked = false;
    return;
  }

  if (category === "special") {
    lightScreenCheck.checked = hasWall;
    reflectCheck.checked = false;
    return;
  }

  reflectCheck.checked = false;
  lightScreenCheck.checked = false;
}

function syncWeatherChecks(changedWeather = null) {
  if (!sunCheck || !rainCheck) {
    return;
  }

  if (changedWeather === "sun" && sunCheck.checked) {
    rainCheck.checked = false;
  }

  if (changedWeather === "rain" && rainCheck.checked) {
    sunCheck.checked = false;
  }

  if (sunCheck.checked) {
    weatherSelect.value = "sun";
    return;
  }

  if (rainCheck.checked) {
    weatherSelect.value = "rain";
    return;
  }

  weatherSelect.value = "none";
}

function getCurrentDamagePokemonName(role) {
  if (role === "attacker") {
    const pokemon = getDamagePokemon(
      attackerSideSelect.value,
      attackerPokemonInput.value,
      "attacker"
    );

    return pokemon ? pokemon.name : "";
  }

  const pokemon = getDamagePokemon(
    defenderSideSelect.value,
    defenderPokemonInput.value,
    "defender"
  );

  return pokemon ? pokemon.name : "";
}

function toggleMegaEvolution(role) {
  const currentName = getCurrentDamagePokemonName(role);

  if (!currentName) {
    return;
  }

  const nextName = getNextMegaName(currentName);

  if (!nextName) {
    damageResult.innerHTML = `${currentName} はメガシンカ先データが登録されていません。`;
    return;
  }

  const nextData = findPokemonData(nextName);

  if (!nextData) {
    damageResult.innerHTML = `${nextName} のタイプ・種族値データが登録されていません。`;
    return;
  }

  if (!nextName.includes("メガ")) {
    damageMegaState[role] = null;
  } else {
    damageMegaState[role] = nextName;
  }

updateMegaButtons();
updateDamageCategoryRows();
applyAttackerEvAdjustment();
applyDefenderEvAdjustment();
updateAutoDamageSettings();
updateAbilityOptions();
renderPokemonPreview(attackerPokemonPreview, getCurrentDamagePokemonName("attacker"));
renderPokemonPreview(defenderPokemonPreview, getCurrentDamagePokemonName("defender"));
scheduleAutoDamageCalculation();
}

function updateMegaButtons() {
  const attackerName = getCurrentDamagePokemonName("attacker");
  const defenderName = getCurrentDamagePokemonName("defender");

  attackerMegaStatus.textContent = attackerName ? `現在：${attackerName}` : "";
  defenderMegaStatus.textContent = defenderName ? `現在：${defenderName}` : "";

  const nextAttackerName = getNextMegaName(attackerName);
  const nextDefenderName = getNextMegaName(defenderName);

  if (nextAttackerName) {
    megaAttackerButton.disabled = false;
    megaAttackerButton.textContent = `攻撃側：${nextAttackerName}へ`;
  } else {
    megaAttackerButton.disabled = true;
    megaAttackerButton.textContent = "攻撃側メガ不可";
  }

  if (nextDefenderName) {
    megaDefenderButton.disabled = false;
    megaDefenderButton.textContent = `防御側：${nextDefenderName}へ`;
  } else {
    megaDefenderButton.disabled = true;
    megaDefenderButton.textContent = "防御側メガ不可";
  }
}

function swapAttackDefense() {
  const oldAttackerSide = attackerSideSelect.value;
  const oldDefenderSide = defenderSideSelect.value;
  const oldAttackerPokemon = attackerPokemonInput.value;
  const oldDefenderPokemon = defenderPokemonInput.value;

  attackerSideSelect.value = oldDefenderSide;
  defenderSideSelect.value = oldAttackerSide;

  attackerPokemonInput.value = oldDefenderPokemon;
  defenderPokemonInput.value = oldAttackerPokemon;

  damageMegaState.attacker = null;
  damageMegaState.defender = null;

updateDamagePokemonOptions();

const attacker = getDamagePokemon(
  attackerSideSelect.value,
  attackerPokemonInput.value,
  "attacker"
);

const defender = getDamagePokemon(
  defenderSideSelect.value,
  defenderPokemonInput.value,
  "defender"
);

if (attackerSideSelect.value === "my") {
  syncAttackerAdjustmentFromRegisteredPokemon(attacker);
} else {
  applyAttackerEvAdjustment();
}

if (defenderSideSelect.value === "my") {
  syncDefenderAdjustmentFromRegisteredPokemon(defender);
} else {
  applyDefenderEvAdjustment();
}

scheduleAutoDamageCalculation();
}

function applyModifier(value, modifier) {
  return Math.floor(value * modifier);
}

function apply4096Modifier(value, modifier) {
  const raw = value * modifier;
  const base = Math.floor(raw / 4096);
  const remainder = raw % 4096;

  return remainder > 2048 ? base + 1 : base;
}

function getStageValueForCritical(stage, type) {
  const stageNumber = Number(stage) || 0;

  if (!criticalCheck.checked) {
    return stageNumber;
  }

  // 急所時は、攻撃側のマイナス補正を無視
  if (type === "attack" && stageNumber < 0) {
    return 0;
  }

  // 急所時は、防御側のプラス補正を無視
  if (type === "defense" && stageNumber > 0) {
    return 0;
  }

  return stageNumber;
}

function getDamageModifierValue(typeEffectiveness, effectiveMoveType = moveTypeInput.value.trim()) {
  let modifier = 4096;

const attackerAbility = getSelectedAttackerAbility();
const defenderAbility =
  attackerAbility === "かたやぶり"
    ? ""
    : getSelectedDefenderAbility();

const moveName = damageMoveInput.value.trim();
const originalMoveType = moveTypeInput.value.trim();
const moveType = effectiveMoveType;

const attackerItem = getSelectedAttackerItem(moveType);
const defenderItem = getSelectedDefenderItem(moveType);

  const effectiveness = Number.isFinite(typeEffectiveness)
    ? typeEffectiveness
    : 1;

  // 攻撃側特性：かたいツメ 接触技1.3倍
  if (attackerAbility === "かたいツメ" && isContactMove(moveName)) {
    modifier = apply4096Modifier(modifier, 5324);
  }

  // もうか・げきりゅう・しんりょく・むしのしらせ：HP1/3以下で対応タイプ1.5倍
if (attackerLowHpCheck && attackerLowHpCheck.checked) {
  if (attackerAbility === "もうか" && moveType === "ほのお") {
    modifier = apply4096Modifier(modifier, 6144);
  }

  if (attackerAbility === "げきりゅう" && moveType === "みず") {
    modifier = apply4096Modifier(modifier, 6144);
  }

  if (attackerAbility === "しんりょく" && moveType === "くさ") {
    modifier = apply4096Modifier(modifier, 6144);
  }

  if (attackerAbility === "むしのしらせ" && moveType === "むし") {
    modifier = apply4096Modifier(modifier, 6144);
  }
}

  // 攻撃側特性：ちからずく 対象技1.3倍
  if (attackerAbility === "ちからずく" && isSheerForceMove(moveName)) {
    modifier = apply4096Modifier(modifier, 5324);
  }
// てつのこぶし：パンチ技1.2倍
if (attackerAbility === "てつのこぶし" && isPunchMove(moveName)) {
  modifier = apply4096Modifier(modifier, 4915);
}

// がんじょうあご：かみつき技1.5倍
if (attackerAbility === "がんじょうあご" && isBitingMove(moveName)) {
  modifier = apply4096Modifier(modifier, 6144);
}

// すてみ：反動技1.2倍
if (attackerAbility === "すてみ" && isRecoilMove(moveName)) {
  modifier = apply4096Modifier(modifier, 4915);
}

// メガランチャー：波動技1.5倍
if (attackerAbility === "メガランチャー" && isPulseMove(moveName)) {
  modifier = apply4096Modifier(modifier, 6144);
}

// きれあじ：切り技1.5倍
if (attackerAbility === "きれあじ" && isCuttingMove(moveName)) {
  modifier = apply4096Modifier(modifier, 6144);
}

  // フェアリースキン・スカイスキン：ノーマル技をタイプ変更して1.2倍
if (isSkinAbilityActive(originalMoveType, attackerAbility)) {
  modifier = apply4096Modifier(modifier, 4915);
}

if (attackerAbility === "そうだいしょう") {
  const faintedCount = getFaintedAllyCount();

  if (faintedCount > 0) {
    const supremeModifier = Math.round(4096 * (1 + faintedCount * 0.1));
    modifier = apply4096Modifier(modifier, supremeModifier);
    addAppliedDamageModifier("そうだいしょう", `倒れた味方${faintedCount}体で×${(1 + faintedCount * 0.1).toFixed(1)}`);
  }
}

  // いのちのたま：1.3倍
  if (attackerItem === "lifeOrb") {
    modifier = apply4096Modifier(modifier, 5324);
  }

  // タイプ強化アイテム：1.2倍
  if (attackerItem === "typeBoost") {
    modifier = apply4096Modifier(modifier, 4915);
  }

  // 達人の帯：効果抜群のときだけ1.2倍
  if (attackerItem === "expertBelt" && effectiveness > 1) {
    modifier = apply4096Modifier(modifier, 4915);
  }

  // いろめがね：いまひとつのとき2倍
  if (attackerAbility === "いろめがね" && effectiveness > 0 && effectiveness < 1) {
    modifier = apply4096Modifier(modifier, 8192);
  }

  // すなのちから：砂下の岩・地面・鋼技1.3倍
  if (
    attackerAbility === "すなのちから" &&
    weatherSelect.value === "sand" &&
    ["いわ", "じめん", "はがね"].includes(moveType)
  ) {
    modifier = apply4096Modifier(modifier, 5324);
  }

  // 半減きのみ：効果抜群のときだけ0.5倍
  if (defenderItem === "resistBerry" && effectiveness > 1) {
    modifier = apply4096Modifier(modifier, 2048);
  }

  // あついしぼう：炎・氷技を0.5倍
  if (
    defenderAbility === "あついしぼう" &&
    ["ほのお", "こおり"].includes(moveType)
  ) {
    modifier = apply4096Modifier(modifier, 2048);
  }

  // もふもふ：接触技0.5倍
  if (defenderAbility === "もふもふ" && isContactMove(moveName)) {
    modifier = apply4096Modifier(modifier, 2048);
  }

  // もふもふ：炎技2倍
  if (defenderAbility === "もふもふ" && moveType === "ほのお") {
    modifier = apply4096Modifier(modifier, 8192);
  }

  // たいねつ：炎技0.5倍
  if (defenderAbility === "たいねつ" && moveType === "ほのお") {
    modifier = apply4096Modifier(modifier, 2048);
  }

  // すいほう：炎技0.5倍
  if (defenderAbility === "すいほう" && moveType === "ほのお") {
    modifier = apply4096Modifier(modifier, 2048);
  }

  // フィルター・ハードロック：効果抜群を0.75倍
  if (
    ["フィルター", "ハードロック"].includes(defenderAbility) &&
    effectiveness > 1
  ) {
    modifier = apply4096Modifier(modifier, 3072);
  }

  // マルチスケイル・ファントムガード：HP満タン時0.5倍
  if (
    ["マルチスケイル", "ファントムガード"].includes(defenderAbility) &&
    Number(defenderCurrentHpPercentInput.value) >= 100
  ) {
    modifier = apply4096Modifier(modifier, 2048);
  }

// 壁：急所時は無視
if (!criticalCheck.checked) {
  const hasWall = wallCheck && wallCheck.checked;

  if (
    moveCategorySelect.value === "physical" &&
    (reflectCheck.checked || hasWall)
  ) {
    modifier = apply4096Modifier(modifier, 2048);
  }

  if (
    moveCategorySelect.value === "special" &&
    (lightScreenCheck.checked || hasWall)
  ) {
    modifier = apply4096Modifier(modifier, 2048);
  }
}

// すいほう：みず技2倍
if (attackerAbility === "すいほう" && moveType === "みず") {
  modifier = apply4096Modifier(modifier, 8192);
}

// いわはこび：いわ技1.5倍
if (attackerAbility === "いわはこび" && moveType === "いわ") {
  modifier = apply4096Modifier(modifier, 6144);
}

// パンクロック：音技1.3倍
if (attackerAbility === "パンクロック" && isSoundMove(moveName)) {
  modifier = apply4096Modifier(modifier, 5324);
}

// 防御側パンクロック：音技半減
if (defenderAbility === "パンクロック" && isSoundMove(moveName)) {
  modifier = apply4096Modifier(modifier, 2048);
}

// サンパワー：晴れ時、特殊技1.5倍
if (
  attackerAbility === "サンパワー" &&
  weatherSelect.value === "sun" &&
  moveCategorySelect.value === "special"
) {
  modifier = apply4096Modifier(modifier, 6144);
}

// こおりのりんぷん：特殊技半減
if (
  defenderAbility === "こおりのりんぷん" &&
  moveCategorySelect.value === "special"
) {
  modifier = apply4096Modifier(modifier, 2048);
}

// フェアリーオーラ / ダークオーラ / オーラブレイク
const isFairyAuraActive =
  attackerAbility === "フェアリーオーラ" &&
  moveType === "フェアリー";

const isDarkAuraActive =
  attackerAbility === "ダークオーラ" &&
  moveType === "あく";

if (isFairyAuraActive || isDarkAuraActive) {
  if (defenderAbility === "オーラブレイク") {
    modifier = apply4096Modifier(modifier, 3072);
  } else {
    modifier = apply4096Modifier(modifier, 5448);
  }
}

// ダークオーラ・フェアリーオーラを相手側が持っている場合も場に出ている想定で反映したい場合
if (
  defenderAbility === "フェアリーオーラ" &&
  moveType === "フェアリー"
) {
  modifier = apply4096Modifier(modifier, 5448);
}

if (
  defenderAbility === "ダークオーラ" &&
  moveType === "あく"
) {
  modifier = apply4096Modifier(modifier, 5448);
}

// こだいかっせい / クォークチャージ等は本来ステータス上昇だが、簡易的に条件チェックで1.3倍扱い
if (
  ["こだいかっせい", "クォークチャージ"].includes(attackerAbility) &&
  hasMoveBoostCondition()
) {
  modifier = apply4096Modifier(modifier, 5324);
}

// フィールド補正
modifier = applyFieldModifierToDamageModifier(modifier, moveType);

  return modifier;
}

function getStageMultiplier(stage) {
  const stageNumber = Number(stage) || 0;

  if (stageNumber >= 0) {
    return (2 + stageNumber) / 2;
  }

  return 2 / (2 - stageNumber);
}

function applyStageModifier(value, stage) {
  return Math.floor(value * getStageMultiplier(stage));
}

function resetDamageHpBar() {
  currentHpBar.style.width = "0%";
  currentHpBar.className = "hp-bar-current hp-bar-remaining";
damageRangeBar.className = "hp-bar-range";
guaranteedDamageBar.className = "hp-bar-guaranteed";

  damageRangeBar.style.left = "0%";
  damageRangeBar.style.width = "0%";

  guaranteedDamageBar.style.left = "0%";
  guaranteedDamageBar.style.width = "0%";

  hpBarBeforeLabel.textContent = "現在HP: -";
  hpBarAfterLabel.textContent = "被弾後HP: -";
}

function renderDamageHpBar(maxHp, currentHp, minDamage, maxDamage) {
  if (!maxHp || maxHp <= 0) {
    resetDamageHpBar();
    return;
  }

  const currentPercent = (currentHp / maxHp) * 100;

  const remainAfterMaxDamage = Math.max(0, currentHp - maxDamage);
  const remainAfterMinDamage = Math.max(0, currentHp - minDamage);

  const remainAfterMaxPercent = (remainAfterMaxDamage / maxHp) * 100;
  const remainAfterMinPercent = (remainAfterMinDamage / maxHp) * 100;

  // 左から
  // 緑 = 必ず残るHP
  // 薄赤 = 乱数で変動する範囲
  // 赤 = 必ず減るHP
  const remainWidth = Math.max(0, remainAfterMaxPercent);
  const randomRangeWidth = Math.max(0, remainAfterMinPercent - remainAfterMaxPercent);
  const guaranteedDamageWidth = Math.max(0, currentPercent - remainAfterMinPercent);

  // 緑（残りHP）
  currentHpBar.style.left = "0%";
  currentHpBar.style.width = `${remainWidth}%`;
  currentHpBar.className = "hp-bar-current hp-bar-remaining";

  // 薄赤（乱数幅）
  damageRangeBar.style.left = `${remainWidth}%`;
  damageRangeBar.style.width = `${randomRangeWidth}%`;
  damageRangeBar.className = "hp-bar-range";

  // 赤（確定で減るHP）
  guaranteedDamageBar.style.left = `${remainWidth + randomRangeWidth}%`;
  guaranteedDamageBar.style.width = `${guaranteedDamageWidth}%`;
  guaranteedDamageBar.className = "hp-bar-guaranteed";

  hpBarBeforeLabel.textContent =
    `現在HP: ${currentHp} / ${maxHp} (${currentPercent.toFixed(1)}%)`;

  hpBarAfterLabel.textContent =
    `被弾後HP: ${remainAfterMaxDamage}〜${remainAfterMinDamage} / ${maxHp}`;
}

function getOpponentItemNameByPokemonName(pokemonName) {
  if (!pokemonName) {
    return "";
  }

  const input = [...document.querySelectorAll(".opponent-item-input")]
    .find(input => input.dataset.name === pokemonName);

  if (input && input.value.trim()) {
    return input.value.trim();
  }

  if (typeof opponentItemInputState !== "undefined") {
    return opponentItemInputState[pokemonName] || "";
  }

  return "";
}

function getRegisteredMyPokemonByName(pokemonName) {
  const team = getSelectedMyTeam();

  if (!team || !pokemonName) {
    return null;
  }

  return team.pokemons.find(pokemon => pokemon.name === pokemonName) || null;
}

function syncDamageItemInputsFromCurrentPokemon() {
  const attackerName = attackerPokemonInput.value.trim();
  const defenderName = defenderPokemonInput.value.trim();

  if (damageAttackerItemInput) {
    let attackerItem = "";

    if (attackerSideSelect.value === "my") {
      const pokemon = getRegisteredMyPokemonByName(attackerName);
      attackerItem = pokemon ? pokemon.item || "" : "";
    }

    if (attackerSideSelect.value === "opponent") {
      attackerItem = getOpponentItemNameByPokemonName(attackerName);
    }

    damageAttackerItemInput.value = attackerItem;
  }

  if (damageDefenderItemInput) {
    let defenderItem = "";

    if (defenderSideSelect.value === "my") {
      const pokemon = getRegisteredMyPokemonByName(defenderName);
      defenderItem = pokemon ? pokemon.item || "" : "";
    }

    if (defenderSideSelect.value === "opponent") {
      defenderItem = getOpponentItemNameByPokemonName(defenderName);
    }

    damageDefenderItemInput.value = defenderItem;
  }
}

function syncDamageItemInputToSource(role) {
  const isAttacker = role === "attacker";

  const sideSelect = isAttacker ? attackerSideSelect : defenderSideSelect;
  const pokemonInput = isAttacker ? attackerPokemonInput : defenderPokemonInput;
  const itemInput = isAttacker ? damageAttackerItemInput : damageDefenderItemInput;

  if (!itemInput) {
    return;
  }

  const pokemonName = pokemonInput.value.trim();
  const itemName = itemInput.value.trim();

  if (!pokemonName) {
    return;
  }

  if (sideSelect.value === "my") {
    const team = getSelectedMyTeam();

    if (!team) {
      return;
    }

    const pokemon = team.pokemons.find(pokemon => pokemon.name === pokemonName);

    if (!pokemon) {
      return;
    }

    pokemon.item = itemName;
    saveMyTeamsToStorage();

    renderSelectedMyTeamPreview();
    renderMyTeamListBoard();
  }

  if (sideSelect.value === "opponent") {
    opponentItemInputState[pokemonName] = itemName;

    const opponentItemInput = [...document.querySelectorAll(".opponent-item-input")]
      .find(input => input.dataset.name === pokemonName);

    if (opponentItemInput) {
      opponentItemInput.value = itemName;
    }
  }

  syncDamageItemCheckboxes();
  scheduleAutoDamageCalculation();
}

function getDamageAttackerItemName() {
  if (damageAttackerItemInput && damageAttackerItemInput.value.trim()) {
    return damageAttackerItemInput.value.trim();
  }

  const attackerName = attackerPokemonInput.value.trim();

  if (!attackerName) {
    return "";
  }

  if (attackerSideSelect.value === "my") {
    const pokemon = getRegisteredMyPokemonByName(attackerName);
    return pokemon ? pokemon.item || "" : "";
  }

  if (attackerSideSelect.value === "opponent") {
    return getOpponentItemNameByPokemonName(attackerName);
  }

  return "";
}

function getDamageDefenderItemName() {
  if (damageDefenderItemInput && damageDefenderItemInput.value.trim()) {
    return damageDefenderItemInput.value.trim();
  }

  const defenderName = defenderPokemonInput.value.trim();

  if (!defenderName) {
    return "";
  }

  if (defenderSideSelect.value === "my") {
    const pokemon = getRegisteredMyPokemonByName(defenderName);
    return pokemon ? pokemon.item || "" : "";
  }

  if (defenderSideSelect.value === "opponent") {
    return getOpponentItemNameByPokemonName(defenderName);
  }

  return "";
}

function getAutoAttackerItemKey(itemName, moveType = moveTypeInput.value.trim()) {
  if (!itemName) {
    return "none";
  }

  if (itemName === "いのちのたま") {
    return "lifeOrb";
  }

  if (itemName === "たつじんのおび") {
    return "expertBelt";
  }

  if (
    typeof typeBoostItemTypeMap !== "undefined" &&
    typeBoostItemTypeMap[itemName] === moveType
  ) {
    return "typeBoost";
  }

  if (
    itemName === "こだわりハチマキ" ||
    itemName === "こだわりメガネ"
  ) {
    return "choiceItem";
  }

  return "none";
}

function getAutoDefenderItemKey(itemName, moveType = moveTypeInput.value.trim()) {
  if (!itemName) {
    return "none";
  }

  if (itemName === "とつげきチョッキ" || itemName === "突撃チョッキ") {
    return "assaultVest";
  }

  if (itemName === "しんかのきせき") {
    return "eviolite";
  }

  if (
    typeof resistBerryTypeMap !== "undefined" &&
    resistBerryTypeMap[itemName] === moveType
  ) {
    return "resistBerry";
  }

  return "none";
}

function getSelectedAttackerItem(moveType = moveTypeInput.value.trim()) {
  const itemName = getDamageAttackerItemName();
  const autoItem = getAutoAttackerItemKey(itemName, moveType);

  if (itemName) {
    return autoItem;
  }

  const checkedItem = [...attackerItemChecks].find(check => check.checked);
  return checkedItem ? checkedItem.value : "none";
}

function getSelectedDefenderItem(moveType = moveTypeInput.value.trim()) {
  const itemName = getDamageDefenderItemName();
  const autoItem = getAutoDefenderItemKey(itemName, moveType);

  if (itemName) {
    return autoItem;
  }

  const checkedItem = [...defenderItemChecks].find(check => check.checked);
  return checkedItem ? checkedItem.value : "none";
}

function setSingleItemCheckbox(checks, value) {
  checks.forEach(check => {
    check.checked = check.value === value && value !== "none";
  });
}

function syncDamageItemCheckboxes() {
  const attackerItemName = getDamageAttackerItemName();
  const defenderItemName = getDamageDefenderItemName();

  const attackerAbility = getSelectedAttackerAbility();
  const originalMoveType = moveTypeInput.value.trim();
  const effectiveMoveType = getEffectiveMoveType(originalMoveType, attackerAbility);

  if (attackerItemName) {
    const attackerItemKey = getAutoAttackerItemKey(attackerItemName, effectiveMoveType);
    setSingleItemCheckbox(attackerItemChecks, attackerItemKey);
  }

  if (defenderItemName) {
    const defenderItemKey = getAutoDefenderItemKey(defenderItemName, effectiveMoveType);
    setSingleItemCheckbox(defenderItemChecks, defenderItemKey);
  }
}

function getSelectedAttackerAbility() {
  return attackerAbilityInput ? attackerAbilityInput.value.trim() : "";
}

function getSelectedDefenderAbility() {
  return defenderAbilityInput ? defenderAbilityInput.value.trim() : "";
}

function isContactMove(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.contact === true : false;
}

function isSheerForceMove(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.sheerForce === true : false;
}

function getMoveHits(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.hits || 1 : 1;
}

function getMovePriority(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.priority || 0 : 0;
}

function isSoundMove(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.sound === true : false;
}

function isRecoilMove(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.recoil === true : false;
}

function isDrainMove(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.drain === true : false;
}

function isPunchMove(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.punch === true : false;
}

function isBitingMove(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.biting === true : false;
}

function isCuttingMove(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.cutting === true : false;
}

function isDanceMove(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.dance === true : false;
}

function isBulletMove(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.bullet === true : false;
}

function isPulseMove(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.pulse === true : false;
}

function isWindMove(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.wind === true : false;
}

function isPowderMove(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.powder === true : false;
}

function isExplosionMove(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.explosion === true : false;
}

function getMoveHits(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.hits || 1 : 1;
}

function getMovePriority(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.priority || 0 : 0;
}

function getMoveHitPowers(moveName, defaultPower, attackerAbility) {
  const moveData = findMoveData(moveName);

  const twoToFiveHitMoves = [
    "ロックブラスト",
    "スケイルショット",
    "タネマシンガン",
    "つららばり",
    "ミサイルばり",
    "みだれづき",
    "おうふくビンタ"
  ];

  // トリプルアクセル：最大3回。回数指定があれば途中までで計算
  if (moveName === "トリプルアクセル") {
    const tripleAxelPowers = [20, 40, 60];

    if (multiHitCountSelect && multiHitCountSelect.value !== "auto") {
      const selectedHitCount = Number(multiHitCountSelect.value) || 3;
      const safeHitCount = Math.min(3, Math.max(1, selectedHitCount));

      return tripleAxelPowers.slice(0, safeHitCount);
    }

    return tripleAxelPowers;
  }

  // moveData側に hitPowers がある場合
  if (moveData && Array.isArray(moveData.hitPowers)) {
    return moveData.hitPowers;
  }

  // 2〜5回技
  if (
    (moveData && moveData.hits === "2-5") ||
    twoToFiveHitMoves.includes(moveName)
  ) {
    let hitCount = 2;

    if (attackerAbility === "スキルリンク") {
      hitCount = 5;
    } else if (multiHitCountSelect && multiHitCountSelect.value !== "auto") {
      hitCount = Number(multiHitCountSelect.value) || 2;
    }

    return Array(hitCount).fill(defaultPower);
  }

  // 通常の固定回数技
  if (moveData && Number(moveData.hits) > 1) {
    const hitCount = Number(moveData.hits);
    return Array(hitCount).fill(defaultPower);
  }

  // 通常技
  return [defaultPower];
}

function isSoundMove(moveName) {
  const moveData = findMoveData(moveName);
  return moveData ? moveData.sound === true : false;
}

function isChecked(element) {
  return element ? element.checked : false;
}

function getBattleField() {
  return fieldSelect ? fieldSelect.value : "none";
}

function getFaintedAllyCount() {
  if (faintedAllyCountSelect) {
    return Math.min(5, Math.max(0, Number(faintedAllyCountSelect.value) || 0));
  }

  if (supremeOverlordCountSelect) {
    return Math.min(5, Math.max(0, Number(supremeOverlordCountSelect.value) || 0));
  }

  return 0;
}

function getAttackerHpPercentForPower() {
  return attackerHpConditionSelect
    ? Math.min(100, Math.max(1, Number(attackerHpConditionSelect.value) || 100))
    : 100;
}

function getAttackerStatusValue() {
  return attackerStatusSelect ? attackerStatusSelect.value : "";
}

function getDefenderStatusValue() {
  return defenderStatusSelect ? defenderStatusSelect.value : "";
}

function isAttackerBurned() {
  return getAttackerStatusValue() === "burn";
}

function isAttackerPoisoned() {
  const status = getAttackerStatusValue();
  return status === "poison" || status === "toxic";
}

function isAttackerStatusedForFacade() {
  return getAttackerStatusValue() !== "";
}

function isDefenderStatusedForHex() {
  return getDefenderStatusValue() !== "";
}

function isDefenderPoisoned() {
  const status = getDefenderStatusValue();
  return status === "poison" || status === "toxic";
}

function hasMoveBoostCondition() {
  return isChecked(moveBoostConditionCheck);
}

function isMoveConditionRowActive(conditionKey) {
  const row = document.querySelector(`[data-move-condition="${conditionKey}"]`);

  return row ? row.classList.contains("is-active") : false;
}

function hasDefenderItemForMove() {
  // はたきおとす / ポルターガイストなどで条件UIが出ているときは、
  // 出し入れチェックボックスを優先する
  if (defenderHasItemCheck && isMoveConditionRowActive("defender-item")) {
    return defenderHasItemCheck.checked;
  }

  // 条件UIが出ていないときだけ、通常の防御側持ち物欄を見る
  return Boolean(getDamageDefenderItemName());
}

function hasNoAttackerItemForMove() {
  // アクロバットなどで条件UIが出ているときは、
  // 出し入れチェックボックスを優先する
  if (attackerNoItemCheck && isMoveConditionRowActive("attacker-no-item")) {
    return attackerNoItemCheck.checked;
  }

  // 条件UIが出ていないときだけ、通常の攻撃側持ち物欄を見る
  return !getDamageAttackerItemName();
}




function getEffectiveMoveType(originalMoveType, attackerAbility, moveName = damageMoveInput.value.trim()) {
  let moveType = originalMoveType;

  if (moveName === "ウェザーボール") {
    if (weatherSelect.value === "sun") {
      moveType = "ほのお";
    } else if (weatherSelect.value === "rain") {
      moveType = "みず";
    } else if (weatherSelect.value === "sand") {
      moveType = "いわ";
    } else if (weatherSelect.value === "snow") {
      moveType = "こおり";
    }
  }

  if (moveName === "だいちのはどう") {
    const field = getBattleField();

    if (field === "grass") {
      moveType = "くさ";
    } else if (field === "electric") {
      moveType = "でんき";
    } else if (field === "psychic") {
      moveType = "エスパー";
    } else if (field === "misty") {
      moveType = "フェアリー";
    }
  }

  if (moveType === "ノーマル" && attackerAbility === "フェアリースキン") {
    return "フェアリー";
  }

  if (moveType === "ノーマル" && attackerAbility === "スカイスキン") {
    return "ひこう";
  }

  return moveType;
}

function getLowHpVariablePower(hpPercent) {
  if (hpPercent <= 4) return 200;
  if (hpPercent <= 10) return 150;
  if (hpPercent <= 20) return 100;
  if (hpPercent <= 35) return 80;
  if (hpPercent <= 70) return 40;
  return 20;
}

const moveConditionMap = {
  // 持ち物系
  "アクロバット": ["attacker-no-item"],
  "はたきおとす": ["defender-item"],
  "ポルターガイスト": ["defender-item"],

  // 倒れた味方数
  "おはかまいり": ["fainted-ally"],

  // 使用者HP依存
  "きしかいせい": ["attacker-hp"],
  "じたばた": ["attacker-hp"],
  "しおふき": ["attacker-hp"],
  "ふんか": ["attacker-hp"],

  // 条件成立で威力上昇
  "ライジングボルト": ["boost-condition"],
  "ワイドフォース": ["boost-condition"],
  "ミストバースト": ["boost-condition"],
  "グラススライダー": ["boost-condition"],
  "しっぺがえし": ["boost-condition"],
  "じだんだ": ["boost-condition"],
  "やけっぱち": ["boost-condition"],
  "ダメおし": ["boost-condition"],
  "うっぷんばらし": ["boost-condition"],
  "ゆきなだれ": ["boost-condition"],

  // 重さ依存
  "けたぐり": ["weight"],
  "くさむすび": ["weight"],
  "ヒートスタンプ": ["weight"],
  "ヘビーボンバー": ["weight"],

  // 素早さ依存
  "ジャイロボール": ["speed"],
  "エレキボール": ["speed"],

  // 固定ダメージ
  "ちきゅうなげ": ["fixed-damage"],
  "ナイトヘッド": ["fixed-damage"],
  "がむしゃら": ["fixed-damage"],
  "いのちがけ": ["fixed-damage"],

  // 受けたダメージ参照
  "カウンター": ["received-damage"],
  "ミラーコート": ["received-damage"],
  "メタルバースト": ["received-damage"],
  "ほうふく": ["received-damage"]
};

const attackerAbilityConditionMap = {
  "そうだいしょう": ["fainted-ally"],
  "こだいかっせい": ["boost-condition"],
  "クォークチャージ": ["boost-condition"],

  "もうか": ["low-hp"],
  "げきりゅう": ["low-hp"],
  "しんりょく": ["low-hp"],
  "むしのしらせ": ["low-hp"]
};
const defenderAbilityConditionMap = {
  "ふしぎなうろこ": [],
  "オーラブレイク": []
};

const multiHitMoveNames = [
  "タネマシンガン",
  "ロックブラスト",
  "つららばり",
  "スケイルショット",
  "ミサイルばり",
  "ボーンラッシュ",
  "みずしゅりけん",
  "スイープビンタ",
  "トリプルアクセル",
  "ネズミざん",
  "ダブルアタック",
  "ダブルウイング",
  "ツインビーム",
  "ドラゴンアロー"
];



function resetContextConditionRows() {
  if (!damageConditionExtra) {
    return;
  }

  document.querySelectorAll(".move-condition-row").forEach(row => {
    row.classList.remove("is-active");
    damageConditionExtra.appendChild(row);
  });

  if (moveConditionBox) {
    moveConditionBox.classList.add("hidden");
  }

  if (attackerAbilityConditionBox) {
    attackerAbilityConditionBox.classList.add("hidden");
  }

  if (defenderAbilityConditionBox) {
    defenderAbilityConditionBox.classList.add("hidden");
  }
}

function showConditionRowInBox(conditionKey, box) {
  if (!box) {
    return;
  }

  const row = document.querySelector(`[data-move-condition="${conditionKey}"]`);

  if (!row) {
    return;
  }

  row.classList.add("is-active");
  box.appendChild(row);
  box.classList.remove("hidden");
}

function updateMoveConditionVisibility() {
  resetContextConditionRows();

  const moveName = damageMoveInput ? damageMoveInput.value.trim() : "";
  const attackerAbility = attackerAbilityInput ? attackerAbilityInput.value.trim() : "";
  const defenderAbility = defenderAbilityInput ? defenderAbilityInput.value.trim() : "";

  const moveConditionKeys = new Set(moveConditionMap[moveName] || []);

  const moveData = findMoveData(moveName);

  if (
    multiHitMoveNames.includes(moveName) ||
    (moveData && moveData.hits && moveData.hits !== 1)
  ) {
    moveConditionKeys.add("multi-hit");
  }

  moveConditionKeys.forEach(key => {
    showConditionRowInBox(key, moveConditionBox);
  });

  (attackerAbilityConditionMap[attackerAbility] || []).forEach(key => {
    showConditionRowInBox(key, attackerAbilityConditionBox);
  });

  (defenderAbilityConditionMap[defenderAbility] || []).forEach(key => {
    showConditionRowInBox(key, defenderAbilityConditionBox);
  });
}



function getNumberInputValue(input, defaultValue = 0) {
  if (!input) {
    return defaultValue;
  }

  const value = Number(input.value);

  if (Number.isNaN(value)) {
    return defaultValue;
  }

  return value;
}

function getWeightBasedPowerByDefenderWeight(weight) {
  if (weight < 10) return 20;
  if (weight < 25) return 40;
  if (weight < 50) return 60;
  if (weight < 100) return 80;
  if (weight < 200) return 100;
  return 120;
}

function getHeavySlamPower(attackerWeight, defenderWeight) {
  if (!attackerWeight || !defenderWeight) {
    return 0;
  }

  const ratio = attackerWeight / defenderWeight;

  if (ratio >= 5) return 120;
  if (ratio >= 4) return 100;
  if (ratio >= 3) return 80;
  if (ratio >= 2) return 60;
  return 40;
}

function getGyroBallPower(attackerSpeed, defenderSpeed) {
  if (!attackerSpeed || !defenderSpeed) {
    return 0;
  }

  return Math.min(150, Math.floor((25 * defenderSpeed) / attackerSpeed) + 1);
}

function getElectroBallPower(attackerSpeed, defenderSpeed) {
  if (!attackerSpeed || !defenderSpeed) {
    return 0;
  }

  const ratio = attackerSpeed / defenderSpeed;

  if (ratio >= 4) return 150;
  if (ratio >= 3) return 120;
  if (ratio >= 2) return 80;
  if (ratio >= 1) return 60;
  return 40;
}

function getHardPressPower(defenderCurrentHpPercent) {
  return Math.max(1, Math.floor(100 * defenderCurrentHpPercent / 100));
}

function getFixedDamageMoveValue(moveName) {
  const fixedDamage = getNumberInputValue(fixedDamageInput, 0);
  const receivedDamage = getNumberInputValue(receivedDamageInput, 0);
  const level = Number(damageLevelInput.value) || 50;

  if (["ちきゅうなげ", "ナイトヘッド"].includes(moveName)) {
    return fixedDamage || level;
  }

  if (moveName === "いかりのまえば") {
    const currentHpPercent = Number(defenderCurrentHpPercentInput.value) || 100;
    const maxHp = Number(defenderHpInput.value) || 0;
    const currentHp = Math.floor(maxHp * currentHpPercent / 100);

    return Math.max(1, Math.floor(currentHp / 2));
  }

  if (moveName === "がむしゃら") {
    return fixedDamage;
  }

  if (moveName === "カウンター") {
    return receivedDamage * 2;
  }

  if (moveName === "ミラーコート") {
    return receivedDamage * 2;
  }

  if (["メタルバースト", "ほうふく"].includes(moveName)) {
    return Math.floor(receivedDamage * 1.5);
  }

  if (moveName === "いのちがけ") {
    return fixedDamage;
  }

  return null;
}

function isFixedDamageMove(moveName) {
  return [
    "ちきゅうなげ",
    "ナイトヘッド",
    "いかりのまえば",
    "がむしゃら",
    "カウンター",
    "ミラーコート",
    "メタルバースト",
    "ほうふく",
    "いのちがけ"
  ].includes(moveName);
}

function applyFieldModifierToDamageModifier(modifier, moveType) {
  const field = getBattleField();

  if (field === "electric" && moveType === "でんき") {
    return apply4096Modifier(modifier, 5325);
  }

  if (field === "grass" && moveType === "くさ") {
    return apply4096Modifier(modifier, 5325);
  }

  if (field === "psychic" && moveType === "エスパー") {
    return apply4096Modifier(modifier, 5325);
  }

  if (field === "misty" && moveType === "ドラゴン") {
    return apply4096Modifier(modifier, 2048);
  }

  return modifier;
}

function getEffectiveMoveType(originalMoveType, attackerAbility, moveName = damageMoveInput.value.trim()) {
  let moveType = originalMoveType;

  // ウェザーボール
  if (moveName === "ウェザーボール") {
    if (weatherSelect.value === "sun") {
      moveType = "ほのお";
    } else if (weatherSelect.value === "rain") {
      moveType = "みず";
    } else if (weatherSelect.value === "sand") {
      moveType = "いわ";
    } else if (weatherSelect.value === "snow") {
      moveType = "こおり";
    }
  }

  // だいちのはどう
  if (moveName === "だいちのはどう") {
    const field = getBattleField();

    if (field === "grass") {
      moveType = "くさ";
    } else if (field === "electric") {
      moveType = "でんき";
    } else if (field === "psychic") {
      moveType = "エスパー";
    } else if (field === "misty") {
      moveType = "フェアリー";
    }
  }

  // スキン系
  if (moveType === "ノーマル" && attackerAbility === "フェアリースキン") {
    return "フェアリー";
  }

  if (moveType === "ノーマル" && attackerAbility === "スカイスキン") {
    return "ひこう";
  }

  return moveType;
}

function getDynamicMovePower(moveName, basePower, attacker, defender, effectiveMoveType) {
  let power = Number(basePower) || 0;

  const field = getBattleField();

  const attackerWeight = getNumberInputValue(attackerWeightInput, 0);
const defenderWeight = getNumberInputValue(defenderWeightInput, 0);
const attackerSpeed = getNumberInputValue(attackerSpeedInput, 0);
const defenderSpeed = getNumberInputValue(defenderSpeedInput, 0);

// 重さ依存：けたぐり / くさむすび
if (["けたぐり", "くさむすび"].includes(moveName)) {
  power = getWeightBasedPowerByDefenderWeight(defenderWeight);
}

// 重さ比依存：ヒートスタンプ / ヘビーボンバー
if (["ヒートスタンプ", "ヘビーボンバー"].includes(moveName)) {
  power = getHeavySlamPower(attackerWeight, defenderWeight);
}

// 素早さ依存：ジャイロボール
if (moveName === "ジャイロボール") {
  power = getGyroBallPower(attackerSpeed, defenderSpeed);
}

// 素早さ依存：エレキボール
if (moveName === "エレキボール") {
  power = getElectroBallPower(attackerSpeed, defenderSpeed);
}

// 相手の残りHP依存：ハードプレス
if (moveName === "ハードプレス") {
  const defenderCurrentHpPercent = Number(defenderCurrentHpPercentInput.value) || 100;
  power = getHardPressPower(defenderCurrentHpPercent);
}

  // ウェザーボール：天気時に威力2倍
  if (moveName === "ウェザーボール" && weatherSelect.value !== "none") {
    power *= 2;
  }

  // ソーラービーム / ソーラーブレード：悪天候で半減
  if (
    ["ソーラービーム", "ソーラーブレード"].includes(moveName) &&
    ["rain", "sand", "snow"].includes(weatherSelect.value)
  ) {
    power = Math.floor(power / 2);
  }

// アクロバット：条件UIが出ている時はチェックボックスを優先
if (moveName === "アクロバット" && hasNoAttackerItemForMove()) {
  power *= 2;
}
  // からげんき：攻撃側が状態異常なら2倍
if (moveName === "からげんき" && isAttackerStatusedForFacade()) {
  power *= 2;
  addAppliedDamageModifier("からげんき", "状態異常で威力×2");
}

  // おはかまいり：倒れた味方1体につき威力+50
if (moveName === "おはかまいり") {
  const faintedCount = getFaintedAllyCount();
  power = 50 * (1 + faintedCount);
  addAppliedDamageModifier("おはかまいり", `倒れた味方${faintedCount}体で威力${power}`);
}

  // たたりめ / ひゃっきやこう：相手が状態異常なら2倍
  if (
    ["たたりめ", "ひゃっきやこう"].includes(moveName) &&
    isDefenderStatusedForHex()
  ) {
    power *= 2;
  }

  // ベノムショック / どくばりセンボン：相手がどくなら2倍
  if (
    ["ベノムショック", "どくばりセンボン"].includes(moveName) &&
    isDefenderPoisoned()
  ) {
    power *= 2;
  }

// はたきおとす：条件UIが出ている時はチェックボックスを優先
if (moveName === "はたきおとす" && hasDefenderItemForMove()) {
  power = Math.floor(power * 1.5);
}

// ポルターガイスト：防御側が持ち物なしなら失敗扱い
if (moveName === "ポルターガイスト" && !hasDefenderItemForMove()) {
  power = 0;
}

  // 条件付き2倍技
  if (
    [
      "しっぺがえし",
      "じだんだ",
      "やけっぱち",
      "ダメおし",
      "うっぷんばらし",
      "ゆきなだれ"
    ].includes(moveName) &&
    hasMoveBoostCondition()
  ) {
    power *= 2;
  }

  // だいちのはどう：フィールド時2倍
  if (moveName === "だいちのはどう" && field !== "none") {
    power *= 2;
  }

  // ライジングボルト：エレキフィールド条件
  if (
    moveName === "ライジングボルト" &&
    field === "electric" &&
    hasMoveBoostCondition()
  ) {
    power *= 2;
  }

  // ワイドフォース：サイコフィールド時1.5倍
  if (
    moveName === "ワイドフォース" &&
    field === "psychic" &&
    hasMoveBoostCondition()
  ) {
    power = Math.floor(power * 1.5);
  }

  // ミストバースト：ミストフィールド時1.5倍
  if (
    moveName === "ミストバースト" &&
    field === "misty" &&
    hasMoveBoostCondition()
  ) {
    power = Math.floor(power * 1.5);
  }

  return power;
}

function applyFieldModifierToDamageModifier(modifier, moveType) {
  const field = getBattleField();

  if (field === "electric" && moveType === "でんき") {
    addAppliedDamageModifier("エレキフィールド", "でんき技×1.3");
    return apply4096Modifier(modifier, 5325);
  }

  if (field === "grass" && moveType === "くさ") {
    addAppliedDamageModifier("グラスフィールド", "くさ技×1.3");
    return apply4096Modifier(modifier, 5325);
  }

  if (field === "psychic" && moveType === "エスパー") {
    addAppliedDamageModifier("サイコフィールド", "エスパー技×1.3");
    return apply4096Modifier(modifier, 5325);
  }

  if (field === "misty" && moveType === "ドラゴン") {
    addAppliedDamageModifier("ミストフィールド", "ドラゴン技×0.5");
    return apply4096Modifier(modifier, 2048);
  }

  return modifier;
}

function isSkinAbilityActive(originalMoveType, attackerAbility) {
  return (
    originalMoveType === "ノーマル" &&
    ["フェアリースキン", "スカイスキン"].includes(attackerAbility)
  );
}

function getDamageConditionTexts() {
  const conditions = [];

const moveType = moveTypeInput.value.trim();

const attackerItemName = getDamageAttackerItemName();
const defenderItemName = getDamageDefenderItemName();

const attackerItem = getSelectedAttackerItem(moveType);
const defenderItem = getSelectedDefenderItem(moveType);

const attackerItemTextMap = {
  lifeOrb: "攻撃側持ち物：いのちのたま",
  choiceItem: "攻撃側持ち物：こだわり系",
  typeBoost: "攻撃側持ち物：タイプ強化アイテム",
  expertBelt: "攻撃側持ち物：達人の帯"
};

  const defenderItemTextMap = {
    assaultVest: "防御側持ち物：とつげきチョッキ",
    eviolite: "防御側持ち物：しんかのきせき",
    resistBerry: "防御側持ち物：半減きのみ"
  };

if (attackerItem !== "none") {
  conditions.push(`攻撃側持ち物：${attackerItemName || attackerItemTextMap[attackerItem]}`);
}

if (defenderItem !== "none") {
  conditions.push(`防御側持ち物：${defenderItemName || defenderItemTextMap[defenderItem]}`);
}

  if (weatherSelect.value === "sun") {
    conditions.push("天候：晴れ");
  }

  if (weatherSelect.value === "rain") {
    conditions.push("天候：雨");
  }

  if (criticalCheck.checked) {
    conditions.push("急所");
  }

const attackerStatusLabelMap = {
  burn: "やけど",
  poison: "どく",
  toxic: "もうどく",
  paralyze: "まひ",
  sleep: "ねむり",
  freeze: "こおり"
};

const defenderStatusLabelMap = attackerStatusLabelMap;

const attackerStatus = getAttackerStatusValue();
const defenderStatus = getDefenderStatusValue();

if (attackerStatus) {
  conditions.push(`攻撃側状態異常：${attackerStatusLabelMap[attackerStatus] || attackerStatus}`);
}

if (defenderStatus) {
  conditions.push(`防御側状態異常：${defenderStatusLabelMap[defenderStatus] || defenderStatus}`);
}

  if (spreadMoveCheck.checked) {
    conditions.push("ダブル補正");
  }

if (wallCheck && wallCheck.checked) {
  conditions.push("壁");
}

  if (moveCategorySelect.value === "physical") {
    if (attackStageSelect.value !== "0") {
      conditions.push(`攻撃ランク：${Number(attackStageSelect.value) > 0 ? "+" : ""}${attackStageSelect.value}`);
    }

    if (defenseStageSelect.value !== "0") {
      conditions.push(`防御ランク：${Number(defenseStageSelect.value) > 0 ? "+" : ""}${defenseStageSelect.value}`);
    }
  }

  if (moveCategorySelect.value === "special") {
    if (spAttackStageSelect.value !== "0") {
      conditions.push(`特攻ランク：${Number(spAttackStageSelect.value) > 0 ? "+" : ""}${spAttackStageSelect.value}`);
    }

    if (spDefenseStageSelect.value !== "0") {
      conditions.push(`特防ランク：${Number(spDefenseStageSelect.value) > 0 ? "+" : ""}${spDefenseStageSelect.value}`);
    }
  }

  if (fieldSelect && fieldSelect.value !== "none") {
  const fieldLabelMap = {
    electric: "エレキフィールド",
    grass: "グラスフィールド",
    psychic: "サイコフィールド",
    misty: "ミストフィールド"
  };

  conditions.push(`フィールド：${fieldLabelMap[fieldSelect.value] || fieldSelect.value}`);
}



if (moveBoostConditionCheck && moveBoostConditionCheck.checked) {
  conditions.push("条件付き威力上昇ON");
}

if (faintedAllyCountSelect && Number(faintedAllyCountSelect.value) > 0) {
  conditions.push(`倒れた味方：${faintedAllyCountSelect.value}体`);
}

  return conditions;
}

let appliedDamageModifiers = [];

function resetAppliedDamageModifiers() {
  appliedDamageModifiers = [];
}

function addAppliedDamageModifier(label, valueText) {
  const exists = appliedDamageModifiers.some(
    modifier => modifier.label === label && modifier.valueText === valueText
  );

  if (exists) return;

  appliedDamageModifiers.push({
    label,
    valueText
  });
}

function createAppliedDamageModifierBadgesHtml() {
  if (!appliedDamageModifiers.length) {
    return "";
  }

  return appliedDamageModifiers.map(modifier => {
    return `<span class="showdown-badge condition">${modifier.label} ${modifier.valueText}</span>`;
  }).join("");
}

function calculateDamage() {
  resetAppliedDamageModifiers();
  latestSingleDamageSummary = null;

  const moveName = damageMoveInput.value.trim();
  const moveData = findMoveData(moveName);

  if (!moveData || moveData.category === "status") {
    damageResult.innerHTML = "ダメージ計算できる技を選択してください。";
    resetDamageHpBar();
    return;
  }

  const attacker = getDamagePokemon(
    attackerSideSelect.value,
    attackerPokemonInput.value,
    "attacker"
  );

  const defender = getDamagePokemon(
    defenderSideSelect.value,
    defenderPokemonInput.value,
    "defender"
  );

  const level = Number(damageLevelInput.value) || 50;
  let power = Number(movePowerInput.value) || 0;

  // 計算直前に必ず最新の実数値へ更新する
  updateAutoDamageSettings();
  updateDamageCategoryRows();
  applyAttackerEvAdjustment();
  applyDefenderEvAdjustment();

  let attack = Number(attackStatInput.value) || 0;
  let defense = Number(defenseStatInput.value) || 0;
  const maxHp = Number(defenderHpInput.value) || 0;
  const currentHpPercent = Number(defenderCurrentHpPercentInput.value) || 100;

  const attackerAbility = getSelectedAttackerAbility();
  const defenderAbility = getSelectedDefenderAbility();

  const originalMoveType = moveTypeInput.value.trim();
  const effectiveMoveType = getEffectiveMoveType(
    originalMoveType,
    attackerAbility,
    moveName
  );

  power = getDynamicMovePower(
    moveName,
    power,
    attacker,
    defender,
    effectiveMoveType
  );

  const attackerItem = getSelectedAttackerItem(effectiveMoveType);
  const defenderItem = getSelectedDefenderItem(effectiveMoveType);


// サイコショック：特殊技だが相手の防御で計算
if (moveName === "サイコショック") {
  const defenderData = findPokemonData(defender ? defender.name : "");

  if (defenderData) {
    const level = Number(damageLevelInput.value) || 50;
    const defensePoint = Number(defenderDefenseEvInput.value) || 0;
    const defenseNature = Number(defenderDefenseNatureSelect.value) || 1;

    defense = calculateChampionsOtherStat(
      defenderData.baseStats.defense,
      defensePoint,
      level,
      defenseNature
    );
  }
}

// ボディプレス：自分の防御で攻撃計算
if (moveName === "ボディプレス") {
  const attackerData = findPokemonData(attacker ? attacker.name : "");

  if (attackerData) {
    const level = Number(damageLevelInput.value) || 50;

    let defensePoint = 0;
    let defenseNature = 1;

    if (attackerSideSelect.value === "my" && attacker && attacker.evs) {
      defensePoint = attacker.evs.defense || 0;
      defenseNature = attacker.natures ? attacker.natures.defense || 1 : 1;
    }

    attack = calculateChampionsOtherStat(
      attackerData.baseStats.defense,
      defensePoint,
      level,
      defenseNature
    );
  }
}

// イカサマ：相手の攻撃で計算
if (moveName === "イカサマ") {
  const defenderData = findPokemonData(defender ? defender.name : "");

  if (defenderData) {
    const attackPoint = defender && defender.evs
      ? defender.evs.attack || 0
      : 0;

    const attackNature = defender && defender.natures
      ? defender.natures.attack || 1
      : 1;

    attack = calculateChampionsOtherStat(
      defenderData.baseStats.attack,
      attackPoint,
      level,
      attackNature
    );
  }
}


  syncWallCheck();


  if (isFixedDamageMove(moveName)) {
  const fixedDamage = getFixedDamageMoveValue(moveName);

  if (fixedDamage === null || fixedDamage <= 0 || !maxHp) {
    damageResult.innerHTML = "固定ダメージ技の計算に必要な値を入力してください。";
    resetDamageHpBar();
    return;
  }

  const currentHpPercent = Number(defenderCurrentHpPercentInput.value) || 100;
  const currentHp = Math.floor(maxHp * currentHpPercent / 100);

  const damage = Math.min(fixedDamage, currentHp);
  const minDamage = damage;
  const maxDamage = damage;

  const minPercent = ((minDamage / maxHp) * 100).toFixed(1);
  const maxPercent = ((maxDamage / maxHp) * 100).toFixed(1);

  const resultText = damage >= currentHp ? "確定1発" : "固定ダメージ";
  const koChancePercent = damage >= currentHp ? "100.0" : "0.0";

  const attackerName = attacker ? attacker.name : attackerPokemonInput.value;
  const defenderName = defender ? defender.name : defenderPokemonInput.value;

  damageResult.innerHTML = `
    <div class="showdown-like-result">
      <div class="showdown-badges">
        <span class="showdown-badge condition">固定ダメージ技</span>
      </div>

      <div class="showdown-main">
        <div class="showdown-side attacker">
          ${createPokemonIconHtml(attackerName, "pokemon-icon")}
          <div class="showdown-side-text">
            <span class="showdown-pokemon-name">${attackerName}</span>
            <span class="showdown-move-name">${moveName}</span>
          </div>
        </div>

        <div class="showdown-arrow">→</div>

        <div class="showdown-side defender">
          <div class="showdown-side-text">
            <span class="showdown-pokemon-name">${defenderName}</span>
            <span class="showdown-damage-head">
              ${minDamage}
              <span class="showdown-maxhp">/ ${maxHp}</span>
            </span>
          </div>
          ${createPokemonIconHtml(defenderName, "pokemon-icon")}
        </div>
      </div>

      <div class="showdown-bar-wrap">
        <div class="showdown-footer">
          <span class="showdown-damage-text">${minDamage}</span>
          <span class="showdown-percent-text">(${minPercent}%)</span>
          <span class="showdown-result-text">${resultText}</span>
          <span class="showdown-ko-text">瀕死率 ${koChancePercent}%</span>
        </div>
      </div>

    </div>
  `;

  latestDamageMemoText =
    `${attackerName} → ${defenderName}\n` +
    `技：${moveName}\n` +
    `固定ダメージ：${minDamage}（${minPercent}%）\n` +
    `判定：${resultText}`;

  latestSingleDamageSummary = {
    moveName,
    damages: [minDamage],
    minDamage,
    maxDamage,
    maxHp,
    currentHp,
    resultText
  };

  renderDamageHpBar(maxHp, currentHp, minDamage, maxDamage);

  if (copyDamageMemoButton) {
    copyDamageMemoButton.classList.add("ready");
  }

  if (!isComboInternalCalculation) {
    updateComboDamageResultAdvanced();
  }

  return;
}

if (!power || !attack || !defense || !maxHp) {
  damageResult.innerHTML = `
    威力・攻撃・防御・HPを入力してください。<br>
    けたぐり/くさむすび/ヒートスタンプ/ヘビーボンバーは重さ、<br>
    ジャイロボール/エレキボールは素早さの入力が必要です。
  `;
  resetDamageHpBar();
  return;
}

  // ランク補正
  // 急所時は、攻撃側のマイナス・防御側のプラスを無視
  if (moveCategorySelect.value === "physical") {
    const attackStage = getStageValueForCritical(attackStageSelect.value, "attack");
    const defenseStage = getStageValueForCritical(defenseStageSelect.value, "defense");

    attack = applyStageModifier(attack, attackStage);
    defense = applyStageModifier(defense, defenseStage);
  }

  if (moveCategorySelect.value === "special") {
    const attackStage = getStageValueForCritical(spAttackStageSelect.value, "attack");
    const defenseStage = getStageValueForCritical(spDefenseStageSelect.value, "defense");

    attack = applyStageModifier(attack, attackStage);
    defense = applyStageModifier(defense, defenseStage);
  }

  // こだわり系、チョッキ、しんかのきせきは能力値側の補正として処理
  if (attackerItem === "choiceItem") {
    attack = apply4096Modifier(attack, 6144);
  }
// ちからもち / ヨガパワー：物理攻撃2倍
if (
  moveCategorySelect.value === "physical" &&
  ["ちからもち", "ヨガパワー"].includes(attackerAbility)
) {
  attack = apply4096Modifier(attack, 8192);
}

// はりきり：物理攻撃1.5倍
if (
  moveCategorySelect.value === "physical" &&
  attackerAbility === "はりきり"
) {
  attack = apply4096Modifier(attack, 6144);
}

// ごりむちゅう：物理攻撃1.5倍
if (
  moveCategorySelect.value === "physical" &&
  attackerAbility === "ごりむちゅう"
) {
  attack = apply4096Modifier(attack, 6144);
}

// ファーコート：物理防御2倍
if (
  moveCategorySelect.value === "physical" &&
  defenderAbility === "ファーコート"
) {
  defense = apply4096Modifier(defense, 8192);
}

// ふしぎなうろこ：状態異常時、物理防御1.5倍
if (
  moveCategorySelect.value === "physical" &&
  defenderAbility === "ふしぎなうろこ" &&
  isDefenderStatusedForHex()
) {
  defense = apply4096Modifier(defense, 6144);
  addAppliedDamageModifier("ふしぎなうろこ", "状態異常で防御×1.5");
}




  if (moveCategorySelect.value === "special" && defenderItem === "assaultVest") {
    defense = apply4096Modifier(defense, 6144);
  }

  if (defenderItem === "eviolite") {
    defense = apply4096Modifier(defense, 6144);
  }

function getFinalHitPower(hitPower) {
  let finalPower = hitPower;

  // テクニシャン：威力60以下の各ヒットを1.5倍
  // トリプルアクセルの 20 / 40 / 60 も、それぞれ個別に補正される
  if (attackerAbility === "テクニシャン" && finalPower <= 60) {
    finalPower = apply4096Modifier(finalPower, 6144);
  }

  return finalPower;
}

function calculateBaseDamageByPower(hitPower) {
  const finalPower = getFinalHitPower(hitPower);

  let base = Math.floor((level * 2) / 5) + 2;
  base = Math.floor((base * finalPower * attack) / defense);
  base = Math.floor(base / 50) + 2;
  return base;
}


const hitPowers = getMoveHitPowers(moveName, power, attackerAbility);
const baseDamages = hitPowers.map(hitPower => calculateBaseDamageByPower(hitPower));

const hitCount = hitPowers.length;

let hitInfoText = "";

if (hitCount > 1 || moveName === "トリプルアクセル") {
  if (moveName === "トリプルアクセル") {
    hitInfoText = `${hitCount}回ヒット / 威力${hitPowers.join("+")}`;
  } else {
    hitInfoText = `${hitCount}回ヒット / 合計ダメージ`;
  }
}

let typeEffectiveness = Number(typeEffectivenessSelect.value);

if (defender && defender.types) {
  typeEffectiveness = getTypeEffectiveness(effectiveMoveType, defender.types);
}

const ignoresDefenderAbility = attackerAbility === "かたやぶり";

if (
  !ignoresDefenderAbility &&
  defenderAbility === "ふゆう" &&
  effectiveMoveType === "じめん"
) {
  typeEffectiveness = 0;
}

if (
  !ignoresDefenderAbility &&
  defenderAbility === "ぼうおん" &&
  isSoundMove(moveName)
) {
  typeEffectiveness = 0;
}

if (
  !ignoresDefenderAbility &&
  defenderAbility === "ぼうだん" &&
  isBulletMove(moveName)
) {
  typeEffectiveness = 0;
}

const damageModifier = getDamageModifierValue(typeEffectiveness, effectiveMoveType);

  const currentHp = Math.floor(maxHp * currentHpPercent / 100);

  const damages = [];

 const hitDamageRanges = hitPowers.map((hitPower, index) => ({
  index: index + 1,
  power: hitPower,
  finalPower: getFinalHitPower(hitPower),
  damages: []
}));

const burnApplies =
  moveCategorySelect.value === "physical" &&
  isAttackerBurned() &&
  attackerAbility !== "こんじょう" &&
  moveName !== "からげんき";

if (burnApplies) {
  addAppliedDamageModifier("やけど", "物理ダメージ×0.5");
}

for (let random = 85; random <= 100; random++) {
  let damage = 0;

baseDamages.forEach((baseDamage, hitIndex) => {
  let hitDamage = baseDamage;

    // 複数対象
    if (spreadMoveCheck.checked) {
      hitDamage = apply4096Modifier(hitDamage, 3072);
    }

    // 天気
    if (weatherSelect.value === "sun" && effectiveMoveType === "ほのお") {
      hitDamage = apply4096Modifier(hitDamage, 6144);
    }

    if (weatherSelect.value === "sun" && effectiveMoveType === "みず") {
      hitDamage = apply4096Modifier(hitDamage, 2048);
    }

    if (weatherSelect.value === "rain" && effectiveMoveType === "みず") {
      hitDamage = apply4096Modifier(hitDamage, 6144);
    }

    if (weatherSelect.value === "rain" && effectiveMoveType === "ほのお") {
      hitDamage = apply4096Modifier(hitDamage, 2048);
    }

    // 急所
    if (criticalCheck.checked) {
      hitDamage = apply4096Modifier(hitDamage, 6144);
    }

    // 乱数
    hitDamage = Math.floor((hitDamage * random) / 100);

    // タイプ一致
    const isProteanStab = attackerAbility === "へんげんじざい";

    const isStab =
      isProteanStab ||
      (
        attacker &&
        attacker.types &&
        attacker.types.includes(effectiveMoveType)
      );

    if (isStab) {
      if (attackerAbility === "てきおうりょく") {
        hitDamage = apply4096Modifier(hitDamage, 8192);
      } else {
        hitDamage = apply4096Modifier(hitDamage, 6144);
      }
    }

    // タイプ相性
    hitDamage = Math.floor(hitDamage * typeEffectiveness);

    if (typeEffectiveness === 0) {
      hitDamage = 0;
    }

// やけど
if (burnApplies) {
  hitDamage = apply4096Modifier(hitDamage, 2048);
}

    // ダメージ補正値
    hitDamage = apply4096Modifier(hitDamage, damageModifier);

    if (hitDamageRanges[hitIndex]) {
  hitDamageRanges[hitIndex].damages.push(hitDamage);
}

    damage += hitDamage;
  });

  damages.push(damage);
  
}

  const minDamage = Math.min(...damages);
  const maxDamage = Math.max(...damages);
  const minPercent = ((minDamage / maxHp) * 100).toFixed(1);
  const maxPercent = ((maxDamage / maxHp) * 100).toFixed(1);

  const oneShotCount = damages.filter(damage => damage >= currentHp).length;
  const twoShotCount = damages.filter(damage => damage * 2 >= currentHp).length;

  const koChancePercent = ((oneShotCount / damages.length) * 100).toFixed(1);

  let resultText = "";

  if (oneShotCount === 16) {
    resultText = "確定1発";
  } else if (oneShotCount > 0) {
    resultText = `乱数1発 (${oneShotCount}/16)`;
  } else if (twoShotCount === 16) {
    resultText = "確定2発";
  } else if (twoShotCount > 0) {
    resultText = `乱数2発 (${twoShotCount}/16)`;
  } else {
    resultText = "3発以上";
  }

    latestSingleDamageSummary = {
    moveName: damageMoveInput.value.trim(),
    damages: damages.slice(),
    minDamage,
    maxDamage,
    maxHp,
    currentHp,
    resultText
  };

  const conditionTexts = getDamageConditionTexts();

  const attackerName = attacker ? attacker.name : attackerPokemonInput.value;
  const defenderName = defender ? defender.name : defenderPokemonInput.value;

  const minDamagePercentOfMax = maxHp > 0 ? (minDamage / maxHp) * 100 : 0;
  const maxDamagePercentOfMax = maxHp > 0 ? (maxDamage / maxHp) * 100 : 0;

  const currentHpPercentOfMax = maxHp > 0 ? (currentHp / maxHp) * 100 : 0;

  const remainAfterMaxDamage = Math.max(0, currentHp - maxDamage);
  const remainAfterMinDamage = Math.max(0, currentHp - minDamage);

  const remainAfterMaxPercent = maxHp > 0 ? (remainAfterMaxDamage / maxHp) * 100 : 0;
  const remainAfterMinPercent = maxHp > 0 ? (remainAfterMinDamage / maxHp) * 100 : 0;

  const showdownRemainWidth = Math.max(0, remainAfterMaxPercent);
  const showdownRandomWidth = Math.max(0, remainAfterMinPercent - remainAfterMaxPercent);
  const showdownGuaranteedDamageWidth = Math.max(0, currentHpPercentOfMax - remainAfterMinPercent);

const hitBreakdownHtml = hitDamageRanges.length > 1
  ? `
    <details class="showdown-hit-breakdown">
      <summary class="showdown-hit-breakdown-title">
        ヒット別ダメージを見る
      </summary>

      <div class="showdown-hit-breakdown-body">
        ${hitDamageRanges.map(hit => {
          const hitMin = Math.min(...hit.damages);
          const hitMax = Math.max(...hit.damages);
          const hitMinPercent = ((hitMin / maxHp) * 100).toFixed(1);
          const hitMaxPercent = ((hitMax / maxHp) * 100).toFixed(1);

          return `
            <div class="showdown-hit-row">
              <span>${hit.index}発目</span>
              <strong>${hitMin}〜${hitMax}</strong>
             <small>
  威力${hit.power}${hit.finalPower !== hit.power ? `→${hit.finalPower}` : ""}
  / ${hitMinPercent}%〜${hitMaxPercent}%
</small>
            </div>
          `;
        }).join("")}
      </div>
    </details>
  `
  : "";

  const badges = [];

  if (attackerAbility) {
    badges.push(`<span class="showdown-badge condition">攻撃側特性：${attackerAbility}</span>`);
  }

  if (defenderAbility) {
    badges.push(`<span class="showdown-badge condition">防御側特性：${defenderAbility}</span>`);
  }

  if (typeEffectiveness > 1) {
    badges.push(`<span class="showdown-badge effectiveness">効果抜群 x${typeEffectiveness}</span>`);
  }

  if (typeEffectiveness > 0 && typeEffectiveness < 1) {
    badges.push(`<span class="showdown-badge critical">いまひとつ x${typeEffectiveness}</span>`);
  }

  if (typeEffectiveness === 0) {
    badges.push(`<span class="showdown-badge critical">効果なし</span>`);
  }

if (criticalCheck.checked) {
  badges.push(`<span class="showdown-badge critical">急所 x1.5</span>`);

  const ignoredStageTexts = [];

  if (
    moveCategorySelect.value === "physical" &&
    Number(attackStageSelect.value) < 0
  ) {
    ignoredStageTexts.push("攻撃下降無視");
  }

  if (
    moveCategorySelect.value === "physical" &&
    Number(defenseStageSelect.value) > 0
  ) {
    ignoredStageTexts.push("防御上昇無視");
  }

  if (
    moveCategorySelect.value === "special" &&
    Number(spAttackStageSelect.value) < 0
  ) {
    ignoredStageTexts.push("特攻下降無視");
  }

  if (
    moveCategorySelect.value === "special" &&
    Number(spDefenseStageSelect.value) > 0
  ) {
    ignoredStageTexts.push("特防上昇無視");
  }

  if (ignoredStageTexts.length > 0) {
    badges.push(`<span class="showdown-badge critical">${ignoredStageTexts.join(" / ")}</span>`);
  }
}

  const isProteanStabForBadge = attackerAbility === "へんげんじざい";

  const isStabForBadge =
    isProteanStabForBadge ||
    (
      attacker &&
      attacker.types &&
      attacker.types.includes(effectiveMoveType)
    );

  if (isStabForBadge) {
    if (attackerAbility === "てきおうりょく") {
      badges.push(`<span class="showdown-badge stab">一致+てきおうりょく x2.0</span>`);
    } else if (attackerAbility === "へんげんじざい") {
      badges.push(`<span class="showdown-badge stab">へんげんじざい 一致x1.5</span>`);
    } else {
      badges.push(`<span class="showdown-badge stab">一致 x1.5</span>`);
    }
  }

  if (attackerAbility === "フェアリースキン" && originalMoveType === "ノーマル") {
    badges.push(`<span class="showdown-badge condition">フェアリースキン ノーマル→フェアリー x1.2</span>`);
  }

  if (attackerAbility === "スカイスキン" && originalMoveType === "ノーマル") {
    badges.push(`<span class="showdown-badge condition">スカイスキン ノーマル→ひこう x1.2</span>`);
  }

if (hitCount > 1) {
  badges.push(`<span class="showdown-badge condition">${hitInfoText}</span>`);
}

if (attackerAbility === "スキルリンク" && hitCount === 5) {
  badges.push(`<span class="showdown-badge condition">スキルリンク 5回固定</span>`);
}

if (
  attackerAbility === "テクニシャン" &&
  hitPowers.some(hitPower => hitPower <= 60)
) {
  badges.push(`<span class="showdown-badge condition">テクニシャン 各ヒット威力x1.5</span>`);
}

  if (
    attackerAbility === "こんじょう" &&
    moveCategorySelect.value === "physical" &&
    burnCheck.checked
  ) {
    badges.push(`<span class="showdown-badge condition">こんじょう 攻撃x1.5</span>`);
  }

  if (attackerAbility === "かたいツメ" && isContactMove(moveName)) {
    badges.push(`<span class="showdown-badge condition">かたいツメ x1.3</span>`);
  }

  if (attackerAbility === "ちからずく" && isSheerForceMove(moveName)) {
    badges.push(`<span class="showdown-badge condition">ちからずく x1.3</span>`);
  }

  if (attackerAbility === "てつのこぶし" && isPunchMove(moveName)) {
    badges.push(`<span class="showdown-badge condition">てつのこぶし x1.2</span>`);
  }

  if (attackerAbility === "がんじょうあご" && isBitingMove(moveName)) {
    badges.push(`<span class="showdown-badge condition">がんじょうあご x1.5</span>`);
  }

  if (attackerAbility === "すてみ" && isRecoilMove(moveName)) {
    badges.push(`<span class="showdown-badge condition">すてみ x1.2</span>`);
  }

  if (attackerAbility === "メガランチャー" && isPulseMove(moveName)) {
    badges.push(`<span class="showdown-badge condition">メガランチャー x1.5</span>`);
  }

  if (attackerAbility === "きれあじ" && isCuttingMove(moveName)) {
    badges.push(`<span class="showdown-badge condition">きれあじ x1.5</span>`);
  }

  if (attackerAbility === "かたやぶり") {
    badges.push(`<span class="showdown-badge condition">かたやぶり 防御特性無視</span>`);
  }

  if (attackerAbility === "そうだいしょう" && supremeOverlordCountSelect) {
    const faintedCount = Number(supremeOverlordCountSelect.value) || 0;

    if (faintedCount > 0) {
      badges.push(
        `<span class="showdown-badge condition">そうだいしょう ${faintedCount}体 x${(1 + faintedCount * 0.1).toFixed(1)}</span>`
      );
    }
  }

  if (
    attackerLowHpCheck &&
    attackerLowHpCheck.checked
  ) {
    if (attackerAbility === "もうか" && effectiveMoveType === "ほのお") {
      badges.push(`<span class="showdown-badge condition">もうか 炎x1.5</span>`);
    }

    if (attackerAbility === "げきりゅう" && effectiveMoveType === "みず") {
      badges.push(`<span class="showdown-badge condition">げきりゅう 水x1.5</span>`);
    }

    if (attackerAbility === "しんりょく" && effectiveMoveType === "くさ") {
      badges.push(`<span class="showdown-badge condition">しんりょく 草x1.5</span>`);
    }

    if (attackerAbility === "むしのしらせ" && effectiveMoveType === "むし") {
      badges.push(`<span class="showdown-badge condition">むしのしらせ 虫x1.5</span>`);
    }
  }

  if (
  !ignoresDefenderAbility &&
  ["マルチスケイル", "ファントムガード"].includes(defenderAbility) &&
  Number(defenderCurrentHpPercentInput.value) >= 100
) {
  badges.push(`<span class="showdown-badge condition">${defenderAbility} x0.5</span>`);
}

if (
  !ignoresDefenderAbility &&
  ["フィルター", "ハードロック"].includes(defenderAbility) &&
  typeEffectiveness > 1
) {
  badges.push(`<span class="showdown-badge condition">${defenderAbility} x0.75</span>`);
}

  if (!ignoresDefenderAbility && defenderAbility === "ふゆう" && effectiveMoveType === "じめん") {
    badges.push(`<span class="showdown-badge condition">ふゆう 無効</span>`);
  }

  if (!ignoresDefenderAbility && defenderAbility === "ぼうおん" && isSoundMove(moveName)) {
    badges.push(`<span class="showdown-badge condition">ぼうおん 音技無効</span>`);
  }

  if (!ignoresDefenderAbility && defenderAbility === "ぼうだん" && isBulletMove(moveName)) {
    badges.push(`<span class="showdown-badge condition">ぼうだん 弾技無効</span>`);
  }

  if (defenderAbility === "もふもふ" && isContactMove(moveName)) {
    badges.push(`<span class="showdown-badge condition">もふもふ 接触x0.5</span>`);
  }

  if (defenderAbility === "もふもふ" && effectiveMoveType === "ほのお") {
    badges.push(`<span class="showdown-badge condition">もふもふ 炎x2</span>`);
  }

  if (defenderAbility === "たいねつ" && effectiveMoveType === "ほのお") {
    badges.push(`<span class="showdown-badge condition">たいねつ 炎x0.5</span>`);
  }

  if (defenderAbility === "すいほう" && effectiveMoveType === "ほのお") {
    badges.push(`<span class="showdown-badge condition">すいほう 炎x0.5</span>`);
  }

  if (attackerItem === "lifeOrb") {
    badges.push(`<span class="showdown-badge condition">いのちのたま x1.3</span>`);
  }

  if (attackerItem === "choiceItem") {
    badges.push(`<span class="showdown-badge condition">こだわり火力 x1.5</span>`);
  }

  if (attackerItem === "typeBoost") {
    badges.push(`<span class="showdown-badge condition">タイプ強化 x1.2</span>`);
  }

  if (attackerItem === "expertBelt" && typeEffectiveness > 1) {
    badges.push(`<span class="showdown-badge condition">達人の帯 x1.2</span>`);
  }

  if (defenderItem === "assaultVest" && moveCategorySelect.value === "special") {
    badges.push(`<span class="showdown-badge condition">チョッキ 特防x1.5</span>`);
  }

  if (defenderItem === "eviolite") {
    badges.push(`<span class="showdown-badge condition">しんかのきせき x1.5</span>`);
  }

  if (defenderItem === "resistBerry" && typeEffectiveness > 1) {
    badges.push(`<span class="showdown-badge condition">半減きのみ x0.5</span>`);
  }

if (!criticalCheck.checked && wallCheck && wallCheck.checked) {
  const wallText = moveCategorySelect.value === "physical"
    ? "リフレクター x0.5"
    : "ひかりのかべ x0.5";

  badges.push(`<span class="showdown-badge condition">${wallText}</span>`);
}



  if (weatherSelect.value === "sun" && effectiveMoveType === "ほのお") {
    badges.push(`<span class="showdown-badge condition">晴れ 炎x1.5</span>`);
  }

  if (weatherSelect.value === "sun" && effectiveMoveType === "みず") {
    badges.push(`<span class="showdown-badge condition">晴れ 水x0.5</span>`);
  }

  if (weatherSelect.value === "rain" && effectiveMoveType === "みず") {
    badges.push(`<span class="showdown-badge condition">雨 水x1.5</span>`);
  }

  if (weatherSelect.value === "rain" && effectiveMoveType === "ほのお") {
    badges.push(`<span class="showdown-badge condition">雨 炎x0.5</span>`);
  }

  if (moveName === "おはかまいり" && supremeOverlordCountSelect) {
  const faintedCount = Number(supremeOverlordCountSelect.value) || 0;

  if (faintedCount > 0) {
    badges.push(
      `<span class="showdown-badge condition">おはかまいり 威力${50 * (1 + faintedCount)}</span>`
    );
  }
}

  damageResult.innerHTML = `
    <div class="showdown-like-result">
<div class="showdown-badges">
  ${badges.join("")}
  ${createAppliedDamageModifierBadgesHtml()}
</div>

      <div class="showdown-main">
        <div class="showdown-side attacker">
          ${createPokemonIconHtml(attackerName, "pokemon-icon")}
          <div class="showdown-side-text">
            <span class="showdown-pokemon-name">${attackerName}</span>
            <span class="showdown-move-name">${moveName}</span>
            ${hitInfoText ? `<span class="showdown-hit-info">${hitInfoText}</span>` : ""}
          </div>
        </div>

        <div class="showdown-arrow">→</div>

        <div class="showdown-side defender">
          <div class="showdown-side-text">
            <span class="showdown-pokemon-name">${defenderName}</span>
            <span class="showdown-damage-head">
              ${minDamage}〜${maxDamage}
              <span class="showdown-maxhp">/ ${maxHp}</span>
            </span>
          </div>
          ${createPokemonIconHtml(defenderName, "pokemon-icon")}
        </div>
      </div>

      ${hitBreakdownHtml}
      <div class="showdown-bar-wrap">
        <div class="showdown-bar-track">
          <div
            class="showdown-bar-remaining"
            style="left: 0%; width: ${showdownRemainWidth}%;"
          ></div>

          <div
            class="showdown-bar-random"
            style="left: ${showdownRemainWidth}%; width: ${showdownRandomWidth}%;"
          ></div>

          <div
            class="showdown-bar-guaranteed"
            style="left: ${showdownRemainWidth + showdownRandomWidth}%; width: ${showdownGuaranteedDamageWidth}%;"
          ></div>
        </div>

        <div class="showdown-footer">
          <span class="showdown-damage-text">${minDamage} 〜 ${maxDamage}</span>
          <span class="showdown-percent-text">(${minPercent}% - ${maxPercent}%)</span>
          <span class="showdown-result-text">${resultText}</span>
          <span class="showdown-ko-text">瀕死率 ${koChancePercent}%</span>
        </div>
      </div>

    </div>
  `;

  const conditionMemoText = conditionTexts.length > 0
    ? `条件：${conditionTexts.join(" / ")}\n`
    : "条件：なし\n";

  latestDamageMemoText =
    `${attackerName} → ${defenderName}\n` +
    `技：${damageMoveInput.value}\n` +
    conditionMemoText +
    `ダメージ：${minDamage}〜${maxDamage}（${minPercent}%〜${maxPercent}%）\n` +
    `判定：${resultText}`;

  renderDamageHpBar(maxHp, currentHp, minDamage, maxDamage);
  copyDamageMemoButton.classList.add("ready");
  if (!isComboInternalCalculation) {
  updateComboDamageResultAdvanced();
}
}

function renderComboStepList() {
  if (!comboMoveList) {
    return;
  }

  if (comboSteps.length === 0) {
    comboMoveList.innerHTML = `<span class="combo-empty-text">技や定数ダメージを追加してください。</span>`;
    return;
  }

  comboMoveList.innerHTML = comboSteps.map((step, index) => {
    const chipClass =
      step.type === "move"
        ? ""
        : step.type === "heal"
          ? "heal-effect"
          : "damage-effect";

    const label =
      step.type === "move"
        ? `${index + 1}. ${step.name}`
        : `${index + 1}. ${step.label}`;

    return `
      <span class="combo-move-chip ${chipClass}">
        ${label}
        <button
          type="button"
          class="combo-move-remove"
          data-index="${index}"
          title="削除"
        >
          ×
        </button>
      </span>
    `;
  }).join("");

  comboMoveList.querySelectorAll(".combo-move-remove").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      comboSteps.splice(index, 1);

      renderComboStepList();
      updateComboDamageResultAdvanced();
    });
  });
}

function calculateSingleDamageSummaryForMove(moveName) {
  if (!moveName) {
    return null;
  }

  const currentMoveName = damageMoveInput.value;

  isComboInternalCalculation = true;

  damageMoveInput.value = moveName;
  updateMoveData();
  calculateDamage();

  const summary = latestSingleDamageSummary
    ? {
        ...latestSingleDamageSummary,
        damages: latestSingleDamageSummary.damages.slice()
      }
    : null;

  damageMoveInput.value = currentMoveName;
  updateMoveData();

  isComboInternalCalculation = false;

  return summary;
}

function applyFixedHpEffectToHpList(hpList, step, maxHp) {
  const amount = Math.floor(maxHp * step.numerator / step.denominator);

  if (step.type === "damage") {
    return hpList.map(hp => Math.max(0, hp - amount));
  }

  if (step.type === "heal") {
    return hpList.map(hp => {
      if (hp <= 0) {
        return hp;
      }

      return Math.min(maxHp, hp + amount);
    });
  }

  return hpList;
}

function applySitrusBerryIfNeeded(hpList, maxHp, state) {
  if (state.sitrusUsed) {
    return {
      hpList,
      used: false,
      amount: 0
    };
  }

  const healAmount = Math.floor(maxHp / 4);
  let used = false;

  const nextHpList = hpList.map(hp => {
    if (hp > 0 && hp <= Math.floor(maxHp / 2)) {
      used = true;
      return Math.min(maxHp, hp + healAmount);
    }

    return hp;
  });

  if (used) {
    state.sitrusUsed = true;
  }

  return {
    hpList: nextHpList,
    used,
    amount: healAmount
  };
}

function applyLeftoversToHpList(hpList, maxHp) {
  const healAmount = Math.floor(maxHp / 16);

  return {
    hpList: hpList.map(hp => {
      if (hp <= 0) {
        return hp;
      }

      return Math.min(maxHp, hp + healAmount);
    }),
    amount: healAmount
  };
}

function getHpRangeText(hpList) {
  const minHp = Math.min(...hpList);
  const maxHp = Math.max(...hpList);

  return minHp === maxHp
    ? `${minHp}`
    : `${minHp}〜${maxHp}`;
}

function calculateComboSummary() {
  if (comboSteps.length === 0) {
    return null;
  }

  const maxHp = Number(defenderHpInput.value) || 0;
  const currentHpPercent = Number(defenderCurrentHpPercentInput.value) || 100;
  const currentHp = Math.floor(maxHp * currentHpPercent / 100);

  if (!maxHp || !currentHp) {
    return null;
  }

  let hpList = [currentHp];
  const detailLines = [];
  const state = {
    sitrusUsed: false
  };

  const originalMoveName = damageMoveInput.value;

  let moveCount = 0;
  let fixedDamageCount = 0;
  let healCount = 0;
  const stepLabels = [];

  comboSteps.forEach(step => {
    if (step.type === "move") {
      const summary = calculateSingleDamageSummaryForMove(step.name);

      if (!summary) {
        detailLines.push(`${step.name}：計算不可`);
        stepLabels.push(step.name);
        return;
      }

      moveCount += 1;
      stepLabels.push(step.name);

      const nextHpList = [];

      hpList.forEach(hp => {
        summary.damages.forEach(damage => {
          nextHpList.push(Math.max(0, hp - damage));
        });
      });

      hpList = nextHpList;

      detailLines.push(
        `${step.name}：-${summary.minDamage}〜-${summary.maxDamage} → 残HP ${getHpRangeText(hpList)}`
      );

      if (comboAutoSitrusCheck && comboAutoSitrusCheck.checked) {
        const sitrusResult = applySitrusBerryIfNeeded(hpList, maxHp, state);
        hpList = sitrusResult.hpList;

        if (sitrusResult.used) {
          detailLines.push(
            `オボンのみ自動発動：+${sitrusResult.amount} → 残HP ${getHpRangeText(hpList)}`
          );
          healCount += 1;
        }
      }

      if (comboAutoLeftoversCheck && comboAutoLeftoversCheck.checked) {
        const leftoversResult = applyLeftoversToHpList(hpList, maxHp);
        hpList = leftoversResult.hpList;

        detailLines.push(
          `たべのこし自動回復：+${leftoversResult.amount} → 残HP ${getHpRangeText(hpList)}`
        );
        healCount += 1;
      }

      return;
    }

    const amount = Math.floor(maxHp * step.numerator / step.denominator);

    hpList = applyFixedHpEffectToHpList(hpList, step, maxHp);

    detailLines.push(
      `${step.label}：${step.type === "damage" ? "-" : "+"}${amount} → 残HP ${getHpRangeText(hpList)}`
    );

    stepLabels.push(step.label);

    if (step.type === "damage") {
      fixedDamageCount += 1;
    } else if (step.type === "heal") {
      healCount += 1;
    }
  });

  damageMoveInput.value = originalMoveName;
  updateMoveData();

  const minRemainHp = Math.min(...hpList);
  const maxRemainHp = Math.max(...hpList);

  const minTotalDamage = currentHp - maxRemainHp;
  const maxTotalDamage = currentHp - minRemainHp;

  const minPercent = ((minTotalDamage / maxHp) * 100).toFixed(1);
  const maxPercent = ((maxTotalDamage / maxHp) * 100).toFixed(1);

  const koCount = hpList.filter(hp => hp <= 0).length;
  const koChance = ((koCount / hpList.length) * 100).toFixed(1);

  let judgeText = "";

  if (koCount === hpList.length) {
    judgeText = "確定で倒せる";
  } else if (koCount > 0) {
    judgeText = `乱数で倒せる可能性あり（${koChance}%）`;
  } else {
    judgeText = "この流れでは耐えられる";
  }

  return {
    maxHp,
    currentHp,
    minRemainHp,
    maxRemainHp,
    minTotalDamage,
    maxTotalDamage,
    minPercent,
    maxPercent,
    koCount,
    koChance,
    judgeText,
    detailLines,
    hpList,
    moveCount,
    fixedDamageCount,
    healCount,
    stepLabels
  };
}

function renderComboResultToMainPanel(summary) {
  if (!summary || !damageResult) {
    return;
  }

  const attackerName = attackerPokemonInput.value || "攻撃側";
  const defenderName = defenderPokemonInput.value || "防御側";

  const badges = [
    `<span class="showdown-badge condition">${summary.moveCount}手</span>`
  ];

  if (summary.fixedDamageCount > 0) {
    badges.push(`<span class="showdown-badge condition">定数ダメージ ${summary.fixedDamageCount}</span>`);
  }

  if (summary.healCount > 0) {
    badges.push(`<span class="showdown-badge condition">回復 ${summary.healCount}</span>`);
  }

  const remainWidth = Math.max(0, (summary.maxRemainHp / summary.maxHp) * 100);
  const randomWidth = Math.max(0, ((summary.maxTotalDamage - summary.minTotalDamage) / summary.maxHp) * 100);
  const guaranteedWidth = Math.max(0, (summary.minTotalDamage / summary.maxHp) * 100);

  damageResult.innerHTML = `
    <div class="showdown-like-result">
      <div class="showdown-badges">
        ${badges.join("")}
      </div>

      <div class="showdown-main">
        <div class="showdown-side attacker">
          ${createPokemonIconHtml(attackerName, "pokemon-icon")}
          <div class="showdown-side-text">
            <span class="showdown-pokemon-name">${attackerName}</span>
            <span class="showdown-move-name">複数計算</span>
            <span class="showdown-hit-info">${summary.stepLabels.join(" → ")}</span>
          </div>
        </div>

        <div class="showdown-arrow">→</div>

        <div class="showdown-side defender">
          <div class="showdown-side-text">
            <span class="showdown-pokemon-name">${defenderName}</span>
            <span class="showdown-damage-head">
              ${summary.minTotalDamage}〜${summary.maxTotalDamage}
              <span class="showdown-maxhp">/ ${summary.currentHp}</span>
            </span>
          </div>
          ${createPokemonIconHtml(defenderName, "pokemon-icon")}
        </div>
      </div>

${summary.detailLines.length > 0 ? `
  <details class="combo-detail-box">
    <summary>
      <span class="summary-closed">内訳を見る（${summary.detailLines.length}件）</span>
      <span class="summary-open">内訳を閉じる</span>
    </summary>

    <div class="combo-detail-list">
      ${summary.detailLines.map(line => `<div>${line}</div>`).join("")}
    </div>
  </details>
` : ""}

      <div class="showdown-bar-wrap">
        <div class="showdown-bar-track">
          <div
            class="showdown-bar-remaining"
            style="left: 0%; width: ${remainWidth}%;"
          ></div>

          <div
            class="showdown-bar-random"
            style="left: ${remainWidth}%; width: ${randomWidth}%;"
          ></div>

          <div
            class="showdown-bar-guaranteed"
            style="left: ${remainWidth + randomWidth}%; width: ${guaranteedWidth}%;"
          ></div>
        </div>

        <div class="showdown-footer">
          <span class="showdown-damage-text">${summary.minTotalDamage} 〜 ${summary.maxTotalDamage}</span>
          <span class="showdown-percent-text">(${summary.minPercent}% - ${summary.maxPercent}%)</span>
          <span class="showdown-result-text">${summary.judgeText}</span>
          <span class="showdown-ko-text">瀕死率 ${summary.koChance}%</span>
        </div>
      </div>


    </div>
  `;

  latestDamageMemoText =
    `${attackerName} → ${defenderName}\n` +
    `複数計算：${summary.stepLabels.join(" → ")}\n` +
    `合計ダメージ：${summary.minTotalDamage}〜${summary.maxTotalDamage}（${summary.minPercent}%〜${summary.maxPercent}%）\n` +
    `判定：${summary.judgeText}`;

  renderDamageHpBar(
    summary.maxHp,
    summary.currentHp,
    summary.minTotalDamage,
    summary.maxTotalDamage
  );

  if (copyDamageMemoButton) {
    copyDamageMemoButton.classList.add("ready");
  }
}

function addComboFixedEffectStep(effectType, presetKey, numeratorInput, denominatorInput) {
  const presetMap = effectType === "heal"
    ? comboHealPresetMap
    : comboDamagePresetMap;

  let label = "";
  let numerator = 1;
  let denominator = 16;

  if (presetKey === "custom") {
    numerator = Math.max(1, Number(numeratorInput.value) || 1);
    denominator = Math.max(1, Number(denominatorInput.value) || 16);

    label = effectType === "heal"
      ? `回復 ${numerator}/${denominator}`
      : `定数ダメージ ${numerator}/${denominator}`;
  } else {
    const preset = presetMap[presetKey];

    if (!preset) {
      return;
    }

    label = preset.label;
    numerator = preset.numerator;
    denominator = preset.denominator;
  }

  comboSteps.push({
    type: effectType,
    label,
    numerator,
    denominator
  });

  renderComboStepList();
  updateComboDamageResultAdvanced();
}

function updateComboDamageResultAdvanced() {
  if (comboSteps.length === 0) {
    if (comboDamageResult) {
      comboDamageResult.innerHTML = "";
    }
    return;
  }

  const summary = calculateComboSummary();

  if (!summary) {
    if (comboDamageResult) {
      comboDamageResult.innerHTML = "";
    }
    return;
  }

  if (comboDamageResult) {
    comboDamageResult.innerHTML = "";
  }

  renderComboResultToMainPanel(summary);
}

function addDamageResultToMemo() {
  if (!latestDamageMemoText) {
    alert("先にダメージ計算をしてください。");
    return;
  }

  const currentMemo = battleMemoInput.value.trim();

  if (currentMemo) {
    battleMemoInput.value = `${currentMemo}\n\n${latestDamageMemoText}`;
  } else {
    battleMemoInput.value = latestDamageMemoText;
  }

  alert("計算結果をメモに追加しました。");
}


const pageTabs = document.querySelectorAll(".page-tab");
const pageSections = document.querySelectorAll(".page-section");

function switchPage(pageId) {
  pageSections.forEach(section => {
    section.classList.remove("active");
  });

  pageTabs.forEach(tab => {
    tab.classList.remove("active");
  });

  const targetPage = document.getElementById(pageId);
  const targetTab = document.querySelector(`.page-tab[data-page="${pageId}"]`);

  if (targetPage) {
    targetPage.classList.add("active");
  }

  if (targetTab) {
    targetTab.classList.add("active");
  }
}

pageTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    switchPage(tab.dataset.page);
  });
});

saveMyTeamButton.addEventListener("click", saveMyTeam);

if (cancelMyTeamEditButton) {
  cancelMyTeamEditButton.addEventListener("click", cancelEditMyTeam);
}

myTeamSelect.addEventListener("change", () => {
  renderSelectedMyTeamPreview();
  updateDamagePokemonOptions();
});

opponentInputs.forEach(input => {
  input.addEventListener("input", renderSelectionArea);
});

saveBattleButton.addEventListener("click", saveBattleRecord);

historySearchInput.addEventListener("input", () => {
  selectedBattleRecordIds.clear();

  renderTeamHistorySummary();
  renderBattleBoard();
  renderBattleStats();
  updateHistoryBulkActionState();
});

historyResultFilter.addEventListener("change", () => {
  selectedBattleRecordIds.clear();

  renderTeamHistorySummary();
  renderBattleBoard();
  renderBattleStats();
  updateHistoryBulkActionState();
});


clearHistorySearchButton.addEventListener("click", () => {
  historySearchInput.value = "";
  historyResultFilter.value = "all";

  renderTeamHistorySummary();
  renderBattleBoard();
  renderBattleStats();
});

attackerSideSelect.addEventListener("change", () => {
  damageMegaState.attacker = null;
  updateDamagePokemonOptions();
});

defenderSideSelect.addEventListener("change", () => {
  damageMegaState.defender = null;
  updateDamagePokemonOptions();
});

attackerPokemonInput.addEventListener("input", () => {
  damageMegaState.attacker = null;
  updateMoveOptions();
  updateDamageStats();
  updateMegaButtons();
  updateAutoDamageSettings();
  renderPokemonPreview(attackerPokemonPreview, attackerPokemonInput.value.trim());
  renderAttackerMoveButtons();
});

attackerPokemonInput.addEventListener("change", () => {
  damageMegaState.attacker = null;
  updateMoveOptions();
  updateDamageStats();
  updateMegaButtons();
  updateAutoDamageSettings();
  renderPokemonPreview(attackerPokemonPreview, attackerPokemonInput.value.trim());
  renderAttackerMoveButtons();

  syncDamageItemInputsFromCurrentPokemon();
syncDamageItemCheckboxes();

  const attacker = getDamagePokemon(
  attackerSideSelect.value,
  attackerPokemonInput.value,
  "attacker"
);

if (attackerSideSelect.value === "my") {
  syncAttackerAdjustmentFromRegisteredPokemon(attacker);
}
});

defenderPokemonInput.addEventListener("input", () => {
  damageMegaState.defender = null;
  applyDefenderEvAdjustment();
  updateMegaButtons();
  updateAutoDamageSettings();
   renderPokemonPreview(defenderPokemonPreview, defenderPokemonInput.value.trim());
});

defenderPokemonInput.addEventListener("change", () => {
  damageMegaState.defender = null;
  applyDefenderEvAdjustment();
  updateMegaButtons();
  updateAutoDamageSettings();
   renderPokemonPreview(defenderPokemonPreview, defenderPokemonInput.value.trim());

     syncDamageItemInputsFromCurrentPokemon();
  syncDamageItemCheckboxes();

   const defender = getDamagePokemon(
  defenderSideSelect.value,
  defenderPokemonInput.value,
  "defender"
);

if (defenderSideSelect.value === "my") {
  syncDefenderAdjustmentFromRegisteredPokemon(defender);
}
});

if (damageMoveInput) {
  damageMoveInput.addEventListener("input", () => {
    updateMoveData();
    updateMoveConditionVisibility();
    updateDamageConditionAndRecalculate();
  });

  damageMoveInput.addEventListener("change", () => {
    updateMoveData();
    updateMoveConditionVisibility();
    updateDamageConditionAndRecalculate();
  });
}

if (attackerAbilityInput) {
  attackerAbilityInput.addEventListener("input", () => {
    updateMoveConditionVisibility();
    updateDamageConditionAndRecalculate();
  });

  attackerAbilityInput.addEventListener("change", () => {
    updateMoveConditionVisibility();
    updateDamageConditionAndRecalculate();
  });
}

if (defenderAbilityInput) {
  defenderAbilityInput.addEventListener("input", () => {
    updateMoveConditionVisibility();
    updateDamageConditionAndRecalculate();
  });

  defenderAbilityInput.addEventListener("change", () => {
    updateMoveConditionVisibility();
    updateDamageConditionAndRecalculate();
  });
}


attackerItemChecks.forEach(check => {
  check.addEventListener("change", () => {
    if (check.checked) {
      attackerItemChecks.forEach(otherCheck => {
        if (otherCheck !== check) {
          otherCheck.checked = false;
        }
      });
    }

updateAutoDamageSettings();
updateDamageCategoryRows();
applyAttackerEvAdjustment();
applyDefenderEvAdjustment();
scheduleAutoDamageCalculation();
  });
});
defenderItemChecks.forEach(check => {
  check.addEventListener("change", () => {
    if (check.checked) {
      defenderItemChecks.forEach(otherCheck => {
        if (otherCheck !== check) {
          otherCheck.checked = false;
        }
      });
    }

updateAutoDamageSettings();
updateDamageCategoryRows();
applyAttackerEvAdjustment();
applyDefenderEvAdjustment();
scheduleAutoDamageCalculation();
  });
});

moveCategorySelect.addEventListener("change", () => {
  syncWallCheck();
  updateAutoDamageSettings();
  updateDamageCategoryRows();
  applyAttackerEvAdjustment();
  applyDefenderEvAdjustment();
  scheduleAutoDamageCalculation();
});
damageLevelInput.addEventListener("input", () => {
  updateAutoDamageSettings();
  updateDamageCategoryRows();
  applyAttackerEvAdjustment();
  applyDefenderEvAdjustment();
  scheduleAutoDamageCalculation();
});

defenderDefenseNatureSelect.addEventListener("change", applyDefenderEvAdjustment);
defenderSpDefenseNatureSelect.addEventListener("change", applyDefenderEvAdjustment);

attackerAttackEvRange.addEventListener("input", () => {
  setAttackerAbilityPoint("attack", attackerAttackEvRange.value);
});

attackerSpAttackEvRange.addEventListener("input", () => {
  setAttackerAbilityPoint("spAttack", attackerSpAttackEvRange.value);
});

attackerAttackEvInput.addEventListener("input", () => {
  setAttackerAbilityPoint("attack", attackerAttackEvInput.value);
});

attackerSpAttackEvInput.addEventListener("input", () => {
  setAttackerAbilityPoint("spAttack", attackerSpAttackEvInput.value);
});

attackerAttackNatureSelect.addEventListener("change", applyAttackerEvAdjustment);
attackerSpAttackNatureSelect.addEventListener("change", applyAttackerEvAdjustment);

defenderHpEvRange.addEventListener("input", () => {
  setDefenderAbilityPoint("hp", defenderHpEvRange.value);
});

defenderDefenseEvRange.addEventListener("input", () => {
  setDefenderAbilityPoint("defense", defenderDefenseEvRange.value);
});

defenderSpDefenseEvRange.addEventListener("input", () => {
  setDefenderAbilityPoint("spDefense", defenderSpDefenseEvRange.value);
});

defenderHpEvInput.addEventListener("input", () => {
  setDefenderAbilityPoint("hp", defenderHpEvInput.value);
});

defenderDefenseEvInput.addEventListener("input", () => {
  setDefenderAbilityPoint("defense", defenderDefenseEvInput.value);
});

defenderSpDefenseEvInput.addEventListener("input", () => {
  setDefenderAbilityPoint("spDefense", defenderSpDefenseEvInput.value);
});

document.querySelectorAll(".ev-button").forEach(button => {
  button.addEventListener("click", () => {
    setDefenderAbilityPoint(button.dataset.target, button.dataset.value);
  });
});

[
  moveTypeInput,
  typeEffectivenessSelect,
  weatherSelect,
  stabCheck,
  criticalCheck,
  burnCheck,
  spreadMoveCheck,
  reflectCheck,
  lightScreenCheck,
  attackStageSelect,
  spAttackStageSelect,
  defenseStageSelect,
  spDefenseStageSelect,
  defenderCurrentHpPercentInput
].forEach(element => {
  element.addEventListener("input", updateAutoDamageSettings);
  element.addEventListener("change", updateAutoDamageSettings);
});

swapAttackDefenseButton.addEventListener("click", swapAttackDefense);
calculateDamageButton.addEventListener("click", calculateDamage);
copyDamageMemoButton.addEventListener("click", addDamageResultToMemo);

megaAttackerButton.addEventListener("click", () => {
  toggleMegaEvolution("attacker");
});

megaDefenderButton.addEventListener("click", () => {
  toggleMegaEvolution("defender");
});

function getPokemonIconPath(name) {
  if (!name) {
    return "";
  }

  return `images/pokemon-icons/${name}.png`;
}

function getItemIconPath(name) {
  if (!name) {
    return "";
  }

  return `images/item-icons/${name}.png`;
}

function createItemIconHtml(name, className = "item-icon") {
  if (!name) {
    return "";
  }

  const iconPath = getItemIconPath(name);

  return `
    <img
      src="${iconPath}"
      alt="${name}"
      class="${className}"
      onerror="this.style.display='none'"
    >
  `;
}

function createPokemonIconHtml(name, className = "pokemon-icon") {
  if (!name) {
    return "";
  }

  const iconPath = getPokemonIconPath(name);

  return `
    <img
      src="${iconPath}"
      alt="${name}"
      class="${className}"
      onerror="this.style.display='none'"
    >
  `;
}

function renderPokemonPreview(element, name) {
  if (!element) {
    return;
  }

  if (!name) {
    element.innerHTML = "";
    return;
  }

  const pokemonData = findPokemonData(name);

  if (!pokemonData) {
    element.innerHTML = `
      <div class="pokemon-preview-card">
        <div class="pokemon-preview-info">
          <div class="pokemon-preview-name">${name}</div>
        </div>
      </div>
    `;
    return;
  }

  element.innerHTML = `
    <div class="pokemon-preview-card">
      <div class="pokemon-preview-icon-wrap">
        ${createPokemonIconHtml(name, "preview-large-icon")}
      </div>

      <div class="pokemon-preview-info">
        <div class="pokemon-preview-name">${name}</div>

        <div class="pokemon-preview-types">
          ${pokemonData.types.map(type => `
            <span class="type-badge" data-type="${type}">${type}</span>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

document.querySelectorAll(".nature-button-row").forEach(row => {
  const targetId = row.dataset.natureTarget;
  const targetSelect = document.getElementById(targetId);

  if (!targetSelect) {
    return;
  }

  row.querySelectorAll(".nature-button").forEach(button => {
    button.addEventListener("click", () => {
      row.querySelectorAll(".nature-button").forEach(otherButton => {
        otherButton.classList.remove("active");
      });

      button.classList.add("active");
      targetSelect.value = button.dataset.value;

updateDamageStats();
applyAttackerEvAdjustment();
applyDefenderEvAdjustment();
updateAutoDamageSettings();
scheduleAutoDamageCalculation();
    });
  });
});

document.querySelectorAll(".attacker-ev-button").forEach(button => {
  button.addEventListener("click", () => {
    setAttackerAbilityPoint(button.dataset.target, button.dataset.value);
  });
});

if (wallCheck) {
  wallCheck.addEventListener("change", () => {
    syncWallCheck();
    updateAutoDamageSettings();
    scheduleAutoDamageCalculation();
  });
}


let autoDamageTimer = null;

function canAutoCalculateDamage() {
  if (!damageMoveInput.value.trim()) {
    return false;
  }

  if (!attackerPokemonInput.value.trim()) {
    return false;
  }

  if (!defenderPokemonInput.value.trim()) {
    return false;
  }

  if (!movePowerInput.value) {
    return false;
  }

  if (!attackStatInput.value) {
    return false;
  }

  if (!defenseStatInput.value) {
    return false;
  }

  if (!defenderHpInput.value) {
    return false;
  }

  return true;
}

function scheduleAutoDamageCalculation() {
  clearTimeout(autoDamageTimer);

  autoDamageTimer = setTimeout(() => {
    if (!canAutoCalculateDamage()) {
      return;
    }

    calculateDamage();
  }, 120);
}

function getPokemonAbilities(pokemonName) {
  if (!pokemonName) {
    return [];
  }

  if (typeof pokemonAbilityData === "undefined") {
    return [];
  }

  return pokemonAbilityData[pokemonName] || [];
}

if (attackerAbilityInput) {
  attackerAbilityInput.addEventListener("input", scheduleAutoDamageCalculation);
  attackerAbilityInput.addEventListener("change", scheduleAutoDamageCalculation);
}

if (defenderAbilityInput) {
  defenderAbilityInput.addEventListener("input", scheduleAutoDamageCalculation);
  defenderAbilityInput.addEventListener("change", scheduleAutoDamageCalculation);
}

if (historyTeamFilter) {
  historyTeamFilter.addEventListener("change", () => {
renderHistoryTeamFilter();
renderHistoryTeamTabs();
renderTeamHistorySummary();
renderBattleStats();
renderBattleBoard();
  });
}

if (damageAttackerItemInput) {
  damageAttackerItemInput.addEventListener("input", () => {
    syncDamageItemInputToSource("attacker");
  });

  damageAttackerItemInput.addEventListener("change", () => {
    syncDamageItemInputToSource("attacker");
  });
}

if (damageDefenderItemInput) {
  damageDefenderItemInput.addEventListener("input", () => {
    syncDamageItemInputToSource("defender");
  });

  damageDefenderItemInput.addEventListener("change", () => {
    syncDamageItemInputToSource("defender");
  });
}

const toggleDamageResultButton = document.getElementById("toggleDamageResultButton");

if (toggleDamageResultButton) {
  toggleDamageResultButton.addEventListener("click", () => {
    const resultPanel = document.querySelector(".damage-result-panel");

    if (!resultPanel) {
      return;
    }

    resultPanel.classList.toggle("collapsed");

    toggleDamageResultButton.textContent = resultPanel.classList.contains("collapsed")
      ? "結果を開く"
      : "結果をたたむ";
  });
}

if (addComboMoveButton) {
  addComboMoveButton.addEventListener("click", () => {
    const moveName = damageMoveInput.value.trim();

    if (!moveName) {
      alert("追加する技を選択してください。");
      return;
    }

    const moveData = findMoveData(moveName);

    if (!moveData || moveData.category === "status") {
      alert("ダメージ計算できる攻撃技を選択してください。");
      return;
    }

    comboSteps.push({
      type: "move",
      name: moveName
    });

    renderComboStepList();
    updateComboDamageResultAdvanced();
  });
}

if (comboEffectType) {
  comboEffectType.addEventListener("change", syncComboEffectPresetOptions);
}

syncComboEffectPresetOptions();

if (addComboEffectButton) {
  addComboEffectButton.addEventListener("click", () => {
    const effectType = comboEffectType.value;
    const presetKey = comboEffectPreset.value;

    let label = "";
    let numerator = 1;
    let denominator = 16;

    if (presetKey === "custom") {
      numerator = Math.max(1, Number(comboCustomNumerator.value) || 1);
      denominator = Math.max(1, Number(comboCustomDenominator.value) || 16);
      label = `${effectType === "damage" ? "定数ダメージ" : "回復"} ${numerator}/${denominator}`;
    } else {
      
      const presetMap = getComboPresetMapByType(effectType);
const preset = presetMap[presetKey];

      if (!preset) {
        return;
      }

      label = preset.label;
      numerator = preset.numerator;
      denominator = preset.denominator;
    }

    comboSteps.push({
      type: effectType,
      label,
      numerator,
      denominator
    });

    renderComboStepList();
    updateComboDamageResultAdvanced();
  });
}

if (clearComboMovesButton) {
  clearComboMovesButton.addEventListener("click", () => {
    comboSteps = [];
    renderComboStepList();
    updateComboDamageResultAdvanced();
    updateMoveData();
    calculateDamage();
  });
}

[comboAutoSitrusCheck, comboAutoLeftoversCheck].forEach(check => {
  if (!check) {
    return;
  }

  check.addEventListener("change", updateComboDamageResultAdvanced);
});

if (addComboDamageEffectButton) {
  addComboDamageEffectButton.addEventListener("click", () => {
    addComboFixedEffectStep(
      "damage",
      comboDamagePreset.value,
      comboDamageCustomNumerator,
      comboDamageCustomDenominator
    );
  });
}

if (addComboHealEffectButton) {
  addComboHealEffectButton.addEventListener("click", () => {
    addComboFixedEffectStep(
      "heal",
      comboHealPreset.value,
      comboHealCustomNumerator,
      comboHealCustomDenominator
    );
  });
}

if (selectAllVisibleHistoryButton) {
  selectAllVisibleHistoryButton.addEventListener("click", selectAllVisibleHistory);
}

if (clearHistorySelectionButton) {
  clearHistorySelectionButton.addEventListener("click", clearHistorySelection);
}

if (bulkDeleteHistoryButton) {
  bulkDeleteHistoryButton.addEventListener("click", deleteSelectedBattleRecords);
}

if (toggleHistorySelectModeButton) {
  toggleHistorySelectModeButton.addEventListener("click", toggleHistorySelectMode);
}

if (attackerAbilityInput) {
  attackerAbilityInput.addEventListener("input", () => {
    updateMoveConditionVisibility();
    scheduleAutoDamageCalculation();
  });

  attackerAbilityInput.addEventListener("change", () => {
    updateMoveConditionVisibility();
    scheduleAutoDamageCalculation();
  });
}

if (defenderAbilityInput) {
  defenderAbilityInput.addEventListener("input", () => {
    updateMoveConditionVisibility();
    scheduleAutoDamageCalculation();
  });

  defenderAbilityInput.addEventListener("change", () => {
    updateMoveConditionVisibility();
    scheduleAutoDamageCalculation();
  });
}

function updateDamageConditionAndRecalculate() {
  syncWallCheck();

  updateMoveConditionVisibility();
  updateAutoDamageSettings();
  updateDamageCategoryRows();
  applyAttackerEvAdjustment();
  applyDefenderEvAdjustment();

  scheduleAutoDamageCalculation();
}

function setupMoveConditionInputEvents() {
  [
    moveConditionBox,
    attackerAbilityConditionBox,
    defenderAbilityConditionBox
  ].forEach(box => {
    if (!box) {
      return;
    }

    box.addEventListener("input", updateDamageConditionAndRecalculate);
    box.addEventListener("change", updateDamageConditionAndRecalculate);
  });
}

function setupSingleChoiceCheckboxGroup(selector, hiddenSelect, onChanged) {
  const checks = document.querySelectorAll(selector);

  checks.forEach(check => {
    check.addEventListener("change", () => {
      if (check.checked) {
        checks.forEach(other => {
          if (other !== check) {
            other.checked = false;
          }
        });

        if (hiddenSelect) {
          hiddenSelect.value = check.value;
        }
      } else {
        if (hiddenSelect) {
          hiddenSelect.value = "none";
        }
      }

      if (typeof onChanged === "function") {
        onChanged();
      }
    });
  });
}

function setupStatusCheckboxGroup(selector, hiddenSelect) {
  const checks = document.querySelectorAll(selector);

  checks.forEach(check => {
    check.addEventListener("change", () => {
      if (check.checked) {
        checks.forEach(other => {
          if (other !== check) {
            other.checked = false;
          }
        });

        if (hiddenSelect) {
          hiddenSelect.value = check.value;
        }
      } else {
        if (hiddenSelect) {
          hiddenSelect.value = "";
        }
      }

      updateDamageConditionAndRecalculate();
    });
  });
}

function setupConditionCheckboxGroups() {
  setupStatusCheckboxGroup(".attacker-status-checkbox", attackerStatusSelect);
  setupStatusCheckboxGroup(".defender-status-checkbox", defenderStatusSelect);

  setupSingleChoiceCheckboxGroup(".weather-checkbox", weatherSelect, updateDamageConditionAndRecalculate);
  setupSingleChoiceCheckboxGroup(".field-checkbox", fieldSelect, updateDamageConditionAndRecalculate);
}


[
  criticalCheck,
  burnCheck,
  attackerLowHpCheck,
  supremeOverlordCountSelect,
  multiHitCountSelect,
  wallCheck,
  lifeOrbCheck,
  choiceItemCheck,
  typeBoostCheck,
  expertBeltCheck,
  assaultVestCheck,
  evioliteCheck,
  resistBerryCheck
].forEach(element => {
  if (!element) {
    return;
  }

  element.addEventListener("input", updateDamageConditionAndRecalculate);
  element.addEventListener("change", updateDamageConditionAndRecalculate);
});

[
  attackerStatusSelect,
defenderStatusSelect,
  attackerWeightInput,
defenderWeightInput,
attackerSpeedInput,
defenderSpeedInput,
fixedDamageInput,
receivedDamageInput,
  moveTypeInput,
  typeEffectivenessSelect,
  weatherSelect,
  fieldSelect,
  stabCheck,
  criticalCheck,
  burnCheck,

  moveBoostConditionCheck,
  multiHitCountSelect,

    attackerLowHpCheck,
  attackerSideSelect,
  defenderSideSelect,
  attackerPokemonInput,
  defenderPokemonInput,
  damageMoveInput,
  damageLevelInput,
  movePowerInput,
  moveTypeInput,
  moveCategorySelect,
  attackStatInput,
  defenseStatInput,
  defenderHpInput,
  defenderCurrentHpPercentInput,
  attackStageSelect,
  spAttackStageSelect,
  defenseStageSelect,
  spDefenseStageSelect,
  typeEffectivenessSelect,
  weatherSelect,
  criticalCheck,
  burnCheck,
  spreadMoveCheck,
  reflectCheck,
  lightScreenCheck
].forEach(element => {
  if (!element) {
    return;
  }

  element.addEventListener("input", scheduleAutoDamageCalculation);
  element.addEventListener("change", scheduleAutoDamageCalculation);
});

document.querySelectorAll(".attacker-item-check").forEach(check => {
  check.addEventListener("change", scheduleAutoDamageCalculation);
});

document.querySelectorAll(".defender-item-check").forEach(check => {
  check.addEventListener("change", scheduleAutoDamageCalculation);
});

document.querySelectorAll(".attacker-ev-button").forEach(button => {
  button.addEventListener("click", scheduleAutoDamageCalculation);
});

document.querySelectorAll(".ev-button").forEach(button => {
  button.addEventListener("click", scheduleAutoDamageCalculation);
});

document.querySelectorAll(".nature-button").forEach(button => {
  button.addEventListener("click", scheduleAutoDamageCalculation);
});

setupConditionCheckboxGroups();
setupMoveConditionInputEvents();
setupAutocompleteLists();
renderMyTeamForm();
renderMyTeamSelect();
renderSelectedMyTeamPreview();
renderMyTeamListBoard();
renderSelectionArea();
renderHistoryTeamFilter();
renderHistoryTeamTabs();
renderTeamHistorySummary();
renderBattleBoard();
renderBattleStats();
renderMySelectionPatternStats();
renderOpponentSelectionRateStats();
renderMySelectionPatternStats();
renderOpponentSelectionRateStats();
updateDamagePokemonOptions();
updateHistoryBulkActionState();

renderDamageMyPartyList();
renderDamageOpponentPartyList();
renderAttackerMoveButtons();
updateDamageCategoryRows();

updateMoveConditionVisibility();

setAttackerAbilityPoint("attack", attackerAttackEvInput.value);
setAttackerAbilityPoint("spAttack", attackerSpAttackEvInput.value);
updateAttackerAbilityPointTotal();
setDefenderAbilityPoint("hp", defenderHpEvInput.value);
setDefenderAbilityPoint("defense", defenderDefenseEvInput.value);
setDefenderAbilityPoint("spDefense", defenderSpDefenseEvInput.value);
updateDefenderAbilityPointTotal();
resetDamageHpBar();