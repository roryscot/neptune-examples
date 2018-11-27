import lightenDarkenColor from 'utils/helperFunctions';

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
const components = {
    line_height_lg: '1.5',
    line_height_sm: '1.5',
    border_width: '1px',
    border_radius: '0.25rem',
    border_radius_lg: '0.3rem',
    border_radius_sm: '0.2rem',
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
    hr_border_color: 'rgba(colors.black, 0.1)',
    hr_border_width: components.border_width,
    mark_padding: '0.2em',
    dt_font_weight: font_weight_bold,
    kbd_box_shadow: 'inset 0 -0.1rem 0 rgba($black, 0.25)',
    nested_kbd_font_weight: font_weight_bold,
    list_inline_padding: '5px',
    mark_bg: '#fcf8e3',
},













export default DefaulTheme = {
    lightenDarkenColor: lightenDarkenColor,
    colors: colors,
    spacing: spacing, 
    options: options,
    body: body,
    links: links,
    grid: grid,
    components: components,

    fonts: fonts

};