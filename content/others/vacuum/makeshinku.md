# 真空の作り方
## 気体分子の表面衝突
人工的な真空空間の作成過程が数式的にどのように記述されるのか導出するために、まずは固体表面への気体分子の吸着について考えてみます。<br>
ある平らな試料に対して、表面全体を覆う(飽和吸着)のには一体どれくらいの時間が必要なのでしょうか計算してみます。
ここでの飽和吸着は、実際の研究の場における薄膜成長や表面汚染として考えられます。
図に示すような、速度v<sub>x</sub>の分子が時間Δtの間に面積Aの平面に衝突する回数をC<sub>v</sub>とすると、これは体積V(=v<sub>x</sub>ΔtA)の中に存在する速度v<sub>x</sub>の分子の数となるため
<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{Green}&space;C_{\rm&space;v}&space;=&space;\rho&space;Vf(v_{\rm&space;x})}"/><br>
と書けます。ここでρは分子密度であり、ρVは体積Vに含まれる全ての速度の分子を表し、Maxwell分布を乗ずることで速度v<sub>x</sub>に対する数を得ています。
<p>
<img src="./surface.png" width="400px" title="circuit"><br>
<em>図. 気体分子が表面に衝突する様子</em>
</p>
したがって、すべての速度の分子が平面Aに衝突する回数Cは
<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{Green}&space;C&space;=&space;\rho\Delta&space;tA\int_{\0}^{\infty}v_{\rm&space;x}f(v_{\rm&space;x})dv_{\rm&space;x}&space;=&space;\rho\Delta&space;tA\frac{\bar{v_{\rm&space;x}}}{2}}"/><br>
となります。更に、単位時間・面積あたりに衝突する回数C'に規格化すると
<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{Green}&space;C'&space;=&space;\frac{C}{\Delta&space;tA}&space;=&space;\rho\frac{\bar{v}}{4}=\frac{P}{2\pi&space;k_{\rm&space;B}Tm}}"/><br>
と表せます。ここで、[気体分子運動論](./gas.md)で求めた関係<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{Green}&space;\bar{v}=&space;\sqrt{\frac{8k_{\rm&space;B}T}{\pi&space;m}}"/>、<img src="https://latex.codecogs.com/gif.latex?\inline&space;\bg_black&space;\fn_cs&space;{\color{Green}&space;\rho&space;=&space;\frac{N}{V}=\frac{N_{\rm&space;A}P}{RT}=\frac{P}{k_{\rm&space;B}T}}"/>を用いると
<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{Green}&space;C'&space;\sim&space;2.7\times10^{20}\frac{P}{MT}}"/> [molecule/cm<sup>2</sup>s]<br>

が得られます。<br>
ここで、室温300 K,圧力P=10<sup>-4</sup> Paにおける窒素分子N<sub>2</sub>(分子量M=28)の表面衝突の頻度C'を求めてみると<span style="color: red; ">C'~3×10<sup>14</sup> [molecule/cm<sup>2</sup>s]</span>程度になります。一般に固体の表面原子数密度は10<sup>15</sup> [atom/cm<sup>2</sup>]ですので、10<sup>-4</sup> Paの下では表面は3秒程度で飽和吸着状態となることがわかります。<br>
したがって、10<sup>-4</sup> Paの気体雰囲気中に1秒間程度表面を晒すことでおおよそ表面に単分子層だけ形成することができ、気体分子の導入量=圧力(真空度)×時間として
<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{Green}&space;1[L]&space;=&space;10\times10^{-4}[Pa]\times 1[s]=10\times10^{-6}[Torr]\times 1[s]}"/><br>
と表される導入量(被曝量)の単位、Langmuirが使われることもあります。


## 真空の作成
前置きが長くなりましたが、以上の議論を応用して真空の作成について眺めてみましょう。
先程考えた図中において、分子が衝突していた平面に穴が空いており、気体分子は上部(真空槽)から下部(ポンプ)へ移動している状態を考えましょう。これはまさしく気体の排気の描像ですね。<br>
<p>
<img src="./vacuum.png" width="400px" title="vacuum"><br>
<em>図. 気体分子が排気される様子</em>
</p>
先に導出したように、単位時間・面積あたりに分子が衝突(排気)する回数C'は
<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{Green}&space;C'&space;=&space;\rho\frac{\bar{v}}{4}}"/><br>
でした。
したがって、単位時間・面積あたりに廃棄される分子の体積C'<sub>v</sub>はρ=N/Vより、ρ<sup>-1</sup>=V/Nが1分子の占める体積となるので
<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{Green}&space;C'_{\rm&space;v}&space;=&space;\frac{C'}{\rho}=\frac{1}{4}\frac{2}{\sqrt{\pi}}\sqrt{\frac{2k_{\rm&space;B}T}{m}}\sim3.64\sqrt{\frac{T}{M}}}"/> [l/cm<sup>2</sup>s]<br>
となります。<br>
またしても室温300 K, 空気の分子量M~29を用いて計算すると<span style="color: red; ">C'<sub>v,air</sub>~11.6 [l/cm<sup>2</sup>s]</span>が得られます。この計算の仮定では、衝突した分子の跳ね返りは考慮しておらず全て表面に吸着しているしているものとしています。即ち完全に排気されている状態になっています。したがって、空気が完全に廃棄されるような理想的な排気速度はポンプ排気口の面積をA [cm<sup>2</sup>]とすると
<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{Green}&space;S_{\rm&space;ideal}&space;=&space;11.6A}"/> [l/s]<br>
と表されます。実際には完全に排気されないため、
<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{Green}&space;S_{\rm&space;real}&space;=&space;H_{o}S_{\rm&space;ideal}}"/> [l/s]<br>
のように表されます。ここでH<sub>o</sub>はホー係数と呼ばれ0~1の間の値を取りますが、典型的には0.2~0.5程度になります。
このようにして導出された速度で排気することで真空を作ることができます。

## バランス方程式
ここまで求めてきたように、排気速度Sで真空引きすることでとても良い真空が作れそうですが現実にはそう上手くはいきません。
それは真空槽の内部には空気以外に内壁等に吸着している不純物ガスが存在するためです。
いくら頑張って空気を排気しても、この真空槽からのガス放出により真空度は思うように良くなりません。
これを数学的に記述すると、不純物ガス容量をQとして微分方程式
<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{Green}&space;-\frac{dPV}{dt}+Q&space;=&space;P(t)S}"/> <br>
が成り立ち、これをバランス方程式と呼びます。
体積Vは時間に依存しないため、P(t)のみに対する微分方程式として解くと
<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{Green}&space;P(t)&space;=&space;(P_{0}-\frac{Q}{S}exp(-\frac{S}{V}t)+\frac{Q}{S}}"/> <br>
となります。ここで、十分に時間が経過すると(t→∞)
<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{Green}&space;P(\infty)&space;=&space;\frac{Q}{S}}"/> <br>
となり、結局真空槽の不純物ガス放出が最終的に到達する真空度を決定することがわかります。<br>
良い真空を作るため、つまりQを減らすためには<br>
・内部壁面からの残留ガスを減らす
・真空槽の漏れ(リーク)を減らす
・真空ポンプからのガスの逆流の減らす
などのケアを行う必要があります。



# Contents
[気体分子運動論](./gas.md)<br>
[真空の作り方]()<br>


# Return
[その他に戻る](../others.md)<br>
[Topに戻る](https://motoyashinozaki.github.io/minidora/)