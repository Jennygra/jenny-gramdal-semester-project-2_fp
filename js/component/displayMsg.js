export function displayMsg(msgType, message, target) {
  const element = document.querySelector(target);

  element.innerHTML = `
    <div class="msg ${msgType}">${message}</div>
    `;
}

export function noAccessMsg(target) {
  const container = document.querySelector(target);

  if (localStorage.getItem("token") === null) {
    container.innerHTML = `
    <div class="no_access_msg--wrapper"> 
    <h1>Sorry! <br> You don't have access to this site</h1> 
    <p> Return back to <a href="index.html">homepage</a> or <a href="backoffice.html">log in</a> to gain access</p>
    </div>`;
  }
}
