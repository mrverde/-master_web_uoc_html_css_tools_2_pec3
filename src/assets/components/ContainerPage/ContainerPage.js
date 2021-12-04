import React from "react";

import "./ContainerPage.scss"

const ContainerPage = props => {
    return <main>
        {props.children}
    </main>
}

export default ContainerPage;