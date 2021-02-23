(()=>{
    const data = {
        get loadingDiv(){
            return document.querySelector(".loading")
        },
        get persentagesDiv() {
            return document.querySelector("#percentages")
        },
        pers: (100/3)
    };

    Object.seal(data);

    document.addEventListener("readystatechange",()=>{
        data.pers+=(100/3);
        document.body.style.overflowY = "hidden";

        if(document.readyState !== "complete") return;

        data.persentagesDiv.style.width = `${data.pers}%`;

        data.persentagesDiv.addEventListener("transitionend",()=>{
            data.loadingDiv.style.opacity = 0;

            data.loadingDiv.addEventListener("transitionend",(event)=>{
                 event.target.hidden = true;
                 document.body.style.overflowY = "visible";
            })
        })
    })
})();