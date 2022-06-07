package com.taboola;
import android.app.UiModeManager;
import android.content.Context;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


public class DarkModeModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    DarkModeModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;

    }

    @NonNull
    @Override
    public String getName() {
        return "DarkModeModule";
    }

    @ReactMethod
    public void setNightMode(boolean isNightMode) {
        UiModeManager uiManager = (UiModeManager) reactContext.getSystemService(Context.UI_MODE_SERVICE);
        if (isNightMode) {
            uiManager.setNightMode(UiModeManager.MODE_NIGHT_YES);
        } else {
            uiManager.setNightMode(UiModeManager.MODE_NIGHT_NO);
        }

    }


}

