# 分割統治法　 divide and conquer method

- そのままでは解決できない問題を分割
- 分割した問題を解くことで、最終的に最初の問題を解決する

## 分割統治法で min 関数の実装

- 再帰的に求める
- 返り値は`a[l..r]`の最小値
- max 関数なら不等号を逆にすればいい

```cpp
int minmum(int l, int r, vector<int>& a) {
  int mid = (l + r) / 2;
  if (l == r) return a[l];
  int left = minmum(l, mid, a);
  int right = minmum(mid + 1, r, a);
  if (left < right) return left;
  else
    return right;
}

int main(){
    vector<int>a;
    int minmum = min(0,a.size()-1,a);
}
```

## マージソート

計算量 $O(N \logN)$

```cpp
vector<int> mergeSort(vector<int>& a) {
  int n = a.size();
  // sizeが1ならその配列を返す
  if (n == 1) return a;
  int mid = n / 2;                              // 2分割する
  vector<int> left(a.begin(), a.begin() + mid);   // 左半分を持つ　範囲: [0,mid)
  vector<int> right(a.begin() + mid, a.end());  // 右半分を持つ  範囲: [mid+1,end)
  left = mergeSort(left);
  right = mergeSort(right);
  vector<int> res;                                     // 返す配列
  int i = 0, j = 0;
  while (i < left.size() && j < right.size()) {        // i,jのどちらかがsizeに達するまで続ける
    if (left[i] < right[j]) res.push_back(left[i++]);  //  小さい方を挿入する
    else
      res.push_back(right[j++]);                       // 小さい方を挿入する
  }
  // 上のループを抜けたときiまたはjのどちらか一方がsizeに達していないので、sizeに達するまで挿入する
  while (i < left.size()) res.push_back(left[i++]);
  while (j < right.size()) res.push_back(right[j++]);
  return res;
}
```

## 転倒数

-  計算量 $O(N \log N)$
- マージソートと同様に求められる
- 違うのは統治部分とreturn部分
 - `{転倒数、ソート済配列}`

```cpp
// 転倒数、ソート済配列
pair<int, vector<int>> invNum(vector<int>& a) {
  int n = a.size();
  if (n == 1) return { 0, a }; //  1要素なら転倒数は0
  int mid = n / 2;
  vector<int> leftVec(a.begin(), a.begin() + mid); //  範囲は[0,mid)
  vector<int> rightVec(a.begin() + mid, a.end());  // 範囲は[mid,end)
  auto left = invNum(leftVec);  // 左半分の転倒数 
  auto right = invNum(rightVec);  // 右半分の転倒数
  vector<int> res;  // ソート済配列
  int inv = 0;
  inv += left.first + right.first;  // 左右の転倒数を足す
  int i = 0, j = 0;
  while (i < left.second.size() && j < right.second.size()) {  // どちらかがsizeに達するまで続ける
    if (left.second[i] < right.second[j]) res.push_back(left.second[i++]);  // 小さい方を挿入する
    else {
      res.push_back(right.second[j++]);  // 小さい方を挿入する
      inv += left.second.size() - i;  // left[i]>right[j]なら、left[i]以降の要素はすべてright[j]より大きいので、転倒数を足す
    }
  }
  // 上のループを抜けたときiまたはjのどちらか一方がsizeに達していないので、sizeに達するまで挿入する
  while (i < left.second.size()) res.push_back(left.second[i++]);  
  while (j < right.second.size()) res.push_back(right.second[j++]);
  return { inv, res };
}
```

#### 転倒数の求め方  BITを使う

BIT(Binary Indexed Tree)を使うと、転倒数を求めることができる。
- 部分和を高速に求めることができる
 - 一点の更新と部分和を求めるのが $O(\log N)$
- ac-libraryでは`fenwick_tree`として実装されている
- BITを使うと $O(N \log max(a_i) + max(a_i))$ で転倒数を求めることができる

```cpp
vector<int> a(n);
int max_a = *max_element(a.begin(), a.end());
fenwick_tree<int> fw(max_a + 1);  // 1-indexed
int inv = 0;
for(int i = 0;i<n;i++){
    inv += i - fw.sum(0,a[i]);  // a[i]より大きい要素の数を足す
    fw.add(a[i],1);  // a[i]を1増やす
}
```

### 練習問題
<https://atcoder.jp/contests/chokudai_S001/tasks/chokudai_S001_j>
<https://atcoder.jp/contests/abc264/tasks/abc264_d>
<https://atcoder.jp/contests/abc261/tasks/abc261_f>