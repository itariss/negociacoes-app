export function domInjector(selector) {
    return function (target, propertyKey) {
        const getter = function () {
            const element = document.querySelector(selector);
            console.log(`Buscando elemento no DOM para o seletor ${selector}
                para injetar em ${propertyKey} `);
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
