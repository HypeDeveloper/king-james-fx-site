import icon1 from "../assets/icons/home.svg";
import icon2 from "../assets/icons/box.svg";
import icon3 from "../assets/icons/portrait.svg";
import icon4 from "../assets/icons/sign-out-alt.svg";

export default function Dashboard() {
    let buttonIcons = [
        {
            icon: icon1,
            text: "Dashboard",
        },
        {
            icon: icon2,
            text: "Packages",
        },
        {
            icon: icon3,
            text: "Account",
        },
        {
            icon: icon4,
            text: "Logout",
        },
    ];
    let buttons = buttonIcons.map((icon) => {
        return <DashboardButton isActive={"active"} value={icon.text} icon={icon.icon } />;
    })
    return (
        <>
            <div className="dashBoardContent"> 
                <div className="sideBar-dashbar">
                    <h1 className="logo">My Logo</h1>
                    <div className="buttonsWrap">{buttons}</div>
                </div>
                <div className="main-dashbar"></div>
            </div>
        </>
    );
}

function DashboardButton(props: DashButton) {
    return (
        <div className={`button-dash ${props.isActive}`}>
            <img className="bttn-dash-icon" src={props.icon} alt="" />
            <p>{props.value}</p>
        </div>
    );
}

interface DashButton {
    value: string;
    isActive?: string;
    icon: string;
}
