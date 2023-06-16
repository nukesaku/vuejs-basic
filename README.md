# vuejs-basic
【Vue.js2&amp;Vue.js3対応】基礎から【Vuetify】を使った応用まで！ 超初心者から最短距離でレベルアップ

## Vue.js

### 仮想DOM(Vertual DOM)のメリット
1. 処理が遅くなりづらい・メンテしやすい
（コードが複雑になるほど直接のDOM操作はカオス）
2. 見た目(DOM)とデータ(JSONなど)の分離
  View - ViewModel - Model (MVVMパターン)
  └ ViewModelをVue.jsが担う

## nodeの導入
brew install nodebrew
nodebrew -v
vi ~/.bash_profile
```
export PATH=$HOME/.nodebrew/current/bin:$PATH
```
source ~/.bash_profile
nodebrew setup
### バージョンを指定してnodeをインストール
nodebrew ls-remote # 利用可能なバージョン確認
nodebrew install-binary <version> # インストール
nodebrew ls # インストールしたバージョン確認
nodebrew use v10.15.0 # 使いたいバージョン指定

## VueCLI導入
npm i -g @vue/cli
vue --version
### vueプロジェクト作成
vue create test
cd test
npm run serve # 簡易サーバー起動
### 本番用にコンパイル
npm run build
### リント
npm run lint
