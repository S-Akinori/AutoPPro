# Premiere Pro ゆっくり編集自動化

## 環境と使うアプリ

- Windows10
- Premiere Pro
- Power Automate Desktop

## あらかじめやっておくこと

- 音声を台本通りに区切る
- コピーしたいテキストクリップを作成

## 1 スクリプトをダウンロード

[GitHub](https://github.com/S-Akinori/AutoPPro)の「Code -> Download ZIP」からダウンロードする。

## 2 Premiere Proに拡張機能「JSX Launcher」を入れる

[JSX Launcher](https://exchange.adobe.com/creativecloud.details.12096.jsx-launcher.html)

「ウィンドウ→拡張機能→JSX Launcher」を選択して、メニューから「Select Scripts Folder」をクリック  
ダウンロードしたこのフォルダを選択

![JSX Launcher設定](/demo/images/jsx-launcher-setting.PNG)

ボタンが出れば設定完了

## テキストの自動生成

### 台本の準備

- 話し手が変わるところで、文章の先頭に「改行」と「区切り文字(a,b,cなど)」を入れる。
- 話し手が変わるまでは改行をしない

---

「台本の例」

Aこんにちはゆっくり霊夢です。  

Bゆっくり魔理沙だぜ。今日はPremiere Proの自動編集の方法を紹介していくぜ。

A自動編集？そんなことができるの？

---

### データを取得

[Premiere Proの音声ファイルを1つだけ有効にする](https://video-helper.vercel.app/)を使ってデータを取得。

- 音声トラック番号はコピーしてどこかに保管。（後述の`EnableOneClip/variables.jsx`にある変数`trackIndexes`に貼り付ける。）
- jsonファイルはダウンロードして保管
- csvファイルは必須ではないが、ExcelやGoogle sheetにインポートすると仕分けされた台本を見れる

### Power Automate Desktopでテキスト生成
Power Automate Desktopでフローを読み込む（`pra-ppro-auto-text.tsx`をコピペする）。

フロー内のコメントに従って設定をして、実行

## 機能詳細

### AdjustText

トラック内のテキストを1列に並べる。
