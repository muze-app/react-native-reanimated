import { BaseAnimationBuilder } from '../animationBuilder/BaseAnimationBuilder';
export class FlipInXUp extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return (targetValues) => {
                'worklet';
                return {
                    initialValues: {
                        transform: [
                            { perspective: 500 },
                            { rotateX: '90deg' },
                            { translateY: -targetValues.height },
                        ],
                    },
                    animations: {
                        transform: [
                            { perspective: 500 },
                            { rotateX: delayFunction(delay, animation('0deg', config)) },
                            { translateY: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipInXUp();
    }
}
export class FlipInYLeft extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return (targetValues) => {
                'worklet';
                return {
                    initialValues: {
                        transform: [
                            { perspective: 500 },
                            { rotateY: '-90deg' },
                            { translateX: -targetValues.width },
                        ],
                    },
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateY: delayFunction(delay, animation('0deg', config)) },
                            { translateX: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipInYLeft();
    }
}
export class FlipInXDown extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return (targetValues) => {
                'worklet';
                return {
                    initialValues: {
                        transform: [
                            { perspective: 500 },
                            { rotateX: '-90deg' },
                            { translateY: targetValues.height },
                        ],
                    },
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateX: delayFunction(delay, animation('0deg', config)) },
                            { translateY: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipInXDown();
    }
}
export class FlipInYRight extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return (targetValues) => {
                'worklet';
                return {
                    initialValues: {
                        transform: [
                            { perspective: 500 },
                            { rotateY: '90deg' },
                            { translateX: targetValues.width },
                        ],
                    },
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateY: delayFunction(delay, animation('0deg', config)) },
                            { translateX: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipInYRight();
    }
}
export class FlipInEasyX extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return () => {
                'worklet';
                return {
                    initialValues: {
                        transform: [{ perspective: 500 }, { rotateX: '90deg' }],
                    },
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateX: delayFunction(delay, animation('0deg', config)) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipInEasyX();
    }
}
export class FlipInEasyY extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return () => {
                'worklet';
                return {
                    initialValues: {
                        transform: [{ perspective: 500 }, { rotateY: '90deg' }],
                    },
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateY: delayFunction(delay, animation('0deg', config)) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipInEasyY();
    }
}
export class FlipOutXUp extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return (targetValues) => {
                'worklet';
                return {
                    initialValues: {
                        transform: [
                            { perspective: 500 },
                            { rotateX: '0deg' },
                            { translateY: 0 },
                        ],
                    },
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateX: delayFunction(delay, animation('90deg', config)) },
                            {
                                translateY: delayFunction(delay, animation(-targetValues.height, config)),
                            },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipOutXUp();
    }
}
export class FlipOutYLeft extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return (targetValues) => {
                'worklet';
                return {
                    initialValues: {
                        transform: [
                            { perspective: 500 },
                            { rotateY: '0deg' },
                            { translateX: 0 },
                        ],
                    },
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateY: delayFunction(delay, animation('-90deg', config)) },
                            {
                                translateX: delayFunction(delay, animation(-targetValues.width, config)),
                            },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipOutYLeft();
    }
}
export class FlipOutXDown extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return (targetValues) => {
                'worklet';
                return {
                    initialValues: {
                        transform: [
                            { perspective: 500 },
                            { rotateX: '0deg' },
                            { translateY: 0 },
                        ],
                    },
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateX: delayFunction(delay, animation('-90deg', config)) },
                            {
                                translateY: delayFunction(delay, animation(targetValues.height, config)),
                            },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipOutXDown();
    }
}
export class FlipOutYRight extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return (targetValues) => {
                'worklet';
                return {
                    initialValues: {
                        transform: [
                            { perspective: 500 },
                            { rotateY: '0deg' },
                            { translateX: 0 },
                        ],
                    },
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateY: delayFunction(delay, animation('90deg', config)) },
                            {
                                translateX: delayFunction(delay, animation(targetValues.width, config)),
                            },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipOutYRight();
    }
}
export class FlipOutEasyX extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return () => {
                'worklet';
                return {
                    initialValues: {
                        transform: [{ perspective: 500 }, { rotateX: '0deg' }],
                    },
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateX: delayFunction(delay, animation('90deg', config)) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipOutEasyX();
    }
}
export class FlipOutEasyY extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.delayV;
            const callback = this.callbackV;
            return () => {
                'worklet';
                return {
                    initialValues: {
                        transform: [{ perspective: 500 }, { rotateY: '0deg' }],
                    },
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateY: delayFunction(delay, animation('90deg', config)) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipOutEasyY();
    }
}
