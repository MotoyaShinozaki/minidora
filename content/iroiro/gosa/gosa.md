# 誤差について
## はじめに
電気測定の一番の基本は、電流を流して電圧を測ることです(逆でもいいですが)。
その過程で計器により測定誤差が生じます。ここでは、この誤差について考えていきます。

## 計器の誤差
計器の表示にはアナログとデジタルの2種類があります。かつて中学校の理科室で使っていたような針が動くものがアナログ計器です(~~高専でも殆どがアナログでした~~)。<br>
このアナログ計器では、針が盤面のどの値を指しているかを目で見て判断するため、ここに誤差が生じます。<br>
また針の動く平面と重力の関係が大事です。平面と重力が直交する場合(方位磁石のようなイメージ)は、どんな値を指していても同じ重力が働きますが、平行な場合は指す値により針に有効に働く重力が変化します。<br>
この力が働くことを前提に設計されるため、床と平行に置かなければならない計器を縦に立てて用いた場合は、誤差が発生します。<br>
計器の構造を理解して、正しく用いましょう(実は盤面を見ると置き方が書いてあります)。<br>

デジタル計器ではどうでしょうか。小数点以下まで詳細に値を示してくれるので、アナログとは異なり誰が見ても同じ値を読み取ることができるので一見誤差はなさそうです。<br>
しかし、連続なアナログ値である電圧をデジタル値に変換して読み出すため、ここで誤差が生じます。例えば測定レンジが-2V~+2V, 4bitの場合、<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{DarkGreen}&space;\frac{2-(-2)}{2^{4}}=0.25}"/><br>
と、0.25V刻みで値を読み取ることができます。これでは0.1Vといった単位の値を読むことができず、中々誤差が大きいです。<br>
例えば私たちが量子ドットの高速測定で使っている電圧計では、測定レンジが-100mV~+100mV, 14bitなので凡そ12μVの分解能があります。<br>

読み取り計器についてお話ししましたが、電流源(電圧源)にも同様のことがいえます。また、実際の測定ではこの他にも様々な雑音が発生し、誤差の原因になります。精度の高い実験をする際には気を付けましょう。<br>

## 誤差を含む計算

誤差との格闘を経て、ある精度での電流・電圧値を得たら次はおたのしみの解析の時間です。今回は、得られた電圧値を流した電流値で割って、抵抗値を算出することを考えます。電流と電圧にそれぞれ誤差ΔI, ΔVを仮定すると、誤差を含む抵抗値は<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{DarkGreen}&space;R+\Delta R=\frac{V+\Delta V}{I+\Delta I}}"/><br>
それでは、この式を少し弄ってあげましょう。分母に多項式があると少々厄介なので、単位が変わらないよう注意して次のように近似します。<br>
$$ \frac{1}{I+\Delta I}=\frac{1}{I}\left(1+\frac{\Delta I}{I}\right)^{-1}≈\frac{1}{I}\left(1-\frac{\Delta I}{I}\right) $$<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{DarkGreen}&space;\frac{1}{I&plus;\Delta&space;I}=\frac{1}{I}\left(1&plus;\frac{\Delta&space;I}{I}\right)^{-1}\approx\frac{1}{I}\left(1-\frac{\Delta&space;I}{I}\right)}"/><br>
ここで次の近似を使いました。(Δxはとても小さいと考えます)<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{DarkGreen}&space;(1+\Delta x)^{n}\approx 1+n\Delta x}"/><br>
よって、誤差を含む抵抗値は<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{DarkGreen}&space;\begin{align*}&space;R&plus;\Delta&space;R&=\frac{1}{I}(1-\frac{\Delta&space;I}{I})(V&plus;\Delta&space;V)\\&space;&=\frac{V}{I}&plus;\frac{\Delta&space;V}{I}-\frac{V}{I^{2}}\Delta&space;I-\frac{\Delta&space;V&space;\Delta&space;I}{I^{2}}\end{align}}"/><br>
誤差同士の積はとても小さいので無視すると、結局抵抗の誤差ΔRは<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{DarkGreen}&space;\Delta R = \frac{\Delta V}{I}-\frac{V}{I^{2}}\Delta I}"/><br>
となります。計器や回路によって生じる誤差が抵抗値に及ぼす影響がわかりました。各項が近い値になると抵抗の誤差が小さくなることがわかります。
また、相対誤差は<br>
<img src="https://latex.codecogs.com/gif.latex?\bg_black&space;\fn_cs&space;{\color{DarkGreen}&space;|\frac{\Delta R}{R}| = |\frac{\Delta V}{V}|+|\frac{\Delta I}{I}|}"/><br>
と表され、結局それぞれの相対誤差の和となります。系に一定の誤差があるときは、微小信号の測定ほど大変であることがわかります。<br>

## [Iroiroに戻る](../iroiro.md)
## [Topに戻る](https://motoyashinozaki.github.io/minidora/)