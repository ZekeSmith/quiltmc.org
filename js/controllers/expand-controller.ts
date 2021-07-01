import { Controller } from "stimulus"

const ARROW_UP = '<i class="fas fa-chevron-up"></i>'
const ARROW_DOWN = '<i class="fas fa-chevron-down"></i>'

// Controller for elements that can expand to show all their contents or shrink
// down to a certain size.
export default class ExpandController extends Controller {
    static targets = [ "body", "arrow" ]
    static values = { collapseHeight: String, useFlex: Boolean }

    declare readonly bodyTarget: HTMLElement
    declare readonly collapseHeightValue: string
    
    declare readonly hasArrowTarget: boolean
    declare readonly arrowTarget: HTMLElement

    expanded: boolean

    connect() {
        this.collapse()
    }

    update_state() {
        console.log(this.hasArrowTarget)
        if (this.hasArrowTarget) {
            if (this.expanded) {
                this.arrowTarget.innerHTML = ARROW_UP
            } else {
                this.arrowTarget.innerHTML = ARROW_DOWN
            }
        }
    }

    expand() {
        this.expanded = true
        this.bodyTarget.style.maxHeight = `${this.bodyTarget.scrollHeight}px`
        this.update_state()
    }

    collapse() {
        this.expanded = false
        console.log(this.collapseHeightValue)
        this.bodyTarget.style.maxHeight = this.collapseHeightValue
        this.update_state()
    }

    toggle() {
        if (this.expanded) {
            this.collapse()
        } else {
            this.expand()
        }
    }
}

