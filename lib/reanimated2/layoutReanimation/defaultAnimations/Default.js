export const DefaultLayout = (_) => {
    'worklet';
    return {
        initialValues: {},
        animations: {},
    };
};
export const DefaultEntering = (targetValues) => {
    'worklet';
    return {
        initialValues: {
            originX: targetValues.originX,
            originY: targetValues.originY,
            width: targetValues.width,
            height: targetValues.height,
        },
        animations: {},
    };
};
export const DefaultExiting = (startValues) => {
    'worklet';
    return {
        initialValues: {
            originX: startValues.originX,
            originY: startValues.originY,
            width: startValues.width,
            height: startValues.height,
        },
        animations: {},
    };
};
