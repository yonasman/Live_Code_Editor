//writing the content on the iframe
function compile() {
    let html = document.getElementById("html");
    let css = document.getElementById("css");
    let js = document.getElementById("js");
    let code = document.getElementById("code").contentWindow.document;
    
    document.body.onkeyup = function () {
        code.open();
        code.writeln(html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>");
        code.close();
        // local storage functionality
        localStorage.setItem("htmlCode",html.value);
        localStorage.setItem("cssCode",css.value);
        localStorage.setItem("jsCode",js.value);
        localStorage.setItem("iframeContent",code.documentElement.innerHTML);
    }
    // load from local storage on page load
    window.onload = function() {
        html.value = localStorage.getItem("htmlCode" || '');
        css.value = localStorage.getItem("cssCode" || '');
        js.value = localStorage.getItem("jsCode" || '');
        //getting iframe content
        code.open();
        code.writeln(localStorage.getItem("iframeContent")  || '');
        code.close();
    }

}
//invoke the function
compile();
