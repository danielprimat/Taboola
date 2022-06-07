package com.taboola;
import android.content.pm.PackageInfo;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import java.util.HashMap;
import java.util.Map;


public class AppInfoModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    AppInfoModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;

    }

    private PackageInfo getPackageInfo() throws Exception {
        return getReactApplicationContext().getPackageManager().getPackageInfo(getReactApplicationContext().getPackageName(), 0);
    }

    @Override
    public Map<String, Object> getConstants() {
        String appVersion, appName;

        try {
            appVersion = getPackageInfo().versionName;
            appName = getReactApplicationContext().getApplicationInfo().loadLabel(getReactApplicationContext().getPackageManager()).toString();
        } catch (Exception e) {
            appVersion = "unknown";
            appName = "unknown";
        }

        final Map<String, Object> constants = new HashMap<>();

        constants.put("appVersion", appVersion);
        constants.put("appName", appName);


        return constants;
    }

    @NonNull
    @Override
    public String getName() {
        return "AppInfoModule";
    }


}

