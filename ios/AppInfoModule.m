//
//  AppInfoModule.m
//  Taboola
//
//  Created by Dani on 07/06/2022.
//
#import "AppInfoModule.h"
#import <UIKit/UIKit.h>

@implementation AppInfoModule

RCT_EXPORT_MODULE();

- (NSString *) getAppName {
    NSString *displayName = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"];
    NSString *bundleName = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleName"];
    return displayName ? displayName : bundleName;
}
- (NSString *) getAppVersion {
    return [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"];
}
- (NSDictionary *)constantsToExport {
    return @{
         @"appVersion": [self getAppVersion],
         @"appName": [self getAppName],
     };
}



@end
