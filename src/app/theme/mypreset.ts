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
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
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
                        borderColor: '{primary.500}',
                        invalidBorderColor: '{primary.500}',
                        borderRadius: '10px',
                        background: '{surface.50}'
                    },
                },
                dark: {
                    root: {
                        borderColor: '{primary.500}',
                        invalidBorderColor: '{primary.500}',
                        borderRadius: '10px',
                        background: '{surface.900}'
                    }
                }
            }
        },

        autocomplete: {
            root: {
                invalidBorderColor: '{primary.500}',
                borderRadius: '10px',
                background: '{surface.50}',
                invalidPlaceholderColor : '{stone.500}',
                color : '{stone.500}'
            }
        },
        floatlabel: {
            colorScheme: {
                light: {
                    root: {
                        invalidColor: '{surface.500}',
                    }
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
                light: {
                    root: {
                        background: '{surface.50}',
                    }
                },
                dark: {
                    root: {
                        background: '{surface.900}'
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
            baseItem: {
                padding: '1rem  1rem'
            },
            colorScheme: {
                dark: {
                    root: {
                        gap: '20px',
                        background: '{surface.850}',
                        borderColor: '{surface.850}'
                    },
                },
                light: {
                    root: {
                        borderColor: '{surface.0}',
                    }
                }
            },
        }
    }
});
