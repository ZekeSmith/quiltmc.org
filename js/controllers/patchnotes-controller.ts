import { Controller } from "stimulus"

import { LOADANI_HTML } from "../misc"

const CONTENT_URL = "https://launchercontent.mojang.com/";
const PATCHNOTES_URL = CONTENT_URL + "javaPatchNotes.json";

// JSON data loaded from launchercontent.mojang.com
export type Patchnote = {
    title: string,
    version: string,
    body: string,
    image: {url: string, title: string},
}

// Fetch patchnote data.
async function fetch_patchnotes(): Promise<Array<Patchnote>> {
    return fetch(PATCHNOTES_URL)
        .then(response => response.json())
        .then(notes => notes.entries as Array<Patchnote>)
}

export default class PatchnotesController extends Controller {
    static targets = [ "title", "image", "body", "vlist", "search" ];
    declare readonly titleTarget: HTMLElement
    declare readonly imageTarget: HTMLElement
    declare readonly bodyTarget: HTMLElement
    declare readonly vlistTarget: HTMLElement
    declare readonly searchTarget: HTMLInputElement

    // Patchnote metadata
    patchnotes: Array<Patchnote> = []

    // Currently displayed patch notes
    active: Patchnote = null
    // Last link that was marked active
    lastActiveLink: HTMLAnchorElement = null

    // Items currently showing in the version list
    vlistLinks: Array<{link: HTMLAnchorElement, note: Patchnote}> = []

    connect() {
        this.load_patchnotes()
        this.render()
        window.addEventListener("hashchange", this.boundRender)
    }

    disconnect() {
        window.removeEventListener("hashchange", this.boundRender)
    }

    // Load patchnotes into the list
    async load_patchnotes() {
        // Set loading animation in the version list while loading.
        let initHTML = this.vlistTarget.innerHTML
        this.vlistTarget.innerHTML = LOADANI_HTML

        this.patchnotes = await fetch_patchnotes()

        // Revert loading animation.
        this.vlistTarget.innerHTML = initHTML

        this.list_notes(this.patchnotes)
    }

    // Display the given list of entries in the list
    list_notes(entries: Array<Patchnote>) {
        for (let link of this.vlistLinks) {
            link.link.remove()
        }
        this.vlistLinks = []
        this.lastActiveLink = null

        // Create nav-links
        for (let entry of entries) {
            var newRef = document.createElement("a")
            newRef.innerText = entry.version
            newRef.setAttribute("href", window.location.pathname + "#" + entry.version)
            this.vlistLinks.push({link: newRef, note: entry})
            this.vlistTarget.appendChild(newRef)
        }
        this.update_active()
    }

    // Highlights the currently selected link with the "active" class
    update_active() {
        if (this.lastActiveLink) {
            this.lastActiveLink.setAttribute("class", "")
            this.lastActiveLink = null
        }
        const link = this.vlistLinks.find(l => l.note == this.active)
        if (link) {
            link.link.setAttribute("class", "active")
            this.lastActiveLink = link.link
        }
    }

    // Filter vlist by contents of search bar
    search() {
        const query = this.searchTarget.value
        if (query.length > 0) {
            this.list_notes(this.patchnotes.filter(note => {
                return note.version.includes(query)
            }))
        } else {
            this.list_notes(this.patchnotes)
        }
    }

    // Render the currently selected patch notes
    render() {
        // Read the version from the anchor and look it up in the json
        var version = window.location.hash.substr(1);
        var entry = this.patchnotes.find(e => e.version == version);
        if (entry) {
            // Replace title, body and image url wtih the selected version
            this.titleTarget.innerText = entry.title;
            this.bodyTarget.innerHTML = entry.body;
            this.imageTarget.setAttribute("src", 
                "https://launchercontent.mojang.com" + entry.image.url);
            this.imageTarget.setAttribute("alt", 
                "https://launchercontent.mojang.com" + entry.image.title);
        }
        this.active = entry
        this.update_active()
    }
    // Bound render for event listeners
    boundRender = this.render.bind(this)
}

