import "./style.scss"

(() => {
    const nav = document.querySelectorAll(".l_nav__item")
    const navArray = Array.from(nav)
    const content = document.querySelectorAll(".l_contents__item")
    const contentArray = Array.from(content)

    const init = () => {
        contentArray[0].style.display = 'block';
    };
    init();

    //クリックしたら起こるイベント
    const handleClick = (event) => {
        event.preventDefault();

        //クリックした個所のDOM要素を取得する。
        const target = event.target;

        //DOM要素のデータ属性(data-XXX)を取得する。
        const targetVal = navArray.indexOf(target)

        //対象以外のnav、contentを非アクティブ化する。(※setAttribute()を使ってはならない。「現在の値にアクセスしたり、変更したりするにはプロパティを使用すべきです」(MDN)。)
        for (let index = 0; index < navArray.length; index++) {
            contentArray[index].style.display = 'none';
            navArray[index].classList.remove('active');
        };

        //対象のコンテンツをアクティブ化する。
        contentArray[targetVal].style.display ='block';
        navArray[targetVal].classList.add('active');
    };

    //全nav要素にイベントを適用。
    for (let index = 0; index < navArray.length; index++) {
        navArray[index].addEventListener('click', (event) => handleClick(event));
    };

})();