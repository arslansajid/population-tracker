
import { createStyles, Theme } from '@material-ui/core/styles';
import Colors from "../../statics/colors";

const styles = createStyles((theme: Theme) => ({
    selectedItem: {
        cursor: "pointer",
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        borderBottom: `1px solid ${Colors.borderColor}`,
        borderRight: `3px solid ${theme.palette.primary.main}`,
    },
    listContainer: {
        overflow: "scroll",
        height: "100%",
    },
    list: {
        marginBottom: 70,
    },
    listwithButton: {
        marginBottom: 70 + theme.spacing(7), // button height
    },
    listItem: {
        cursor: "pointer",
        borderBottom: `1px solid ${Colors.borderColor}`,
    },
    borderRight500: {
        borderRight: `1px solid ${Colors.borderColor}`,
    },
    messageArea: {
        height: "calc(100vh - 100px)",
        overflow: "hidden",
        position: "relative",
    },
    searchChatContainer: {
        borderBottom: `1px solid ${Colors.borderColor}`,
        padding: theme.spacing(2),
        backgroundColor: "white",
        zIndex: 100,
        position: "sticky",
        top: 0
    },
    fixedButtonContainer: {
        position: "absolute",
        bottom: 0,
        height: 40,
        width: "calc(100% - 32px)",
        padding: theme.spacing(1, 2),
        background: theme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}))

export default styles;