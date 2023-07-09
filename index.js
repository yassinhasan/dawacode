
      var btn = document.getElementById("btn");
      let result = document.querySelector(".result");
      var dawacode = document.getElementById("dawacode");
      var qr_wraper = document.getElementById("qr_wraper");
      let qr_div  = document.getElementById("qrcode");
    
      let  qrcode = null;;
      btn.onclick = function () {

      if(qrcode != null){
        console.log("yes");
        qr_wraper.innerHTML = "";
        qrcode.clear();
        qrcode = null
      }
      result.innerHTML ="";

      var random;
      var base = [];
      
      for (let x = 0; x <= 5; x++) {
        random = Math.floor(Math.random() * 100);

        // base.push("0100000000" + dawacode.value + "1725073110VE090A#21276087522" + random);
        let divCode = document.createElement("div");
        let copy_span = document.createElement("span");
        copy_span.setAttribute("class","copy_span copy_text"+x);

        let code_span = document.createElement("span");
        code_span.setAttribute("class","code_span code_span"+x)
        code_span.innerHTML =  "0100000000" + dawacode.value + "1725073110VE090A#21276087522" + random;
        copy_span.innerHTML=`copy`
        let tooltip_div  = document.createElement("div");
        tooltip_div.setAttribute("class","tooltiptext");
        tooltip_div.innerHTML = `Copy to clipboard`
        divCode.setAttribute("class","alert-succ");

        divCode.appendChild(code_span);
        divCode.appendChild(copy_span)
        result.appendChild(divCode) ;
        divCode.appendChild(tooltip_div)
        


        let qrcode_div = document.createElement("div");
        qrcode_div.setAttribute("class","col-xs col-6 row justify-content-center qr_wraper qrcode"+x);
        qr_wraper.appendChild(qrcode_div) ;
        qrcode = new QRCode(document.querySelector(".qrcode"+x), {
        text: "00100000000" + dawacode.value + "1725073110VE090A#21276087522" + random,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
      });
      
      }

      window.addEventListener("click",(copy_elm)=>{
        if(copy_elm.target.classList.contains("copy_span"))
        {
         let code_span_elm =  copy_elm.target.parentElement.querySelector(".code_span");
         let code_text = code_span_elm.innerHTML;
         console.log(code_text)
         navigator.clipboard.writeText(code_text);
         let already_tooltip = document.querySelectorAll(".tooltiptext");
         already_tooltip.forEach(elmement=>{
          elmement.style.visibility = "hidden"
         })
         let tooltip_div =  copy_elm.target.parentElement.querySelector(".tooltiptext");
         tooltip_div.style.visibility = "visible"
         tooltip_div.style.opacity = "1"


        }
      })

    }

    
  

