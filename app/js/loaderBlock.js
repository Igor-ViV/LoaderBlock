class LoaderBlock {
    constructor(options) {
        const settings = {
            overlay: true,
            createStart: true,
            destroyAfterLoad: true,
            delay: 500
        }
        Object.assign(settings, options)
        this.settings = settings
        if (settings.createStart) {
            this.create()
        }
        if (settings.destroyAfterLoad) {
            window.addEventListener('load', () => {
                this.destroy()
            })
        }
    }

    #getHtmlLoader() {
        return `
        <!-- Loader start -->
        <div class="loader-block ${this.settings.overlay ? 'loader-block--overlay' : ''}" id="loaderBlock">
            <div class="loader"></div>
        </div>
        <!-- Loader end -->`
    }

    create(className = '') {
        className = className === '' ? 'body' : className
        const element = document.querySelector(className)
        if (!element) { return }
        element.insertAdjacentHTML("afterEnd", this.#getHtmlLoader())
    }

    destroy() {
        const loaderBlock = document.getElementById('loaderBlock')
        if (loaderBlock) {
            loaderBlock.classList.add('loader-block--hide')
            setTimeout(() => {
                loaderBlock.remove()
            }, this.settings.delay)
        }
    }
}