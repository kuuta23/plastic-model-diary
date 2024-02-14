const uploadDateAsc=(dateIndata=[])=>{
    var tmp,min;
    for (var i = 0; i < dateIndata.length-1; i++) {
        min = i; // 配列の先頭を最小値の要素とする
        for (var j = i+1; j <dateIndata.length; j++) { // 比較のループ
            if (dateIndata[j].uploadDate.seconds < dateIndata[min].uploadDate.seconds) {
                min = j; // 最小値を持つ要素を更新
            }
        }
        // 最小値を持つ要素を先頭の要素と交換
        tmp = dateIndata[i];
        dateIndata[i] = dateIndata[min];
        dateIndata[min] = tmp;
    }
    return dateIndata
}

export default uploadDateAsc