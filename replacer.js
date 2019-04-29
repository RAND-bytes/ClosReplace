let closBold = ['clos']
let closReplace = []

browser.storage.sync.get(null).then((response) => {
  if (response.closReplace) {
    if (response.replaceWords) {
      closReplace = response.replaceWords
    }
    let pattern = ''
    for (let i = 0; i < closReplace.length; i++) {
      pattern =  new RegExp(closReplace[i],'gi')
      
      findAndReplaceDOMText(document.body, {
        find: pattern,
        replace: 'Clos',
        preset: 'prose'
      });
    }
  }
  
  if (response.closBold) {
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
