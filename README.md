# 映画大好きポンポさん - 映画紹介サイト

## 概要

「映画大好きポンポさん」のアニメーション映画公式サイトです。このプロジェクトは、杉谷庄吾【人間プラモ】の人気マンガ作品を映像化した作品の情報発信用ウェブサイトです。

## 📖 ストーリー

映画の都・ニャリウッドで活躍する映画プロデューサーのポンポさん。彼のもとで製作アシスタントとして働く青年・ジーンは、映画を愛する映画通ながらも、映画監督になる夢を諦めかけていました。

そんなある日、ポンポさんにCM制作を任されたジーンは、映画づくりの虜になります。やがてポンポさんは、映画『MEISTER』の監督としてジーンを指名します。

**「映画を撮るか、死ぬか、どちらかしかないんだ」**

## 📺 ページ構成

- **TOP** (`index.html`) - メインページ。映画の概要と予告動画を掲載
- **INTRO/STORY** (`intro.html`, `story.html`) - 作品紹介とストーリー説明
- **STAFF/CAST** (`cast_staff.html`) - スタッフクレジットとキャスト情報
- **CHARACTER** (`character.html`) - キャラクター紹介

## 🛠 技術構成

- **HTML5** - セマンティックマークアップ
- **CSS3** - レスポンシブデザイン
- **JavaScript** - インタラクション実装
  - jQuery
  - Slick (スライダー)
  - Colorbox (ライトボックス)

## 📁 ディレクトリ構成

```
movie-introduction/
├── index.html              # メインページ
├── intro.html              # 作品紹介
├── story.html              # ストーリー
├── cast_staff.html         # スタッフ・キャスト
├── character.html          # キャラクター
├── manifest.json           # PWA マニフェスト
├── css/                    # スタイルシート
│   ├── style.css           # メインスタイル
│   ├── common.css          # 共通スタイル
│   ├── heder.css           # ヘッダー
│   ├── main.css            # トップページ用
│   ├── intro_story.css     # INTRO/STORY用
│   ├── cast_staff.css      # スタッフ・キャスト用
│   └── character.css       # キャラクター用
├── js/                     # JavaScriptファイル
│   ├── common.js           # 共通スクリプト
│   ├── heder.js            # ヘッダー機能
│   ├── slide.js            # スライダー制御
│   ├── lower.js            # 下部要素制御
│   ├── jquery.colorbox-min.js
│   ├── jquery.easing.1.3.js
│   └── slick.min.js        # スライダーライブラリ
└── images/                 # 画像アセット

```
