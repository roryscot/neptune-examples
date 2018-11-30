import { lightenDarkenColor } from 'utils/helperFunctions';

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
    teal: "#00839b",
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
};


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

const input_bg = colors.tertiary;
const input_box_shadow = `inset 0 1px 1px rgba(${colors.black}, 0.075)`;
const input_color = colors.gray_700;
const input_border_color = `rgba(${colors.black}, 0.15)`;

const forms = {
    input_bg: input_bg,
    input_disabled_bg: colors.gray_200,
    input_color: input_color,
    input_border_color: `rgba(${colors.black}, 0.15)`,
    input_btn_border_width: components.border_width,
    input_box_shadow: input_box_shadow,
    input_border_radius: components.border_radius,
    input_border_radius_lg: components.border_radius_lg,
    input_border_radius_sm: components.border_radius_sm,
    input_focus_bg: input_bg,
    input_focus_border_color: lightenDarkenColor(colors.primary, 25),
    input_focus_box_shadow: [input_box_shadow, buttons.btn_focus_box_shadow],
    input_focus_color: input_color,
    input_placeholder_color: colors.gray_600,
    input_height_border: buttons.input_btn_border_width * 2,
    // input_height_inner: (font.font_size_base * $input_btn_line_height) + ($input_btn_padding_y * 2),
    // input_height: calc(#{$input_height_inner} + #{$input_height_border}),
    // input_height_inner_sm: ($font_size_sm * $input_btn_line_height_sm) + ($input_btn_padding_y_sm * 2),
    // input_height_sm: calc(#{$input_height_inner_sm} + #{$input_height_border}),
    // input_height_inner_lg: ($font_size_sm * $input_btn_line_height_lg) + ($input_btn_padding_y_lg * 2),
    // input_height_lg: calc(#{$input_height_inner_lg} + #{$input_height_border}),
    input_transition: `border_color ease-in-out 0.15s, box_shadow ease-in-out 0.15s`,
    form_text_margin_top: `0.25rem`,
    form_check_margin_bottom: `0.5rem`,
    form_check_input_gutter: `1.25rem`,
    form_check_input_margin_y: `0.25rem`,
    form_check_input_margin_x: `0.25rem`,
    form_check_inline_margin_x: `0.75rem`,
    form_group_margin_bottom: `1rem`,
    input_group_addon_bg: colors.gray_200,
    input_group_addon_border_color: input_border_color,
    custom_control_gutter: `1.5rem`,
    custom_control_spacer_y: `0.25rem`,
    custom_control_spacer_x: `1rem`,
    custom_control_indicator_size: `1rem`,
    custom_control_indicator_bg: `#ddd`,
    custom_control_indicator_bg_size: `50% 50%`,
    custom_control_indicator_box_shadow: `inset 0 0.25rem 0.25rem rgba(${colors.black}, 0.1)`,
    custom_control_indicator_disabled_bg: colors.gray_200,
    custom_control_description_disabled_color: colors.gray_600,
    // custom_control_indicator_checked_color: $white,
    // custom_control_indicator_checked_bg: theme_color('primary'),
    // custom_control_indicator_checked_box_shadow: none,
    // custom_control_indicator_focus_box_shadow: 0 0 0 1px $body_bg, 0 0 0 3px theme_color('primary'),
    // custom_control_indicator_active_color: $white,
    // custom_control_indicator_active_bg: lighten(theme_color('primary'), 35%),
    // custom_control_indicator_active_box_shadow: none,
    // custom_checkbox_indicator_border_radius: $border_radius,
    // custom_checkbox_indicator_indeterminate_bg: theme_color('primary'),
    // custom_checkbox_indicator_indeterminate_color: $custom_control_indicator_checked_color,
    // custom_checkbox_indicator_indeterminate_box_shadow: none,
    // custom_radio_indicator_border_radius: 50%,
    // custom_select_padding_y: 0.375rem,
    // custom_select_padding_x: 0.75rem,
    // custom_select_height: $input_height,
    // custom_select_indicator_padding: 1rem,
    // custom_select_line_height: $input_btn_line_height,
    // custom_select_color: $input_color,
    // custom_select_disabled_color: $gray_600,
    // custom_select_bg: $white,
    // custom_select_disabled_bg: $gray_200,
    // custom_select_bg_size: 8px 10px,
    // custom_select_indicator_color: #333,
    // custom_select_border_width: $input_btn_border_width,
    // custom_select_border_color: $input_border_color,
    // custom_select_border_radius: $border_radius,
    // custom_select_focus_border_color: lighten(theme_color('primary'), 25%),
    // custom_select_focus_box_shadow: inset 0 1px 2px rgba($black, 0.075), 0 0 5px rgba($custom_select_focus_border_color, 0.5),
    // custom_select_font_size_sm: 75%,
    // custom_select_height_sm: $input_height_sm,
    // custom_file_height: 2.5rem,
    // custom_file_width: 14rem,
    // custom_file_focus_box_shadow: 0 0 0 0.075rem $white, 0 0 0 0.2rem theme_color('primary'),
    // custom_file_padding_y: 1rem,
    // custom_file_padding_x: 0.5rem,
    // custom_file_line_height: 1.5,
    // custom_file_color: $gray_700,
    // custom_file_bg: $white,
    // custom_file_border_width: $border_width,
    // custom_file_border_color: $input_border_color,
    // custom_file_border_radius: $border_radius,
    // custom_file_box_shadow: inset 0 0.2rem 0.4rem rgba($black, 0.05),
    // custom_file_button_color: $custom_file_color,
    // custom_file_button_bg: $gray_200,
    // custom_file_text: (placeholder: (en: 'Choose file...'), button_label: (en: 'Browse')),
    form_feedback_valid_color: colors.success,
    form_feedback_invalid_color: colors.danger,
};


// Dropdown
const dropdown = {
    dropdown_min_width: "10rem",
    dropdown_padding_y: "0.5rem",
    dropdown_spacer: "0.125rem",
    dropdown_bg: `${colors.white}`,
    dropdown_border_color: `rgba(${colors.black}, 0.15)`,
    dropdown_border_width: components.border_width,
    dropdown_divider_bg: colors.gray_200,
    dropdown_box_shadow: `0 0.5rem 1rem rgba(${colors.black}, 0.175)`,
    dropdown_link_color: colors.$gray_900,
    dropdown_link_hover_color: lightenDarkenColor(colors.gray_900, -55),
    dropdown_link_hover_bg: colors.gray_100,
    dropdown_link_active_color: components.component_active_color,
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

export const DefaultTheme = {
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