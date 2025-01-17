#import <React/RCTEventDispatcher.h>

#if __cplusplus
#import <RNReanimated/NativeReanimatedModule.h>
#include <memory>

namespace reanimated {

std::shared_ptr<reanimated::NativeReanimatedModule> createReanimatedModule(
    std::shared_ptr<facebook::react::CallInvoker> jsInvoker);

}

#endif
