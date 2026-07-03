const pokemonDataList = [
  {
    name: "フシギバナ",
    types: ["くさ", "どく"],
    baseStats: {
      hp: 80,
      attack: 82,
      defense: 83,
      spAttack: 100,
      spDefense: 100,
      speed: 80
    }
  },
  {
    name: "メガフシギバナ",
    types: ["くさ", "どく"],
    baseStats: {
      hp: 80,
      attack: 100,
      defense: 123,
      spAttack: 122,
      spDefense: 120,
      speed: 80
    }
  },
  {
    name: "リザードン",
    types: ["ほのお", "ひこう"],
    baseStats: {
      hp: 78,
      attack: 84,
      defense: 78,
      spAttack: 109,
      spDefense: 85,
      speed: 100
    }
  },
  {
    name: "メガリザードンX",
    types: ["ほのお", "ドラゴン"],
    baseStats: {
      hp: 78,
      attack: 130,
      defense: 111,
      spAttack: 130,
      spDefense: 85,
      speed: 100
    }
  },
  {
    name: "メガリザードンY",
    types: ["ほのお", "ひこう"],
    baseStats: {
      hp: 78,
      attack: 104,
      defense: 78,
      spAttack: 159,
      spDefense: 115,
      speed: 100
    }
  },
  {
    name: "カメックス",
    types: ["みず"],
    baseStats: {
      hp: 79,
      attack: 83,
      defense: 100,
      spAttack: 85,
      spDefense: 105,
      speed: 78
    }
  },
  {
    name: "メガカメックス",
    types: ["みず"],
    baseStats: {
      hp: 79,
      attack: 103,
      defense: 120,
      spAttack: 135,
      spDefense: 115,
      speed: 78
    }
  },
  {
    name: "スピアー",
    types: ["むし", "どく"],
    baseStats: {
      hp: 65,
      attack: 90,
      defense: 40,
      spAttack: 45,
      spDefense: 80,
      speed: 75
    }
  },
  {
    name: "メガスピアー",
    types: ["むし", "どく"],
    baseStats: {
      hp: 65,
      attack: 150,
      defense: 40,
      spAttack: 15,
      spDefense: 80,
      speed: 145
    }
  },
  {
    name: "ピジョット",
    types: ["ノーマル", "ひこう"],
    baseStats: {
      hp: 83,
      attack: 80,
      defense: 75,
      spAttack: 70,
      spDefense: 70,
      speed: 101
    }
  },
  {
    name: "メガピジョット",
    types: ["ノーマル", "ひこう"],
    baseStats: {
      hp: 83,
      attack: 80,
      defense: 80,
      spAttack: 135,
      spDefense: 80,
      speed: 121
    }
  },
  {
    name: "アーボック",
    types: ["どく"],
    baseStats: {
      hp: 60,
      attack: 95,
      defense: 69,
      spAttack: 65,
      spDefense: 79,
      speed: 80
    }
  },
  {
    name: "ピカチュウ",
    types: ["でんき"],
    baseStats: {
      hp: 35,
      attack: 55,
      defense: 40,
      spAttack: 50,
      spDefense: 50,
      speed: 90
    }
  },
  {
    name: "ライチュウ",
    types: ["でんき"],
    baseStats: {
      hp: 60,
      attack: 90,
      defense: 55,
      spAttack: 90,
      spDefense: 80,
      speed: 110
    }
  },
  {
    name: "ライチュウ(アローラ)",
    types: ["でんき", "エスパー"],
    baseStats: {
      hp: 60,
      attack: 85,
      defense: 50,
      spAttack: 95,
      spDefense: 85,
      speed: 110
    }
  },
  {
    name: "メガライチュウX",
    types: ["でんき"],
    baseStats: {
      hp: 60,
      attack: 135,
      defense: 95,
      spAttack: 90,
      spDefense: 95,
      speed: 110
    }
  },
  {
    name: "メガライチュウY",
    types: ["でんき"],
    baseStats: {
      hp: 60,
      attack: 100,
      defense: 55,
      spAttack: 160,
      spDefense: 80,
      speed: 130
    }
  },
  {
    name: "ピクシー",
    types: ["フェアリー"],
    baseStats: {
      hp: 95,
      attack: 70,
      defense: 73,
      spAttack: 95,
      spDefense: 90,
      speed: 60
    }
  },
  {
    name: "メガピクシー",
    types: ["フェアリー", "ひこう"],
    baseStats: {
      hp: 95,
      attack: 80,
      defense: 93,
      spAttack: 135,
      spDefense: 110,
      speed: 70
    }
  },
  {
    name: "キュウコン",
    types: ["ほのお"],
    baseStats: {
      hp: 73,
      attack: 76,
      defense: 75,
      spAttack: 81,
      spDefense: 100,
      speed: 100
    }
  },
  {
    name: "キュウコン(アローラ)",
    types: ["こおり", "フェアリー"],
    baseStats: {
      hp: 73,
      attack: 67,
      defense: 75,
      spAttack: 81,
      spDefense: 100,
      speed: 109
    }
  },
  {
    name: "ラフレシア",
    types: ["くさ", "どく"],
    baseStats: {
      hp: 75,
      attack: 80,
      defense: 85,
      spAttack: 110,
      spDefense: 90,
      speed: 50
    }
  },
  {
    name: "ウインディ",
    types: ["ほのお"],
    baseStats: {
      hp: 90,
      attack: 110,
      defense: 80,
      spAttack: 100,
      spDefense: 80,
      speed: 95
    }
  },
  {
    name: "ウインディ(ヒスイ)",
    types: ["ほのお", "いわ"],
    baseStats: {
      hp: 95,
      attack: 115,
      defense: 80,
      spAttack: 95,
      spDefense: 80,
      speed: 90
    }
  },
  {
    name: "フーディン",
    types: ["エスパー"],
    baseStats: {
      hp: 55,
      attack: 50,
      defense: 45,
      spAttack: 135,
      spDefense: 95,
      speed: 120
    }
  },
  {
    name: "メガフーディン",
    types: ["エスパー"],
    baseStats: {
      hp: 55,
      attack: 50,
      defense: 65,
      spAttack: 175,
      spDefense: 105,
      speed: 150
    }
  },
  {
    name: "カイリキー",
    types: ["かくとう"],
    baseStats: {
      hp: 90,
      attack: 130,
      defense: 80,
      spAttack: 65,
      spDefense: 85,
      speed: 55
    }
  },
  {
    name: "ウツボット",
    types: ["くさ", "どく"],
    baseStats: {
      hp: 80,
      attack: 105,
      defense: 65,
      spAttack: 100,
      spDefense: 70,
      speed: 70
    }
  },
  {
    name: "メガウツボット",
    types: ["くさ", "どく"],
    baseStats: {
      hp: 80,
      attack: 125,
      defense: 85,
      spAttack: 135,
      spDefense: 95,
      speed: 70
    }
  },
  {
    name: "ヤドラン",
    types: ["みず", "エスパー"],
    baseStats: {
      hp: 95,
      attack: 75,
      defense: 110,
      spAttack: 100,
      spDefense: 80,
      speed: 30
    }
  },
  {
    name: "メガヤドラン",
    types: ["みず", "エスパー"],
    baseStats: {
      hp: 95,
      attack: 75,
      defense: 180,
      spAttack: 130,
      spDefense: 80,
      speed: 30
    }
  },
  {
    name: "ヤドラン(ガラル)",
    types: ["どく", "エスパー"],
    baseStats: {
      hp: 95,
      attack: 100,
      defense: 95,
      spAttack: 100,
      spDefense: 70,
      speed: 30
    }
  },
  {
    name: "ゲンガー",
    types: ["ゴースト", "どく"],
    baseStats: {
      hp: 60,
      attack: 65,
      defense: 60,
      spAttack: 130,
      spDefense: 75,
      speed: 110
    }
  },
  {
    name: "メガゲンガー",
    types: ["ゴースト", "どく"],
    baseStats: {
      hp: 60,
      attack: 65,
      defense: 80,
      spAttack: 170,
      spDefense: 95,
      speed: 130
    }
  },
  {
    name: "ガルーラ",
    types: ["ノーマル"],
    baseStats: {
      hp: 105,
      attack: 95,
      defense: 80,
      spAttack: 40,
      spDefense: 80,
      speed: 90
    }
  },
  {
    name: "メガガルーラ",
    types: ["ノーマル"],
    baseStats: {
      hp: 105,
      attack: 125,
      defense: 100,
      spAttack: 60,
      spDefense: 100,
      speed: 100
    }
  },
  {
    name: "スターミー",
    types: ["みず", "エスパー"],
    baseStats: {
      hp: 60,
      attack: 75,
      defense: 85,
      spAttack: 100,
      spDefense: 85,
      speed: 115
    }
  },
  {
    name: "メガスターミー",
    types: ["みず", "エスパー"],
    baseStats: {
      hp: 60,
      attack: 100,
      defense: 105,
      spAttack: 130,
      spDefense: 105,
      speed: 120
    }
  },
  {
    name: "カイロス",
    types: ["むし"],
    baseStats: {
      hp: 65,
      attack: 125,
      defense: 100,
      spAttack: 55,
      spDefense: 70,
      speed: 85
    }
  },
  {
    name: "メガカイロス",
    types: ["むし", "ひこう"],
    baseStats: {
      hp: 65,
      attack: 155,
      defense: 120,
      spAttack: 65,
      spDefense: 90,
      speed: 105
    }
  },
  {
    name: "ケンタロス",
    types: ["ノーマル"],
    baseStats: {
      hp: 75,
      attack: 100,
      defense: 95,
      spAttack: 40,
      spDefense: 70,
      speed: 110
    }
  },
  {
    name: "ケンタロス(パルデア闘)",
    types: ["かくとう"],
    baseStats: {
      hp: 75,
      attack: 110,
      defense: 105,
      spAttack: 30,
      spDefense: 70,
      speed: 100
    }
  },
  {
    name: "ケンタロス(パルデア炎)",
    types: ["かくとう", "ほのお"],
    baseStats: {
      hp: 75,
      attack: 110,
      defense: 105,
      spAttack: 30,
      spDefense: 70,
      speed: 100
    }
  },
  {
    name: "ケンタロス(パルデア水)",
    types: ["かくとう", "みず"],
    baseStats: {
      hp: 75,
      attack: 110,
      defense: 105,
      spAttack: 30,
      spDefense: 70,
      speed: 100
    }
  },
  {
    name: "ギャラドス",
    types: ["みず", "ひこう"],
    baseStats: {
      hp: 95,
      attack: 125,
      defense: 79,
      spAttack: 60,
      spDefense: 100,
      speed: 81
    }
  },
  {
    name: "メガギャラドス",
    types: ["みず", "あく"],
    baseStats: {
      hp: 95,
      attack: 155,
      defense: 109,
      spAttack: 70,
      spDefense: 130,
      speed: 81
    }
  },
  {
    name: "メタモン",
    types: ["ノーマル"],
    baseStats: {
      hp: 48,
      attack: 48,
      defense: 48,
      spAttack: 48,
      spDefense: 48,
      speed: 48
    }
  },
  {
    name: "シャワーズ",
    types: ["みず"],
    baseStats: {
      hp: 130,
      attack: 65,
      defense: 60,
      spAttack: 110,
      spDefense: 95,
      speed: 65
    }
  },
  {
    name: "サンダース",
    types: ["でんき"],
    baseStats: {
      hp: 65,
      attack: 65,
      defense: 60,
      spAttack: 110,
      spDefense: 95,
      speed: 130
    }
  },
  {
    name: "ブースター",
    types: ["ほのお"],
    baseStats: {
      hp: 65,
      attack: 130,
      defense: 60,
      spAttack: 95,
      spDefense: 110,
      speed: 65
    }
  },
  {
    name: "プテラ",
    types: ["いわ", "ひこう"],
    baseStats: {
      hp: 80,
      attack: 105,
      defense: 65,
      spAttack: 60,
      spDefense: 75,
      speed: 130
    }
  },
  {
    name: "メガプテラ",
    types: ["いわ", "ひこう"],
    baseStats: {
      hp: 80,
      attack: 135,
      defense: 85,
      spAttack: 70,
      spDefense: 95,
      speed: 150
    }
  },
  {
    name: "カビゴン",
    types: ["ノーマル"],
    baseStats: {
      hp: 160,
      attack: 110,
      defense: 65,
      spAttack: 65,
      spDefense: 110,
      speed: 30
    }
  },
  {
    name: "カイリュー",
    types: ["ドラゴン", "ひこう"],
    baseStats: {
      hp: 91,
      attack: 134,
      defense: 95,
      spAttack: 100,
      spDefense: 100,
      speed: 80
    }
  },
  {
    name: "メガカイリュー",
    types: ["ドラゴン", "ひこう"],
    baseStats: {
      hp: 91,
      attack: 124,
      defense: 115,
      spAttack: 145,
      spDefense: 125,
      speed: 100
    }
  },
  {
    name: "メガニウム",
    types: ["くさ"],
    baseStats: {
      hp: 80,
      attack: 82,
      defense: 100,
      spAttack: 83,
      spDefense: 100,
      speed: 80
    }
  },
  {
    name: "メガメガニウム",
    types: ["くさ", "フェアリー"],
    baseStats: {
      hp: 80,
      attack: 92,
      defense: 115,
      spAttack: 143,
      spDefense: 115,
      speed: 80
    }
  },
  {
    name: "バクフーン",
    types: ["ほのお"],
    baseStats: {
      hp: 78,
      attack: 84,
      defense: 78,
      spAttack: 109,
      spDefense: 85,
      speed: 100
    }
  },
  {
    name: "バクフーン(ヒスイ)",
    types: ["ほのお", "ゴースト"],
    baseStats: {
      hp: 73,
      attack: 84,
      defense: 78,
      spAttack: 119,
      spDefense: 85,
      speed: 95
    }
  },
  {
    name: "オーダイル",
    types: ["みず"],
    baseStats: {
      hp: 85,
      attack: 105,
      defense: 100,
      spAttack: 79,
      spDefense: 83,
      speed: 78
    }
  },
  {
    name: "メガオーダイル",
    types: ["みず", "ドラゴン"],
    baseStats: {
      hp: 85,
      attack: 160,
      defense: 125,
      spAttack: 89,
      spDefense: 93,
      speed: 78
    }
  },
  {
    name: "アリアドス",
    types: ["むし", "どく"],
    baseStats: {
      hp: 70,
      attack: 90,
      defense: 70,
      spAttack: 60,
      spDefense: 70,
      speed: 40
    }
  },
  {
    name: "デンリュウ",
    types: ["でんき"],
    baseStats: {
      hp: 90,
      attack: 75,
      defense: 85,
      spAttack: 115,
      spDefense: 90,
      speed: 55
    }
  },
  {
    name: "メガデンリュウ",
    types: ["でんき", "ドラゴン"],
    baseStats: {
      hp: 90,
      attack: 95,
      defense: 105,
      spAttack: 165,
      spDefense: 110,
      speed: 45
    }
  },
  {
    name: "マリルリ",
    types: ["みず", "フェアリー"],
    baseStats: {
      hp: 100,
      attack: 50,
      defense: 80,
      spAttack: 60,
      spDefense: 80,
      speed: 50
    }
  },
  {
    name: "ニョロトノ",
    types: ["みず"],
    baseStats: {
      hp: 90,
      attack: 75,
      defense: 75,
      spAttack: 90,
      spDefense: 100,
      speed: 70
    }
  },
  {
    name: "エーフィ",
    types: ["エスパー"],
    baseStats: {
      hp: 65,
      attack: 65,
      defense: 60,
      spAttack: 130,
      spDefense: 95,
      speed: 110
    }
  },
  {
    name: "ブラッキー",
    types: ["あく"],
    baseStats: {
      hp: 95,
      attack: 65,
      defense: 110,
      spAttack: 60,
      spDefense: 130,
      speed: 65
    }
  },
  {
    name: "ヤドキング",
    types: ["みず", "エスパー"],
    baseStats: {
      hp: 95,
      attack: 75,
      defense: 80,
      spAttack: 100,
      spDefense: 110,
      speed: 30
    }
  },
  {
    name: "ガラルヤドキング",
    types: ["どく", "エスパー"],
    baseStats: {
      hp: 95,
      attack: 65,
      defense: 80,
      spAttack: 110,
      spDefense: 110,
      speed: 30
    }
  },
  {
    name: "フォレトス",
    types: ["むし", "はがね"],
    baseStats: {
      hp: 75,
      attack: 90,
      defense: 140,
      spAttack: 60,
      spDefense: 60,
      speed: 40
    }
  },
  {
    name: "ハガネール",
    types: ["はがね", "じめん"],
    baseStats: {
      hp: 75,
      attack: 85,
      defense: 200,
      spAttack: 55,
      spDefense: 65,
      speed: 30
    }
  },
  {
    name: "メガハガネール",
    types: ["はがね", "じめん"],
    baseStats: {
      hp: 75,
      attack: 125,
      defense: 230,
      spAttack: 55,
      spDefense: 95,
      speed: 30
    }
  },
  {
    name: "ハリーセン",
    types: ["みず", "どく"],
    baseStats: {
      hp: 65,
      attack: 95,
      defense: 85,
      spAttack: 55,
      spDefense: 55,
      speed: 85
    }
  },
  {
    name: "ハッサム",
    types: ["むし", "はがね"],
    baseStats: {
      hp: 70,
      attack: 130,
      defense: 100,
      spAttack: 55,
      spDefense: 80,
      speed: 65
    }
  },
  {
    name: "メガハッサム",
    types: ["むし", "はがね"],
    baseStats: {
      hp: 70,
      attack: 150,
      defense: 140,
      spAttack: 65,
      spDefense: 100,
      speed: 75
    }
  },
  {
    name: "ヘラクロス",
    types: ["むし", "かくとう"],
    baseStats: {
      hp: 80,
      attack: 125,
      defense: 75,
      spAttack: 40,
      spDefense: 95,
      speed: 85
    }
  },
  {
    name: "メガヘラクロス",
    types: ["むし", "かくとう"],
    baseStats: {
      hp: 80,
      attack: 185,
      defense: 115,
      spAttack: 40,
      spDefense: 105,
      speed: 75
    }
  },
  {
    name: "エアームド",
    types: ["はがね", "ひこう"],
    baseStats: {
      hp: 65,
      attack: 80,
      defense: 140,
      spAttack: 40,
      spDefense: 70,
      speed: 70
    }
  },
  {
    name: "メガエアームド",
    types: ["はがね", "ひこう"],
    baseStats: {
      hp: 65,
      attack: 140,
      defense: 110,
      spAttack: 40,
      spDefense: 100,
      speed: 110
    }
  },
  {
    name: "ヘルガー",
    types: ["あく", "ほのお"],
    baseStats: {
      hp: 75,
      attack: 90,
      defense: 50,
      spAttack: 110,
      spDefense: 80,
      speed: 95
    }
  },
  {
    name: "メガヘルガー",
    types: ["あく", "ほのお"],
    baseStats: {
      hp: 75,
      attack: 90,
      defense: 90,
      spAttack: 140,
      spDefense: 90,
      speed: 115
    }
  },
  {
    name: "バンギラス",
    types: ["いわ", "あく"],
    baseStats: {
      hp: 100,
      attack: 134,
      defense: 110,
      spAttack: 95,
      spDefense: 100,
      speed: 61
    }
  },
  {
    name: "メガバンギラス",
    types: ["いわ", "あく"],
    baseStats: {
      hp: 100,
      attack: 164,
      defense: 150,
      spAttack: 95,
      spDefense: 120,
      speed: 71
    }
  },
  {
    name: "ジュカイン",
    types: ["くさ"],
    baseStats: {
      hp: 70,
      attack: 85,
      defense: 65,
      spAttack: 105,
      spDefense: 85,
      speed: 120
    }
  },
  {
    name: "メガジュカイン",
    types: ["くさ", "ドラゴン"],
    baseStats: {
      hp: 70,
      attack: 110,
      defense: 75,
      spAttack: 145,
      spDefense: 85,
      speed: 145
    }
  },
  {
    name: "バシャーモ",
    types: ["ほのお", "かくとう"],
    baseStats: {
      hp: 80,
      attack: 120,
      defense: 70,
      spAttack: 110,
      spDefense: 70,
      speed: 80
    }
  },
  {
    name: "メガバシャーモ",
    types: ["ほのお", "かくとう"],
    baseStats: {
      hp: 80,
      attack: 160,
      defense: 80,
      spAttack: 130,
      spDefense: 80,
      speed: 100
    }
  },
  {
    name: "ラグラージ",
    types: ["みず", "じめん"],
    baseStats: {
      hp: 100,
      attack: 110,
      defense: 90,
      spAttack: 85,
      spDefense: 90,
      speed: 60
    }
  },
  {
    name: "メガラグラージ",
    types: ["みず", "じめん"],
    baseStats: {
      hp: 100,
      attack: 150,
      defense: 110,
      spAttack: 95,
      spDefense: 110,
      speed: 70
    }
  },
  {
    name: "ペリッパー",
    types: ["みず", "ひこう"],
    baseStats: {
      hp: 60,
      attack: 50,
      defense: 100,
      spAttack: 95,
      spDefense: 70,
      speed: 65
    }
  },
  {
    name: "サーナイト",
    types: ["エスパー", "フェアリー"],
    baseStats: {
      hp: 68,
      attack: 65,
      defense: 65,
      spAttack: 125,
      spDefense: 115,
      speed: 80
    }
  },
  {
    name: "メガサーナイト",
    types: ["エスパー", "フェアリー"],
    baseStats: {
      hp: 68,
      attack: 85,
      defense: 65,
      spAttack: 165,
      spDefense: 135,
      speed: 100
    }
  },
  {
    name: "ヤミラミ",
    types: ["あく", "ゴースト"],
    baseStats: {
      hp: 50,
      attack: 75,
      defense: 75,
      spAttack: 65,
      spDefense: 65,
      speed: 50
    }
  },
  {
    name: "メガヤミラミ",
    types: ["あく", "ゴースト"],
    baseStats: {
      hp: 50,
      attack: 85,
      defense: 125,
      spAttack: 85,
      spDefense: 115,
      speed: 20
    }
  },
  {
    name: "クチート",
    types: ["はがね", "フェアリー"],
    baseStats: {
      hp: 50,
      attack: 85,
      defense: 85,
      spAttack: 55,
      spDefense: 55,
      speed: 50
    }
  },
  {
    name: "メガクチート",
    types: ["はがね", "フェアリー"],
    baseStats: {
      hp: 50,
      attack: 105,
      defense: 125,
      spAttack: 55,
      spDefense: 95,
      speed: 50
    }
  },
  {
    name: "ボスゴドラ",
    types: ["はがね", "いわ"],
    baseStats: {
      hp: 70,
      attack: 110,
      defense: 180,
      spAttack: 60,
      spDefense: 60,
      speed: 50
    }
  },
  {
    name: "メガボスゴドラ",
    types: ["はがね"],
    baseStats: {
      hp: 70,
      attack: 140,
      defense: 230,
      spAttack: 60,
      spDefense: 80,
      speed: 50
    }
  },
  {
    name: "チャーレム",
    types: ["かくとう", "エスパー"],
    baseStats: {
      hp: 60,
      attack: 60,
      defense: 75,
      spAttack: 60,
      spDefense: 75,
      speed: 80
    }
  },
  {
    name: "メガチャーレム",
    types: ["かくとう", "エスパー"],
    baseStats: {
      hp: 60,
      attack: 100,
      defense: 85,
      spAttack: 80,
      spDefense: 85,
      speed: 100
    }
  },
  {
    name: "ライボルト",
    types: ["でんき"],
    baseStats: {
      hp: 70,
      attack: 75,
      defense: 60,
      spAttack: 105,
      spDefense: 60,
      speed: 105
    }
  },
  {
    name: "メガライボルト",
    types: ["でんき"],
    baseStats: {
      hp: 70,
      attack: 75,
      defense: 80,
      spAttack: 135,
      spDefense: 80,
      speed: 135
    }
  },
  {
    name: "サメハダー",
    types: ["みず", "あく"],
    baseStats: {
      hp: 70,
      attack: 120,
      defense: 40,
      spAttack: 95,
      spDefense: 40,
      speed: 95
    }
  },
  {
    name: "メガサメハダー",
    types: ["みず", "あく"],
    baseStats: {
      hp: 70,
      attack: 140,
      defense: 70,
      spAttack: 110,
      spDefense: 65,
      speed: 105
    }
  },
  {
    name: "バクーダ",
    types: ["ほのお", "じめん"],
    baseStats: {
      hp: 70,
      attack: 100,
      defense: 70,
      spAttack: 105,
      spDefense: 75,
      speed: 40
    }
  },
  {
    name: "メガバクーダ",
    types: ["ほのお", "じめん"],
    baseStats: {
      hp: 70,
      attack: 120,
      defense: 100,
      spAttack: 145,
      spDefense: 105,
      speed: 20
    }
  },
  {
    name: "コータス",
    types: ["ほのお"],
    baseStats: {
      hp: 70,
      attack: 85,
      defense: 140,
      spAttack: 85,
      spDefense: 70,
      speed: 20
    }
  },
  {
    name: "チルタリス",
    types: ["ドラゴン", "ひこう"],
    baseStats: {
      hp: 75,
      attack: 70,
      defense: 90,
      spAttack: 70,
      spDefense: 105,
      speed: 80
    }
  },
  {
    name: "メガチルタリス",
    types: ["ドラゴン", "フェアリー"],
    baseStats: {
      hp: 75,
      attack: 110,
      defense: 110,
      spAttack: 110,
      spDefense: 105,
      speed: 80
    }
  },
  {
    name: "ミロカロス",
    types: ["みず"],
    baseStats: {
      hp: 95,
      attack: 60,
      defense: 79,
      spAttack: 100,
      spDefense: 125,
      speed: 81
    }
  },
  {
    name: "ポワルン",
    types: ["ノーマル"],
    baseStats: {
      hp: 70,
      attack: 70,
      defense: 70,
      spAttack: 70,
      spDefense: 70,
      speed: 70
    }
  },
  {
    name: "ジュペッタ",
    types: ["ゴースト"],
    baseStats: {
      hp: 64,
      attack: 115,
      defense: 65,
      spAttack: 83,
      spDefense: 63,
      speed: 65
    }
  },
  {
    name: "メガジュペッタ",
    types: ["ゴースト"],
    baseStats: {
      hp: 64,
      attack: 165,
      defense: 75,
      spAttack: 93,
      spDefense: 83,
      speed: 75
    }
  },
  {
    name: "チリーン",
    types: ["エスパー"],
    baseStats: {
      hp: 75,
      attack: 50,
      defense: 80,
      spAttack: 95,
      spDefense: 90,
      speed: 65
    }
  },
  {
    name: "メガチリーン",
    types: ["エスパー", "はがね"],
    baseStats: {
      hp: 75,
      attack: 50,
      defense: 110,
      spAttack: 135,
      spDefense: 120,
      speed: 65
    }
  },
  {
    name: "アブソル",
    types: ["あく"],
    baseStats: {
      hp: 65,
      attack: 130,
      defense: 60,
      spAttack: 75,
      spDefense: 60,
      speed: 75
    }
  },
  {
    name: "メガアブソル",
    types: ["あく"],
    baseStats: {
      hp: 65,
      attack: 150,
      defense: 60,
      spAttack: 115,
      spDefense: 60,
      speed: 115
    }
  },
  {
    name: "オニゴーリ",
    types: ["こおり"],
    baseStats: {
      hp: 80,
      attack: 80,
      defense: 80,
      spAttack: 80,
      spDefense: 80,
      speed: 80
    }
  },
  {
    name: "メガオニゴーリ",
    types: ["こおり"],
    baseStats: {
      hp: 80,
      attack: 120,
      defense: 80,
      spAttack: 120,
      spDefense: 80,
      speed: 100
    }
  },
  {
    name: "メタグロス",
    types: ["はがね", "エスパー"],
    baseStats: {
      hp: 80,
      attack: 135,
      defense: 130,
      spAttack: 95,
      spDefense: 90,
      speed: 70
    }
  },
  {
    name: "メガメタグロス",
    types: ["はがね", "エスパー"],
    baseStats: {
      hp: 80,
      attack: 145,
      defense: 150,
      spAttack: 105,
      spDefense: 110,
      speed: 110
    }
  },
  {
    name: "ドダイトス",
    types: ["くさ", "じめん"],
    baseStats: {
      hp: 95,
      attack: 109,
      defense: 105,
      spAttack: 75,
      spDefense: 85,
      speed: 56
    }
  },
  {
    name: "ゴウカザル",
    types: ["ほのお", "かくとう"],
    baseStats: {
      hp: 76,
      attack: 104,
      defense: 71,
      spAttack: 104,
      spDefense: 71,
      speed: 108
    }
  },
  {
    name: "エンペルト",
    types: ["みず", "はがね"],
    baseStats: {
      hp: 84,
      attack: 86,
      defense: 88,
      spAttack: 111,
      spDefense: 101,
      speed: 60
    }
  },
  {
    name: "ムクホーク",
    types: ["ノーマル", "ひこう"],
    baseStats: {
      hp: 85,
      attack: 120,
      defense: 70,
      spAttack: 50,
      spDefense: 60,
      speed: 100
    }
  },
  {
    name: "メガムクホーク",
    types: ["かくとう", "ひこう"],
    baseStats: {
      hp: 85,
      attack: 140,
      defense: 100,
      spAttack: 60,
      spDefense: 90,
      speed: 110
    }
  },
  {
    name: "レントラー",
    types: ["でんき"],
    baseStats: {
      hp: 80,
      attack: 120,
      defense: 79,
      spAttack: 95,
      spDefense: 79,
      speed: 70
    }
  },
  {
    name: "ロズレイド",
    types: ["くさ", "どく"],
    baseStats: {
      hp: 60,
      attack: 70,
      defense: 65,
      spAttack: 125,
      spDefense: 105,
      speed: 90
    }
  },
  {
    name: "ラムパルド",
    types: ["いわ"],
    baseStats: {
      hp: 97,
      attack: 165,
      defense: 60,
      spAttack: 65,
      spDefense: 50,
      speed: 58
    }
  },
  {
    name: "トリデプス",
    types: ["いわ", "はがね"],
    baseStats: {
      hp: 60,
      attack: 52,
      defense: 168,
      spAttack: 47,
      spDefense: 138,
      speed: 30
    }
  },
  {
    name: "ミミロップ",
    types: ["ノーマル"],
    baseStats: {
      hp: 65,
      attack: 76,
      defense: 84,
      spAttack: 54,
      spDefense: 96,
      speed: 105
    }
  },
  {
    name: "メガミミロップ",
    types: ["ノーマル", "かくとう"],
    baseStats: {
      hp: 65,
      attack: 136,
      defense: 94,
      spAttack: 54,
      spDefense: 96,
      speed: 135
    }
  },
  {
    name: "ミカルゲ",
    types: ["ゴースト", "あく"],
    baseStats: {
      hp: 50,
      attack: 92,
      defense: 108,
      spAttack: 92,
      spDefense: 108,
      speed: 35
    }
  },
  {
    name: "ガブリアス",
    types: ["ドラゴン", "じめん"],
    baseStats: {
      hp: 108,
      attack: 130,
      defense: 95,
      spAttack: 80,
      spDefense: 85,
      speed: 102
    }
  },
  {
    name: "メガガブリアス",
    types: ["ドラゴン", "じめん"],
    baseStats: {
      hp: 108,
      attack: 170,
      defense: 115,
      spAttack: 120,
      spDefense: 95,
      speed: 92
    }
  },
  {
    name: "ルカリオ",
    types: ["かくとう", "はがね"],
    baseStats: {
      hp: 70,
      attack: 110,
      defense: 70,
      spAttack: 115,
      spDefense: 70,
      speed: 90
    }
  },
  {
    name: "メガルカリオ",
    types: ["かくとう", "はがね"],
    baseStats: {
      hp: 70,
      attack: 145,
      defense: 88,
      spAttack: 140,
      spDefense: 70,
      speed: 112
    }
  },
  {
    name: "カバルドン",
    types: ["じめん"],
    baseStats: {
      hp: 108,
      attack: 112,
      defense: 118,
      spAttack: 68,
      spDefense: 72,
      speed: 47
    }
  },
  {
    name: "ドクロッグ",
    types: ["どく", "かくとう"],
    baseStats: {
      hp: 83,
      attack: 106,
      defense: 65,
      spAttack: 86,
      spDefense: 65,
      speed: 85
    }
  },
  {
    name: "ユキノオー",
    types: ["くさ", "こおり"],
    baseStats: {
      hp: 90,
      attack: 92,
      defense: 75,
      spAttack: 92,
      spDefense: 85,
      speed: 60
    }
  },
  {
    name: "メガユキノオー",
    types: ["くさ", "こおり"],
    baseStats: {
      hp: 90,
      attack: 132,
      defense: 105,
      spAttack: 132,
      spDefense: 105,
      speed: 30
    }
  },
  {
    name: "マニューラ",
    types: ["あく", "こおり"],
    baseStats: {
      hp: 70,
      attack: 120,
      defense: 65,
      spAttack: 45,
      spDefense: 85,
      speed: 125
    }
  },
  {
    name: "ドサイドン",
    types: ["じめん", "いわ"],
    baseStats: {
      hp: 115,
      attack: 140,
      defense: 130,
      spAttack: 55,
      spDefense: 55,
      speed: 40
    }
  },
  {
    name: "リーフィア",
    types: ["くさ"],
    baseStats: {
      hp: 65,
      attack: 110,
      defense: 130,
      spAttack: 60,
      spDefense: 65,
      speed: 95
    }
  },
  {
    name: "グレイシア",
    types: ["こおり"],
    baseStats: {
      hp: 65,
      attack: 60,
      defense: 110,
      spAttack: 130,
      spDefense: 95,
      speed: 65
    }
  },
  {
    name: "グライオン",
    types: ["じめん", "ひこう"],
    baseStats: {
      hp: 75,
      attack: 95,
      defense: 125,
      spAttack: 45,
      spDefense: 75,
      speed: 95
    }
  },
  {
    name: "マンムー",
    types: ["こおり", "じめん"],
    baseStats: {
      hp: 110,
      attack: 130,
      defense: 80,
      spAttack: 70,
      spDefense: 60,
      speed: 80
    }
  },
  {
    name: "エルレイド",
    types: ["エスパー", "かくとう"],
    baseStats: {
      hp: 68,
      attack: 125,
      defense: 65,
      spAttack: 65,
      spDefense: 115,
      speed: 80
    }
  },
  {
    name: "メガエルレイド",
    types: ["エスパー", "かくとう"],
    baseStats: {
      hp: 68,
      attack: 165,
      defense: 95,
      spAttack: 65,
      spDefense: 115,
      speed: 110
    }
  },
  {
    name: "ユキメノコ",
    types: ["こおり", "ゴースト"],
    baseStats: {
      hp: 70,
      attack: 80,
      defense: 70,
      spAttack: 80,
      spDefense: 70,
      speed: 110
    }
  },
  {
    name: "メガユキメノコ",
    types: ["こおり", "ゴースト"],
    baseStats: {
      hp: 70,
      attack: 80,
      defense: 70,
      spAttack: 140,
      spDefense: 100,
      speed: 120
    }
  },
  {
    name: "ロトム",
    types: ["でんき", "ゴースト"],
    baseStats: {
      hp: 50,
      attack: 50,
      defense: 77,
      spAttack: 95,
      spDefense: 77,
      speed: 91
    }
  },
  {
    name: "ヒートロトム",
    types: ["でんき", "ほのお"],
    baseStats: {
      hp: 50,
      attack: 65,
      defense: 107,
      spAttack: 105,
      spDefense: 107,
      speed: 86
    }
  },
  {
    name: "ウォッシュロトム",
    types: ["でんき", "みず"],
    baseStats: {
      hp: 50,
      attack: 65,
      defense: 107,
      spAttack: 105,
      spDefense: 107,
      speed: 86
    }
  },
  {
    name: "フロストロトム",
    types: ["でんき", "こおり"],
    baseStats: {
      hp: 50,
      attack: 65,
      defense: 107,
      spAttack: 105,
      spDefense: 107,
      speed: 86
    }
  },
  {
    name: "スピンロトム",
    types: ["でんき", "ひこう"],
    baseStats: {
      hp: 50,
      attack: 65,
      defense: 107,
      spAttack: 105,
      spDefense: 107,
      speed: 86
    }
  },
  {
    name: "カットロトム",
    types: ["でんき", "くさ"],
    baseStats: {
      hp: 50,
      attack: 65,
      defense: 107,
      spAttack: 105,
      spDefense: 107,
      speed: 86
    }
  },
  {
    name: "ジャローダ",
    types: ["くさ"],
    baseStats: {
      hp: 75,
      attack: 75,
      defense: 95,
      spAttack: 75,
      spDefense: 95,
      speed: 113
    }
  },
  {
    name: "エンブオー",
    types: ["ほのお", "かくとう"],
    baseStats: {
      hp: 110,
      attack: 123,
      defense: 65,
      spAttack: 100,
      spDefense: 65,
      speed: 65
    }
  },
  {
    name: "メガエンブオー",
    types: ["ほのお", "かくとう"],
    baseStats: {
      hp: 110,
      attack: 148,
      defense: 75,
      spAttack: 110,
      spDefense: 110,
      speed: 75
    }
  },
  {
    name: "ダイケンキ",
    types: ["みず"],
    baseStats: {
      hp: 95,
      attack: 100,
      defense: 85,
      spAttack: 108,
      spDefense: 70,
      speed: 70
    }
  },
  {
    name: "ダイケンキ(ヒスイ)",
    types: ["みず", "あく"],
    baseStats: {
      hp: 90,
      attack: 108,
      defense: 80,
      spAttack: 100,
      spDefense: 65,
      speed: 85
    }
  },
  {
    name: "ミルホッグ",
    types: ["ノーマル"],
    baseStats: {
      hp: 60,
      attack: 85,
      defense: 69,
      spAttack: 60,
      spDefense: 69,
      speed: 77
    }
  },
  {
    name: "レパルダス",
    types: ["あく"],
    baseStats: {
      hp: 64,
      attack: 88,
      defense: 50,
      spAttack: 88,
      spDefense: 50,
      speed: 106
    }
  },
  {
    name: "ヤナッキー",
    types: ["くさ"],
    baseStats: {
      hp: 75,
      attack: 98,
      defense: 63,
      spAttack: 98,
      spDefense: 63,
      speed: 101
    }
  },
  {
    name: "バオッキー",
    types: ["ほのお"],
    baseStats: {
      hp: 75,
      attack: 98,
      defense: 63,
      spAttack: 98,
      spDefense: 63,
      speed: 101
    }
  },
  {
    name: "ヒヤッキー",
    types: ["みず"],
    baseStats: {
      hp: 75,
      attack: 98,
      defense: 63,
      spAttack: 98,
      spDefense: 63,
      speed: 101
    }
  },
  {
    name: "ムシャーナ",
    types: ["エスパー"],
    baseStats: {
      hp: 116,
      attack: 55,
      defense: 85,
      spAttack: 107,
      spDefense: 95,
      speed: 29
    }
  },
  {
    name: "ドリュウズ",
    types: ["じめん", "はがね"],
    baseStats: {
      hp: 110,
      attack: 135,
      defense: 60,
      spAttack: 50,
      spDefense: 65,
      speed: 88
    }
  },
  {
    name: "メガドリュウズ",
    types: ["じめん", "はがね"],
    baseStats: {
      hp: 110,
      attack: 165,
      defense: 100,
      spAttack: 65,
      spDefense: 65,
      speed: 103
    }
  },
  {
    name: "タブンネ",
    types: ["ノーマル"],
    baseStats: {
      hp: 103,
      attack: 60,
      defense: 86,
      spAttack: 60,
      spDefense: 86,
      speed: 50
    }
  },
  {
    name: "メガタブンネ",
    types: ["ノーマル", "フェアリー"],
    baseStats: {
      hp: 103,
      attack: 60,
      defense: 126,
      spAttack: 80,
      spDefense: 126,
      speed: 50
    }
  },
  {
    name: "ローブシン",
    types: ["かくとう"],
    baseStats: {
      hp: 105,
      attack: 140,
      defense: 95,
      spAttack: 55,
      spDefense: 65,
      speed: 45
    }
  },
  {
    name: "ペンドラー",
    types: ["むし", "どく"],
    baseStats: {
      hp: 60,
      attack: 100,
      defense: 89,
      spAttack: 55,
      spDefense: 69,
      speed: 112
    }
  },
  {
    name: "メガペンドラー",
    types: ["むし", "どく"],
    baseStats: {
      hp: 60,
      attack: 140,
      defense: 149,
      spAttack: 75,
      spDefense: 99,
      speed: 62
    }
  },
  {
    name: "エルフーン",
    types: ["くさ", "フェアリー"],
    baseStats: {
      hp: 60,
      attack: 67,
      defense: 85,
      spAttack: 77,
      spDefense: 75,
      speed: 116
    }
  },
  {
    name: "ワルビアル",
    types: ["じめん", "あく"],
    baseStats: {
      hp: 95,
      attack: 117,
      defense: 80,
      spAttack: 65,
      spDefense: 70,
      speed: 92
    }
  },
  {
    name: "ズルズキン",
    types: ["あく", "かくとう"],
    baseStats: {
      hp: 65,
      attack: 90,
      defense: 115,
      spAttack: 45,
      spDefense: 115,
      speed: 58
    }
  },
  {
    name: "メガズルズキン",
    types: ["あく", "かくとう"],
    baseStats: {
      hp: 65,
      attack: 130,
      defense: 135,
      spAttack: 55,
      spDefense: 135,
      speed: 68
    }
  },
  {
    name: "デスカーン",
    types: ["ゴースト"],
    baseStats: {
      hp: 58,
      attack: 50,
      defense: 145,
      spAttack: 95,
      spDefense: 105,
      speed: 30
    }
  },
  {
    name: "ダストダス",
    types: ["どく"],
    baseStats: {
      hp: 80,
      attack: 95,
      defense: 82,
      spAttack: 60,
      spDefense: 82,
      speed: 75
    }
  },
  {
    name: "ゾロアーク",
    types: ["あく"],
    baseStats: {
      hp: 60,
      attack: 105,
      defense: 60,
      spAttack: 120,
      spDefense: 60,
      speed: 105
    }
  },
  {
    name: "ゾロアーク(ヒスイ)",
    types: ["ノーマル", "ゴースト"],
    baseStats: {
      hp: 55,
      attack: 100,
      defense: 60,
      spAttack: 125,
      spDefense: 60,
      speed: 110
    }
  },
  {
    name: "ランクルス",
    types: ["エスパー"],
    baseStats: {
      hp: 110,
      attack: 65,
      defense: 75,
      spAttack: 125,
      spDefense: 85,
      speed: 30
    }
  },
  {
    name: "バイバニラ",
    types: ["こおり"],
    baseStats: {
      hp: 71,
      attack: 95,
      defense: 85,
      spAttack: 110,
      spDefense: 95,
      speed: 79
    }
  },
  {
    name: "エモンガ",
    types: ["でんき", "ひこう"],
    baseStats: {
      hp: 55,
      attack: 75,
      defense: 60,
      spAttack: 75,
      spDefense: 60,
      speed: 103
    }
  },
  {
    name: "シビルドン",
    types: ["でんき"],
    baseStats: {
      hp: 85,
      attack: 115,
      defense: 80,
      spAttack: 105,
      spDefense: 80,
      speed: 50
    }
  },
  {
    name: "メガシビルドン",
    types: ["でんき"],
    baseStats: {
      hp: 85,
      attack: 145,
      defense: 80,
      spAttack: 135,
      spDefense: 90,
      speed: 80
    }
  },
  {
    name: "シャンデラ",
    types: ["ゴースト", "ほのお"],
    baseStats: {
      hp: 60,
      attack: 55,
      defense: 90,
      spAttack: 145,
      spDefense: 90,
      speed: 80
    }
  },
  {
    name: "メガシャンデラ",
    types: ["ゴースト", "ほのお"],
    baseStats: {
      hp: 60,
      attack: 75,
      defense: 110,
      spAttack: 175,
      spDefense: 110,
      speed: 90
    }
  },
  {
    name: "ツンベアー",
    types: ["こおり"],
    baseStats: {
      hp: 95,
      attack: 130,
      defense: 80,
      spAttack: 70,
      spDefense: 80,
      speed: 50
    }
  },
  {
    name: "マッギョ",
    types: ["じめん", "でんき"],
    baseStats: {
      hp: 109,
      attack: 66,
      defense: 84,
      spAttack: 81,
      spDefense: 99,
      speed: 32
    }
  },
  {
    name: "ガラルマッギョ",
    types: ["じめん", "はがね"],
    baseStats: {
      hp: 109,
      attack: 81,
      defense: 99,
      spAttack: 66,
      spDefense: 84,
      speed: 32
    }
  },
  {
    name: "ゴルーグ",
    types: ["じめん", "ゴースト"],
    baseStats: {
      hp: 89,
      attack: 124,
      defense: 80,
      spAttack: 55,
      spDefense: 80,
      speed: 55
    }
  },
  {
    name: "メガゴルーグ",
    types: ["じめん", "ゴースト"],
    baseStats: {
      hp: 89,
      attack: 159,
      defense: 105,
      spAttack: 70,
      spDefense: 105,
      speed: 55
    }
  },
  {
    name: "サザンドラ",
    types: ["あく", "ドラゴン"],
    baseStats: {
      hp: 92,
      attack: 105,
      defense: 90,
      spAttack: 125,
      spDefense: 90,
      speed: 98
    }
  },
  {
    name: "ウルガモス",
    types: ["むし", "ほのお"],
    baseStats: {
      hp: 85,
      attack: 60,
      defense: 65,
      spAttack: 135,
      spDefense: 105,
      speed: 100
    }
  },
  {
    name: "ブリガロン",
    types: ["くさ", "かくとう"],
    baseStats: {
      hp: 88,
      attack: 107,
      defense: 122,
      spAttack: 74,
      spDefense: 75,
      speed: 64
    }
  },
  {
    name: "メガブリガロン",
    types: ["くさ", "かくとう"],
    baseStats: {
      hp: 88,
      attack: 137,
      defense: 172,
      spAttack: 74,
      spDefense: 115,
      speed: 44
    }
  },
  {
    name: "マフォクシー",
    types: ["ほのお", "エスパー"],
    baseStats: {
      hp: 75,
      attack: 69,
      defense: 72,
      spAttack: 114,
      spDefense: 100,
      speed: 104
    }
  },
  {
    name: "メガマフォクシー",
    types: ["ほのお", "エスパー"],
    baseStats: {
      hp: 75,
      attack: 69,
      defense: 72,
      spAttack: 159,
      spDefense: 125,
      speed: 134
    }
  },
  {
    name: "ゲッコウガ",
    types: ["みず", "あく"],
    baseStats: {
      hp: 72,
      attack: 95,
      defense: 67,
      spAttack: 103,
      spDefense: 71,
      speed: 122
    }
  },
  {
    name: "メガゲッコウガ",
    types: ["みず", "あく"],
    baseStats: {
      hp: 72,
      attack: 125,
      defense: 77,
      spAttack: 133,
      spDefense: 81,
      speed: 142
    }
  },
  {
    name: "ホルード",
    types: ["ノーマル", "じめん"],
    baseStats: {
      hp: 85,
      attack: 56,
      defense: 77,
      spAttack: 50,
      spDefense: 77,
      speed: 78
    }
  },
  {
    name: "ファイアロー",
    types: ["ほのお", "ひこう"],
    baseStats: {
      hp: 78,
      attack: 81,
      defense: 71,
      spAttack: 74,
      spDefense: 69,
      speed: 126
    }
  },
  {
    name: "ビビヨン",
    types: ["むし", "ひこう"],
    baseStats: {
      hp: 80,
      attack: 52,
      defense: 50,
      spAttack: 90,
      spDefense: 50,
      speed: 89
    }
  },
  {
    name: "カエンジシ",
    types: ["ほのお", "ノーマル"],
    baseStats: {
      hp: 86,
      attack: 68,
      defense: 72,
      spAttack: 109,
      spDefense: 66,
      speed: 106
    }
  },
  {
    name: "メガカエンジシ",
    types: ["ほのお", "ノーマル"],
    baseStats: {
      hp: 86,
      attack: 88,
      defense: 92,
      spAttack: 129,
      spDefense: 86,
      speed: 126
    }
  },
  {
    name: "フラエッテ(えいえん)",
    types: ["フェアリー"],
    baseStats: {
      hp: 74,
      attack: 65,
      defense: 67,
      spAttack: 125,
      spDefense: 128,
      speed: 92
    }
  },
  {
    name: "メガフラエッテ",
    types: ["フェアリー"],
    baseStats: {
      hp: 74,
      attack: 85,
      defense: 87,
      spAttack: 155,
      spDefense: 148,
      speed: 102
    }
  },
  {
    name: "フラージェス",
    types: ["フェアリー"],
    baseStats: {
      hp: 78,
      attack: 65,
      defense: 68,
      spAttack: 112,
      spDefense: 154,
      speed: 75
    }
  },
  {
    name: "ゴロンダ",
    types: ["かくとう", "あく"],
    baseStats: {
      hp: 95,
      attack: 124,
      defense: 78,
      spAttack: 69,
      spDefense: 71,
      speed: 58
    }
  },
  {
    name: "トリミアン",
    types: ["ノーマル"],
    baseStats: {
      hp: 75,
      attack: 80,
      defense: 60,
      spAttack: 65,
      spDefense: 90,
      speed: 102
    }
  },
  {
    name: "ニャオニクス(オス)",
    types: ["エスパー"],
    baseStats: {
      hp: 74,
      attack: 48,
      defense: 76,
      spAttack: 83,
      spDefense: 81,
      speed: 104
    }
  },
  {
    name: "ニャオニクス(メス)",
    types: ["エスパー"],
    baseStats: {
      hp: 74,
      attack: 48,
      defense: 76,
      spAttack: 83,
      spDefense: 81,
      speed: 104
    }
  },
  {
    name: "メガニャオニクス(オス)",
    types: ["エスパー"],
    baseStats: {
      hp: 74,
      attack: 48,
      defense: 76,
      spAttack: 143,
      spDefense: 101,
      speed: 124
    }
  },
  {
    name: "メガニャオニクス(メス)",
    types: ["エスパー"],
    baseStats: {
      hp: 74,
      attack: 48,
      defense: 76,
      spAttack: 143,
      spDefense: 101,
      speed: 124
    }
  },
  {
    name: "ギルガルド(シールド)",
    types: ["はがね", "ゴースト"],
    baseStats: {
      hp: 60,
      attack: 50,
      defense: 140,
      spAttack: 50,
      spDefense: 140,
      speed: 60
    }
  },
  {
    name: "ギルガルド(ブレード)",
    types: ["はがね", "ゴースト"],
    baseStats: {
      hp: 60,
      attack: 140,
      defense: 50,
      spAttack: 140,
      spDefense: 50,
      speed: 60
    }
  },
  {
    name: "フレフワン",
    types: ["フェアリー"],
    baseStats: {
      hp: 101,
      attack: 72,
      defense: 72,
      spAttack: 99,
      spDefense: 89,
      speed: 29
    }
  },
  {
    name: "ペロリーム",
    types: ["フェアリー"],
    baseStats: {
      hp: 82,
      attack: 80,
      defense: 86,
      spAttack: 85,
      spDefense: 75,
      speed: 72
    }
  },
  {
    name: "カラマネロ",
    types: ["あく", "エスパー"],
    baseStats: {
      hp: 86,
      attack: 92,
      defense: 88,
      spAttack: 68,
      spDefense: 75,
      speed: 73
    }
  },
  {
    name: "メガカラマネロ",
    types: ["あく", "エスパー"],
    baseStats: {
      hp: 86,
      attack: 102,
      defense: 88,
      spAttack: 98,
      spDefense: 120,
      speed: 88
    }
  },
  {
    name: "ガメノデス",
    types: ["いわ", "みず"],
    baseStats: {
      hp: 72,
      attack: 105,
      defense: 115,
      spAttack: 54,
      spDefense: 86,
      speed: 68
    }
  },
  {
    name: "メガガメノデス",
    types: ["いわ", "かくとう"],
    baseStats: {
      hp: 72,
      attack: 140,
      defense: 130,
      spAttack: 64,
      spDefense: 106,
      speed: 88
    }
  },
  {
    name: "ドラミドロ",
    types: ["どく", "ドラゴン"],
    baseStats: {
      hp: 65,
      attack: 75,
      defense: 90,
      spAttack: 97,
      spDefense: 123,
      speed: 44
    }
  },
  {
    name: "メガドラミドロ",
    types: ["どく", "ドラゴン"],
    baseStats: {
      hp: 65,
      attack: 85,
      defense: 105,
      spAttack: 132,
      spDefense: 163,
      speed: 44
    }
  },
  {
    name: "ブロスター",
    types: ["みず"],
    baseStats: {
      hp: 71,
      attack: 73,
      defense: 88,
      spAttack: 120,
      spDefense: 89,
      speed: 59
    }
  },
  {
    name: "エレザード",
    types: ["でんき", "ノーマル"],
    baseStats: {
      hp: 62,
      attack: 55,
      defense: 52,
      spAttack: 109,
      spDefense: 94,
      speed: 109
    }
  },
  {
    name: "ガチゴラス",
    types: ["いわ", "ドラゴン"],
    baseStats: {
      hp: 82,
      attack: 121,
      defense: 119,
      spAttack: 69,
      spDefense: 59,
      speed: 71
    }
  },
  {
    name: "アマルルガ",
    types: ["いわ", "こおり"],
    baseStats: {
      hp: 123,
      attack: 77,
      defense: 72,
      spAttack: 99,
      spDefense: 92,
      speed: 58
    }
  },
  {
    name: "ニンフィア",
    types: ["フェアリー"],
    baseStats: {
      hp: 95,
      attack: 65,
      defense: 65,
      spAttack: 110,
      spDefense: 130,
      speed: 60
    }
  },
  {
    name: "ルチャブル",
    types: ["かくとう", "ひこう"],
    baseStats: {
      hp: 78,
      attack: 92,
      defense: 75,
      spAttack: 74,
      spDefense: 63,
      speed: 118
    }
  },
  {
    name: "メガルチャブル",
    types: ["かくとう", "ひこう"],
    baseStats: {
      hp: 78,
      attack: 137,
      defense: 100,
      spAttack: 74,
      spDefense: 93,
      speed: 118
    }
  },
  {
    name: "デデンネ",
    types: ["でんき", "フェアリー"],
    baseStats: {
      hp: 67,
      attack: 58,
      defense: 57,
      spAttack: 81,
      spDefense: 67,
      speed: 101
    }
  },
  {
    name: "ヌメルゴン",
    types: ["ドラゴン"],
    baseStats: {
      hp: 90,
      attack: 100,
      defense: 70,
      spAttack: 110,
      spDefense: 150,
      speed: 80
    }
  },
  {
    name: "ヌメルゴン(ヒスイ)",
    types: ["はがね", "ドラゴン"],
    baseStats: {
      hp: 80,
      attack: 100,
      defense: 100,
      spAttack: 110,
      spDefense: 150,
      speed: 60
    }
  },
  {
    name: "クレッフィ",
    types: ["はがね", "フェアリー"],
    baseStats: {
      hp: 57,
      attack: 80,
      defense: 91,
      spAttack: 80,
      spDefense: 87,
      speed: 75
    }
  },
  {
    name: "オーロット",
    types: ["ゴースト", "くさ"],
    baseStats: {
      hp: 85,
      attack: 110,
      defense: 76,
      spAttack: 65,
      spDefense: 82,
      speed: 56
    }
  },
  {
    name: "パンプジン(普通)",
    types: ["ゴースト", "くさ"],
    baseStats: {
      hp: 65,
      attack: 90,
      defense: 122,
      spAttack: 58,
      spDefense: 75,
      speed: 84
    }
  },
  {
    name: "パンプジン(小)",
    types: ["ゴースト", "くさ"],
    baseStats: {
      hp: 55,
      attack: 85,
      defense: 122,
      spAttack: 58,
      spDefense: 75,
      speed: 99
    }
  },
  {
    name: "パンプジン(大)",
    types: ["ゴースト", "くさ"],
    baseStats: {
      hp: 75,
      attack: 95,
      defense: 122,
      spAttack: 58,
      spDefense: 75,
      speed: 69
    }
  },
  {
    name: "パンプジン(特大)",
    types: ["ゴースト", "くさ"],
    baseStats: {
      hp: 85,
      attack: 100,
      defense: 122,
      spAttack: 58,
      spDefense: 75,
      speed: 54
    }
  },
  {
    name: "クレベース",
    types: ["こおり"],
    baseStats: {
      hp: 95,
      attack: 117,
      defense: 184,
      spAttack: 44,
      spDefense: 46,
      speed: 28
    }
  },
  {
    name: "クレベース(ヒスイ)",
    types: ["こおり", "いわ"],
    baseStats: {
      hp: 95,
      attack: 127,
      defense: 184,
      spAttack: 34,
      spDefense: 36,
      speed: 38
    }
  },
  {
    name: "オンバーン",
    types: ["ひこう", "ドラゴン"],
    baseStats: {
      hp: 85,
      attack: 70,
      defense: 80,
      spAttack: 97,
      spDefense: 80,
      speed: 123
    }
  },
  {
    name: "ジュナイパー",
    types: ["くさ", "ゴースト"],
    baseStats: {
      hp: 78,
      attack: 107,
      defense: 75,
      spAttack: 100,
      spDefense: 100,
      speed: 70
    }
  },
  {
    name: "ジュナイパー(ヒスイ)",
    types: ["くさ", "かくとう"],
    baseStats: {
      hp: 88,
      attack: 112,
      defense: 80,
      spAttack: 95,
      spDefense: 95,
      speed: 60
    }
  },
  {
    name: "ガオガエン",
    types: ["ほのお", "あく"],
    baseStats: {
      hp: 95,
      attack: 115,
      defense: 90,
      spAttack: 80,
      spDefense: 90,
      speed: 60
    }
  },
  {
    name: "アシレーヌ",
    types: ["みず", "フェアリー"],
    baseStats: {
      hp: 80,
      attack: 74,
      defense: 74,
      spAttack: 126,
      spDefense: 116,
      speed: 60
    }
  },
  {
    name: "ドデカバシ",
    types: ["ノーマル", "ひこう"],
    baseStats: {
      hp: 80,
      attack: 120,
      defense: 75,
      spAttack: 75,
      spDefense: 75,
      speed: 60
    }
  },
  {
    name: "ケケンカニ",
    types: ["かくとう", "こおり"],
    baseStats: {
      hp: 97,
      attack: 132,
      defense: 77,
      spAttack: 62,
      spDefense: 67,
      speed: 43
    }
  },
  {
    name: "メガケケンカニ",
    types: ["かくとう", "こおり"],
    baseStats: {
      hp: 97,
      attack: 157,
      defense: 122,
      spAttack: 62,
      spDefense: 107,
      speed: 33
    }
  },
  {
    name: "ルガルガン(まひる)",
    types: ["いわ"],
    baseStats: {
      hp: 75,
      attack: 115,
      defense: 65,
      spAttack: 55,
      spDefense: 65,
      speed: 112
    }
  },
  {
    name: "ルガルガン(まよなか)",
    types: ["いわ"],
    baseStats: {
      hp: 85,
      attack: 115,
      defense: 75,
      spAttack: 55,
      spDefense: 75,
      speed: 82
    }
  },
  {
    name: "ルガルガン(たそがれ)",
    types: ["いわ"],
    baseStats: {
      hp: 75,
      attack: 117,
      defense: 65,
      spAttack: 55,
      spDefense: 65,
      speed: 110
    }
  },
  {
    name: "ドヒドイデ",
    types: ["どく", "みず"],
    baseStats: {
      hp: 50,
      attack: 63,
      defense: 152,
      spAttack: 53,
      spDefense: 142,
      speed: 35
    }
  },
  {
    name: "バンバドロ",
    types: ["じめん"],
    baseStats: {
      hp: 100,
      attack: 125,
      defense: 100,
      spAttack: 55,
      spDefense: 85,
      speed: 35
    }
  },
  {
    name: "オニシズクモ",
    types: ["みず", "むし"],
    baseStats: {
      hp: 68,
      attack: 70,
      defense: 92,
      spAttack: 50,
      spDefense: 132,
      speed: 42
    }
  },
  {
    name: "エンニュート",
    types: ["どく", "ほのお"],
    baseStats: {
      hp: 68,
      attack: 64,
      defense: 60,
      spAttack: 111,
      spDefense: 60,
      speed: 117
    }
  },
  {
    name: "アマージョ",
    types: ["くさ"],
    baseStats: {
      hp: 72,
      attack: 120,
      defense: 98,
      spAttack: 50,
      spDefense: 98,
      speed: 72
    }
  },
  {
    name: "ヤレユータン",
    types: ["ノーマル", "エスパー"],
    baseStats: {
      hp: 90,
      attack: 60,
      defense: 80,
      spAttack: 90,
      spDefense: 110,
      speed: 60
    }
  },
  {
    name: "ナゲツケサル",
    types: ["かくとう"],
    baseStats: {
      hp: 100,
      attack: 120,
      defense: 90,
      spAttack: 40,
      spDefense: 60,
      speed: 80
    }
  },
  {
    name: "ミミッキュ",
    types: ["ゴースト", "フェアリー"],
    baseStats: {
      hp: 55,
      attack: 90,
      defense: 80,
      spAttack: 50,
      spDefense: 105,
      speed: 96
    }
  },
  {
    name: "ジジーロン",
    types: ["ノーマル", "ドラゴン"],
    baseStats: {
      hp: 78,
      attack: 60,
      defense: 85,
      spAttack: 135,
      spDefense: 91,
      speed: 36
    }
  },
  {
    name: "メガジジーロン",
    types: ["ノーマル", "ドラゴン"],
    baseStats: {
      hp: 78,
      attack: 85,
      defense: 110,
      spAttack: 160,
      spDefense: 116,
      speed: 36
    }
  },
  {
    name: "ジャラランガ",
    types: ["ドラゴン", "かくとう"],
    baseStats: {
      hp: 75,
      attack: 110,
      defense: 125,
      spAttack: 100,
      spDefense: 105,
      speed: 85
    }
  },
  {
    name: "アーマーガア",
    types: ["ひこう", "はがね"],
    baseStats: {
      hp: 98,
      attack: 87,
      defense: 105,
      spAttack: 53,
      spDefense: 85,
      speed: 67
    }
  },
  {
    name: "アップリュー",
    types: ["くさ", "ドラゴン"],
    baseStats: {
      hp: 70,
      attack: 110,
      defense: 80,
      spAttack: 95,
      spDefense: 60,
      speed: 70
    }
  },
  {
    name: "タルップル",
    types: ["くさ", "ドラゴン"],
    baseStats: {
      hp: 110,
      attack: 85,
      defense: 80,
      spAttack: 100,
      spDefense: 80,
      speed: 30
    }
  },
  {
    name: "サダイジャ",
    types: ["じめん"],
    baseStats: {
      hp: 72,
      attack: 107,
      defense: 125,
      spAttack: 65,
      spDefense: 70,
      speed: 71
    }
  },
  {
    name: "ポットデス",
    types: ["ゴースト"],
    baseStats: {
      hp: 60,
      attack: 65,
      defense: 65,
      spAttack: 134,
      spDefense: 114,
      speed: 70
    }
  },
  {
    name: "ブリムオン",
    types: ["エスパー", "フェアリー"],
    baseStats: {
      hp: 57,
      attack: 90,
      defense: 95,
      spAttack: 136,
      spDefense: 103,
      speed: 29
    }
  },
  {
    name: "オーロンゲ",
    types: ["あく", "フェアリー"],
    baseStats: {
      hp: 95,
      attack: 120,
      defense: 65,
      spAttack: 95,
      spDefense: 75,
      speed: 60
    }
  },
  {
    name: "バリコオル",
    types: ["こおり", "エスパー"],
    baseStats: {
      hp: 80,
      attack: 85,
      defense: 75,
      spAttack: 110,
      spDefense: 100,
      speed: 70
    }
  },
  {
    name: "デスバーン",
    types: ["じめん", "ゴースト"],
    baseStats: {
      hp: 58,
      attack: 95,
      defense: 145,
      spAttack: 50,
      spDefense: 105,
      speed: 30
    }
  },
  {
    name: "マホイップ",
    types: ["フェアリー"],
    baseStats: {
      hp: 65,
      attack: 60,
      defense: 75,
      spAttack: 110,
      spDefense: 121,
      speed: 64
    }
  },
  {
    name: "タイレーツ",
    types: ["かくとう"],
    baseStats: {
      hp: 65,
      attack: 100,
      defense: 100,
      spAttack: 70,
      spDefense: 60,
      speed: 75
    }
  },
  {
    name: "メガタイレーツ",
    types: ["かくとう"],
    baseStats: {
      hp: 65,
      attack: 135,
      defense: 135,
      spAttack: 70,
      spDefense: 65,
      speed: 100
    }
  },
  {
    name: "モルペコ",
    types: ["でんき", "あく"],
    baseStats: {
      hp: 58,
      attack: 95,
      defense: 58,
      spAttack: 70,
      spDefense: 58,
      speed: 97
    }
  },
  {
    name: "ドラパルト",
    types: ["ドラゴン", "ゴースト"],
    baseStats: {
      hp: 88,
      attack: 120,
      defense: 75,
      spAttack: 100,
      spDefense: 75,
      speed: 142
    }
  },
  {
    name: "アヤシシ",
    types: ["ノーマル", "エスパー"],
    baseStats: {
      hp: 103,
      attack: 105,
      defense: 72,
      spAttack: 105,
      spDefense: 75,
      speed: 65
    }
  },
  {
    name: "バサギリ",
    types: ["むし", "いわ"],
    baseStats: {
      hp: 70,
      attack: 135,
      defense: 95,
      spAttack: 45,
      spDefense: 70,
      speed: 85
    }
  },
  {
    name: "イダイトウ(オス)",
    types: ["みず", "ゴースト"],
    baseStats: {
      hp: 120,
      attack: 112,
      defense: 65,
      spAttack: 80,
      spDefense: 75,
      speed: 78
    }
  },
  {
    name: "イダイトウ(メス)",
    types: ["みず", "ゴースト"],
    baseStats: {
      hp: 120,
      attack: 92,
      defense: 65,
      spAttack: 100,
      spDefense: 75,
      speed: 78
    }
  },
  {
    name: "オオニューラ",
    types: ["かくとう", "どく"],
    baseStats: {
      hp: 80,
      attack: 130,
      defense: 60,
      spAttack: 40,
      spDefense: 80,
      speed: 120
    }
  },
  {
    name: "ハリーマン",
    types: ["あく", "どく"],
    baseStats: {
      hp: 85,
      attack: 115,
      defense: 95,
      spAttack: 65,
      spDefense: 65,
      speed: 85
    }
  },
  {
    name: "マスカーニャ",
    types: ["くさ", "あく"],
    baseStats: {
      hp: 76,
      attack: 110,
      defense: 70,
      spAttack: 81,
      spDefense: 70,
      speed: 123
    }
  },
  {
    name: "ラウドボーン",
    types: ["ほのお", "ゴースト"],
    baseStats: {
      hp: 104,
      attack: 75,
      defense: 100,
      spAttack: 110,
      spDefense: 75,
      speed: 66
    }
  },
  {
    name: "ウェーニバル",
    types: ["みず", "かくとう"],
    baseStats: {
      hp: 85,
      attack: 120,
      defense: 80,
      spAttack: 85,
      spDefense: 75,
      speed: 85
    }
  },
  {
    name: "イッカネズミ",
    types: ["ノーマル"],
    baseStats: {
      hp: 74,
      attack: 75,
      defense: 70,
      spAttack: 65,
      spDefense: 75,
      speed: 111
    }
  },
  {
    name: "キョジオーン",
    types: ["いわ"],
    baseStats: {
      hp: 100,
      attack: 100,
      defense: 130,
      spAttack: 45,
      spDefense: 90,
      speed: 35
    }
  },
  {
    name: "グレンアルマ",
    types: ["ほのお", "エスパー"],
    baseStats: {
      hp: 85,
      attack: 60,
      defense: 100,
      spAttack: 125,
      spDefense: 80,
      speed: 75
    }
  },
  {
    name: "ソウブレイズ",
    types: ["ほのお", "ゴースト"],
    baseStats: {
      hp: 75,
      attack: 125,
      defense: 80,
      spAttack: 60,
      spDefense: 100,
      speed: 85
    }
  },
  {
    name: "ハラバリー",
    types: ["でんき"],
    baseStats: {
      hp: 109,
      attack: 64,
      defense: 91,
      spAttack: 103,
      spDefense: 83,
      speed: 45
    }
  },
  {
    name: "スコヴィラン",
    types: ["くさ", "ほのお"],
    baseStats: {
      hp: 65,
      attack: 108,
      defense: 65,
      spAttack: 108,
      spDefense: 65,
      speed: 75
    }
  },
  {
    name: "メガスコヴィラン",
    types: ["くさ", "ほのお"],
    baseStats: {
      hp: 65,
      attack: 138,
      defense: 85,
      spAttack: 138,
      spDefense: 85,
      speed: 75
    }
  },
  {
    name: "クエスパトラ",
    types: ["エスパー"],
    baseStats: {
      hp: 95,
      attack: 60,
      defense: 60,
      spAttack: 101,
      spDefense: 60,
      speed: 105
    }
  },
  {
    name: "デカヌチャン",
    types: ["フェアリー", "はがね"],
    baseStats: {
      hp: 85,
      attack: 75,
      defense: 77,
      spAttack: 70,
      spDefense: 105,
      speed: 94
    }
  },
  {
    name: "イルカマン(ナイーブ)",
    types: ["みず"],
    baseStats: {
      hp: 100,
      attack: 70,
      defense: 72,
      spAttack: 53,
      spDefense: 62,
      speed: 100
    }
  },
  {
    name: "イルカマン(マイティ)",
    types: ["みず"],
    baseStats: {
      hp: 100,
      attack: 160,
      defense: 97,
      spAttack: 106,
      spDefense: 87,
      speed: 100
    }
  },
  {
    name: "ミミズズ",
    types: ["はがね"],
    baseStats: {
      hp: 70,
      attack: 85,
      defense: 145,
      spAttack: 60,
      spDefense: 55,
      speed: 65
    }
  },
  {
    name: "キラフロル",
    types: ["いわ", "どく"],
    baseStats: {
      hp: 83,
      attack: 55,
      defense: 90,
      spAttack: 130,
      spDefense: 81,
      speed: 86
    }
  },
  {
    name: "メガキラフロル",
    types: ["いわ", "どく"],
    baseStats: {
      hp: 83,
      attack: 90,
      defense: 105,
      spAttack: 150,
      spDefense: 96,
      speed: 101
    }
  },
  {
    name: "ハカドッグ",
    types: ["ゴースト"],
    baseStats: {
      hp: 72,
      attack: 101,
      defense: 100,
      spAttack: 50,
      spDefense: 97,
      speed: 68
    }
  },
  {
    name: "コノヨザル",
    types: ["かくとう", "ゴースト"],
    baseStats: {
      hp: 110,
      attack: 115,
      defense: 80,
      spAttack: 50,
      spDefense: 90,
      speed: 90
    }
  },
  {
    name: "リキキリン",
    types: ["ノーマル", "エスパー"],
    baseStats: {
      hp: 120,
      attack: 90,
      defense: 70,
      spAttack: 110,
      spDefense: 70,
      speed: 60
    }
  },
  {
    name: "ドドゲザン",
    types: ["あく", "はがね"],
    baseStats: {
      hp: 100,
      attack: 135,
      defense: 120,
      spAttack: 60,
      spDefense: 85,
      speed: 50
    }
  },
  {
    name: "サーフゴー",
    types: ["はがね", "ゴースト"],
    baseStats: {
      hp: 87,
      attack: 60,
      defense: 95,
      spAttack: 133,
      spDefense: 91,
      speed: 84
    }
  },
  {
    name: "ヤバソチャ",
    types: ["くさ", "ゴースト"],
    baseStats: {
      hp: 71,
      attack: 60,
      defense: 106,
      spAttack: 121,
      spDefense: 80,
      speed: 70
    }
  },
  {
    name: "ブリジュラス",
    types: ["はがね", "ドラゴン"],
    baseStats: {
      hp: 90,
      attack: 105,
      defense: 130,
      spAttack: 125,
      spDefense: 65,
      speed: 85
    }
  },
  {
    name: "カミツオロチ",
    types: ["くさ", "ドラゴン"],
    baseStats: {
      hp: 106,
      attack: 80,
      defense: 110,
      spAttack: 120,
      spDefense: 80,
      speed: 44
    }
  },
];
