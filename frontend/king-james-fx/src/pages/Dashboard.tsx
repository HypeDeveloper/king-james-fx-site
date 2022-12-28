import { Outlet } from "react-router-dom"
import '../style/Dashboard.css'

import kingLogo from "../assets/img/kinglogo.png";


export function Dashboard() {
    return (
        <>
            <div className="dashBoard">
                <DashBoardNav />
                <div className="dashDisplay">
                    <div className="DD-top">
                        <div className="DD-texts">
                            <h1>Dashboard</h1>
                        </div>
                        <div className="others">
                            <div className="search-DD">
                                <div className="icon-DD"></div>
                                <p>Search</p>
                                <input type="text" />
                            </div>
                            <div className="users">
                                <div className="icon-DD userIcon"></div>
                            </div>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

function DashBoardNav(){
    return (
        <>
            <div className="DashNavWrap">
                <img src={kingLogo} alt="" />
                <div className="links-DD">
                    <div className="dd-button acitve">
                        <div className="box-DD">
                            <img src="" alt="" />
                        </div>
                        <a href="/dashboard/">Dashboard</a>
                    </div>

                    <div className="dd-button ">
                        <div className="box-DD"></div>
                        <a href="/dashboard/packages">View Packages</a>
                    </div>

                    <div className="dd-button ">
                        <div className="box-DD"></div>
                        <a href="/dashboard/transactions">Transactions</a>
                    </div>

                    <div className="dd-button ">
                        <div className="box-DD"></div>
                        <a href="/dashboard/support">Support</a>
                    </div>

                    <div className="dd-button ">
                        <div className="box-DD"></div>
                        <a href=" ">Logout</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export function DashBoardHome() {
    return (
        <>
            <div className="DB-Home">
                <div className="topSection-DB">
                    <div className="ammount-DD">
                        <p> Total Income</p>
                        <h1>$100</h1>
                    </div>
                    <div className="referrals-DD">
                        <p>Total Referals</p>
                        <h1>0</h1>
                    </div>
                </div>
            </div>
        </>
    )
}