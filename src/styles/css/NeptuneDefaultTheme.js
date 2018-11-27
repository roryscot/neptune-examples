import lightenDarkenColor from 'utils/helperFunctions';

// CSS strings
const rem = 'rem';

// Colors
const colors = {
    primary: '#133d53',
    secondary: '#f7be68',
    tertiary: '#cec2ab',
    // active_link: '#00c1cf',
    // active_highlight: '#f7be68',
    disabled: '#ddd',
    warning: '#f79468',
    danger: '#f4524d',
    success: '#75d69c',
    info: '#00c1cf',
    white: '#fff',
    black: '#000',
    light: '#f7f7f7',
    dark: '#2a2a2a',
    gray_100: '#ebebeb',
    gray_200: '#e9ecef',
    gray_300: '#dee2e6',
    gray_400: '#ced4da',
    gray_500: '#adb5bd',
    gray_600: '#868e96',
    gray_700: '#495057',
    gray_800: '#343a40',
    gray_900: '#9c9c9c',
    red: '#fe6c61',
    orange: '#f79468',
    yellow: '#f7be68',
    green: '#6dab3c',
    turquoise: '#00c1cf',
    blue: '#4cadc9',
    indigo: '#5472d2',
    violet: '#8d6dc4',
    theme_color_interval: '8%',
};

const grays = {
    '100': colors.gray_100, 
    '200': colors.gray_200,
    '300': colors.gray_300,
    '400': colors.gray_400,
    '500': colors.gray_500,
    '600': colors.gray_600,
    '700': colors.gray_700,
    '800': colors.gray_800,
    '900': colors.gray_900,
}


// Spacing
const spacer = '1rem';
const spacing = {
    spacer: spacer,
    spacers: {
        0: 0, 1: (spacer * 0.25), 2: (spacer * 0.5), 3: spacer, 4: (spacer * 1.5), 5: (spacer * 3)
    },
    sizes: {
        25: '25%', 50: '50%', 75: '75%', 100: '100%'
    }
};


// Options
const options = {
    'enable-rounded': true,
    'enable-shadows': false,
    'enable-gradients': false,
    'enable-transitions': true,
    'enable-hover-media-query': false,
    'enable-grid-classes': true,
    'enable-print-styles': true,
};


// Body
const body = {
    body_bg: colors.white,
    body_color: colors.gray_900
};

// Links
const link_color = colors.primary;
const links = {
    link_color: link_color,
    link_decoration: 'none',
    link_hover_color: lightenDarkenColor(link_color, -15),
    link_hover_decoration: 'underline'
};

// Grid
const grid_breakpoint = {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
};

const container_max_widths = {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px'
};

const grid = {
    grid_breakpoint: grid_breakpoint,
    container_max_widths: container_max_widths,
    grid_columns: 12,
    grid_gutter_width: "30px"
};

// Components 
const border_radius = 0.25;
const components = {
    line_height_lg: '1.5',
    line_height_sm: '1.5',
    border_width: '1px',
    border_radius: border_radius + rem,
    border_radius_lg: (border_radius + border_radius/5) + rem,
    border_radius_sm: (border_radius + border_radius/5) + rem,
    component_active_color: colors.white,
    component_active_bg: colors.primary, 
    caret_width: '0.3em',
    transition_base: 'all 0.2s ease-in-out',
    transition_fade: 'opacity 0.15s linear',
    transition_collapse: 'height 0.35s ease',
};

// Fonts 
const font_family_sans_serif = ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'];
const font_family_monospace = ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'];
const font_weight_normal = 'normal';
const font_weight_bold = 'bold';
const font_size_base = '1rem';
const headings_line_height = '1.1';

const fonts = {
    font_family_base: font_family_sans_serif,
    font_size_base: font_size_base,
    font_size_lg: '1.25rem',
    font_size_sm: '0.875rem',
    font_weight_normal: font_weight_normal,
    font_weight_bold: font_weight_bold,
    font_weight_base: font_weight_normal,
    font_height_bold: '1.5',
    line_height_base: '1.5',
    h1_font_size: '2.5rem',
    h2_font_size: '2rem',
    h3_font_size: '1.75rem',
    h4_font_size: '1.5rem',
    h5_font_size: '1.25rem',
    h6_font_size: '1rem',
    headings_margin_bottom: (spacer / 2),
    headings_font_family: 'inherit',
    headings_font_weight: '500',
    headings_line_height: headings_line_height,
    headings_color: 'inherit',
    display1_size: '6rem',
    display2_size: '5.5rem',
    display3_size: '4.5rem',
    display4_size: '3.5rem',
    display1_weight: '300',
    display2_weight: '300',
    display3_weight: '300',
    display4_weight: '300',
    display_line_height: headings_line_height,
    lead_font_size: '1.25rem',
    lead_font_weight: '300',
    small_font_size: '80%',
    text_muted: colors.gray_600,
    blockquote_small_color: colors.gray_600,
    blockquote_font_size: (font_size_base * 1.25),
    hr_border_color: `rgba(${colors.black}, 0.1)`,
    hr_border_width: components.border_width,
    mark_padding: '0.2em',
    dt_font_weight: font_weight_bold,
    kbd_box_shadow: `inset 0 -0.1rem 0 rgba(${colors.black}, 0.25)`,
    nested_kbd_font_weight: font_weight_bold,
    list_inline_padding: '5px',
    mark_bg: '#fcf8e3',
},


// Buttons
const buttons = {
    input_btn_padding_y: '0.5rem',
    input_btn_padding_x: '0.75rem',
    input_btn_line_height: '1.25',
    input_btn_padding_y_sm: '0.25rem',
    input_btn_padding_x_sm: '0.5rem',
    input_btn_line_height_sm: '1.5',
    input_btn_padding_y_lg: '0.5rem',
    input_btn_padding_x_lg: '1rem',
    input_btn_line_height_lg: '1.5',
    btn_font_weight: font_weight_normal,
    btn_box_shadow: `inset 0 1px 0 rgba(${colors.white}, 0.15), 0 1px 1px rgba(${colors.black}, 0.075)`,
    btn_focus_box_shadow: `0 0 0 3px rgba(${colors.black}, 0.25)`,
    btn_active_box_shadow: `inset 0 3px 5px rgba(${colors.black}, 0.125)`,
    btn_link_disabled_color: colors.gray_600,
    btn_block_spacing_y: '0.5rem',
    btn_border_radius: border_radius,
    btn_border_radius_lg: components.border_radius_lg,
    btn_border_radius_sm: components.border_radius_sm,
    btn_transition: 'all 0.15s ease-in-out',
};


// Forms

const forms = {
// $input-bg: $white
// $input-disabled-bg: $gray-200
// $input-color: $gray-700
// $input-border-color: rgba($black, 0.15)
// $input-btn-border-width: $border-width
// $input-box-shadow: inset 0 1px 1px rgba($black, 0.075)
// $input-border-radius: $border-radius
// $input-border-radius-lg: $border-radius-lg
// $input-border-radius-sm: $border-radius-sm
// $input-focus-bg: $input-bg
// $input-focus-border-color: lighten(theme-color('primary'), 25%)
// $input-focus-box-shadow: $input-box-shadow, $btn-focus-box-shadow
// $input-focus-color: $input-color
// $input-placeholder-color: $gray-600
// $input-height-border: $input-btn-border-width * 2
// $input-height-inner: ($font-size-base * $input-btn-line-height) + ($input-btn-padding-y * 2)
// $input-height: calc(#{$input-height-inner} + #{$input-height-border})
// $input-height-inner-sm: ($font-size-sm * $input-btn-line-height-sm) + ($input-btn-padding-y-sm * 2)
// $input-height-sm: calc(#{$input-height-inner-sm} + #{$input-height-border})
// $input-height-inner-lg: ($font-size-sm * $input-btn-line-height-lg) + ($input-btn-padding-y-lg * 2)
// $input-height-lg: calc(#{$input-height-inner-lg} + #{$input-height-border})
// $input-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s
// $form-text-margin-top: 0.25rem
// $form-check-margin-bottom: 0.5rem
// $form-check-input-gutter: 1.25rem
// $form-check-input-margin-y: 0.25rem
// $form-check-input-margin-x: 0.25rem
// $form-check-inline-margin-x: 0.75rem
// $form-group-margin-bottom: 1rem
// $input-group-addon-bg: $gray-200
// $input-group-addon-border-color: $input-border-color
// $custom-control-gutter: 1.5rem
// $custom-control-spacer-y: 0.25rem
// $custom-control-spacer-x: 1rem
// $custom-control-indicator-size: 1rem
// $custom-control-indicator-bg: #ddd
// $custom-control-indicator-bg-size: 50% 50%
// $custom-control-indicator-box-shadow: inset 0 0.25rem 0.25rem rgba($black, 0.1)
// $custom-control-indicator-disabled-bg: $gray-200
// $custom-control-description-disabled-color: $gray-600
// $custom-control-indicator-checked-color: $white
// $custom-control-indicator-checked-bg: theme-color('primary')
// $custom-control-indicator-checked-box-shadow: none
// $custom-control-indicator-focus-box-shadow: 0 0 0 1px $body-bg, 0 0 0 3px theme-color('primary')
// $custom-control-indicator-active-color: $white
// $custom-control-indicator-active-bg: lighten(theme-color('primary'), 35%)
// $custom-control-indicator-active-box-shadow: none
// $custom-checkbox-indicator-border-radius: $border-radius
// $custom-checkbox-indicator-indeterminate-bg: theme-color('primary')
// $custom-checkbox-indicator-indeterminate-color: $custom-control-indicator-checked-color
// $custom-checkbox-indicator-indeterminate-box-shadow: none
// $custom-radio-indicator-border-radius: 50%
// $custom-select-padding-y: 0.375rem
// $custom-select-padding-x: 0.75rem
// $custom-select-height: $input-height
// $custom-select-indicator-padding: 1rem
// $custom-select-line-height: $input-btn-line-height
// $custom-select-color: $input-color
// $custom-select-disabled-color: $gray-600
// $custom-select-bg: $white
// $custom-select-disabled-bg: $gray-200
// $custom-select-bg-size: 8px 10px
// $custom-select-indicator-color: #333
// $custom-select-border-width: $input-btn-border-width
// $custom-select-border-color: $input-border-color
// $custom-select-border-radius: $border-radius
// $custom-select-focus-border-color: lighten(theme-color('primary'), 25%)
// $custom-select-focus-box-shadow: inset 0 1px 2px rgba($black, 0.075), 0 0 5px rgba($custom-select-focus-border-color, 0.5)
// $custom-select-font-size-sm: 75%
// $custom-select-height-sm: $input-height-sm
// $custom-file-height: 2.5rem
// $custom-file-width: 14rem
// $custom-file-focus-box-shadow: 0 0 0 0.075rem $white, 0 0 0 0.2rem theme-color('primary')
// $custom-file-padding-y: 1rem
// $custom-file-padding-x: 0.5rem
// $custom-file-line-height: 1.5
// $custom-file-color: $gray-700
// $custom-file-bg: $white
// $custom-file-border-width: $border-width
// $custom-file-border-color: $input-border-color
// $custom-file-border-radius: $border-radius
// $custom-file-box-shadow: inset 0 0.2rem 0.4rem rgba($black, 0.05)
// $custom-file-button-color: $custom-file-color
// $custom-file-button-bg: $gray-200
// $custom-file-text: (placeholder: (en: 'Choose file...'), button-label: (en: 'Browse'))
// $form-feedback-valid-color: theme-color('success')
// $form-feedback-invalid-color: theme-color('danger')
};


// Dropdown
const dropdown = {
    dropdown_min_width: "10rem",
    dropdown_padding_y: "0.5rem",
    dropdown_spacer: "0.125rem",
    dropdown_bg: `${colors.white}`,
    dropdown_border_color: `rgba(${colors.black}, 0.15)`,
    dropdown_border_width: border_width,
    dropdown_divider_bg: "$gray_200",
    dropdown_box_shadow: `0 0.5rem 1rem rgba(${colors.black}, 0.175)`,
    dropdown_link_color: colors.$gray_900,
    dropdown_link_hover_color: lightenDarkenColor(colors.gray_900, -55),
    dropdown_link_hover_bg: colors.gray_100,
    dropdown_link_active_color: component.component_active_color,
    dropdown_link_active_bg: "$component_active_bg",
    dropdown_link_disabled_color: "$gray_600", 
    dropdown_item_padding_y: "0.25rem",
    dropdown_item_padding_x: "1.5rem",
    dropdown_header_color: "$gray_600",
}

const navs = {
    nav_link_padding_y: "0.5rem", 
    nav_link_padding_x: "1rem", 
    nav_link_disabled_color: "$gray_600", 
    nav_tabs_border_color: "#ddd", 
    nav_tabs_border_width: "$border_width", 
    nav_tabs_border_radius: "$border_radius", 
    nav_tabs_link_hover_border_color: "$gray_200", 
    nav_tabs_link_active_color: "$gray_700", 
    nav_tabs_link_active_bg: "$body_bg", 
    nav_tabs_link_active_border_color: "#ddd", 
    nav_pills_border_radius: "$border_radius", 
    nav_pills_link_active_color: "$component_active_color",
    nav_pills_link_active_bg: "$component_active_bg",

};

export default DefaulTheme = {
    lightenDarkenColor: lightenDarkenColor,
    colors: colors,
    spacing: spacing, 
    options: options,
    body: body,
    links: links,
    grid: grid,
    components: components,
    fonts: fonts,
    buttons: buttons,
    forms: forms, 
    dropdown: dropdown,
    navs: navs,
};