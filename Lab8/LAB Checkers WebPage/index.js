var form = document.getElementById('f');

form.addEventListener('submit',function(event){
    event.preventDefault();
    var button = document.getElementById('btn');

    var login = document.getElementById('login');
    var password = document.getElementById('password');
    if(button.textContent==='Sign in'){
        localStorage.setItem('login',login.value);
        localStorage.setItem('password',password.value);
        window.location.href = 'account.html';
    }else{
        if(localStorage.getItem('login') === login.value && localStorage.getItem('password')===password.value){
            console.log("OHHH YEAAH");
            window.location.href = 'account.html';
        }else{
            document.getElementById('label').textContent = 'Wrong login or password!';
            console.log('Wrong!!!');
        }
    }
});
function signinChange(){
    document.getElementById('btn').textContent = 'Sign in';
}
function loginChange(){
    document.getElementById('btn').textContent = 'Login';
}
// function submit(){
//     event.preventDefault();
//     console.log('hi');
//     function user(name,password){
//         this.name = name;
//         this.password = password;
//     }
//     var button = document.getElementById('btn');
   
//     if(button.textContent==='Sign in'){
//         var login = document.getElementById('username');
//         var password = document.getElementById('password');
//         if(login.value!=='' && password.value!==''){
//             var new_user = new user(login.value,password.value); 
//             var exists = false;
//             for(var i = 0; i < users.length; i++){
//                 if(users[i].name===new_user.name){
//                     console.log('This users is already exists');
//                     exists = true;
//                 }
//             }
//             if(exists==false){
//                 users.push(new_user);
//                 localStorage.setItem('users',users);
//             }
//         }
//     }else{
//         var login = document.getElementById('username');
//         var password = document.getElementById('password');
//         if(login.value!=='' && password.value!==''){
//             var exists = false;
//             for(var i = 0; i < users.length; i++){
//                 if(users[i].name===login.value && users[i].password===password.value){
//                     console.log('exists');
//                 }
//             }
//         }
//     }
    
// }
