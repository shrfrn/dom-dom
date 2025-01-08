const _regex = /[\s,]+/
const _utils = {
    on(strEvents, handler, options) {
        const events = strEvents.split(_regex)
        events.forEach(ev => this.addEventListener(ev, handler, options))

        return this
    },
    off(strEvents, handler, options) {
        const events = strEvents.split(_regex)
        events.forEach(ev => this.removeEventListener(ev, handler, options))

        return this
    },

    addClass(strClassList) {
        const classList = strClassList.split(_regex)
        this.classList.add(...classList)

        return this
    },
    removeClass(strClassList) {
        const classList = strClassList.split(_regex)
        this.classList.remove(...classList)

        return this
    },
    toggleClass(strClassList) {
        const classList = strClassList.split(_regex)
        classList.forEach(cls => this.classList.toggle(cls))

        return this
    },
    
    attr(attr, value) {
        if (!value) return this.getAttribute(attr)
        this.setAttribute(attr, value)

        return this
    }
}

const _arrUtils = {
    on(strEvents, handler, options) {
        this.forEach(el => el.on(strEvents, handler, options))
        return this
    },
    off(strEvents, handler, options) {
        this.forEach(el => el.off(strEvents, handler, options))
        return this
    },
    
    addClass(strClassList) {
        this.forEach(el => el.addClass(strClassList))
        return this
    },
    removeClass(strClassList) {
        this.forEach(el => el.removeClass(strClassList))
        return this
    },
    toggleClass(strClassList) {
        this.forEach(el => el.toggleClass(strClassList))
        return this
    },
    
    attr(attr, value) {
        if (!value) return this[0].attr(attr)
            
        this.forEach(el => el.attr(attr, value))
        return this
    }
}

function _getNodeList(selector, subtree) {
    if (selector instanceof NodeList || Array.isArray(selector)) {
        return selector
    }
    if (selector instanceof HTMLElement || selector instanceof SVGElement) {
        return [selector]
    }
    return subtree.querySelectorAll(selector)
}

function $(selector, subtree = document) {
    let nodeList = _getNodeList(selector, subtree)
    nodeList.forEach(el => Object.assign(el, _utils))

    return Object.assign(Array.from(nodeList), _arrUtils)
}

export default $