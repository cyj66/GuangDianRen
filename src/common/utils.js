//time为new Date()得到的日期
export function formatDate(time) {
    let y = time.getFullYear()
    let m = time.getMonth() + 1
    m = m < 10 ? '0' + m : m
    let d = time.getDate()
    d = d < 10 ? '0' + d : d
    return y + '-' + m + '-' + d
}

//冒泡排序排时间
export function bubbleTime(obj,date='date') {
    for (let i = 0; i < obj.length - 1; i++) {
        for (let j = 0; j < obj.length - 1 - i; j++) {
          if (
            Number(obj[j][date]) < Number(obj[j + 1][date])
          ) {
            let temp = obj[j];
            obj[j] = obj[j + 1];
            obj[j + 1] = temp;
          }
        }
      }
}