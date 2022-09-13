export function displayMsg(msgType, message, target) {
  const element = document.querySelector(target);

  element.innerHTML = `
    <div class="msg ${msgType}">${message}</div>
    `;
}
