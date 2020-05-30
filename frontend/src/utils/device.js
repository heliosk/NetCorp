const size = {
    mobile: '480px',
    tabletP: '768px',
    tabletL: '992px',
    desktop: '1200px'
}

// min-width: se for maior que o valor setado
export const device = {
    minMobile: `(min-width: ${size.mobile})`,
    minTabletP: `(min-width: ${size.tabletP})`,
    minLaptopL: `(min-width: ${size.tabletL})`,
    minDesktop: `(min-width: ${size.desktop})`,
};

