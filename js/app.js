var github_token = '2650dc1e74d548086f03aa168cc9b0624ac00de1'; //GITHUB ACCESS TOKEN GOES HERE;
var github_connection;

function load_javascript(script_url,function_to_run_onload){

    var document_head = document.getElementsByTagName('head')[0];
    var document_script = document.createElement('script');
    
    document_script.type = 'text/javascript';
    document_script.src = script_url;
    document_script.onready = function_to_run_onload;
    document_script.addEventListener('onload',function(event){
        function_to_run_onload;
    });
    
    document_head.appendChild(document_script);

}

document.addEventListener('DOMContentLoaded',function(){
 
    console.log('DOMContnetLoaded');
    
    load_javascript('js/github_api.js',function(event){
        
    });

});

//
//document.addEventListener('readystatechange',function(event){
//
//    if(document.readyState === 'complete'){
//
//        github_connection = new Github({
//              token: github_token,
//              auth: "oauth"
//            });
//
//
//        div_repo = document.createElement('div');
//        document.body.appendChild(div_repo);
//        var repo;
//        repos('oct05');
//        function repos(repo_in_use){
//
//            repo = github_connection.getRepo('vinferno',repo_in_use);
//            console.log(repo[0])
//        }
//    }
//
//
//    //load_file()
//
//});



//var load_file = function(event){
//    var obj = repo;
//    //var url = window.URL.createObjectURL(obj);
//    //alert(url)
//    var xhr = new XMLHttpRequest();
//    xhr.open("GET", url, false);
//    xhr.send(null);
//    //alert(xhr.responseText);
//    var ray = xhr.responseText.split(",");
//    //alert(typeof(ray));
//    //alert(ray)
//    //alert(ray[1]);
//    //input_read.value = ray;
//    div_repo.innerHTML = xhr.responseText;
//};