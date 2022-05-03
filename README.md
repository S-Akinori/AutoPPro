# 環境
- Premiere Pro
- Google Spread Sheet
- Google Document

## 1 スクリプトをダウンロード

## 2 Premiere Proに拡張機能「JSX Launcher」を入れる
[JSX Launcher](https://exchange.adobe.com/creativecloud.details.12096.jsx-launcher.html)

ウィンドウ→拡張機能→JSX Launcherを選択して、メニューから「Select Scripts Folder」をクリック  
ダウンロードしたこのフォルダを選択
![JSX Launcher設定](/demo/images/jsx-launcher-setting.PNG)

いろいろボタンが出れば設定完了

# 使用例
## ゆっくり音声の選択
複数あるゆっくり音声の1つだけを有効化

1.台本を用意
【フォーマット】
- 先頭に「A,B,C」のように区切り用の記号をふる  
- テロップを分ける部分（例えば2行にしたい）などは改行を入れる（記号はつけない）  

例  
Aこんにちはゆっくり霊夢です。  

Bゆっくり魔理沙だぜ。
今日はPremiere Proの自動編集の方法を紹介していくぜ。

A自動編集？そんなことができるの？

2.台本どおりに音声をカット

3.スプレッドシート等でテキストを分解し「EnableOneClip」フォルダの「variables.js」ファイルに情報を入力

4.「JSX Launcher」パネルの「EnableOneClip」ボタンを押す