/*---------------------------------
 intersectionObserver
 ---------------------------------*/
 export function observeFunc(targetEl:string, multi:boolean,rootMargin:string, inFn, outFn) {
  const callback = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // target要素が画面内に表示されたら実行
        inFn();
      } else {
        // target要素が画面外になると実行
        outFn();
      }
    })
  }
  // intersection observerの設定 
  const options = {
    root: null,
    rootMargin: rootMargin,
    threshold: 0,
  }
  // intersection observerのインスタンスを生成
  const observer = new IntersectionObserver(callback, options);
  // 要素の監視
  //  propsに格納された要素がページ内に無かった場合、observerを実行しない
  if(multi){
    const targets = document.querySelectorAll(targetEl);
    targets.forEach((el) => {
      if (el === null) {
        return;
      } else {
        observer.observe(el);
      }
    })
  } else {
    const target = document.querySelector(targetEl);
    if (target === null) {
      return;
    } else {
      observer.observe(target);
    }
  }
}