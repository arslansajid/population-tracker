
import { createStyles, Theme } from '@material-ui/core/styles';
import Colors from "../../statics/colors";

const styles = createStyles((theme: Theme) => ({
    mapArea: {
        height: "calc(100vh - 100px)",
        position: "relative",
        [theme.breakpoints.down('sm')]: {
            height: "calc(100vh - 140px)",
        }
    },
    messageBackground: {
        background: theme.palette.primary.main,
        display: 'inline-block',
        padding: 7,
        borderRadius: 7,
        color: "white",
    },
    messageArea: {
        height: '72vh',
        overflowY: 'auto',
        display: "flex",
        flexDirection: "column-reverse",
        [theme.breakpoints.down('sm')]: {
            height: '55vh',
        }
    },
    selectedChatContainer: {
        borderBottom: `1px solid ${Colors.borderColor}`,
        minHeight: 73,
        padding: theme.spacing(0, 2),
    },
    messageInput: {
        background: "white",
        borderTop: `1px solid ${Colors.borderColor}`,
        padding: "10px 16px",
        position: "absolute",
        width: "calc(100% - 32px)",
        bottom: 0,

        [theme.breakpoints.down('sm')]: {
            bottom: "0px",
        }

    },
    send: {
        height: '2.5rem',
        width: '2.5rem',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    sendIcon: {
        height: '0.95rem',
        width: '0.95rem',
        marginLeft: 2
    },
    centerContainer: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
    },
    listItemText: {
        textAlign: "-webkit-right",
    }
}))

export default styles;