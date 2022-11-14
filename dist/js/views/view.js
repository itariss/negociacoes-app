export class View {
    constructor(selector, scape) {
        this.scape = false;
        this.element = document.querySelector(selector);
    }
    update(model) {
        let template = this.template(model);
        this.scape
            ? (template = template.replace(/<script>[\s\S]*?<\/script>/, ""))
            : null;
        this.element.innerHTML = template;
    }
}
