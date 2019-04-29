browser.runtime.onInstalled.addListener(function () {
  browser.storage.sync.get(null).then((response) => {
    if (response.closBold === null) {
      browser.storage.sync.set({closBold: true})
    }

    if (response.boldWords === null) {
      browser.storage.sync.set({boldWord: 'Clos'})
    }

    if (response.closReplace === null) {
      browser.storage.sync.set({closReplace: false})
    }

    if (response.findWords === null) {
      browser.storage.sync.set({closReplace: ['bodns','meatalloids','weigth']})
    }

    if (response.replaceWord === null) {
      browser.storage.sync.set({replaceWord: 'Clos'})
    }
  })

  browser.tabs.create({url: "install.html"})
})