# ブラウザと Node.js の実行環境の違い

## モジュール管理の仕組みが異なる

ブラウザ：ESM

Node.js：CJS、ESM

## 使える機能が異なる

ブラウザ：document(DOM API)、alert など

Node.js：require、fs モジュール、path モジュールなど

## グローバルオブジェクトが異なる

ブラウザ：window

Node.js：global

globalThis：適宜グローバルオブジェクトを返却するキーワード

クロスプラットフォームで動くコードは `Universal(Isomorphic) JavaScript` と呼ばれる

例）React の CSR / SSR など
