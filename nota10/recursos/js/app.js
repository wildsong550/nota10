let cont = 0

function registerlogin(){

    let login = localStorage.getItem("login")
    if(login === null)
        localStorage.setItem("login","icet2024")
        localStorage.setItem("password","icet2024")
      }  
}

function userValidation(){

  let loginStorage =   localStorage.getItem('login')
  
