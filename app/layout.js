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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
                    rel="stylesheet"
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
