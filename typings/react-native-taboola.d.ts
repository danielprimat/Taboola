declare module "@taboola/react-native-taboola" {
  import React from "react";
  import { ViewProps } from "react-native";

  class RNTaboolaView extends React.Component<RNTaboolaViewProps> {
  }

  export default RNTaboolaView;


  export interface RNTaboolaViewProps extends ViewProps {
    /**
     * Mandatory. A String value that sets the publisher name.
     */
    publisher: string;

    /**
     * Mandatory. A String value that sets the mode.
     */
    mode: string;

    /**
     * Mandatory. A String value that sets the placement.
     */
    placement: string;

    /**
     * Optional. A String value that set the same viewID in different RNTaboolaView to enable dedup (default is "current timestamp")
     */

    viewID?: string;

    /**
     *  Mandatory. A String value that sets the canonical URL for the page on which the widget is displayed.
     */
    pageUrl: string;
    /**
     * Mandatory. A String value that sets the page type of the page on which the widget is displayed
     * (one of article, photo, video, home, category, search).
     */
    pageType: string;

    /**
     * Optional. A String value that should be changed only if it's specified by your Taboola account manager (default is "mix")
     */
    targetType?: string;

    /**
     * Optional. A Boolean value that determines whether the view is in dark mode (default is true).
     */
    darkMode?: boolean;

    /**
     * A Boolean value that determines if to intercept scroll
     * In feed, set scrollIntercept to true (default is false).
     */
    interceptScroll?: boolean;

    /**
     * An object value to set extraProperties.
     */
    extraProperties?: object;

    /**
     * A Boolean value that determines whether RNTaboolaView handles the organic click (default is true).
     */
    taboolaHandleOrganicClick?: boolean;

    /**
     * Callback that is called continuously when the RNTaboolaView loads and changes height.
     */
    onDidLoad: (event: any) => void;

    /**
     * Callback that is called when the RNTaboolaView failds to load.
     */
    onDidFailToLoad?: (event: any) => void;

    /**
     * Callback that is called when a user click on item.
     */
    onItemClick?: (event: any) => void;
  }


}


