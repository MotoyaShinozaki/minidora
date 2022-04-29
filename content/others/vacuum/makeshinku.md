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
と表せます。ここで、[気体分子運動論](./gas.md)で求めた関係<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{Green}&space;\begin{align*}&space;\bar{v}&=\int_{\0}^{\infty}vf(v)dv&space;\\&==&space;\sqrt{\frac{8k_{\rm&space;B}T}{\pi&space;m}}&space;\end{}}"/>、<img src="https://latex.codecogs.com/gif.latex?\inline&space;\bg_black&space;\fn_cs&space;{\color{Green}&space;\rho&space;=&space;\frac{N}{V}=\frac{N_{\rm&space;A}P}{RT}=\frac{P}{k_{\rm&space;B}T}}"/>を用いると
<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{Green}&space;C'&space;\sim&space;2.7\times10^{20}\frac{P}{MT}}"/>[molecule/cm<sup>2</sup>s]<br>

が得られます。<br>
ここで、室温300K,圧力P=10<sup>-4</sup>Paにおける窒素分子N<sub>2</sub>(分子量M=28)の表面衝突の頻度C'を求めてみると

# Contents
[気体分子運動論](./gas.md)<br>
[真空の作り方]()<br>


# Return
[その他に戻る](../others.md)<br>
[Topに戻る](https://motoyashinozaki.github.io/minidora/)