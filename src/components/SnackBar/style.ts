// /**
//  * Define Custom Classes for this theme.
//  * @param theme
//  * @returns {{}}
//  */

import { createStyles, Theme } from '@material-ui/core/styles';

const styles = createStyles((theme: Theme) => ({
    success: {
        backgroundColor: "#32a852"
    },
    error: {
        backgroundColor: "#c72c2c"
    },
    info: {
        backgroundColor: "#dbde2a"
    },
    warning: {
        backgroundColor: "#172a50"
    },
    icon: {
        fontSize: 20
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1)
    },
    message: {
        display: "flex",
        alignItems: "center"
    },
    close: {
        borderRadius: "4px",
        backgroundColor: "inherit"
    },
    onTop: {
        zIndex: 9999
    }
}))

export default styles;