const plugin_id = "yesoreyeram-boomtable-panel";
const value_name_options = [
    { text: "Min", value: "min" },
    { text: "Max", value: "max" },
    { text: "Average", value: "avg" },
    { text: "Current", value: "current" },
    { text: 'Time of last data point', value: 'last_time', },
    { text: 'Time of last non null data point', value: 'last_time_nonnull' },
    { text: "Total", value: "total" }
];
const textAlignmentOptions = ["left", "right", "center"];
const config: any = {
    debug_mode: false,
    error: undefined,
    groupedData: undefined,
    hide_first_column: false,
    hide_headers: false,
    panelDefaults: {
        activePatternIndex: -1,
        default_title_for_rows: "Metric",
        patterns: [],
        row_col_wrapper: "_",
    }
};
const default_pattern_options: any = {
    bgColors: "green|orange|red",
    bgColors_overrides: "0->green|2->red|1->yellow",
    clickable_cells_link: "",
    col_name: "Value",
    decimals: 2,
    defaultBGColor: "transparent",
    defaultTextColor: "",
    delimiter: ".",
    displayTemplate: "_value_",
    enable_bgColor: false,
    enable_bgColor_overrides: false,
    enable_clickable_cells: false,
    enable_textColor: false,
    enable_textColor_overrides: false,
    enable_time_based_thresholds: false,
    enable_transform: false,
    enable_transform_overrides: false,
    filter: {
        value_above: "",
        value_below: ""
    },
    format: "none",
    name: "Default Pattern",
    null_color: "darkred",
    null_textcolor: "white",
    null_value: "No data",
    pattern: "*",
    row_name: "_series_",
    textColors: "red|orange|green",
    textColors_overrides: "0->red|2->green|1->yellow",
    thresholds: "70,90",
    time_based_thresholds: [],
    tooltipTemplate: "",
    transform_values: "_value_|_value_|_value_",
    transform_values_overrides: "0->down|1->up",
    valueName: "avg"
};
export {
    plugin_id,
    default_pattern_options,
    value_name_options,
    textAlignmentOptions,
    config
};
