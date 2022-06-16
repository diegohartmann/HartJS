import theme from "../lib/enums/theme"

const useTheme = (_theme:theme) => () => {
    document.querySelector(`body`)?.setAttribute(`data-theme`, _theme)
}

export default useTheme