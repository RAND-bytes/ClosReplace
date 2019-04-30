let closBold = ['clos']
let closReplace = []

browser.storage.sync.get(null).then((response) => {
  if (response.closReplace) {
    if (response.findWords) {
      closReplace = response.findWords
    }
    let pattern = ''
    for (let i = 0; i < closReplace.length; i++) {
      pattern =  new RegExp(closReplace[i],'gi')
      
      findAndReplaceDOMText(document.body, {
        find: pattern,
        replace: response.replaceWord,
        preset: 'prose'
      });
    }
  }
  
  if (response.closBold) {
    if (response.boldWords) {
      closBold = response.boldWords
    }
    let pattern = ''
    for (let i = 0; i < closBold.length; i++) {
      pattern =  new RegExp(closBold[i],'gi')
      
      findAndReplaceDOMText(document.body, {
        find: pattern,
        wrap: 'strong',
        preset: 'prose'
      });
    }
  }
})
