import { ThemeMode, ThemeName } from "@lib/enums"

export const themesColorValues = {
    macchiato: {
        "--ctp-rosewater": "244, 219, 214",
        "--ctp-flamingo": "240, 198, 198",
        "--ctp-pink": "245, 189, 230",
        "--ctp-mauve": "198, 160, 246",
        "--ctp-red": "237, 135, 150",
        "--ctp-maroon": "238, 153, 160",
        "--ctp-peach": "245, 169, 127",
        "--ctp-yellow": "238, 212, 159",
        "--ctp-green": "166, 218, 149",
        "--ctp-teal": "139, 213, 202",
        "--ctp-sky": "145, 215, 227",
        "--ctp-sapphire": "125, 196, 228",
        "--ctp-blue": "138, 173, 244",
        "--ctp-lavender": "183, 189, 248",
        "--ctp-text": "202, 211, 245",
        "--ctp-subtext1": "184, 192, 224",
        "--ctp-subtext0": "165, 173, 203",
        "--ctp-overlay2": "147, 154, 183",
        "--ctp-overlay1": "128, 135, 162",
        "--ctp-overlay0": "110, 115, 141",
        "--ctp-surface2": "91, 96, 120",
        "--ctp-surface1": "73, 77, 100",
        "--ctp-surface0": "54, 58, 79",
        "--ctp-base": "36, 39, 58",
        "--ctp-mantle": "30, 32, 48",
        "--ctp-crust": "24, 25, 38",
    },
    latte: {
        "--ctp-rosewater": "220, 138, 120",
        "--ctp-flamingo": "221, 120, 120",
        "--ctp-pink": "234, 118, 203",
        "--ctp-mauve": "136, 57, 239",
        "--ctp-red": "210, 15, 57",
        "--ctp-maroon": "234, 32, 77",
        "--ctp-peach": "254, 100, 11",
        "--ctp-yellow": "223, 142, 29",
        "--ctp-green": "64, 160, 43",
        "--ctp-teal": "23, 146, 153",
        "--ctp-sky": "4, 165, 229",
        "--ctp-sapphire": "32, 159, 181",
        "--ctp-blue": "30, 102, 245",
        "--ctp-lavender": "114, 135, 253",
        "--ctp-text": "76, 79, 105",
        "--ctp-subtext1": "92, 95, 119",
        "--ctp-subtext0": "108, 111, 133",
        "--ctp-overlay2": "124, 127, 147",
        "--ctp-overlay1": "140, 143, 161",
        "--ctp-overlay0": "156, 160, 176",
        "--ctp-surface2": "172, 176, 190",
        "--ctp-surface1": "188, 192, 204",
        "--ctp-surface0": "204, 208, 218",
        "--ctp-base": "239, 241, 245",
        "--ctp-mantle": "230, 233, 239",
        "--ctp-crust": "220, 224, 232",
    },
}

export function applyTheme(themeMode: ThemeMode) {
    const themeName =
        themeMode === ThemeMode.DARK ? ThemeName.MACCHIATO : ThemeName.LATTE
    const root = document.querySelector(":root") as HTMLElement
    const colors = themesColorValues[themeName]
    for (const [variable, value] of Object.entries(colors)) {
        root.style.setProperty(variable, value)
    }
}
