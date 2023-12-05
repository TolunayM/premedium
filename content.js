var currentTab = window.location.href
const prefix = "http://webcache.googleusercontent.com/search?q=cache:"

if(currentTab.includes("medium.com")){
    window.location.href = prefix + currentTab + '&sca_esv=584340551&strip=1&vwsrc=0'
}

window.history.replaceState({},'','')