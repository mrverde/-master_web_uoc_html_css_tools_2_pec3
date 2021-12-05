import React, { useEffect } from "react";

const PageHome = () => {
    useEffect(() => {
        document.body.classList.add("overflow-y-hidden");
        window.scrollTo(0, 0);
        return () => {
            document.body.classList.remove("overflow-y-hidden");
        };
    }, []);

    return <>
        <div className="absolute grid w-full h-full grid-cols-4 gap-0 pl-5 bg-cover align-right bg-home-image max-w-fullhd mxlg:bg-min60">
            <div className="mxmd:hidden" />
            <div />
            <div />
            <div className="mr-8 mxmd:col-span-2 bg-primary parallelepiped bg-opacity-70">
                <div className="pt-5 pl-16 mx-auto text-2xl text-white sm:text-4xl md:text-2xl xl:text-4xl 2xl:text-6xl 3xl:text-7xl sm:pl-28 md:pl-14 lg:pl-20 xl:pl-28 2xl:pl-32 3xl:pl-40 font-secondary">The <br />  Orphan <br />of Zhao </div>
                <div className="pt-5 pl-16 mx-auto text-xl text-white md:text-md xl:text-xl 2xl:text-2xl 3xl:text-3xl sm:pl-28 md:pl-14 lg:pl-20 xl:pl-28 2xl:pl-32 3xl:pl-40 font-secondary">A yellow history</div></div>
        </div>
    </>
}

export default PageHome;