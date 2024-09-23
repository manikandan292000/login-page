let array = []
document.getElementById("myform").addEventListener("submit", (e) => { myfunction(e) })

function checkError(val) {
    let ele = document.getElementById(val).innerHTML
    if (ele != '') {
        document.getElementById(val).innerHTML = ''
        document.getElementById('icon_one').style.display = "none"
        document.getElementById("username").style.borderColor = "aqua"
    }

    
}
function myemail(val) {
    let ele = document.getElementById(val).innerHTML
    if (ele != '') {
        document.getElementById(val).innerHTML = ''
        document.getElementById('icon_two').style.display = "none"
        document.getElementById("email").style.borderColor = "aqua"
    }else{
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(myemail)) {
            text = ""; 
          } else {
            text = "Please enter a valid email address.";
          }
    }

}


function mypassword(val) {
    let ele = document.getElementById(val).innerHTML
    if (ele != '') {
        document.getElementById(val).innerHTML = ''
        document.getElementById('icon_three').style.display = "none"
        document.getElementById("password").style.borderColor = "aqua"

    }
}

function mycformpassword(val) {
    let ele = document.getElementById(val).innerHTML
    if (ele != '') {
        document.getElementById(val).innerHTML = ''
        document.getElementById('icon_four').style.display = "none"
        document.getElementById("cformpassword").style.borderColor = "aqua"

    }
}


function myfunction(e) {
    e.preventDefault()
    console.log(array)
    let name = document.getElementById('username').value
    let mail = document.getElementById("email").value
    let pwd = document.getElementById("password").value
    let c_pwd = document.getElementById("cformpassword").value
    let text = "";
    if (c_pwd == "" || pwd == "" || name == "" || mail == "") {

        if (name == "") {
            text = "Pls enter name"
            document.getElementById('name_error').innerText = text;
            document.getElementById('username').style.borderColor = "rgb(178, 10, 10)"
            document.getElementById('icon_one').style.display = "block"
            document.getElementById("name_error").style.display = "block"
             document.getElementById("name").innerText="Registeration not completed"
             document.getElementById("name").style.color="red"
            
              

            
        } else {
            document.getElementById('username').style.borderColor = "lightgreen"
            document.getElementById("name_error").style.display = "none"
            document.getElementById("icon_one").style.display = "none"
                document.getElementById("name").innerText=" Registeration completed successfully"
                document.getElementById("name").style.color="green"  
        }




        if (mail == "") {
            text = "Pls enter Mail"
            document.getElementById('mail_error').innerText = text;
            document.getElementById('email').style.borderColor = "rgb(178, 10, 10)"
            document.getElementById('icon_two').style.display = "block"
            document.getElementById("mail_error").style.display = "block"
             document.getElementById("name").innerText="Registeration not completed"
             document.getElementById("name").style.color="red"
        } else {
            document.getElementById('email').style.borderColor = "green"
            document.getElementById("mail_error").style.display = "none"
            document.getElementById("icon_two").style.display = "none"
             document.getElementById("name").innerText=" Registeration completed successfully"
             document.getElementById("name").style.color="green"
        }

        if (pwd == "") {
            text = "Pls enter Password"
            document.getElementById('pwd_error').innerText = text;
            document.getElementById('password').style.borderColor = "rgb(178, 10, 10)"
            document.getElementById('icon_three').style.display = "block"
            document.getElementById("pwd_error").style.display = "block"
             document.getElementById("name").innerText="Registeration not completed"
             document.getElementById("name").style.color="red"
        } else {
            document.getElementById('password').style.borderColor = "lightgreen"
            document.getElementById("pwd_error").style.display = "none"
            document.getElementById("icon_three").style.display = "none"
             document.getElementById("name").innerText="Registeration completed successfully"
              document.getElementById("name").style.color="green"
        }

        

        if (c_pwd == "") {
            text = "Pls enter cformPassword"
            document.getElementById('c_pwd_error').innerText = text;
            document.getElementById('cformpassword').style.borderColor = "rgb(178, 10, 10)"
            document.getElementById('icon_four').style.display = "block"
            document.getElementById('c_pwd_error').style.display = "block"
             document.getElementById("name").innerText="Registeration not completed"
             document.getElementById("name").style.color="red"
        }
        else {
            document.getElementById('cformpassword').style.borderColor = "lightgreen"
            document.getElementById("c_pwd_error").style.display = "none"
            document.getElementById("icon_four").style.display = "none"
             document.getElementById("name").innerText="Registeration completed successfully"
              document.getElementById("name").style.color="green"
        }
    } else {


        if (pwd === c_pwd) {
            
            let details = {
                username: name,
                email: mail,
                password: pwd,
            }
            // array.push(details)
           
            if (array.length == 0) {
                array.push(details)
        

                document.getElementById('username').style.borderColor = "lightgreen"
                document.getElementById('username').value = ""
                document.getElementById("name_error").style.display = "none"
                document.getElementById("icon_one").style.display = "none"
                  document.getElementById("name").innerText="Registeration completed successfully"
                   document.getElementById("name").style.color="green"
                  

                document.getElementById('email').style.borderColor = "lightgreen"
                document.getElementById('email').value = ""
                document.getElementById("mail_error").style.display = "none"
                document.getElementById("icon_two").style.display = "none"
                  document.getElementById("name").innerText="Registeration completed successfully"
                   document.getElementById("name").style.color="green"

                document.getElementById('password').style.borderColor = "lightgreen"
                document.getElementById('password').value = ""
                document.getElementById("pwd_error").style.display = "none"
                document.getElementById("icon_three").style.display = "none"
                  document.getElementById("name").innerText="success"
                   document.getElementById("name").style.color="green"

                document.getElementById('cformpassword').style.borderColor = "lightgreen"
                document.getElementById('cformpassword').value = ""
                document.getElementById("c_pwd_error").style.display = "none"
                  document.getElementById("name").innerText="Registeration completed successfully"
                   document.getElementById("name").style.color="green"
            } else {
                let oneUser = array.find(data => {
                    return data.email === mail
                })
                if (oneUser == undefined) {
                    array.push(details)
                    document.getElementById('username').style.borderColor = "lightgreen"
                    document.getElementById('username').value = ""
                    document.getElementById("name_error").style.display = "none"
                    document.getElementById("icon_one").style.display = "none"
                      document.getElementById("name").innerText="Registeration completed successfully"
                       document.getElementById("name").style.color="green"

                    document.getElementById('email').style.borderColor = "lightgreen"
                    document.getElementById('email').value = ""
                    document.getElementById("mail_error").style.display = "none"
                    document.getElementById("icon_two").style.display = "none"
                      document.getElementById("name").innerText="Registeration completed successfully"
                       document.getElementById("name").style.color="green"

                    document.getElementById('password').style.borderColor = "lightgreen"
                    document.getElementById('password').value = ""
                    document.getElementById("pwd_error").style.display = "none"
                    document.getElementById("icon_three").style.display = "none"
                      document.getElementById("name").innerText="Registeration completed successfully"
                       document.getElementById("name").style.color="green"

                    document.getElementById('cformpassword').style.borderColor = "lightgreen"
                    document.getElementById('cformpassword').value = ""
                    document.getElementById("c_pwd_error").style.display = "none"
                      document.getElementById("name").innerText="Registeration completed successfully"
                       document.getElementById("name").style.color="green"
                }
            }


        } else {
            text = "Password does not match"
            document.getElementById('c_pwd_error').innerText = text;
            document.getElementById('cformpassword').style.borderColor = "rgb(178, 10, 10)"
            document.getElementById('icon_four').style.display = "block"
            document.getElementById('c_pwd_error').style.display = "block"
              document.getElementById("name").innerText="Register not complite"
              document.getElementById("name").style.color="red"
              
        }

        

    }
    
    console.log(array);




}


function mylogin() {

    let newmail = document.getElementById("login_mail").value
    let newpassword = document.getElementById("login_password").value
    let log_msg = document.querySelector('.log_msg')




    if (newpassword && newmail) {
        let oneUser = array.find(data => {
            return data.email === newmail

        })

        if (oneUser == undefined) {
            log_msg.innerText = " Email not found, Pls register"
            document.getElementById('login_icon').style.display = "block"
        } else {
            if (oneUser.password === newpassword) {
                if (log_msg.classList.contains('error')) {
                    log_msg.classList.remove('error')
                    log_msg.classList.add('success')
                    log_msg.innerText = "Successfully Login"

                } else {
                    log_msg.classList.add('success')
                    log_msg.innerText = "Successfully Login"
                    document.getElementById("login_icon").style.display = "none"
                

                }

            } else

                if (log_msg.classList.contains('success')) {
                    log_msg.classList.remove('success')
                    log_msg.classList.add('error')
                    log_msg.innerText = "Invalid Password"

                } else {
                    log_msg.classList.add('error')
                    log_msg.innerText = "Invalid Password"
                }

        }
    } else {
        log_msg.innerText = " type password"
        log_msg.classList.add('error')
    }

}



