import "./globals.css";
import Nav from "./components/Nav";
import SideMenu from "./components/sideMenu";

export default function layout({ children }) {
    return (
        <html lang="ar">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>

            <body>
                <Nav />

                <SideMenu />
                <div className="container">{children}</div>
            </body>
        </html>
    );
}
