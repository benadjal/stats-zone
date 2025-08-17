import { definePreset } from "@primeuix/themes";
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{green.50}',
            100: '{green.100}',
            200: '{green.200}',
            300: '{green.300}',
            400: '{green.400}',
            500: '{green.500}',
            600: '{green.600}',
            700: '{green.700}',
            800: '{green.800}',
            900: '{green.900}',
            950: '{green.950}'
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '{emerald.50}',
                    100: '{emerald.100}',
                    200: '{emerald.200}',
                    300: '{emerald.300}',
                    400: '{emerald.400}',
                    500: '{emerald.500}',
                    600: '{emerald.600}',
                    700: '{emerald.700}',
                    800: '{emerald.800}',
                    900: '{emerald.900}',
                    950: '{emerald.950}'
                }
            },
            dark: {
                surface: {
                    0: '#ffffff',
                    50: '{stone.50}',
                    100: '{stone.100}',
                    200: '{stone.200}',
                    300: '{stone.300}',
                    400: '{stone.400}',
                    500: '{stone.500}',
                    600: '{stone.600}',
                    700: '{stone.700}',
                    800: '{stone.800}',
                    900: '{stone.900}',
                    950: '{stone.950}'
                }
            },
        }
    },
    components: {
        inputtext: {
            colorScheme: {
                light: {
                    root: {
                    },
                },
                dark: {
                    root: {
                        borderColor: '{primary.500}',
                        invalidBorderColor: '{primary.500}',
                        borderRadius: '10px'
                    }
                }
            }
        },
        floatlabel: {
            colorScheme: {
                light: {
                    root: {
                    },
                },
                dark: {
                    root: {
                        invalidColor: '{surface.500}',
                    }
                }
            }
        },
        card: {
            colorScheme: {
                dark: {
                    root: {
                        background: '{surface.950}'
                    }
                }
            }
        },
        accordion: {
            colorScheme: {
                dark: {
                    panel: {
                        borderWidth: '1px'
                    }
                }
            }
        },
        menubar: {
            mobileButton: {
                size: '3rem',
                color: '{primary.600}',
            },
            baseItem : {
                 padding : '1rem  1rem'
            },
            colorScheme: {
                dark: {
                    root: {
                        gap: '20px',
                        background: '{surface.850}',
                        borderColor: '{surface.850}'
                    },
                }
            },
        }
    }
});
