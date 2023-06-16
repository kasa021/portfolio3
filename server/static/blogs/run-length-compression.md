# ランレングス圧縮

## 実装

- `vector<pair<T,int>>`を使うことが多い
 - `first: 何か,second: 個数`を格納する
 - 数列なら `T = int`,文字列なら `T = char`
- $O(N)$　
```cpp 
vector<T> a;

vector<pair<T,int>> rle(0);
rle.push_back({a[0],0});
for(int i=0;i< a.size();i++){
    if(rle.back().first ==a[i]){ // rleの最後と一致していたら、連続
        rle.back.second++;       // 連続している数を増やす
    }else{
        rle.push_back({a[i],1});
    }
}
```