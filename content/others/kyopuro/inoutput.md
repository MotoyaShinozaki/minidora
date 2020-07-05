# 標準入出力

私がよく参加する競技プログラミングは、ある標準入力が与えられ、それに対する答えをprint文で出力する形式なのですが、最初はこの標準入力の受け取り方にすら戸惑っていました。<br>
ここでは、その今まで出会ってきた典型的パターンについて纏めておこうと思います。(主に自分用ですが、間違いやもっと良い方法があれば是非教えてください)<br>
以下コードのpyファイルは[こちら](https://github.com/MotoyaShinozaki/KyoPURO/tree/master/library){:target="_blank"}

## Case 1 : 単体で入力
```
入力は以下の形式で標準入力から与えられる。
N
```
```python
n = int(input()) #文字列の場合はint()を外す
```
・複数行の入力がある場合は、その数だけinputする
```
入力は以下の形式で標準入力から与えられる。 
N
M
```
```python
n = int(input())
m = int(input())  
```
## Case 2 : 一行に複数入力
```
入力は以下の形式で標準入力から与えられる。 
N M
```
```python
n, m = map(int, input().split()) #第1引数で型指定(大抵はint, float, str)
```
入力変数の数が3つになった場合は上記左辺を"n, m, l ="みたい好きな変数名を命名すればよい。

・入力変数の数が未知の場合はリスト化する
```
入力は以下の形式で標準入力から与えられる。 
A_0 A_1 A_2 ... A_N
```
```python
a = list(map(int,input().split())) 
```
i番目の要素a[i]にはA_iが格納されています

## Case 3 : n行に渡って入力
```
入力は以下の形式で標準入力から与えられる。 
N
A_1
A_2
...
A_N
```
```python
n = int(input()) 
a = [int(input().strip()) for _ in range(n)]
```
大抵の場合、最初の一行目で配列の行数が与えられるため、リスト内包表記でinputする。これで普通のリストとして扱える。

・各行の変数の数が複数の場合(N行M列の場合)
```
入力は以下の形式で標準入力から与えられる。 
N M
A_11 A_12 A_13 ... A_1M
A_21 A_22 A_23 ... A_2M
...                ...
A_N1 A_N2 A_N2 ... A_NM
```
```python
n, m = map(int,input().split())
a = [list(map(int,input().split())) for i in range(n)]
```
M=1の場合、`a=[[A_1], [A_2], [A_3], ... , [A_N]]`となってしまうので注意。<br>
`a = [int(input().strip()) for _ in range(n)]`を使うとよい。

## 出力
得られたリストをスペース区切り等で出力したいときには以下のように書けば良い
```python
print(' '.join(map(str, list))) #リストをスペース区切りにして出力
```
`' '`の中身を区切りたい文字やスペース、カンマにする。

# Return
## [競技プログラミングに戻る](./kyopuro.md)
## [Topに戻る](https://motoyashinozaki.github.io/minidora/)