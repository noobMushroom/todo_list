function setPriority() {
    function setColor(element ,div) {
        console.log(element.priority)
        switch (element.priority) {
            case "unimportant":
                div.style.background = 'grey';
                break
            case "medium":
                div.style.background = 'green';
                break
            case "important":
                div.style.background = "blue";
                break
            case "super-important":
                div.style.background = "red";
                break
            case "daily":
                div.style.background = 'pink'
                break
        }
    }

    return {setColor}

}

export default setPriority();