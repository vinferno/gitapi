var username = 'vinferno';
var github_token = 'MTkwNDU3MDUxNWFjMTBjOGI4ZmZlYjhmNjIwZmY5ZTQ5Y2NlYzQ1ZA==';
     github_token = atob(github_token); // decode encoded base64.
//editor.value = btoa(github_token);
var repo_name = 'oct05';
var clear;
var set_timer;
var user;
var gist_list;
var current_element;
/// takes time
var github = new Github({
    token: github_token,
    auth: "basic"
});



// targeting
div =document.getElementsByTagName('div');
repo_info = div[0];

submit_err = div[1];
repo_contents = div[2];
repo_read = div[3];

editor = document.getElementsByTagName('textarea')[0];
submit_btn = document.getElementsByTagName('button')[0];



submit_btn.addEventListener('click',function () {
    user = github.getUser();

    var msg = editor.value;
    repo.write('master', 'README.md', msg, 'automatic commit', function (err) {
        if (err) {
            submit_err.innerText = err;
        }
    });
    clear = msg;
    return  set_timer = setInterval(function(){ timer() }, 1000);
    function timer() {
        read_it();
        user.gists(function(err,res){gist_list = res});
        repo.contents('master', "", function(err, contents) {console.log(contents);
            repo_contents.innerHTML = '';
        for (var i=0;i< contents.length;i++){
            current_element = document.createElement('span');
            repo_contents.appendChild(current_element);
            current_element.innerHTML += contents[i].type + '<br>';
            current_element.innerHTML += contents[i].name + '<br>';
            current_element.item_name = contents[i].name;
            current_element.item_type = contents[i].type;
            if(contents[i].type === 'dir'){
                current_element.style.backgroundColor = 'yellow';
            }

            if (contents[i].type != 'fle'){
                current_element.addEventListener('click',function(){
                    repo.read('master', this.item_name, function (err, data) {
                        repo_read.innerText = data;
                    });
                });



            }


        }

        });

    }
});




var repo = github.getRepo(username, repo_name);


repo.show(function (err, repo) {
    var msg = '';
    if (err) {
        msg = err;
    } else {
        msg = repo['full_name'];
    }
    repo_info.innerText = msg;
});



function read_it() {
    repo.read('master', 'README.md', function (err, data) {
        var msg = '';
        if (err) {
            msg = err;
        } else {
            msg = data;
        }
        repo_read.innerText = msg;
        if ( editor.value === msg) {
                clearInterval(set_timer);
        }
        //alert(msg);
    });

    //repo_contents.innerHTML = user.userRepos(user, function(err, repos) {});
   //alert(user.repos(function(err, repos) {}));
}



read_it();

//repo_contents.innerHTML = repo.contents('master', 'repos/vinferno/oct05/contents/', function(err, contents) {});
document.addEventListener('DOMContentLoaded',function(){


});