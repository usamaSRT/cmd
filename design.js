let button_sidebar=document.querySelector("#button_sidebar");
let sidebar=document.querySelector("#sidebar");
let makedarker=document.querySelector("#makedarker");
button_sidebar.onclick=()=>{                                   //指定した要素をクリックしたときに実行
    sidebar.classList.toggle("open");                          //指定した要素にclassを追加・削除
}
makedarker.onclick=()=>{                                       //指定した要素をクリックしたときに実行
    sidebar.classList.toggle("open");                          //指定した要素にclassを追加・削除
}