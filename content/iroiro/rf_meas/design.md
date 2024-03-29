<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-8P412RLRC8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8P412RLRC8');
</script>

# 高速測定のための量子ドット設計指針

"[量子ドットの高速測定](./rf_meas.md)"では高周波反射測定による高速測定を紹介しましたが、実はこの手法は全ての量子ドットに使える万能なものではありません。<br>
このページでは、高速測定が可能な量子ドット設計について考えていきます。まずは図1に高周波反射測定の回路を再掲します。<br>
この測定のキモは、"電荷計の電気伝導度の変化に依存して反射波の大きさが変化すること"でした。測定回路がそのような感度を持つためには、インピーダンス整合が成立している必要があります。(整合条件から遠く外れている部分では、伝導の変化に依らず殆どの信号が反射されてくるため、伝導依存を持たなくなってしまいます。)<br>
この共振回路に対するインピーダンス整合条件は図2の式のように計算できます。<br>
<p>
<img src="./matching_condition.png" width="400px" title="circuit"><br>
<em>図2. インピーダンス整合条件</em>
</p>
実際の測定回路では、Gが量子ドットの検出に用いる電荷計のコンダクタンス、Cは試料近傍における寄生容量、Lは市販品コイルチップのインダクタンス、Z<sub>0</sub>は高周波ケーブルの特性インピーダンスに相当します。<br>
ここで電荷計は量子的な伝導を利用していることから、<img src="https://latex.codecogs.com/gif.latex?\inline&space;\bg_black&space;\fn_cs&space;{\color{Green}&space;G&space;<&space;\frac{e^2}{h}}"/>の条件が要求されます。<br>
また高周波ケーブルを用いることで線路の寄生容量は実効的に無視できますが、結局試料中ではゲート電極等による寄生容量が形成されます。共振回路を作製するために取り付けるコイルは市販品がよく用いられ、典型的には大きくて1.2 μH程度となります。<br>
このようにZ<sub>0</sub>, G, Lは様々な制約から殆ど一意に決まっているため、図2に示すようなインピーダンス整合条件を満たせるかは寄生容量Cに依存します。<br>

したがって、**高速測定が可能な量子ドットかどうかはデバイスが持つ寄生容量の大きさで決まります**。<br>
試しに典型的な値を代入してみると<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{DarkGreen}&space;C&space;=&space;\frac{G&space;L}{Z_{0}}&space;=&space;\frac{e^2}{h}\frac{1.2*10^{-6}}{50}&space;\approx&space;0.93&space;(pF)}"/><br>
となり、1pF以下程度まで低く設計する必要があります。<br>
容量は面積に比例し、絶縁層の厚さに反比例します。トップゲートやバックゲート、サイドゲートなど様々な電極構造の最適化と絶縁層の材料等と相談することで高速測定が可能となります。<br>
最近では、GaAs系やSi系のみならずグラフェンナノリボンでも量子伝導が報告されています。構造や材料の制御により新たな物性を発現させるのと同時に、測定まで見通したデバイス構造が益々重要になることと思われます。

## 参考文献
1. 「CVDグラフェンナノリボンの電気伝導特性測定」、<br>
北田孝仁、阿部峰也、瀬尾瑞樹、金子俊郎、加藤俊顕、大塚朋廣、<br>
日本物理学会、名古屋、2020年4月<br>

# 関連項目
[量子ドットの高速測定](./rf_meas.md)<br>

# Return
[Iroiroに戻る](../iroiro.md)<br>
[Topに戻る](https://motoyashinozaki.github.io/minidora/)