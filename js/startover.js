var username = 'vinferno';
var github_token = '2650dc1e74d548086f03aa168cc9b0624ac00de1';
var repo_name = 'oct05';
var clear;
var set_timer;

var github = new Github({
    token: github_token,
    auth: "basic"
});

div =document.getElementsByTagName('div');
repo_info = div[0];
repo_contents = div[1];
//user_info = div[2];
submit_err = div[2];
editor = document.getElementsByTagName('textarea')[0];
submit_btn = document.getElementsByTagName('button')[0];



submit_btn.addEventListener('click',function () {
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
        repo_contents.innerText = msg;
        if ( editor.value === msg) {

                clearInterval(set_timer);

        }
        //alert(msg);
    });
}

repo.read('master', 'README.md', function (err, data) {
    var msg = '';
    if (err) {
        msg = err;
    } else {
        msg = data;
    }
    repo_contents.innerText = msg;

});