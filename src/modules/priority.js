
// this is a simple function it sets the background according to the priority
function setPriority() {
    function setColor(element ,div) {
        switch (element.priority) {
            case "unimportant":
                div.style.background = '#10b981';
                break
            case "medium":
                div.style.background = '#1e40af';
                break
            case "important":
                div.style.background = "#FFBF00";
                break
            case "super-important":
                div.style.background = "#D21404";
                break
            case "daily":
                div.style.background = '#155e75'
                break
        }
    }
    return {setColor}

}

export default setPriority();