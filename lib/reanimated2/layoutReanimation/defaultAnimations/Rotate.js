import { BaseAnimationBuilder } from '../animationBuilder/BaseAnimationBuilder';
export class RotateInDownLeft extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        opacity: delayFunction(delay, animation(1, config)),
                        transform: [
                            { rotate: delayFunction(delay, animation('0deg', config)) },
                            { translateX: delayFunction(delay, animation(0, config)) },
                            { translateY: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    initialValues: {
                        opacity: 0,
                        transform: [
                            { rotate: '-90deg' },
                            { translateX: values.width / 2 - values.height / 2 },
                            { translateY: -(values.width / 2 - values.height / 2) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RotateInDownLeft();
    }
}
export class RotateInDownRight extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        opacity: delayFunction(delay, animation(1, config)),
                        transform: [
                            { rotate: delayFunction(delay, animation('0deg', config)) },
                            { translateX: delayFunction(delay, animation(0, config)) },
                            { translateY: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    initialValues: {
                        opacity: 0,
                        transform: [
                            { rotate: '90deg' },
                            { translateX: -(values.width / 2 - values.height / 2) },
                            { translateY: -(values.width / 2 - values.height / 2) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RotateInDownRight();
    }
}
export class RotateInUpLeft extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        opacity: delayFunction(delay, animation(1, config)),
                        transform: [
                            { rotate: delayFunction(delay, animation('0deg', config)) },
                            { translateX: delayFunction(delay, animation(0, config)) },
                            { translateY: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    initialValues: {
                        opacity: 0,
                        transform: [
                            { rotate: '90deg' },
                            { translateX: values.width / 2 - values.height / 2 },
                            { translateY: values.width / 2 - values.height / 2 },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RotateInUpLeft();
    }
}
export class RotateInUpRight extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        opacity: delayFunction(delay, animation(1, config)),
                        transform: [
                            { rotate: delayFunction(delay, animation('0deg', config)) },
                            { translateX: delayFunction(delay, animation(0, config)) },
                            { translateY: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    initialValues: {
                        opacity: 0,
                        transform: [
                            { rotate: '-90deg' },
                            { translateX: -(values.width / 2 - values.height / 2) },
                            { translateY: values.width / 2 - values.height / 2 },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RotateInUpRight();
    }
}
export class RotateOutDownLeft extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        opacity: delayFunction(delay, animation(0, config)),
                        transform: [
                            { rotate: delayFunction(delay, animation('90deg', config)) },
                            {
                                translateX: delayFunction(delay, animation(values.width / 2 - values.height / 2, config)),
                            },
                            {
                                translateY: delayFunction(delay, animation(values.width / 2 - values.height / 2, config)),
                            },
                        ],
                    },
                    initialValues: {
                        opacity: 1,
                        transform: [{ rotate: '0deg' }, { translateX: 0 }, { translateY: 0 }],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RotateOutDownLeft();
    }
}
export class RotateOutDownRight extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        opacity: delayFunction(delay, animation(0, config)),
                        transform: [
                            { rotate: delayFunction(delay, animation('-90deg', config)) },
                            {
                                translateX: delayFunction(delay, animation(-(values.width / 2 - values.height / 2), config)),
                            },
                            {
                                translateY: delayFunction(delay, animation(values.width / 2 - values.height / 2, config)),
                            },
                        ],
                    },
                    initialValues: {
                        opacity: 1,
                        transform: [{ rotate: '0deg' }, { translateX: 0 }, { translateY: 0 }],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RotateOutDownRight();
    }
}
export class RotateOutUpLeft extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        opacity: delayFunction(delay, animation(0, config)),
                        transform: [
                            { rotate: delayFunction(delay, animation('-90deg', config)) },
                            {
                                translateX: delayFunction(delay, animation(values.width / 2 - values.height / 2, config)),
                            },
                            {
                                translateY: delayFunction(delay, animation(-(values.width / 2 - values.height / 2), config)),
                            },
                        ],
                    },
                    initialValues: {
                        opacity: 1,
                        transform: [{ rotate: '0deg' }, { translateX: 0 }, { translateY: 0 }],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RotateOutUpLeft();
    }
}
export class RotateOutUpRight extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        opacity: delayFunction(delay, animation(0, config)),
                        transform: [
                            { rotate: delayFunction(delay, animation('90deg', config)) },
                            {
                                translateX: delayFunction(delay, animation(-(values.width / 2 - values.height / 2), config)),
                            },
                            {
                                translateY: delayFunction(delay, animation(-(values.width / 2 - values.height / 2), config)),
                            },
                        ],
                    },
                    initialValues: {
                        opacity: 1,
                        transform: [{ rotate: '0deg' }, { translateX: 0 }, { translateY: 0 }],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RotateOutUpRight();
    }
}
