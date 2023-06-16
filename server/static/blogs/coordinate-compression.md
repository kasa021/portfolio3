# 座標圧縮

## 使う場面

- データの値が何番目か知りたい
 - ソートしてindexを求められるが、重複があると面倒
- マス全体が大きすぎで、TLE,MLEする時

## 実装

### uniqueと二分探索

計算量は $O(N \log N)$
復元が必要ならば、`b[a[i]]`　を参照する
``` cpp
vector<int> a;

vector<int> b = a; // aをbにコピーする
sort(b.begin(),b.end());
b.erase(unique(b.begin(),b.end()),b.end());  // 重複を削除する

for(int i=0;i<a.size();i++){
    // 各a[i]がbの何番目になるのかを二分探索をして求める。
    auto new_itr = lower_bound(b.begin(),b.end(),a[i]);
    a[i] = distance(b.begin(),new_itr);
}
```

### setとmap

計算量は $O(N \log N)$
復元が必要なら別の配列 `map` を作る

```cpp
vector<int> a;

set<int> st(a.begin(),a.end()); // aの要素からなるsetを構築(= 重複削除)
map<int,int> mp;  // setの要素に対して、indexをmapで管理
int cnt=0;
for(int x: st){
    mp[x] = cnt;
    cnt++;
}

for(int i=0;i< a.size(); i++){
    a[i] = mp[a[i]];  // a[i]の値をmapを使って置き換え
}
```

## 練習問題
<https://atcoder.jp/contests/abc113/tasks/abc113_c>
<https://atcoder.jp/contests/abc036/tasks/abc036_c>
<https://atcoder.jp/contests/abc213/tasks/abc213_c>