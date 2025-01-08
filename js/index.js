const regex = /[\s,]+/
const _utils = {
    on(strEvents, handler, options) {
        const events = strEvents.split(regex)
        events.forEach(ev => this.addEventListener(ev, handler, options))
    },
    off(strEvents, handler, options) {
        const events = strEvents.split(regex)
        events.forEach(ev => this.removeEventListener(ev, handler, options))
    },

    addClass(strClassList) {
        const classList = strClassList.split(regex)
        this.classList.add(...classList)
    },
    removeClass(strClassList) {
        const classList = strClassList.split(regex)
        this.classList.remove(...classList)
    },
    toggleClass(strClassList) {
        const classList = strClassList.split(regex)
        classList.forEach(cls => this.classList.toggle(cls))
    },
    
    attr(attr, value) {
        if (!value) return this.getAttribute(attr)
        this.setAttribute(attr, value)
    }
}

const _arrUtils = {
    on(strEvents, handler, options) {
        this.forEach(el => el.on(strEvents, handler, options))
    },
    off(strEvents, handler, options) {
        this.forEach(el => el.off(strEvents, handler, options))
    },

    addClass(strClassList) {
        this.forEach(el => el.addClass(strClassList))
    },
    removeClass(strClassList) {
        this.forEach(el => el.removeClass(strClassList))
    },
    toggleClass(strClassList) {
        this.forEach(el => el.toggleClass(strClassList))
    },
    
    attr(attr, value) {
        if (!value) return this[0].attr(attr)
        this.forEach(el => el.setAttribute(attr, value))
    }
}

function $(selector, subtree = document) {
    const nodeList = subtree.querySelectorAll(selector)
    nodeList.forEach(el => Object.assign(el, _utils))

    return Object.assign(Array.from(nodeList), _arrUtils)
}

export default $