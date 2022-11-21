export function escape(target, propertyKey, descriptor) {
    const medodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = medodoOriginal.apply(this, args);
        if (typeof retorno == "string") {
            console.log(`@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}`);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, "");
            return retorno;
        }
    };
    return descriptor;
}
//# sourceMappingURL=escape.js.map