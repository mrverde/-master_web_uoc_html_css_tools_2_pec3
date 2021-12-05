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
        <div>
            <div ></div>
            <div >
                <div >The <br />  Orphan <br />of Zhao </div>
                <hr />
                <div >A yellow history</div></div>
            <div ></div>
            <div ></div>
        </div>
    </>
}

export default PageHome;