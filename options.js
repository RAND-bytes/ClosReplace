function saveOptions() {
  browser.storage.sync.set({
    closBold: document.querySelector('input[name="closBold"]:checked').value,
    boldWords: document.querySelector('input[name="boldWords"]').value.split(','),
    closReplace: document.querySelector('input[name="closReplace"]:checked').value,
    findWords: document.querySelector('input[name="findWords"]').value.split(','),
    replaceWord: document.querySelector('input[name="replaceWord"]').value
  })
}

function restoreOptions() {
  browser.storage.sync.get(null).then((response) => {
    if (response.closBold != null) {
      document.querySelector(`input[name="closBold"][value="${response.closBold}"]`).checked = true
    } else {
      browser.storage.sync.set({closBold: true})
      document.querySelector(`input[name="closBold"][value="true"]`).checked = true
    }

    if (response.boldWords != null) {
      document.querySelector('input[name="boldWords"]').value = response.boldWords
    } else {
      browser.storage.sync.set({boldWord: 'Clos'})
      document.querySelector('input[name="boldWords"]').value = 'clos,chemistry'
    }

    if (response.closReplace != null) {
      document.querySelector(`input[name="closReplace"][value="${response.closReplace}"]`).checked = true
    } else {
      browser.storage.sync.set({closReplace: false})
      document.querySelector(`input[name="closReplace"][value="false"]`).checked = true
    }

    if (response.findWords != null) {
      document.querySelector(`input[name="findWords"]`).value = response.findWords
    } else {
      browser.storage.sync.set({closReplace: ['bodns','meatalloids','weigth']})
      document.querySelector('input[name="findWords"]').value = 'bodns,meatalloids,weigth'
    }

    if (response.replaceWord != null) {
      document.querySelector('input[name="replaceWord"]').value = response.replaceWord
    } else {
      browser.storage.sync.set({replaceWord: 'Clos'})
      document.querySelector('input[name="replaceWord"]').value = 'Clos'
    }
  })
}

document.addEventListener('DOMContentLoaded', restoreOptions)
document.querySelector("form").addEventListener("submit", saveOptions)